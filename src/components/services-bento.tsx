import { InputIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import IconCloud from "@/components/magicui/icon-cloud";
import Image from "next/image";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
 
const features = [
  {
    name: "Développement d'application web",
    description: "Ajout de nouvelles fonctionnalités, développement complet",
    href: "/#contact",
    cta: "Prendre contact",
    className: "col-span-4",
    background: (
      <div className="absolute opacity-65 right-0 -top-20 w-[90%] transition-all duration-300 ease-out group-hover:scale-110" >
        <IconCloud 
          iconSlugs={slugs} 
        />
      </div>
    ),
  },
  {
    name: "Création de site Webflow",
    description: "Clés en main avec une solution no-code",
    href: "/#contact",
    cta: "Prendre contact",
    className: "col-span-3",
    background: (
      <>
        <Image 
          src="/webflow.svg" 
          alt="Webflow logo"
          className="block dark:hidden opacity-70 absolute left-1/2 top-1/2 w-[70%] md:w-[80%] -translate-x-1/2 -translate-y-20 transition-all duration-300 ease-out group-hover:scale-110"        width="400"
          height="100"
        />
        <Image 
          src="/webflow_white.svg" 
          alt="Webflow logo"
          className="hidden dark:block opacity-70 absolute left-1/2 top-1/2 w-[70%] md:w-[80%] -translate-x-1/2 -translate-y-20 transition-all duration-300 ease-out group-hover:scale-110"        width="400"
          height="100"
        />
      </>
    ),
  },
  {
    name: "Développement de site internet",
    description: "Sur-mesure en fonction de vos besoins",
    href: "/#contact",
    cta: "Prendre contact",
    className: "col-span-3",
    background: (
      <>
      </>
    ),
  },
  {
    name: "Logo & identité visuelle",
    description: "Tous vos besoins en graphisme. En collaboration avec (@hugoboinet)[https://hugoboinet.fr]",
    href: "/#contact",
    cta: "Prendre contact",
    className: "col-span-4",
    background: (
      <>
      </>
    ),
  },
];
 
export function ServicesBento() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}