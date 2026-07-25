import { m } from '$lib/paraglide/messages';
import { getLocale } from '$lib/paraglide/runtime';

const localeFi = getLocale() === 'fi';

export const getProjects = () => {
	return [
		{
			title: 'Mila To-Do',
			description: m['mila.description'](),
			tags: ['Svelte', 'TypeScript', 'PostgreSQL'],
			links: [
				{
					link: 'https://mila-to-do.pages.dev/',
					text: m['mila.link']()
				}
			],
			media: '/media/mila-to-do.mp4'
		},
		{
			title: 'gb-web',
			description: m['gb-web.description'](),
			tags: ['Rust', 'WebAssembly', 'Svelte', 'TypeScript', 'WebGL'],
			links: [
				{
					link: 'https://zeroview.github.io/gb-web/',
					text: m['gb-web.link_1']()
				},
				{
					link: 'https://github.com/zeroview/gb-web',
					text: m['gb-web.link_2']()
				}
			],
			media: '/media/gb-web.mp4'
		}
	];
};

export const getProgrammingSkills = () => {
	return ['Rust', 'C#', 'GDScript', 'Python', 'TypeScript', 'Svelte'];
};

export const getDevIcons = () => {
	return {
		Rust: 'devicon-rust-original',
		WebAssembly: 'devicon-wasm-original',
		Svelte: 'devicon-svelte-plain',
		TypeScript: 'devicon-typescript-plain',
		WebGL: 'devicon-webgpu-plain',
		GDScript: 'devicon-godot-plain',
		'C#': 'devicon-csharp-plain',
		Python: 'devicon-python-plain',
		PostgreSQL: 'devicon-postgresql-plain'
	} as Record<string, string>;
};

export const getArticles = () => {
	return [
		{
			media: '/media/benkovich.webp',
			link: 'https://www.lapuansanomat.fi/kulttuuri/kostja-benkovich-rakentaa-lapualla-metallisia-taideteoksia-joita-ihastellaan-ympari-eurooppaa-6.1.74710.05edea4506'
		},
		{
			media: '/media/muistoajelu.webp',
			link: 'https://www.lapuansanomat.fi/uutiset/muistoajelu-toi-nuoret-yhteen-muistamaan-markoa-ja-jakamaan-lohtua-toisilleen-6.22.73966.98ad670641'
		},
		{
			media: '/media/kesäkahvilat.webp',
			link: 'https://www.lapuansanomat.fi/static/2/lapua/index.html?issue=20260610&page=22'
		},
		{
			media: '/media/taidemuseo.webp',
			link: 'https://www.lapuansanomat.fi/kulttuuri/kurunsaari-ja-toija-palasivat-museolle-pohtimaan-ihmisyytta-6.1.76684.23102261ac'
		},
		{
			media: '/media/nuorisovaltuusto.webp',
			link: 'https://www.lapuansanomat.fi/uutiset/lapuan-nuorisovaltuusto-on-yhdistanyt-nuoria-paattajiin-30-vuoden-ajan-6.22.73533.8d44aed927'
		},
		{
			media: '/media/maahanmuuttajat.webp',
			link: 'https://www.lapuansanomat.fi/uutiset/joulupoytaan-uzvaria-ja-kutjaa-eli-vehnapuuroa-6.22.74605.401ae2bf82'
		},
		{
			media: '/media/vuokra-asunnot.webp',
			link: 'https://www.lapuansanomat.fi/uutiset/vuokraasunnot-viedaan-kasista-lapualla-6.22.74626.3e85e02877'
		},
		{
			media: '/media/wanha-markki.webp',
			link: 'https://www.lapuansanomat.fi/uutiset/25-vuoden-jalkeen-elainten-vanhainkoti-wanha-markki-on-siirtynyt-lapualaisomistukseen-6.22.72765.0f9a9e2704'
		},
		{
			media: '/media/kalapäivä.webp',
			link: 'https://www.lapuansanomat.fi/uutiset/tiistenjoen-kalapaiva-jatkoi-vuosikymmenten-perinnetta-6.22.72787.8c4bbc4524'
		}
	];
};

export const getSocials = () => {
	return {
		github: 'https://github.com/zeroview',
		linkedin: 'https://www.linkedin.com/in/nuutti-rinne/',
		bluesky: 'https://bsky.app/profile/zeroview.bsky.social',
		reddit: 'https://www.reddit.com/user/zeroview0/submitted/',
		youtube: 'https://www.youtube.com/@ZeroviewZero',
		email: 'mailto:nuutti.rinne@gmail.com'
	};
};

export const getMediaVideos = () => {
	return ['-1spcUKrlEI', 'nRt7uC3hwXA'];
};

