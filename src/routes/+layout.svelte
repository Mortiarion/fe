<script lang="ts">
	import type { LayoutProps } from './$types';

	import favicon from '#lib/assets/favicon.svg';
	import NavLink from '#lib/components/NavLink.svelte';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<div class="container">
		<nav>
			<ul>
				<li>
					<NavLink href="/" label="dashboard" />
				</li>

				<li>
					<NavLink href="/clients" label="Клієнти" />
				</li>

				<li>
					<NavLink href="/projects" label="Проекти" />
				</li>

				<li>
					<NavLink href="/calc" label="Калькулятор" />
				</li>
			</ul>
		</nav>
	</div>
</header>

{@render children()}
