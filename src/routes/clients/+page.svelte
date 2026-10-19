<script lang="ts">
	import { clients } from '#lib/data/clients.ts';
	import { resolve } from '$app/paths';

	import ClientCard from '#lib/components/ClientCard.svelte';
</script>

<h1>Клієнти</h1>

{#each clients as client (client.id)}
	<a href={resolve('/clients/[id]', { id: String(client.id) })}>
		<ClientCard {client} />
	</a>
{/each}
