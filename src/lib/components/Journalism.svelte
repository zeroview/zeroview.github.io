<script lang="ts">
	import { onMount } from 'svelte';
	import { getArticles } from '$lib/data';
	import { m } from '$lib/paraglide/messages';

	const articles = getArticles();
	const carouselStartOffset = '0.75rem';

	let carouselWrapper: HTMLDivElement | null = null;
	let carouselTrack: HTMLDivElement | null = null;
	let carouselDistance = $state('0px');
	let carouselReady = $state(false);
	let carouselVisible = $state(false);

	const updateCarouselDistance = () => {
		if (!carouselTrack) return false;

		const nextDistance = Math.round(carouselTrack.scrollWidth / 2);
		carouselDistance = `${nextDistance}px`;

		return nextDistance > 0;
	};

	const waitForCarouselImages = async () => {
		if (!carouselTrack) return;

		const images = Array.from(carouselTrack.querySelectorAll('img'));

		await Promise.allSettled(
			images.map((image) => {
				if (image.complete && image.naturalWidth > 0) return Promise.resolve();

				return new Promise<void>((resolve) => {
					const done = () => resolve();

					image.addEventListener('load', done, { once: true });
					image.addEventListener('error', done, { once: true });
				});
			})
		);
	};

	onMount(() => {
		let intersectionObserver: IntersectionObserver | null = null;
		let resizeObserver: ResizeObserver | null = null;
		let startFrame = 0;
		let commitFrame = 0;

		const measure = () => {
			const hasDistance = updateCarouselDistance();

			if (carouselReady || !carouselVisible || !hasDistance) return;

			startFrame = requestAnimationFrame(() => {
				commitFrame = requestAnimationFrame(() => {
					if (updateCarouselDistance()) carouselReady = true;
				});
			});
		};

		if (!('IntersectionObserver' in window) || !carouselWrapper) {
			carouselVisible = true;
		} else {
			intersectionObserver = new IntersectionObserver(
				(entries) => {
					const entry = entries[0];
					if (!entry?.isIntersecting) return;

					carouselVisible = true;
					measure();
					intersectionObserver?.disconnect();
				},
				{ threshold: 0.1 }
			);

			intersectionObserver.observe(carouselWrapper);
		}

		void waitForCarouselImages().then(measure);
		measure();

		if ('ResizeObserver' in window && carouselTrack) {
			resizeObserver = new ResizeObserver(measure);
			resizeObserver.observe(carouselTrack);
		}

		window.addEventListener('resize', measure);

		return () => {
			intersectionObserver?.disconnect();
			resizeObserver?.disconnect();
			window.removeEventListener('resize', measure);
			cancelAnimationFrame(startFrame);
			cancelAnimationFrame(commitFrame);
		};
	});
</script>

<section id="journalism">
	<div class="container">
		<h1>{m.journalism_title()}</h1>
		<p class="description">
			{m.journalism_text()}
		</p>
		<div bind:this={carouselWrapper} class="carousel-wrapper">
			<div
				bind:this={carouselTrack}
				class="carousel-track"
				class:ready={carouselReady}
				style={`--carousel-distance: ${carouselDistance}; --carousel-start: ${carouselStartOffset};`}
			>
				{#each articles as article}
					<a href={article.link} target="_blank" rel="noopener noreferrer" class="carousel-item">
						<img src={article.media} alt="Article thumbnail" loading="eager" decoding="async" />
					</a>
				{/each}
				{#each articles as article}
					<a href={article.link} target="_blank" rel="noopener noreferrer" class="carousel-item">
						<img src={article.media} alt="Article thumbnail" loading="eager" decoding="async" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	section {
		background-color: #ffffff;
		padding-bottom: 0;
	}

	* {
		font-family: var(--font-serif);
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 4rem;
		font-weight: 900;
		text-align: center;
		color: black;
	}

	.description {
		margin-bottom: 3rem;
		color: #111111;
		font-size: 1rem;
		text-align: justify;
		column-count: 3;
		gap: 3rem;
		line-height: 1.5rem;
		vertical-align: bottom;
		margin: 0;
	}

	.description::first-letter {
		font-size: 3rem;
		font-weight: bold;
		line-height: 3rem;
	}

	@media screen and (max-width: 730px) {
		.description {
			column-count: 2;
		}
	}

	@media screen and (max-width: 460px) {
		.description {
			column-count: 1;
		}
	}

	@media screen and (max-width: 560px) {
		h1 {
			font-size: 3.5rem;
		}
	}

	@media screen and (max-width: 480px) {
		h1 {
			font-size: 3rem;
		}
	}

	@media screen and (max-width: 400px) {
		h1 {
			font-size: 2.5rem;
		}
	}

	.carousel-wrapper {
		position: relative;
		width: 100%;
		overflow: hidden;
		padding-top: 1rem;
		padding-bottom: 1rem;
		margin-top: 3rem;
	}

	.carousel-wrapper::before,
	.carousel-wrapper::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		width: 4rem;
		pointer-events: none;
		z-index: 1;
	}

	.carousel-wrapper::before {
		left: 0;
		background: linear-gradient(to right, #ffffff, transparent);
	}

	.carousel-wrapper::after {
		right: 0;
		background: linear-gradient(to left, #ffffff, transparent);
	}

	.carousel-track {
		display: inline-flex;
		gap: 1.5rem;
		min-width: max-content;
		transform: translate3d(var(--carousel-start), 0, 0);
		-webkit-transform: translate3d(var(--carousel-start), 0, 0);
		will-change: transform;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}

	.carousel-track.ready {
		animation: scroll 40s linear infinite;
		-webkit-animation: scroll 40s linear infinite;
	}

	@keyframes scroll {
		0% {
			transform: translate3d(var(--carousel-start), 0, 0);
		}
		100% {
			transform: translate3d(calc(var(--carousel-start) - var(--carousel-distance)), 0, 0);
		}
	}

	.carousel-item {
		flex: 0 0 auto;
		height: 20rem;
		border-radius: var(--radius);
		overflow: hidden;
		border: 1px solid transparent;
		transition: transform 0.2s;
	}

	@media (hover: hover) and (pointer: fine) {
		.carousel-track:hover {
			animation-play-state: paused;
		}

		.carousel-item:hover {
			transform: scale(1.05);
		}
	}

	img {
		width: auto;
		height: 100%;
		display: block;
	}
</style>
