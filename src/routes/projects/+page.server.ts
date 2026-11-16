import type { PageServerLoad } from './$types';

import { db } from '#lib/server/db/index.ts';
import { clients, projects } from '#lib/server/db/schema.ts';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const projectsAll = await db.select().from(projects).all();

	const clientsAll = await db.select().from(clients).all();

	return { projectsAll, clientsAll };
};

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();

		const clientId = Number(data.get('clientId'));
		const title = String(data.get('title') ?? '');
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
