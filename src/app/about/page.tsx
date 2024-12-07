import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroImage from "../../../public/images/hero.jpg";
import database from "@/utils/db/appwrite";
import { dataBaseID, skillCollectionID } from "@/lib/config";
import { SkillsResponse } from "@/lib/types";

export default async function Page() {
  const { documents: data } = (await database.listDocuments(
    dataBaseID,
    skillCollectionID
  )) as SkillsResponse;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">About Me</h1>

      <div className="mb-12 flex flex-col items-center md:flex-row md:items-start">
        <Image
          src={HeroImage}
          alt="Web developer bayazid"
          width={300}
          height={300}
          placeholder="blur"
          className="mb-8 rounded-lg md:mb-0 md:mr-8"
        />
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Professional Journey</h2>
          <p className="mb-4">
            Over the years, I&apos;ve grown into a skilled full-stack web
            developer, specializing in building scalable, high-performance
            applications using modern web technologies. My expertise lies in the
            MERN stack (MongoDB, Express, React, Node.js) and frameworks like
            Next.js, where I focus on delivering seamless user experiences and
            efficient back-end solutions.
          </p>
          <p className="mb-4">
            I have a strong foundation in web development and have mastered
            tools like Zustand for state management, WebSocket and WebRTC for
            real-time communication, Docker for containerization, and Redis and
            Kafka for optimizing data workflows. My work often involves creating
            dynamic, secure, and SEO-friendly web applications, reflecting a
            blend of creativity and technical precision.
          </p>
          <p className="mb-4">
            In addition to my technical skills, I have an in-depth understanding
            of networking and server management. I’ve developed and implemented
            custom captive portals, APIs for voucher-based authentication, and
            tools for monitoring network performance. I also excel at using
            Drizzle ORM and Appwrite for database and API management.
          </p>
          <p className="mb-4">
            I pride myself on being a problem-solver, whether it’s optimizing
            application performance, creating engaging UI/UX designs, or
            developing efficient server-side systems. My current focus is on
            learning new technologies and staying up-to-date with industry
            trends. I am always eager to learn and grow, and I am excited to
            contribute to the development of cutting-edge web applications as a
            developer.
          </p>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Skills Breakdown</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map(
            (doc) =>
              doc.category && (
                <div key={doc.$id}>
                  <h3 className="mb-2 text-xl font-semibold">{doc.category}</h3>
                  <ul className="list-inside list-disc">
                    {doc.skills.length > 0 ? (
                      doc.skills.map((skill: string, index: number) => (
                        <li key={index}>{skill}</li>
                      ))
                    ) : (
                      <li>No skills listed</li>
                    )}
                  </ul>
                </div>
              )
          )}
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
