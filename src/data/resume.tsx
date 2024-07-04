import { Icons } from "@/components/icons";

export const DATA = {
  name: "Lucas Boinet",
  initials: "LB",
  url: "https://lucasboinet.fr",
  location: "Lyon, FR",
  locationLink: "https://www.google.com/maps/place/lyon",
  description:
    "French Web Developer looking for freelance opportunity. I love building things and helping people.",
  summary:
    "I've always loved computers and IT. So it was natural for me to continue my studies in computer science after high school. [I graduated from the computer science DUT](/#education) of IUT2 Grenoble in 2021 and then went on to get my [Master's degree in Web Development and Information Systems](/#education) from Ynov Lyon.",
  avatarUrl: "/me.jpg",
  skills: [
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
    "English (B2)"
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
      location: "Lyon, FR & Remote",
      title: "Full-stack Developer",
      logoUrl: "/logo.jpg",
      start: "September 2024",
      description: "I'm open to any **Full-stack**/**Frontend** web development or **Webflow** opportuny. You can contact me at **lucasboinet.pro@gmail.com**",
    },
    {
      company: "Skyloud",
      href: "https://skyloud.fr",
      badges: ["Work-study", "Vue 3", "Express", "Mongo", "Microservices"],
      location: "Lyon, FR",
      title: "Full-stack Developer",
      logoUrl: "/skyloud.jfif",
      start: "July 2022",
      end: "September 2024",
      description: "Had the job to add new features and improve the app overall. Their app (Skyloud App) is an app that link customer and DevOps along the infrastructure design, building or migration process. It also automatically invoices customer who request assignments in their infrastructure.",
    },
    {
      company: "Tokatab",
      badges: ["Work-study", "Vue 2", "Laravel", "Postgres", "Quasar"],
      href: "https://tokatab.com",
      location: "Remote",
      title: "Full-stack Developer",
      logoUrl: "/tokatab.jfif",
      start: "October 2021",
      end: "July 2022",
      description:
        "Had the job to add new features and improve the app overall. Their app is an virtual piano teacher who will guide you through the learning process and provide you with advice and guidance.",
    },
    {
      company: "MVP",
      href: "https://mvp.eu/",
      badges: ["Internship"],
      location: "Grenoble, FR",
      title: "Web developer",
      logoUrl: "/mvp.png",
      start: "Mai 2021",
      end: "July 2021",
      description:
        "Had the job to add new templates for their live screen display app.",
    },
  ],
  education: [
    {
      school: "Lyon Ynov Campus",
      href: "https://buildspace.so",
      degree: "Master 2 - Web Development and Information Systems",
      logoUrl: "/ynovlyon.jfif",
      start: "2023",
      end: "2024",
    },
    {
      school: "Lyon Ynov Campus",
      href: "https://uwaterloo.ca",
      degree: "Master 1 - Web Development",
      logoUrl: "/ynovlyon.jfif",
      start: "2021",
      end: "2023",
    },
    {
      school: "IUT2 Grenoble",
      href: "https://wlu.ca",
      degree: "Computer science DUT",
      logoUrl: "/iut2.jfif",
      start: "2019",
      end: "2021",
    },
    {
      school: "Lycée Ella Fitzgerald",
      href: "https://ibo.org",
      degree: "Baccalaureate (specializing in economics)",
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
        "Multiplayer gaming platform that allow you to play and customize games like Undercover, Speedrundle or even Werewolves game.",
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
        "App that link customer and DevOps along the infrastructure design, building or migration process. It also automatically invoices customer who request assignments in their infrastructure.",
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
        "Developed an app that allow you to create resume with drag and drop customizable elements (image, text, shapes) in a sheet.",
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
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
