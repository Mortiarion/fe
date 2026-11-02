<script lang="ts">
	import type { PageServerData } from './$types';

	import ClientCard from '#lib/components/ClientCard.svelte';

	let { data }: { data: PageServerData } = $props();
</script>

<ClientCard client={data.client} />
