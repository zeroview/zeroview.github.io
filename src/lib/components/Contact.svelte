<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { getSocials } from '$lib/data';

	import githubIcon from '$lib/assets/github.svg';
	import linkedinIcon from '$lib/assets/linkedin.svg';
	import youtubeIcon from '$lib/assets/youtube.svg';
	import redditIcon from '$lib/assets/reddit.svg';
	import blueskyIcon from '$lib/assets/bluesky.svg';
	import mailIcon from '$lib/assets/mail.svg';

	const socials = getSocials();
</script>

<section id="contact">
	<div class="container">
		<h1>{m.contact_title()}</h1>
		<p>{m.contact_subtitle()}</p>
		<a href={socials.email} class="btn btn-contact">
			<img src={mailIcon} alt="mail" />{m.contact_button()}</a
		>
		<div class="socials">
			<a href={socials.github} target="_blank" rel="noopener noreferrer">
				<img src={githubIcon} alt="GitHub" />
			</a>
			<a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
				<img src={linkedinIcon} alt="LinkedIn" />
			</a>
			<a href={socials.youtube} target="_blank" rel="noopener noreferrer">
				<img src={youtubeIcon} alt="YouTube" />
			</a>
			<a href={socials.reddit} target="_blank" rel="noopener noreferrer">
				<img src={redditIcon} alt="Reddit" />
			</a>
			<a href={socials.bluesky} target="_blank" rel="noopener noreferrer">
				<img src={blueskyIcon} alt="Bluesky" />
			</a>
		</div>
	</div>
</section>

<style>
	section {
		padding: 10rem 0 6rem 0;
		background: linear-gradient(0deg, rgba(92, 92, 171, 1) 0%, rgba(255, 255, 255, 1) 100%);
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		align-items: center;
	}

	h1 {
		font-size: 4rem;
		margin-bottom: 1rem;
		font-family: var(--font-display);
	}

	p {
		font-family: var(--font-display);
		color: white;
		font-size: 1.2rem;
		margin-bottom: 2rem;
		font-weight: 200;
	}

	.btn-contact {
		width: fit-content;
		background-color: #5d5dac;
		color: white;
		margin-bottom: 3rem;
	}

	.btn-contact img {
		height: 1.5rem;
		filter: brightness(0) invert(1);
	}

	.btn-contact:hover {
		background-color: #7676db;
	}

	.socials {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		margin-top: 1rem;
	}

	.socials a {
		display: block;
		width: 2rem;
		height: 2rem;
		transition: transform 0.2s;
	}

	.socials a:hover {
		transform: scale(1.1);
	}

	.socials img {
		width: 100%;
		height: 100%;
		filter: brightness(0) invert(1);
	}
</style>
