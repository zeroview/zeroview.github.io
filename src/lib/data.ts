export class Data {
  public finnish: boolean;

  constructor(finnish: boolean) {
    this.finnish = finnish;
  }

  getHeroText = () => {
    return {
      title: "Nuutti Rinne",
      description: this.finnish
        ? "Ohjelmistokehittäjä, sisällöntuottaja, kirjoittaja"
        : 'Software developer, digital creator and writer',
      button: this.finnish ? "Ota yhteyttä" : "Get in touch",
      imageText: this.finnish ? "Kuvattu Levillä, Lapissa" : "Taken in Levi, Finland",
    };
  }

  getSoftwareText = () => {
    return {
      description: this.finnish
        ? `
          Ohjelmointi ja ohjelmistokehitys ovat suurin intohimoni. Itseoppineena koodarina 
          minulla on vuosien kokemus useilta eri tietotekniikan osa-alueilta, kuten työpöytä- ja verkkosovelluskehityksestä,
          matalan tason järjestelmistä, grafiikkaohjelmoinnista sekä pelimoottoreista. Olen nopea oppija ja pystyn sisäistämään 
          monimutkaisiakin asioita sekä mukautumaan erilaisiin ympäristöihin vaivatta.
          `
        : `
			    Programming and developing software is my primary passion. I have years of self-taught
			    experience in a variety of fields, such as desktop and web app development, low-level systems,
          graphics programming and game engines. I'm a quick learner, capable of internalizing new concepts
			    quickly and adapting to environments.
          `,
      languageTitle: this.finnish
        ? "Käyttämäni ohjelmointikielet:"
        : "Languages I use:",
      projectsTitle: this.finnish
        ? "Tekemäni projektit:"
        : "My projects:",
      teaser: this.finnish
        ? "Lisää tulossa..."
        : "More to come..."
    }
  }

  getArtText = () => {
    return {
      title: this.finnish
        ? "SISÄLLÖN- TUOTANTO"
        : "DIGITAL CREATION",
      description: this.finnish
        ? `
          Ohjelmoinnin ohella olen kiinnostunut lähes kaikesta muustakin digitaalisesta 
          sisällöntuottamisesta. Editoin videoita DaVinci Resolvella, tuotan musiikkia 
          FL Studiolla sekä teen Blenderillä 3D-malleja ja animaatioita (kuten tämä taustavideo). 
          Teen valokuvausreissuja ja viimeistelen niistä saadut kuvat Adobe Lightroomilla. 
          Minulla on myös kokemusta videopelien kehittämisestä Godot Engine -pelimoottorilla.
          `
        : `
					Alongside programming, I'm interested in almost every other kind of digital creation too.
					I edit videos with DaVinci Resolve, produce music with FL Studio, and create 3D models and animations with Blender 
          (such as this background video). I love making photography trips and finalizing the pictures I took with Adobe Lightroom.
          I also have experience creating video games with Godot Engine.
          `,
    }
  }

  getJournalismText = () => {
    return {
      title: this.finnish
        ? "Journalistinen työ"
        : "Journalism work",
      description: this.finnish
        ? `
          Olen myös työskennellyt kaksi vuotta freelancetoimittajana Lapuan Sanomissa. Paikallislehteen 
          kirjoittaminen on kerryttänyt minulle paljon kokemusta ihmisten kohtaamisesta ammattimaisissa 
          tilanteissa sekä yhteistyöstä muun tuotantotiimin kanssa parhaan mahdollisen sisällön 
          luomiseksi. Työ on tarjonnut minulle väylän luovaan kirjoittamiseen ja opettanut, miten tieto esitetään 
          helposti omaksuttavassa muodossa – varmistaen samalla, että lopputulos on mahdollisimman kiinnostava 
          juuri meidän lukijakunnallemme.
          `
        : `
          I have also worked for two years as a freelance reporter for Lapuan Sanomat. 
          Writing for a local newspaper has brought me a lot of experience on interacting with people 
          in a professional setting and collaborating with other team members to create the best content possible. 
          It's given me an outlet for creative writing and an understanding on how to present information 
          in a form accessible for everybody, while making sure the end result is as interesting as possible
          specifically for our readers.
          `,
    }
  }

  getContactText = () => {
    return {
      title: this.finnish
        ? "Jutellaan!"
        : "Let's chat!",
      subtitle: this.finnish
        ? "Olen aina avoin työmahdollisuuksille ja yhteistyölle."
        : "I'm always open to job opportunities and collaboration.",
      button: this.finnish
        ? "Laita sähköpostia"
        : "Send an email"
    }
  }

  getProjects = () => {
    return [
      {
        title: 'gb-web',
        description:
          this.finnish
            ? "Selaimessa toimiva moderni ja helppokäyttöinen Game Boy -emulaattori"
            : 'Modern and easy-to-use Game Boy emulator, running on your browser',
        tags: ["Rust", "WebAssembly", "Svelte", "TypeScript", "WebGL"],
        links: [
          {
            link: 'https://zeroview.github.io/gb-web/',
            text: this.finnish ? "Pelaa selaimessa" : "Play online"
          },
          {
            link: "https://github.com/zeroview/gb-web",
            text: "GitHub",
          }
        ],
        media: '/media/gb-web.mp4'
      }
    ]
  }

  getProgrammingSkills = () => {
    return [
      "Rust",
      "C#",
      'GDScript',
      "Python",
      "TypeScript",
      'Svelte',
    ];
  }

  getDevIcons = () => {
    return {
      "Rust": "devicon-rust-original",
      "WebAssembly": "devicon-wasm-original",
      "Svelte": "devicon-svelte-plain",
      "TypeScript": "devicon-typescript-plain",
      "WebGL": "devicon-webgpu-plain",
      "GDScript": "devicon-godot-plain",
      "C#": "devicon-csharp-plain",
      "Python": "devicon-python-plain",
    } as Record<string, string>;
  }

  getArticles = () => {
    return [
      {
        media: "/media/benkovich.webp",
        link: "https://www.lapuansanomat.fi/kulttuuri/kostja-benkovich-rakentaa-lapualla-metallisia-taideteoksia-joita-ihastellaan-ympari-eurooppaa-6.1.74710.05edea4506",
      },
      {
        media: "/media/muistoajelu.webp",
        link: "https://www.lapuansanomat.fi/uutiset/muistoajelu-toi-nuoret-yhteen-muistamaan-markoa-ja-jakamaan-lohtua-toisilleen-6.22.73966.98ad670641"
      },
      {
        media: "/media/maahanmuuttajat.webp",
        link: "https://www.lapuansanomat.fi/uutiset/joulupoytaan-uzvaria-ja-kutjaa-eli-vehnapuuroa-6.22.74605.401ae2bf82"
      },
      {
        media: "/media/vuokra-asunnot.webp",
        link: "https://www.lapuansanomat.fi/uutiset/vuokraasunnot-viedaan-kasista-lapualla-6.22.74626.3e85e02877"
      },
      {
        media: "/media/wanha-markki.webp",
        link: "https://www.lapuansanomat.fi/uutiset/25-vuoden-jalkeen-elainten-vanhainkoti-wanha-markki-on-siirtynyt-lapualaisomistukseen-6.22.72765.0f9a9e2704"
      },
      {
        media: "/media/nuorisovaltuusto.webp",
        link: "https://www.lapuansanomat.fi/uutiset/lapuan-nuorisovaltuusto-on-yhdistanyt-nuoria-paattajiin-30-vuoden-ajan-6.22.73533.8d44aed927"
      },
      {
        media: "/media/kalapäivä.webp",
        link: "https://www.lapuansanomat.fi/uutiset/tiistenjoen-kalapaiva-jatkoi-vuosikymmenten-perinnetta-6.22.72787.8c4bbc4524",
      }
    ];
  }

  getSocials = () => {
    return {
      github: 'https://github.com/zeroview',
      linkedin: 'https://www.linkedin.com/in/nuutti-rinne/',
      bluesky: 'https://bsky.app/profile/zeroview.bsky.social',
      reddit: "https://www.reddit.com/user/zeroview0/submitted/",
      youtube: "https://www.youtube.com/@ZeroviewZero",
      email: 'mailto:nuutti.rinne@gmail.com'
    }
  }

  getArtVideos = () => {
    return [
      "-1spcUKrlEI",
      "nRt7uC3hwXA",
    ];
  }

  getSoftwareTitles = () => {
    return this.finnish
      ? [
        [
          "Ohjelmisto&shy;kehitys",
          "cOhjelmisto&shy;kehitys",
          "clOhjelmisto&shy;kehitys",
          "claOhjelmisto&shy;kehitys",
          "clasOhjelmisto&shy;kehitys",
          "classOhjelmisto&shy;kehitys",
          "<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Ohjelmisto&shy;kehitys</span>",
          "<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Ohjelmisto&shy;kehitys</span> ",
          "<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Ohjelmisto&shy;kehitys</span> {",
          "<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Ohjelmisto&shy;kehitys</span> { ",
          "<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Ohjelmisto&shy;kehitys</span> { }",
        ],
        [
          "Ohjelmisto&shy;kehitys",
          "pOhjelmisto&shy;kehitys",
          "prOhjelmisto&shy;kehitys",
          "priOhjelmisto&shy;kehitys",
          "prinOhjelmisto&shy;kehitys",
          "printOhjelmisto&shy;kehitys",
          "<span style='color: #fae76e'>print</span>(<wbr>Ohjelmisto&shy;kehitys",
          "<span style='color: #fae76e'>print</span>(<wbr>\"Ohjelmisto&shy;kehitys",
          "<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'><wbr>\"Ohjelmisto\"</span><wbr>kehitys",
          "<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'><wbr>\"Ohjelmisto\"</span> kehitys",
          "<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'><wbr>\"Ohjelmisto\"</span> +<wbr>kehitys",
          "<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'><wbr>\"Ohjelmisto\"</span> + kehitys",
          "<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'><wbr>\"Ohjelmisto\"</span> + \"kehitys",
          "<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'><wbr>\"Ohjelmisto\"</span> + <span style='color: #5da656;'>\"kehitys\"</span>",
          "<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'><wbr>\"Ohjelmisto\"</span> + <span style='color: #5da656;'>\"kehitys\"</span>)",
        ],
        [
          "Ohjelmisto&shy;kehitys",
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
          "&<span style='color: #68c0f2'>ohjelmisto<wbr></span>.<span style='color: #f77272'>kehitys<wbr></span>.<span style='color: #fae76e'>clone</span>();",
        ],
        [
          "Ohjelmisto&shy;kehitys",
          "/Ohjelmisto&shy;kehitys",
          "<span style='color: #666666;'>//Ohjelmisto&shy;kehitys</span>",
          "<span style='color: #666666;'>// Ohjelmisto&shy;kehitys</span>",
          "<span style='color: #666666;'>// T<wbr>Ohjelmisto&shy;kehitys</span>",
          "<span style='color: #666666;'>// TO<wbr>Ohjelmisto&shy;kehitys</span>",
          "<span style='color: #666666;'>// TO-<wbr>Ohjelmisto&shy;kehitys</span>",
          "<span style='color: #666666;'>// TO-D<wbr>Ohjelmisto&shy;kehitys</span>",
          "<span style='color: #666666;'>// TO-DO<wbr>Ohjelmisto&shy;kehitys</span>",
          "<span style='color: #666666;'>// TO-DO:<wbr>Ohjelmisto&shy;kehitys</span>",
          "<span style='color: #666666;'>// TO-DO: Ohjelmisto&shy;kehitys</span>",
        ],

      ]
      : [
        [
          "Software development",
          "cSoftware development",
          "clSoftware development",
          "claSoftware development",
          "clasSoftware development",
          "classSoftware development",
          "<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Software</span> development",
          "<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Software<wbr>development</span> ",
          "<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Software<wbr>Development</span> ",
          "<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Software<wbr>Development</span> ",
          "<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Software<wbr>Development</span> {",
          "<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Software<wbr>Development</span> { ",
          "<span style='color: #b35dae;'>class</span> <span style='color: #68c0f2'>Software<wbr>Development</span> { }",
        ],
        [
          "Software development",
          "pSoftware development",
          "prSoftware development",
          "priSoftware development",
          "prinSoftware development",
          "printSoftware development",
          "<span style='color: #fae76e'>print</span>(<wbr>Software development",
          "<span style='color: #fae76e'>print</span>(<wbr>\"Software development",
          "<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'>\"Software\"</span> development",
          "<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'>\"Software\"</span> +development",
          "<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'>\"Software\"</span> + development",
          "<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'>\"Software\"</span> + \"development",
          "<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'>\"Software\"</span> + <span style='color: #5da656;'>\"development\"</span>",
          "<span style='color: #fae76e'>print</span>(<span style='color: #5da656;'>\"Software\"</span> + <span style='color: #5da656;'>\"development\"</span>)",
        ],
        [
          "Software development",
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
          "&<span style='color: #68c0f2'>software<wbr></span>.<span style='color: #f77272'>development<wbr></span>.<span style='color: #fae76e'>clone</span>();",
        ],
        [
          "Software development",
          "/Software development",
          "<span style='color: #666666;'>//Software development</span>",
          "<span style='color: #666666;'>// Software development</span>",
          "<span style='color: #666666;'>// T<wbr>Software development</span>",
          "<span style='color: #666666;'>// TO<wbr>Software development</span>",
          "<span style='color: #666666;'>// TO-<wbr>Software development</span>",
          "<span style='color: #666666;'>// TO-D<wbr>Software development</span>",
          "<span style='color: #666666;'>// TO-DO<wbr>Software development</span>",
          "<span style='color: #666666;'>// TO-DO:<wbr>Software development</span>",
          "<span style='color: #666666;'>// TO-DO: Software development</span>",
        ],
      ];
  }
}
