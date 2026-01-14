<script lang="ts">
	import type { Data } from '$lib/data';

	let { data }: { data: Data } = $props();
	let text = $derived(data.getJournalismText());
	let articles = $derived(data.getArticles());
</script>

<section id="journalism">
	<div class="container">
		<h1>{text.title}</h1>
		<p class="description">
			{text.description}
		</p>
		<div class="carousel-wrapper">
			<div class="carousel-track">
				{#each [...articles, ...articles] as article}
					<a href={article.link} target="_blank" rel="noopener noreferrer" class="carousel-item">
						<img src={article.media} alt="Article thumbnail" loading="lazy" />
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
		width: 100%;
		overflow: hidden;
		mask-image: linear-gradient(to right, transparent, black 2%, black 98%, transparent);
		-webkit-mask-image: linear-gradient(to right, transparent, black 2%, black 98%, transparent);
		padding-top: 1rem;
		padding-bottom: 1rem;
		margin-top: 3rem;
	}

	.carousel-track {
		display: flex;
		gap: 1.5rem;
		width: max-content;
		animation: scroll 40s linear infinite;
	}

	.carousel-track:hover {
		animation-play-state: paused;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0.75rem);
		}
		100% {
			transform: translateX(-50%);
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

	.carousel-item:hover {
		transform: scale(1.05);
	}

	img {
		width: fit-content;
		height: 100%;
		display: block;
	}
</style>
