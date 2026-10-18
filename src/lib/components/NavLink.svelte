<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { RouteId } from '$app/types';

	let { href, label }: { href: RouteId; label: string } = $props();

	const pathname = $derived(page.url.pathname);
	const isActive = (target: string) => pathname === target || pathname.startsWith(target + '/');
</script>

<a href={resolve(href)} aria-current={isActive(href) ? 'page' : undefined}>{label}</a>

<style>
	a[aria-current='page'] {
		border-bottom: 2px solid;
	}
</style>
