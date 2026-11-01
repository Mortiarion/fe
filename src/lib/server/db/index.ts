import { drizzle } from 'drizzle-orm/node-sqlite';
import { DatabaseSync } from 'node:sqlite';
import { relations } from './schema.ts';

export const db = drizzle({ client: new DatabaseSync('app.db'), relations });
