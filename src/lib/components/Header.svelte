<script lang="ts">
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		const hero = document.getElementById('hero');
		if (!hero) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				visible = !entry.isIntersecting;
			},
			{ threshold: 0 }
		);

		observer.observe(hero);

		return () => {
			observer.disconnect();
		};
	});
</script>

<header class:visible>
	<div class="container header-inner">
		<a href="/" class="logo">zeroview.github.io</a>
		<nav>
			<a href="#software">Software</a>
			<a href="#journalism">Journalism</a>
			<a href="#contact">Contact</a>
		</nav>
	</div>
</header>

<style>
	header {
		padding: 1.5rem 0;
		position: fixed;
		top: 0;
		width: 100%;
		background-color: var(--bg-primary);
		z-index: 10;
		border-bottom: 1px solid var(--border);
		transition: transform 0.3s ease-in-out;
		transform: translateY(-100%);
	}

	header.visible {
		transform: translateY(0);
	}

	.header-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-weight: 700;
		font-size: 1.25rem;
		color: var(--text-primary);
	}

	nav {
		display: flex;
		gap: 1.5rem;
	}

	nav a {
		font-size: 0.95rem;
		color: var(--text-secondary);
		transition: color 0.2s;
	}

	nav a:hover {
		color: var(--accent);
	}
</style>
