<script lang="ts">
	import type { Project } from '#lib/types.ts';

	let { project, clientName }: { project: Project; clientName?: string } = $props();
</script>

<div class="project-card">
	<p>{project.id}</p>
	<p>{clientName}</p>
	<p>{project.title}</p>
	<p>{project.status}</p>
	<p>{project.qty}</p>
	<p>{project.description}</p>
</div>

<style>
	.project-card {
		display: flex;
		gap: 1rem;
	}
</style>
