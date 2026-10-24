<script lang="ts">
	import type { Project } from '#lib/types.ts';

	let { project }: { project: Project } = $props();
</script>

<div class="project-card">
	<p>{project.id}</p>
	<p>{project.clientId}</p>
	<p>{project.title}</p>
	<p>{project.status}</p>
	<p>{project.createdAt}</p>
</div>

<style>
	.project-card {
		display: flex;
		gap: 1rem;
	}
</style>
