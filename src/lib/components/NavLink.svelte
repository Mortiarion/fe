<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { RouteId } from '$app/types';
	type StaticRouteId = Exclude<RouteId, `${string}[${string}`>;
	// тут виключаєм з головного роута динамічний роут
	// nav links only ever point at sections, never at a [param] route
	let { href, label }: { href: StaticRouteId; label: string } = $props();

	const pathname = $derived(page.url.pathname);
	const isActive = (target: string) => pathname === target || pathname.startsWith(target + '/');
</script>

<a href={resolve(href)} aria-current={isActive(href) ? 'page' : undefined}>{label}</a>

<style>
	a[aria-current='page'] {
		border-bottom: 2px solid;
	}
</style>
