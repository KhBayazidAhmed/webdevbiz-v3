import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroImage from "../../../public/images/hero.jpg";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">About Me</h1>

      <div className="mb-12 flex flex-col items-center md:flex-row md:items-start">
        <Image
          src={HeroImage}
          alt="Web developer bayazid"
          width={300}
          height={300}
          className="mb-8 rounded-lg md:mb-0 md:mr-8"
        />
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Professional Journey</h2>
          <p className="mb-4">
            Here you can write about your career journey, key milestones, and
            what drives you as a developer. Highlight your experiences, the
            challenges you&apos;ve overcome, and the skills you&apos;ve acquired
            along the way.
          </p>
          <p className="mb-4">
            Don&apos;t forget to mention your educational background, any
            significant projects or roles you&apos;ve had, and what you&apos;re
            currently focusing on in your career.
          </p>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Skills Breakdown</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-2 text-xl font-semibold">Front-end</h3>
            <ul className="list-inside list-disc">
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>HTML/CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">Back-end</h3>
            <ul className="list-inside list-disc">
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>Django</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">Databases & Tools</h3>
            <ul className="list-inside list-disc">
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
              <li>Git</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <Button asChild>
          <Link
            href="/YourName_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </Link>
        </Button>
      </div>
    </div>
  );
}
