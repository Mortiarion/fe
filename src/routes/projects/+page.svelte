<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageServerData, ActionData } from './$types.js';
	import { enhance } from '$app/forms';

	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import { projectStatuses } from '#lib/types.js';

	let { data, form }: { data: PageServerData; form: ActionData } = $props();

	const clientName = (clientId: number | null) =>
		data.clientsAll.find((c) => c.id === clientId)?.name ?? '-без клієнта-';
</script>

<h1>Проекти</h1>

{#each data.projectsAll as project (project.id)}
	<a href={resolve('/projects/[id]', { id: String(project.id) })}>
		<ProjectCard {project} clientName={clientName(project.clientId)} />
	</a>
{/each}

<form method="POST" action="?/create" use:enhance>
	<select name="clientId" required>
		<option value="">- обрати клієнта -</option>
		{#each data.clientsAll as client (client.id)}
			<option value={String(client.id)}>{client.name}</option>
		{/each}
	</select>

	{#if form?.errors?.clientId}
		<p class="error">{form.errors.clientId}</p>
	{/if}

	<label for="title">
		Назва
		<input id="title" type="text" name="title" required value={form?.values?.title ?? ''} />
	</label>

	{#if form?.errors?.title}
		<p class="error">{form.errors.title}</p>
	{/if}

	<label for="qty">
		Кількість
		<input id="qty" type="number" name="qty" min="1" value={form?.values?.qty ?? ''} />
	</label>

	{#if form?.errors?.qty}
		<p class="error">{form.errors.qty}</p>
	{/if}

	<label for="description">
		Опис
		<textarea id="description" name="description">{form?.values?.description ?? ''}</textarea>
	</label>

	<select name="status">
		<option value="">-вибрати статус-</option>
		{#each projectStatuses as status (status)}
			<option value={status}>{status}</option>
		{/each}
	</select>

	<button>Додати проект</button>
</form>

<style>
	form {
		display: flex;
		gap: 1rem;
	}
</style>
