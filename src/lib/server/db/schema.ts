import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { defineRelations } from 'drizzle-orm';

export const clients = sqliteTable('clients', {
	id: integer().primaryKey({ autoIncrement: true }),
	name: text().notNull().unique(),
	email: text(),
	phone: text(),
	createdAt: text('created_at').notNull()
});

export const projects = sqliteTable('projects', {
	id: integer().primaryKey({ autoIncrement: true }),
	clientId: integer('client_id'),
	title: text(),
	qty: integer(),
	description: text(),
	status: text()
});

export const relations = defineRelations({ clients, projects });
