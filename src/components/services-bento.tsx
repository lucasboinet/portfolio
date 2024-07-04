import { CalendarIcon, FileTextIcon, InputIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";
 
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
    Icon: InputIcon,
    name: "Développement d'application",
    description: "Ajout de fonctionnalité, développement complet, conseils",
    href: "/#contact",
    cta: "Prendre contact",
    className: "col-span-3",
    background: (
      <div className="absolute opacity-65 right-0 top-0 w-[70%] origin-top translate-x-0 transition-all duration-300 ease-out group-hover:-translate-x-10" >
        <IconCloud 
          iconSlugs={slugs} 
        />
      </div>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Création de site internet",
    description: "Création de votre site internet clés en main avec Webflow",
    href: "/#contact",
    cta: "Prendre contact",
    className: "col-span-3",
    background: (
      <div className="flex flex-col gap-2 opacity-70 absolute right-10 top-1/2 -translate-y-1/2 w-[70%] origin-top translate-x-0 transition-all duration-300 ease-out group-hover:translate-x-10">
        <Image 
          src="/webflow.svg" 
          alt="Webflow logo"
          width="300"
          height="100"
        />
      </div>
    ),
  },
];
 
export function SerivesBento() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}