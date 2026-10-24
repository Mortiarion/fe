import type { Project } from '#lib/types.ts';

export const projects: Project[] = [
	{
		id: 1,
		clientId: 1,
		title: 'one',
		status: 'printing',
		createdAt: '23/10/2026'
	},
	{
		id: 2,
		clientId: 2,
		title: 'two',
		status: 'printing',
		createdAt: '23/10/2026'
	},
	{
		id: 3,
		clientId: 1,
		title: 'three',
		status: 'printing',
		createdAt: '23/10/2026'
	},
	{
		id: 4,
		clientId: 5,
		title: 'four',
		status: 'printing',
		createdAt: '23/10/2026'
	},
	{
		id: 5,
		clientId: 99,
		title: 'five',
		status: 'printing',
		createdAt: '23/10/2026'
	}
];