export const getSoftwareTitles = () => {
	return localeFi
		? [
				[
					'Ohjelmisto&shy;kehitys',
					'cOhjelmisto&shy;kehitys',
					'clOhjelmisto&shy;kehitys',
					'claOhjelmisto&shy;kehitys',
					'clasOhjelmisto&shy;kehitys',
					'classOhjelmisto&shy;kehitys',
					"<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Ohjelmisto&shy;kehitys</span>",
					"<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Ohjelmisto&shy;kehitys</span> ",
					"<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Ohjelmisto&shy;kehitys</span> {",
					"<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Ohjelmisto&shy;kehitys</span> { ",
					"<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Ohjelmisto&shy;kehitys</span> { }"
				],
				[
					'Ohjelmisto&shy;kehitys',
					'pOhjelmisto&shy;kehitys',
					'prOhjelmisto&shy;kehitys',
					'priOhjelmisto&shy;kehitys',
					'prinOhjelmisto&shy;kehitys',
					'printOhjelmisto&shy;kehitys',
					"<span style='color: #fae76e'>print</span>(<wbr>Ohjelmisto&shy;kehitys",
					"<span style='color: #fae76e'>print</span>(<wbr>\"Ohjelmisto&shy;kehitys",
					"<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'><wbr>\"Ohjelmisto\"</span><wbr>kehitys",
					"<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'><wbr>\"Ohjelmisto\"</span> kehitys",
					"<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'><wbr>\"Ohjelmisto\"</span> +<wbr>kehitys",
					"<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'><wbr>\"Ohjelmisto\"</span> + kehitys",
					"<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'><wbr>\"Ohjelmisto\"</span> + \"kehitys",
					"<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'><wbr>\"Ohjelmisto\"</span> + <span style='color: #5da656;'>\"kehitys\"</span>",
					"<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'><wbr>\"Ohjelmisto\"</span> + <span style='color: #5da656;'>\"kehitys\"</span>)"
				],
				[
					'Ohjelmisto&shy;kehitys',
					"&<span style='color: #68c0f2'>Ohjelmisto&shy;kehitys</span>",
					"&<span style='color: #68c0f2'>ohjelmisto&shy;kehitys</span>",
					"&<span style='color: #68c0f2'>ohjelmisto<wbr></span>.<span style='color: #f77272'>kehitys</span>",
					"&<span style='color: #68c0f2'>ohjelmisto<wbr></span>.<span style='color: #f77272'>kehitys<wbr></span>.",
					"&<span style='color: #68c0f2'>ohjelmisto<wbr></span>.<span style='color: #f77272'>kehitys<wbr></span>.<span style='color: #f77272'>c</span>",
					"&<span style='color: #68c0f2'>ohjelmisto<wbr></span>.<span style='color: #f77272'>kehitys<wbr></span>.<span style='color: #f77272'>cl</span>",
					"&<span style='color: #68c0f2'>ohjelmisto<wbr></span>.<span style='color: #f77272'>kehitys<wbr></span>.<span style='color: #f77272'>clo</span>",
					"&<span style='color: #68c0f2'>ohjelmisto<wbr></span>.<span style='color: #f77272'>kehitys<wbr></span>.<span style='color: #f77272'>clon</span>",
					"&<span style='color: #68c0f2'>ohjelmisto<wbr></span>.<span style='color: #f77272'>kehitys<wbr></span>.<span style='color: #f77272'>clone</span>",
					"&<span style='color: #68c0f2'>ohjelmisto<wbr></span>.<span style='color: #f77272'>kehitys<wbr></span>.<span style='color: #f77272'>clone</span>(",
					"&<span style='color: #68c0f2'>ohjelmisto<wbr></span>.<span style='color: #f77272'>kehitys<wbr></span>.<span style='color: #fae76e'>clone</span>()",
					"&<span style='color: #68c0f2'>ohjelmisto<wbr></span>.<span style='color: #f77272'>kehitys<wbr></span>.<span style='color: #fae76e'>clone</span>();"
				],
				[
					'Ohjelmisto&shy;kehitys',
					'/Ohjelmisto&shy;kehitys',
					"<span style='color: #666666;'>//Ohjelmisto&shy;kehitys</span>",
					"<span style='color: #666666;'>// Ohjelmisto&shy;kehitys</span>",
					"<span style='color: #666666;'>// T<wbr>Ohjelmisto&shy;kehitys</span>",
					"<span style='color: #666666;'>// TO<wbr>Ohjelmisto&shy;kehitys</span>",
					"<span style='color: #666666;'>// TO-<wbr>Ohjelmisto&shy;kehitys</span>",
					"<span style='color: #666666;'>// TO-D<wbr>Ohjelmisto&shy;kehitys</span>",
					"<span style='color: #666666;'>// TO-DO<wbr>Ohjelmisto&shy;kehitys</span>",
					"<span style='color: #666666;'>// TO-DO:<wbr>Ohjelmisto&shy;kehitys</span>",
					"<span style='color: #666666;'>// TO-DO: Ohjelmisto&shy;kehitys</span>"
				]
			]
		: [
				[
					'Software development',
					'cSoftware development',
					'clSoftware development',
					'claSoftware development',
					'clasSoftware development',
					'classSoftware development',
					"<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Software</span> development",
					"<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Software<wbr>development</span> ",
					"<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Software<wbr>Development</span> ",
					"<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Software<wbr>Development</span> ",
					"<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Software<wbr>Development</span> {",
					"<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Software<wbr>Development</span> { ",
					"<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Software<wbr>Development</span> { }"
				],
				[
					'Software development',
					'pSoftware development',
					'prSoftware development',
					'priSoftware development',
					'prinSoftware development',
					'printSoftware development',
					"<span style='color: #fae76e'>print</span>(<wbr>Software development",
					"<span style='color: #fae76e'>print</span>(<wbr>\"Software development",
					"<span style='color: #fae76e'>print</span>(<wbr><span style='color: #5da656;'>\"Software\"</span> development",
					"<span style='color: #fae76e'>print</span>(<wbr><span style='color: #5da656;'>\"Software\"</span> +development",
					"<span style='color: #fae76e'>print</span>(<wbr><span style='color: #5da656;'>\"Software\"</span> + development",
					"<span style='color: #fae76e'>print</span>(<wbr><span style='color: #5da656;'>\"Software\"</span> + \"development",
					"<span style='color: #fae76e'>print</span>(<wbr><span style='color: #5da656;'>\"Software\"</span> + <span style='color: #5da656;'>\"development\"</span>",
					"<span style='color: #fae76e'>print</span>(<wbr><span style='color: #5da656;'>\"Software\"</span> + <span style='color: #5da656;'>\"development\"</span><wbr>)"
				],
				[
					'Software development',
					"&<span style='color: #68c0f2'>Software</span> development",
					"&<span style='color: #68c0f2'>software</span> development",
					"&<span style='color: #68c0f2'>softwaredevelopment</span>",
					"&<span style='color: #68c0f2'>software<wbr></span>.<span style='color: #f77272'>development</span>",
					"&<span style='color: #68c0f2'>software<wbr></span>.<span style='color: #f77272'>development<wbr></span>.",
					"&<span style='color: #68c0f2'>software<wbr></span>.<span style='color: #f77272'>development<wbr></span>.<span style='color: #f77272'>c</span>",
					"&<span style='color: #68c0f2'>software<wbr></span>.<span style='color: #f77272'>development<wbr></span>.<span style='color: #f77272'>cl</span>",
					"&<span style='color: #68c0f2'>software<wbr></span>.<span style='color: #f77272'>development<wbr></span>.<span style='color: #f77272'>clo</span>",
					"&<span style='color: #68c0f2'>software<wbr></span>.<span style='color: #f77272'>development<wbr></span>.<span style='color: #f77272'>clon</span>",
					"&<span style='color: #68c0f2'>software<wbr></span>.<span style='color: #f77272'>development<wbr></span>.<span style='color: #f77272'>clone</span>",
					"&<span style='color: #68c0f2'>software<wbr></span>.<span style='color: #f77272'>development<wbr></span>.<span style='color: #f77272'>clone</span>(",
					"&<span style='color: #68c0f2'>software<wbr></span>.<span style='color: #f77272'>development<wbr></span>.<span style='color: #fae76e'>clone</span>()",
					"&<span style='color: #68c0f2'>software<wbr></span>.<span style='color: #f77272'>development<wbr></span>.<span style='color: #fae76e'>clone</span>();"
				],
				[
					'Software development',
					'/Software development',
					"<span style='color: #666666;'>//Software development</span>",
					"<span style='color: #666666;'>// Software development</span>",
					"<span style='color: #666666;'>// T<wbr>Software development</span>",
					"<span style='color: #666666;'>// TO<wbr>Software development</span>",
					"<span style='color: #666666;'>// TO-<wbr>Software development</span>",
					"<span style='color: #666666;'>// TO-D<wbr>Software development</span>",
					"<span style='color: #666666;'>// TO-DO<wbr>Software development</span>",
					"<span style='color: #666666;'>// TO-DO:<wbr>Software development</span>",
					"<span style='color: #666666;'>// TO-DO: Software development</span>"
				]
			];
};
