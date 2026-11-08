import { db } from '#lib/server/db/index.ts';
import { clients } from '#lib/server/db/schema.ts';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const rows = await db.select().from(clients).all();

	return { clients: rows };
};

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();

		const name = String(data.get('name') ?? '');
		const email = data.get('email');

		await db.insert(clients).values({
			name: name,
			email: email ? String(email) : null,
			createdAt: new Date().toISOString()
		});

		redirect(303, '/clients');
	}
};
