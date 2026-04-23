<script lang="ts">
	import { getMediaVideos } from '$lib/data';
	import { m } from '$lib/paraglide/messages';
</script>

<section id="art">
	<video src="/media/field.mp4" autoplay muted loop playsinline></video>
	<div class="container-container">
		<div class="container">
			<div class="info">
				<h1>{m.media_title()}</h1>
				<p>{m.media_text()}</p>
			</div>
			<div class="video-grid">
				{#each getMediaVideos() as videoId}
					<div class="video-wrapper">
						<lite-youtube videoid={videoId}></lite-youtube>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	h1 {
		font-size: 6rem;
		font-family: var(--font-display);
		line-height: 1;
		font-weight: 800;

		animation: title-background 5s linear infinite;
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(173, 224, 255, 1) 33%,
			rgba(188, 168, 255, 1) 66%,
			rgba(255, 255, 255, 1) 100%
		);
		background-size: 200%;
		background-position: 0 50%;
		background-clip: text;
		color: transparent;
	}

	@keyframes title-background {
		0% {
			background-position: 0;
		}
		100% {
			background-position: 200%;
		}
	}

	p {
		text-align: right;
		font-family: var(--font-display);
		font-weight: 300;
		font-size: 1.1rem;
		line-height: 1.3;
	}

	section {
		padding: 0;
		display: flex;
		align-items: stretch;
	}

	video {
		width: 100%;
		object-fit: cover;
		object-position: top;
	}

	.container {
		background-color: rgba(30, 30, 60, 0.4);
		backdrop-filter: blur(3px);
		padding: 2rem;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
	}

	.container-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 4rem 2rem;
		margin-left: -100%;
	}

	.info {
		display: grid;
		grid-template-columns: min-content 1fr;
		margin-bottom: 3rem;
		gap: 2rem;
		justify-items: center;
		align-items: center;
	}

	@media screen and (max-width: calc(1000px + 4rem)) {
		.info {
			grid-template-columns: 1fr;
		}

		h1 {
			font-size: 14vw;
		}
	}

	@media screen and (max-width: 630px) {
		p {
			text-align: left;
		}

		h1 {
			font-size: 11vw;
		}

		.container-container {
			padding: 4rem 1rem;
		}

		.container {
			padding: 1rem;
		}
	}

	.video-wrapper {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
		height: 0;
		overflow: hidden;
		border-radius: var(--radius);
		background-color: var(--bg-secondary); /* Placeholder bg */
	}

	.video-wrapper * {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: var(--radius);
		max-width: 100% !important;
	}

	.video-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1rem;
	}

	@media screen and (max-width: 730px) {
		.video-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
