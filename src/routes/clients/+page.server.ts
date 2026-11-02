import { db } from '#lib/server/db/index.ts';
import { clients } from '#lib/server/db/schema.ts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const rows = await db.select().from(clients).all();

    return { clients: rows }
};
