<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Software from '$lib/components/Software.svelte';
	import Journalism from '$lib/components/Journalism.svelte';
	import Art from '$lib/components/Art.svelte';
	import Contact from '$lib/components/Contact.svelte';

	import BannerScene from '$lib/components/BannerScene.svelte';
	import { Canvas } from '@threlte/core';
	import { WebGLRenderer } from 'three';
	import { useProgress } from '@threlte/extras';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { Data } from '$lib/data';
	import { fromStore } from 'svelte/store';

	const interactionDisabledRange = 900;
	const sceneRange = 1000;
	let scrollY = $state(0);
	let interactionEnabled = $derived(scrollY >= interactionDisabledRange);
	let sceneScrolled = $derived(scrollY >= sceneRange);

	let lang = $state<string | null>(null);
	let useFinnish = $state(false);

	$effect(() => {
		lang = $page.url.searchParams.get('lang');
		const locale = new Intl.Locale(navigator.language);
		useFinnish = (lang === 'fi' || locale.language === 'fi') && lang !== 'en';
	});

	let data = $derived(new Data(useFinnish));

	const changeLanguage = (newLang: string) => {
		const params = new URLSearchParams($page.url.searchParams);
		params.set('lang', newLang);
		goto(`?${params.toString()}`, {
			replaceState: true,
			noScroll: true,
			keepFocus: true
		});

		lang = newLang;
	};

	const { progress } = useProgress();
	let progressValue = fromStore(progress);
</script>

{#if progressValue.current < 1 && !sceneScrolled}
	<div
		class="loading"
		out:fade={{
			duration: 400
		}}
	></div>
{/if}

<main>
	<div
		class="banner"
		style="z-index: {sceneScrolled ? -1 : 10}; {interactionEnabled ? 'pointer-events: none;' : ''}"
	>
		<Canvas
			renderMode={sceneScrolled ? 'manual' : 'always'}
			createRenderer={(canvas) => {
				let renderer = new WebGLRenderer({
					alpha: true,
					antialias: true,
					canvas,
					stencil: true
				});
				renderer.setClearColor(0x000000, 0);
				return renderer;
			}}
		>
			<BannerScene scrollRange={sceneRange} {scrollY} />
		</Canvas>
	</div>
	<div style="height: calc({sceneRange}px + 10rem);"></div>
	<Hero {data} onLanguageChange={changeLanguage} />
	<Software {data} />
	<Art {data} />
	<Journalism {data} />
	<Contact {data} />
</main>

<svelte:window bind:scrollY />

<style>
	.banner {
		height: 100vh;
		height: 100dvh;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.loading {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100;

		font-family: var(--font-sans);
		font-weight: 800;
		font-size: 5rem;
	}
</style>
