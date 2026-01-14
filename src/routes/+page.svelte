<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Software from '$lib/components/Software.svelte';
	import Journalism from '$lib/components/Journalism.svelte';
	import Art from '$lib/components/Art.svelte';
	import Contact from '$lib/components/Contact.svelte';

	import IntroScene from '$lib/components/IntroScene.svelte';
	import { Canvas } from '@threlte/core';
	import { WebGLRenderer } from 'three';
	import { useProgress } from '@threlte/extras';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { Data } from '$lib/data';
	import { fromStore } from 'svelte/store';

	const interactionDisabledRange = 900;
	const sceneRange = 1000;
	const notScrolledRange = 50;
	const notScrolledTimeout = 3000;

	let scrollY = $state(0);
	let interactionEnabled = $derived(scrollY >= interactionDisabledRange);
	let sceneScrolled = $derived(scrollY >= sceneRange);
	let skipIntro = $derived($page.url.searchParams.has('s'));

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

	let showScrollHint = $state(false);

	$effect(() => {
		if (!skipIntro && progressValue.current >= 1) {
			const t = setTimeout(() => {
				if (scrollY < notScrolledRange) showScrollHint = true;
			}, notScrolledTimeout);
			return () => clearTimeout(t);
		}
	});

	$effect(() => {
		if (scrollY > notScrolledRange) showScrollHint = false;
	});
</script>

{#if !skipIntro && progressValue.current < 1 && !sceneScrolled}
	<div
		class="loading"
		out:fade={{
			duration: 400
		}}
	></div>
{/if}

<main>
	{#if !skipIntro}
		<div
			class="banner"
			style="z-index: {sceneScrolled ? -1 : 10}; {interactionEnabled
				? 'pointer-events: none;'
				: ''}"
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
				<IntroScene scrollRange={sceneRange} {scrollY} />
			</Canvas>
		</div>
		<div style="height: calc({sceneRange}px + 10rem);"></div>
	{/if}
	<Hero {data} onLanguageChange={changeLanguage} />
	<Software {data} />
	<Art {data} />
	<Journalism {data} />
	<Contact {data} />
	{#if showScrollHint}
		<div
			class="scroll-hint"
			in:fly={{ y: -20, duration: 2000 }}
			out:fly={{ y: 20, duration: 1000 }}
		>
			{data.getIntroScrollHint()}
		</div>
	{/if}
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

	.scroll-hint {
		position: fixed;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		color: grey;
		font-family: var(--font-sans);
		font-weight: 100;
		font-size: 1.5rem;
		z-index: 200;
		pointer-events: none;
		mix-blend-mode: exclusion;
	}
</style>
