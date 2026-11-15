<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageServerData } from './$types.js';

	import ProjectCard from '#lib/components/ProjectCard.svelte';

	let { data }: { data: PageServerData } = $props();

	const clientName = (clientId: number | null) => data.clientsAll.find((c) => c.id === clientId)?.name ?? '-без клієнта-';
</script>

<h1>Проекти</h1>

{#each data.projectsAll as project (project.id)}
	<a href={resolve('/projects/[id]', { id: String(project.id) })}>
		<ProjectCard {project} clientName={clientName(project.clientId)}/>
	</a>
{/each}

<form method='POST' action="?/create">
	<select name="clientId" required>
		<option value="">- обрати клієнта -</option>
		{#each data.clientsAll as client (client.id)}
			<option value={String(client.id)}>{client.name}</option>
		{/each}
	</select>

	<label for="title">
		Назва
		<input type="text" name='title' required>
	</label>

	<label for="qty">
		Кількість
		<input type="number" name='qty' min='1'>
	</label>

	<label for="description">
		Опис
		<textarea name="description"></textarea>
	</label>

	<label for="status">
		Статус
		
	</label>

	<button>Додати проект</button>
</form>

<style>
	form {
		display: flex;
		gap: 1rem;
	}
</style>
