import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`${DATA.name} 💻`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      {/* <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <section id="recommandations" className="bg-[#6bd6a6] bg-opacity-20 dark:bg-opacity-15 border rounded-lg p-4 min-h-24">
            <h2 className="text-xl font-bold">Partenaire</h2>
            <div className="mt-3">
              {DATA.recommandations.map((recommandation) =>(
                <BlurFade key={recommandation.contact} delay={BLUR_FADE_DELAY}>
                  <div className="flex flex-row items-center gap-2">
                    <p>
                      <a href="https://hugoboinet.fr" target="_blank" className="font-bold underline text-black dark:text-white text-sm">@hugoboinet</a>{", "}
                      spécialisé en Graphisme et Webdesign. N&apos;hésitez pas à le contacter pour vos besoins en design.
                    </p>
                  </div>
                </BlurFade>
              ))}
            </div>
        </section>
      </BlurFade> */}
      <section id="services">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Freelance
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Mes services
                </h2>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3">
                <h6 className="font-bold text-lg">Développement d&apos;applications</h6>
                <p>Ajout de nouvelles fonctionnalités, développement complet d&apos;applications.</p>
                <a href="/#contact" className="bg-black text-white text-[10px] w-fit px-1.5 py-1 rounded">En savoir plus</a>
              </div>

              <div className="flex flex-col gap-2">
                <h6 className="font-bold text-lg">Création de site internet</h6>
                <p>Création de sites internet avec Webflow ou sur mesure avec du code en fonction du besoin.</p>
                <a href="/#contact" className="bg-black text-white text-[10px] w-fit px-1.5 py-1 rounded">En savoir plus</a>
              </div>

              <div className="flex flex-col gap-2">
                <h6 className="font-bold text-lg">Graphisme</h6>
                <p>Identité visuelle, logos, chartes graphiques, maquettes, et supports imprimés (flyers, cartes de visite). En collaboration avec <a href="https://hugoboinet.fr" target="_blank" className="underline font-semibold">@hugoboinet</a>.</p>
                <a href="/#contact" className="bg-black text-white text-[10px] w-fit px-1.5 py-1 rounded">En savoir plus</a>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Projets
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Décrouvrez mes derniers projets
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  J&apos;ai travaillé sur une grande variété de projets, allant de simples sites web à des applications web complexes. Voici quelques-uns de mes préférés.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end !== '' ? work.end : "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={`${education.school}-${id}`}
              delay={BLUR_FADE_DELAY * 11 + id * 0.05}
            >
              <ResumeCard
                key={`${education.school}-${id}`}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                period={`${education.start} - ${education.end}`}
                description={education.degree}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Rentrons en contact
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Un projet? Envoyez moi un dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  via message sur twitter
                </Link>{" "}
                ou bien vous pouvez simplement m&apos;envoyer un mail a <a
                  href={`mailto:${DATA.contact.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {DATA.contact.email}
                </a>.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
