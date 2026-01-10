<script lang="ts">
	import { Data } from '$lib/data';

	let title = $state('Software development');
	let titleIndex = 0;
	let frame = 0;
	let waiting = false;
	let reversing = false;

	let { data }: { data: Data } = $props();

	let softwareTitles = $derived(data.getSoftwareTitles());
	let devIcons = $derived(data.getDevIcons());
	let text = $derived(data.getSoftwareText());

	// Reset animation state if software titles change (because of language switch)
	$effect(() => {
		title = softwareTitles[0][0];
		titleIndex = 0;
		frame = 0;
		waiting = false;
		reversing = false;
	});

	// How many animation frames to wait before starting new animation or reversing current one
	const animationCooldownFrames = 16;
	// Sets the next title text
	const animateTitle = () => {
		let frames = softwareTitles[titleIndex];
		if (waiting) {
			frame--;
			if (frame == 0) {
				if (reversing) {
					frame = frames.length - 1;
				} else {
					if (titleIndex >= softwareTitles.length - 1) {
						titleIndex = 0;
					} else {
						titleIndex++;
					}
				}
				waiting = false;
			}
		} else {
			if (reversing) {
				frame--;
			} else {
				frame++;
			}
			title = frames[frame];
			if (frame >= frames.length - 1 || frame <= 0) {
				waiting = true;
				reversing = !reversing;
				frame = animationCooldownFrames;
			}
		}
	};

	setInterval(animateTitle, 100);
</script>

<section id="software">
	<div class="container">
		<h1>{@html title}</h1>
		<div class="content">
			<div class="info">
				<div class="text">
					<p>{text.description}</p>
				</div>
				<div class="skills">
					<h3>{text.languageTitle}</h3>
					<ul>
						{#each data.getProgrammingSkills() as skill}
							<li><i class={devIcons[skill]}></i>{skill}</li>
						{/each}
					</ul>
				</div>
			</div>
			<h2>{text.projectsTitle}</h2>
			<div class="projects-list">
				{#each data.getProjects() as project}
					<div class="card">
						<div class="card-content">
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<div class="tags">
								{#each project.tags as tag}
									<span class="tag"><i class={devIcons[tag]}></i>{tag}</span>
								{/each}
							</div>
							<div class="links">
								{#each project.links as link}
									<a href={link.link} target="_blank" rel="noopener noreferrer">{link.text}</a>
								{/each}
							</div>
						</div>
						<div class="image-container">
							<video src={project.media} autoplay muted loop playsinline preload="metadata"></video>
						</div>
					</div>
				{/each}
				<p class="teaser">{text.teaser}</p>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		padding: 1rem;
	}

	h1 {
		width: 100%;
		font-size: 3rem;
		font-family: var(--font-mono);
		font-weight: 400;
		margin-bottom: 2rem;
		word-wrap: break-word;
		height: 3rem;
		line-height: 1;
		hyphens: manual;
		-ms-hyphens: manual;
		-moz-hyphens: manual;
		-webkit-hyphens: manual;
	}

	h2 {
		margin-top: 4rem;
		margin-bottom: 1.5rem;
		font-size: 2.5rem;
		font-weight: 800;
	}

	.info {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
	}

	@media screen and (max-width: 1050px) {
		h1 {
			height: 6rem;
		}
	}

	@media screen and (max-width: 768px) {
		.content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.info {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		h1 {
			font-size: 2.5rem;
			height: 5rem;
		}
	}

	@media screen and (max-width: 580px) {
		h1 {
			height: 7.5rem;
		}
	}

	@media screen and (max-width: 400px) {
		h1 {
			font-size: 2.25rem;
			height: 6.75rem;
		}
	}

	@media screen and (max-width: 360px) {
		h1 {
			font-size: 2rem;
			height: 6rem;
		}
	}

	.text p {
		color: var(--text-secondary);
	}

	.skills h3 {
		color: var(--text-secondary);
		margin-bottom: 1rem;
		font-weight: 500;
		font-size: 1.5rem;
	}

	.skills ul {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.5rem;
	}

	.skills li {
		position: relative;
		color: var(--text-secondary);
		font-family: var(--font-mono);
	}

	.skills i {
		padding-right: 0.4rem;
	}

	.projects-list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.teaser {
		text-align: center;
		font-size: 0.8rem;
		color: var(--text-secondary);
	}

	.card {
		background-color: var(--bg-secondary);
		padding: 2rem;
		border-radius: var(--radius);
		display: flex;
		align-items: center;
		gap: 2rem;
		border: 1px solid transparent;
		transition: border-color 0.2s;
	}

	.card-content {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.card p {
		color: var(--text-secondary);
		margin-bottom: 1.5rem;
		font-size: 1.1rem;
		line-height: 1.6;
	}

	.card i {
		margin-top: 1px;
		font-size: 1.1rem;
	}

	.image-container {
		flex: 1;
		max-width: 500px;
		border-radius: var(--radius);
		overflow: hidden;
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}

	video {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
		aspect-ratio: 16/9;
	}

	h3 {
		font-size: 1.5rem;
		margin-bottom: 0.75rem;
		color: var(--text-primary);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.tag {
		font-size: 0.9rem;
		padding: 0.5rem 0.5rem;
		background-color: var(--bg-primary);
		color: var(--text-secondary);
		border-radius: var(--radius);
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 0.3rem;
		font-family: var(--font-mono);
		font-weight: 500;
	}

	.links {
		display: flex;
		gap: 1.5rem;
	}

	.links a {
		font-size: 1rem;
		color: var(--accent);
		font-weight: 500;
	}

	.links a:hover {
		text-decoration: underline;
	}

	@media screen and (max-width: 768px) {
		.card {
			flex-direction: column-reverse;
			align-items: stretch;
		}

		.image-container {
			max-width: 100%;
		}
	}
</style>
