<script lang="ts">
	import ClientCard from '#lib/components/ClientCard.svelte';
	import { clients } from '#lib/data/clients.ts';
	import { page } from '$app/state';
	import { error } from '@sveltejs/kit';

	const id = $derived(page.params.id);
	const client = $derived.by(() => {
		const clientFound = clients.find((clientId) => String(clientId.id) === id);

		if (!clientFound) {
			error(404, `Клієнт не знайдений: ${id}`);
		}

		return clientFound;
	});
</script>

<ClientCard {client} />
