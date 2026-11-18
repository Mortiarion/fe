import type { PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';

import { db } from '#lib/server/db/index.ts';
import { clients, projects } from '#lib/server/db/schema.ts';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async () => {
	const projectsAll = await db.select().from(projects).all();

	const clientsAll = await db.select().from(clients).all();

	return { projectsAll, clientsAll };
};

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();

		const clientId = Number(data.get('clientId'));

		const client = await db.select().from(clients).where(eq(clients.id, clientId)).get();
		
		const errors: string[] = [];

		if(!client) errors.push('Обери клієнта зі списку');

		const title = String(data.get('title') ?? '');
		
		if(!title.trim()) errors.push('Назва не може бути порожня');

		if(errors.length > 0) return fail(400, {errors, values: {
			title: String(data.get('title') ?? ''),
			qty: String(data.get('qty') ?? ''),
			description: String(data.get('description') ?? '')
		}})


		const qtyRaw = data.get('qty');
		const descriptionRaw = data.get('description');
		const statusRaw = data.get('status');

		await db.insert(projects).values({
			clientId: clientId,
			title: title,
			qty: qtyRaw ? Number(qtyRaw) : null,
			description: descriptionRaw ? String(descriptionRaw) : null,
			status: statusRaw ? String(statusRaw) : 'draft'
		});

		redirect(303, '/projects');
	}
};
