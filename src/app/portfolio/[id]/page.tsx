import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import database from "@/utils/db/appwrite";
import { ProjectResponseType } from "@/lib/types";
import { dataBaseID, projectCollectionID } from "@/lib/config";
export async function generateStaticParams() {
  const response = await database.listDocuments(
    dataBaseID,
    projectCollectionID
  );
  const projects = response.documents as unknown as ProjectResponseType[];
  return projects.map((project) => ({
    id: project.$id,
  }));
}
export default async function BlockPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const project = (await database.getDocument(
    dataBaseID,
    projectCollectionID,
    id
  )) as ProjectResponseType;
  return (
    <div className="container mx-auto px-4 py-8">
      <Button asChild variant="ghost" className="mb-4">
        <Link href="/portfolio">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
      </Button>

      <h1 className="mb-4 text-4xl font-bold text-primary">{project.title}</h1>
      <p className="mb-6 text-xl">{project.description}</p>

      <div className="mb-8 flex justify-center">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={400}
          placeholder="blur"
          className="rounded-lg"
        />
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-primary">
          Project Overview
        </h2>
        <p>{project.fullDescription}</p>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-primary">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-primary">
          Key Features
        </h2>
        <ul className="list-disc pl-5">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-primary">
          Challenges Overcome
        </h2>
        <ul className="list-disc pl-5">
          {project.challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-primary">Outcome</h2>
        <p>{project.outcome}</p>
      </div>
      {project.testimonial.map((testimonial) => (
        <Card key={testimonial.$id} className="mb-8">
          <CardHeader>
            <CardTitle>Client Testimonial</CardTitle>
            <CardDescription>
              {testimonial.author}, {testimonial.position}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <blockquote className="italic">
              &quot;{testimonial.quote}&quot;
            </blockquote>
          </CardContent>
        </Card>
      ))}
      {/* <Card className="mb-8">
        <CardHeader>
          <CardTitle>Client Testimonial</CardTitle>
          <CardDescription>
            {project.testimonial.author}, {project.testimonial.position}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <blockquote className="italic">
            &quot;{project.testimonial.quote}&quot;
          </blockquote>
        </CardContent>
      </Card> */}

      <div className="flex justify-center">
        <Button asChild size="lg">
          <Link href="/contact">Discuss Your Project</Link>
        </Button>
      </div>
    </div>
  );
}
