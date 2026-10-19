<script lang="ts">
	import type { Client } from '#lib/types.ts';

	let { client }: { client: Client } = $props();
</script>

<div class="client-card">
	<p>{client.id}</p>
	<p>{client.name}</p>
	<p>{client.email}</p>
	<p>{client.createdAt}</p>
</div>

<style>
	.client-card {
		display: flex;
		gap: 1rem;
	}
</style>
