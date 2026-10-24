export type ProjectStatus = 'draft' | 'quoted' | 'printing' | 'done';

export type Client = {
	id: number;
	name: string;
	email: string;
	createdAt: string;
};

export type Project = {
	id: number;
	clientId: number;
	title: string;
	status: ProjectStatus;
	createdAt: string;
};
