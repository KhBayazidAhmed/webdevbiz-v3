import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Badge } from "@/components/ui/badge";
import HeroImage from "../../public/images/hero.jpg";
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Docker",
];
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Tech Innovators",
    text: "Your Name is an exceptional developer who consistently delivers high-quality work.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, StartUp Solutions",
    text: "Working with Your Name was a game-changer for our project. Their expertise in full-stack development is unmatched.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Lead Developer, WebCraft",
    text: "Your Name's attention to detail and problem-solving skills make them an invaluable asset to any development team.",
  },
];
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack online store with React and Node.js",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app built with Next.js and GraphQL",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "An analytics dashboard using D3.js and Express",
    image: "/placeholder.svg",
  },
];
export default function Page() {
  return (
    <div className="container mx-auto px-4  ">
      <section className=" flex min-h-screen flex-col-reverse items-center md:flex-row md:justify-between">
        <div className="md:w-1/2">
          <h1 className="mb-4 text-4xl font-bold">Web Developer Bayazid</h1>
          <p className="mb-6 text-xl">
            Full Stack Developer specializing in modern web technologies
          </p>
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
        <div className="mb-8 md:mb-0 md:w-1/3">
          <Image
            src={HeroImage}
            alt="Your Name"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold text-primary">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="">
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
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/portfolio/project-${project.id}`}>
                    View Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold text-primary">
          Skills Overview
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div key={skill}>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                {skill}
              </Badge>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold text-primary">Services</h2>
        <Tabs defaultValue="webdev" className="w-full">
          <TabsList>
            <TabsTrigger value="webdev">Web Development</TabsTrigger>
            <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
            <TabsTrigger value="consulting">Consulting</TabsTrigger>
          </TabsList>
          <TabsContent value="webdev">
            <Card>
              <CardHeader>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>
                  Creating responsive and performant web applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Full-stack development using modern frameworks</li>
                  <li>RESTful API design and implementation</li>
                  <li>Database design and optimization</li>
                  <li>Performance optimization and scalability</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="mobile">
            <Card>
              <CardHeader>
                <CardTitle>Mobile App Development</CardTitle>
                <CardDescription>
                  Building cross-platform mobile applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>React Native for iOS and Android</li>
                  <li>
                    Native app development for iOS (Swift) and Android (Kotlin)
                  </li>
                  <li>App Store and Play Store deployment</li>
                  <li>Mobile UI/UX design</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="consulting">
            <Card>
              <CardHeader>
                <CardTitle>Technical Consulting</CardTitle>
                <CardDescription>
                  Providing expert advice on software development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Architecture design and review</li>
                  <li>Code audits and optimization</li>
                  <li>Technology stack selection</li>
                  <li>Team training and mentorship</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold text-primary">Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>&quot;{testimonial.text}&quot;</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
