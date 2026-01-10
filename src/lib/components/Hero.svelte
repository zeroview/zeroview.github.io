<script lang="ts">
	import { Data } from '$lib/data';
	import cameraIcon from '$lib/assets/camera.svg';
	import fiIcon from '$lib/assets/fi.svg';
	import gbIcon from '$lib/assets/gb.svg';
	let { data, onLanguageChange }: { data: Data; onLanguageChange: (lang: string) => void } =
		$props();
	let text = $derived(data.getHeroText());
</script>

<section class="hero" id="hero">
	<div class="container">
		<div class="language">
			<button class={data.finnish ? 'unselected' : ''} onclick={() => onLanguageChange('en')}
				><img src={gbIcon} alt="EN" /></button
			>
			<button class={data.finnish ? '' : 'unselected'} onclick={() => onLanguageChange('fi')}
				><img src={fiIcon} alt="FI" /></button
			>
		</div>

		<div class="content">
			<h1>{text.title}</h1>
			<h2 class="role">{text.description}</h2>

			<div class="actions">
				<a href="#contact" class="btn btn-primary">{text.button}</a>
			</div>
		</div>

		<div class="location">
			<img src={cameraIcon} alt="" />
			<p>{text.imageText}</p>
		</div>
	</div>
</section>

<style>
	.hero {
		height: 100vh;
		height: 100dvh;
		display: flex;
		align-items: center;
		position: sticky;
		bottom: 0;
		overflow: hidden;
		background-image: url('/media/title.jpg');

		/* The modern selection logic */
		background-image: -webkit-image-set(
			url('/media/title.avif') type('image/avif'),
			url('/media/title.webp') type('image/webp'),
			url('/media/title.jpg') type('image/jpeg')
		);
		background-image: image-set(
			url('/media/title.avif') type('image/avif'),
			url('/media/title.webp') type('image/webp'),
			url('/media/title.jpg') type('image/jpeg')
		);
		background-size: cover;
		background-position: 10% 0;
	}

	@media screen and (min-width: 768px) {
		.container {
			grid-template-columns: 1.2fr 0.8fr;
		}
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		width: 100%;
		height: 100%;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.language {
		height: 4rem;
		width: 100%;
		display: flex;
		gap: 1rem;
		justify-content: flex-end;
	}

	.language button {
		background-color: transparent;
		font-size: 3rem;
		border: 0;
		text-align: right;
		transition: transform 0.2s;
		cursor: pointer;
	}

	.language button:hover {
		transform: scale(1.1);
	}

	.language img {
		height: 2rem;
		border-radius: 6px;
	}

	.unselected {
		transform: scale(0.95);
		filter: brightness(0.5);
	}

	h1 {
		font-size: 3.5rem;
		line-height: 1.1;
		color: var(--text-primary);
		margin-left: -2px;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 200;
		color: var(--text-primary);
	}

	.location {
		height: 4rem;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: right;
		align-items: center;
		gap: 0.4rem;
		filter: brightness(0.7);
	}

	.location p {
		text-align: right;
		font-size: 0.8rem;
	}

	.location img {
		height: 1.5rem;
		margin-bottom: 4px;
	}

	.actions {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
		flex-wrap: wrap;
	}
</style>
