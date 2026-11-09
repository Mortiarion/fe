<script lang="ts">
	import type { PageServerData } from './$types';

	import ProjectCard from '#lib/components/ProjectCard.svelte';

	let { data }: { data: PageServerData } = $props();
</script>

<p>Клієнт: {data.client.name}</p>

<ProjectCard project={data.project} />
