import { db } from '#lib/server/db/index.ts';
import { clients } from '#lib/server/db/schema.ts';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const id = Number(params.id);

	const row = await db.select().from(clients).where(eq(clients.id, id)).get();

	if (!row) {
		error(404, `Клієнт не знайдений: ${id}`);
	}

	return { client: row };
};
