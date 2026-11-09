import type { PageServerLoad } from './$types';

import { db } from '#lib/server/db/index.ts';
import { projects } from '#lib/server/db/schema.ts';

export const load: PageServerLoad = async () => {
	const rows = await db.select().from(projects).all();

	return { projects: rows };
};
