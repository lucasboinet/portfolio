import { Icons } from "@/components/icons";

export const DATA = {
  name: "Lucas Boinet",
  initials: "LB",
  url: "https://lucasboinet.fr",
  location: "Lyon, FR",
  locationLink: "https://www.google.com/maps/place/lyon",
  description: "Freelance Developpeur Full-stack & Webflow.",
  featuring: "Pour toutes demandes concernant de la direction artistique (maquettes de site internet, logo, identité, ...), je me permet de vous orienter vers [@hugoboinet](https://hugoboinet.fr).",
  summary: "J'ai toujours aimé les ordinateurs et l'informatique. C'est donc tout naturellement que j'ai poursuivi mes études en informatique après le lycée. J'ai été diplômé du [DUT informatique de l'IUT2 de Grenoble](/#education) en 2021 et j'ai ensuite obtenu un [Master en Développement Web et Systèmes d'Information à Ynov Lyon](/#education).",
  avatarUrl: "/me.jpg",
  skills: [
    "Webflow",
    "VueJS",
    "React",
    "Next.js",
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
      description: "I'm open to any **Full-stack**/**Frontend** web development or **Webflow** opportuny. You can contact me at **lucasboinet.pro@gmail.com**",
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
      href: "https://buildspace.so",
      degree: "Master 2 - Développement Web et Systèmes d'Information",
      logoUrl: "/ynovlyon.jfif",
      start: "2023",
      end: "2024",
    },
    {
      school: "Lyon Ynov Campus",
      href: "https://uwaterloo.ca",
      degree: "Master 1 - Développement Web",
      logoUrl: "/ynovlyon.jfif",
      start: "2021",
      end: "2023",
    },
    {
      school: "IUT2 Grenoble",
      href: "https://wlu.ca",
      degree: "DUT Informatique",
      logoUrl: "/iut2.jfif",
      start: "2019",
      end: "2021",
    },
    {
      school: "Lycée Ella Fitzgerald",
      href: "https://ibo.org",
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
      video: "https://cdn.magicui.design/bento-grid.mp4",
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
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "My Devops",
      dates: "2023",
      active: true,
      description: "Coming soon",
      technologies: ["Coming soon"],
      links: [],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
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
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
