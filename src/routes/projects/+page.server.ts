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

		const clientIdRaw = data.get('clientId');
		const title = String(data.get('title') ?? '');
		const qtyRaw = String(data.get('qty') ?? '');
		const descriptionRaw = data.get('description');
		const statusRaw = data.get('status');

		const errors: Record<string, string> = {};

		const clientId = Number(data.get('clientId'));
		const client = await db.select().from(clients).where(eq(clients.id, clientId)).get();

		if (!client) errors.clientId = 'Обери клієнта зі списку';

		if (!title.trim()) errors.title = 'Назва не може бути порожня';

		const qty = Number(qtyRaw);

		if (qtyRaw.trim() !== '' && (Number.isNaN(qty) || qty < 1))
			errors.qty = 'Кількість має бути числом не менше 1';

		if (Object.keys(errors).length > 0) {
			return fail(400, {
				errors,
				values: {
					clientId: String(clientIdRaw ?? ''),
					title,
					qty: qtyRaw,
					description: String(descriptionRaw ?? '')
				}
			});
		}

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
