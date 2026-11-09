export type ProjectStatus = 'draft' | 'quoted' | 'printing' | 'done';

export type Client = {
	id: number;
	name: string;
	email: string | null;
	phone: string | null;
	createdAt: string;
};

export type Project = {
	id: number;
	clientId: number | null;
	title: string | null;
	status: string | null;
	qty: number | null;
	description: string | null;
};
