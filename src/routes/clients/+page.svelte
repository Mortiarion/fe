<script lang="ts">
	import ClientCard from '#lib/components/ClientCard.svelte';
	import type { Client } from '#lib/types.ts';

	const clients: Client[] = [
		{
			id: 1,
			name: 'Name one',
			email: 'example.com',
			createdAt: 'aaaa'
		},
		{
			id: 2,
			name: 'Name two',
			email: 'example.dot',
			createdAt: 'ssss'
		},
		{
			id: 3,
			name: 'Name three',
			email: 'ecapm.com',
			createdAt: 'ffff'
		},
		{
			id: 4,
			name: 'Name four',
			email: 'adsfas.com',
			createdAt: 'gggg'
		},
		{
			id: 5,
			name: 'Name five',
			email: 'eadsffd.com',
			createdAt: 'hhhh'
		}
	];
</script>

<h1>Клієнти</h1>

{#each clients as client (client.id)}
	<ClientCard {client} />
{/each}
