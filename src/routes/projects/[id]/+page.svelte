<script lang="ts">
	import { projects } from '#lib/data/projects.ts';
	import { page } from '$app/state';
	import { error } from '@sveltejs/kit';

	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import { clients } from '#lib/data/clients.ts';

	const id = $derived(page.params.id);
	const project = $derived.by(() => {
		const projectFound = projects.find((projectId) => String(projectId.id) === id);

		if (!projectFound) {
			error(404, `Проект не знайдений: ${id}`);
		}

		return projectFound;
	});

	const client = $derived.by(() => {
		const clientFound = clients.find((client) => client.id === project.clientId);

		if (!clientFound) {
			error(404, `Клієнт не знайдений: ${project.clientId}`);
		}

		return clientFound;
	});
</script>

<p>Клієнт: {client.name}</p>

<ProjectCard {project} />
