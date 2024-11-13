import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/placeholder.svg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/placeholder.svg",
    technologies: ["Vue.js", "Express", "GraphQL"],
  },
  // Add more projects as needed
];

export default function BlockPage() {
  return (
    <div className="container mx-auto px-4 min-h-[90vh] py-8">
      <h1 className="mb-8 text-4xl font-bold">Portfolio</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="mb-4 rounded-lg"
              />
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-secondary px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/portfolio/project-${project.id}`}>
                  View Details
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
