import { Icons } from "@/components/icons";

export const DATA = {
  name: "Lucas Boinet",
  initials: "LB",
  url: "https://lucasboinet.fr",
  location: "Lyon, FR",
  locationLink: "https://www.google.com/maps/place/lyon",
  description: "Freelance Developpeur Full-stack",
  recommandations: [
    {
      profession: "Directeur Artistique",
      link: "https://hugoboinet.fr",
      contact: "@hugoboinet"
    }
  ],
  summary: `Passionné et autodidacte depuis l’âge de 12 ans, j’ai acquis 3 ans d’expérience professionnelle en travaillant sur des technologies telles que Nuxt, Next, Vue et Node, dans des secteurs variés comme le cloud et l’hôtellerie.

  Mon objectif en tant que développeur est de garantir un code de qualité, évolutif, et optimisé afin de : 

  - Éviter à vos utilisateurs de rencontrer des bugs récurrents. 
  - Préserver la sérénité de vos équipes de développeurs en leur fournissant un code propre et maintenable.

  Voici comment je peux contribuer à vos projets : 

  - Compréhension et définition de vos besoins. 
  - Développement d’applications Web complexes telles que des ERP, backoffices ou sites web. 
  - Mise en place et gestion des pipelines CI/CD pour des déploiements fluides et efficaces. 
  - Création et gestion d’un Design System basé sur l’Atomic Design, avec contrôle des régressions visuelles pour minimiser les risques d'erreurs sur l'interface utilisateur. 
  - Accompagnement et formation de vos équipes sur les technologies, frameworks et bonnes pratiques les mieux adaptés à vos besoins.
  `,
  avatarUrl: "/me.jpg",
  skills: [
    "Webflow",
    "VueJS",
    "React",
    "Next.js",
    "Nuxt",
    "Tailwind css",
    "Typescript",
    "Node.js",
    "Express",
    "MongoDB",
    "Postgres",
    "Docker",
    "HTML",
    "CSS",
    "Git",
    "CI/CD",
    "Anglais (B2)"
  ],
  contact: {
    email: "lucasboinet.pro@gmail.com",
    tel: "+33652339586",
    social: {
      GitHub: {
        url: "https://github.com/lucasboinet",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/lucas-boinet/",
        icon: Icons.linkedin,
      },
      X: {
        url: "",
        icon: Icons.x,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "https://skyloud.fr",
      badges: [],
      location: "Lyon, FR & Remote",
      title: "Développeur Full-stack",
      logoUrl: "/logo.jpg",
      start: "September 2024",
      end: '',
      description: "Je suis ouvert à des opportunités de missions en tant que développeur **Full-stack**. Vous pouvez me contacter ici : **lucasboinet.pro@gmail.com**",
    },
    {
      company: "Skyloud",
      href: "https://skyloud.fr",
      badges: ["Alternance", "Vue 3", "Express", "Mongo", "Microservices"],
      location: "Lyon, FR",
      title: "Développeur Full-stack",
      logoUrl: "/skyloud.jfif",
      start: "July 2022",
      end: "September 2024",
      description: "J'avais pour mission d'ajouter de nouvelles fonctionnalités et d'améliorer l'application dans son ensemble. Leur application (Skyloud App) est une application qui relie le client et les DevOps tout au long du processus de conception, de construction ou de migration de l'infrastructure. Elle permet également de facturer automatiquement les clients qui font des demandes concernant leur infrastructure.",
    },
    {
      company: "Tokatab",
      badges: ["Alternance", "Vue 2", "Laravel", "Postgres", "Quasar"],
      href: "https://tokatab.com",
      location: "Remote",
      title: "Développeur Full-stack",
      logoUrl: "/tokatab.jfif",
      start: "October 2021",
      end: "July 2022",
      description:
        "J'avais pour mission d'ajouter de nouvelles fonctionnalités et d'améliorer l'application dans son ensemble. Leur application est un professeur de piano virtuel qui vous guidera tout au long du processus d'apprentissage et vous donnera des conseils.",
    },
    {
      company: "MVP",
      href: "https://mvp.eu/",
      badges: ["Stage"],
      location: "Grenoble, FR",
      title: "Développeur Web",
      logoUrl: "/mvp.png",
      start: "Mai 2021",
      end: "July 2021",
      description:
        "J'avais pour mission d'ajouter de nouveaux templates pour leur application d'affichage en direct.",
    },
  ],
  education: [
    {
      school: "Lyon Ynov Campus",
      href: "https://www.ynov.com/campus/lyon",
      degree: "Master 2 - Développement Web et Systèmes d'Information",
      logoUrl: "/ynovlyon.jfif",
      start: "2023",
      end: "2024",
    },
    {
      school: "Lyon Ynov Campus",
      href: "https://www.ynov.com/campus/lyon",
      degree: "Master 1 - Développement Web",
      logoUrl: "/ynovlyon.jfif",
      start: "2021",
      end: "2023",
    },
    {
      school: "IUT2 Grenoble",
      href: "https://iut2.univ-grenoble-alpes.fr/",
      degree: "DUT Informatique",
      logoUrl: "/iut2.jfif",
      start: "2019",
      end: "2021",
    },
    {
      school: "Lycée Ella Fitzgerald",
      href: "https://ella-fitzgerald.ent.auvergnerhonealpes.fr/",
      degree: "Baccalauréat (Economique et sociale)",
      logoUrl: "/ellafitzgerald.jfif",
      start: "2017",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "GamerHub",
      href: "https://gamerhub.lucashost.fr",
      dates: "2024",
      active: true,
      description:
        "Plateforme de jeux multijoueurs qui vous permet de jouer et de personnaliser des jeux comme Undercover, Speedrundle ou encore le Loup Garou.",
      technologies: [
        "Vue 3",
        "Typescript",
        "Mongo",
        "ExpressJS",
        "TailwindCSS",
        "Stripe",
        "Dragonfly",
        "HeadlessUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://gamerhub.lucashost.fr",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://picoshare.lucashost.fr/-2BXLE5CBJv",
      video: "",
    },
    {
      title: "Skyloud App",
      href: "https://skyloud.fr",
      dates: "2024",
      active: true,
      description:
        "App qui fait le lien entre le client et les DevOps tout au long du processus de conception, de construction ou de migration de l'infrastructure. Elle permet également de facturer automatiquement les clients qui onts des demandes concernant leur infrastructure.",
      technologies: [
        "Vue 3",
        "ExpressJS",
        "Mongo",
        "TailwindCSS",
        "Stripe",
        "Microservices"
      ],
      links: [
        {
          type: "Website",
          href: "https://skyloud.fr",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "",
    },
    {
      title: "Resume Maker",
      href: "https://resume-maker.lucashost.fr",
      dates: "2023",
      active: true,
      description:
        "Application qui permet de créer des CV en glissant et déposant des éléments personnalisables (image, texte, formes) dans un espace de travail.",
      technologies: [
        "Next.js",
        "ExpressJS",
        "Typescript",
        "PostgreSQL",
        "Knex",
        "Styled Component",
        "Cloudinary",
      ],
      links: [
        {
          type: "Website",
          href: "https://resume-maker.lucashost.fr",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "",
    },
    {
      title: "My Devops",
      href: "",
      dates: "2023",
      active: true,
      description: "Coming soon",
      technologies: ["Coming soon"],
      links: [],
      image: "",
      video:
        "",
    },
    {
      title: "Wagers",
      href: "",
      dates: "2022",
      active: true,
      description: "Coming soon",
      technologies: ["Coming soon"],
      links: [],
      image: "",
      video:
        "",
    },
  ],
} as const;
