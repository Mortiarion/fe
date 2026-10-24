<script lang="ts">
	import { projects } from '#lib/data/projects.ts';
	import { resolve } from '$app/paths';

	import ProjectCard from '#lib/components/ProjectCard.svelte';
</script>

<h1>Проекти</h1>

{#each projects as project (project.id)}
	<a href={resolve('/projects/[id]', { id: String(project.id) })}>
		<ProjectCard {project} />
	</a>
{/each}
