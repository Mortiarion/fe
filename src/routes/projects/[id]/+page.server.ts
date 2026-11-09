import type { PageServerLoad } from './$types';
import { eq } from 'drizzle-orm';
import { error } from '@sveltejs/kit';

import { clients, projects } from '#lib/server/db/schema.ts';
import { db } from '#lib/server/db/index.ts';

export const load: PageServerLoad = async ({ params }) => {
	const id = Number(params.id);

	const project = await db.select().from(projects).where(eq(projects.id, id)).get();

	if (!project || project.clientId === null) {
		error(404, `Проект не знайдений: ${id}`);
	}

	const client = await db.select().from(clients).where(eq(clients.id, project.clientId)).get();

	if (!client) {
		error(404, `Клієнт не знайдений: ${project.clientId}`);
	}

	return { project, client };
};
