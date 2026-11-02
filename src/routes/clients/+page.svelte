<script lang="ts">
	import { resolve } from '$app/paths';
	
	import type { PageServerData } from './$types.js';
	import ClientCard from '#lib/components/ClientCard.svelte';

	let { data }: { data: PageServerData} = $props();
</script>

<h1>Клієнти</h1>

{#each data.clients as client (client.id)}
	<a href={resolve('/clients/[id]', { id: String(client.id) })}>
		<ClientCard {client} />
	</a>
{/each}
