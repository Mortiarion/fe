import type { PageServerLoad } from './$types';

import { db } from '#lib/server/db/index.ts';
import { clients, projects } from '#lib/server/db/schema.ts';

export const load: PageServerLoad = async () => {
	const projectsAll = await db.select().from(projects).all();

	const clientsAll = await db.select().from(clients).all();

	return { projectsAll, clientsAll };
};
