<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageServerData } from './$types.js';

	import ProjectCard from '#lib/components/ProjectCard.svelte';

	let { data }: { data: PageServerData } = $props();
</script>

<h1>Проекти</h1>

{#each data.projects as project (project.id)}
	<a href={resolve('/projects/[id]', { id: String(project.id) })}>
		<ProjectCard {project} />
	</a>
{/each}
