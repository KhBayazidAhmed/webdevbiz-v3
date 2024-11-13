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

export default function BlockPage() {
  const project = {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack online store with React and Node.js",
    fullDescription:
      "This e-commerce platform is a comprehensive solution for businesses looking to establish their online presence. It features a responsive front-end built with React, a robust back-end powered by Node.js and Express, and a MongoDB database for efficient data management.",
    image: "/placeholder.svg",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Stripe API",
    ],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filter functionality",
      "Shopping cart and wishlist management",
      "Secure payment processing with Stripe",
      "Order tracking and history",
      "Admin dashboard for inventory management",
    ],
    challenges: [
      "Implementing real-time inventory updates across multiple users",
      "Optimizing database queries for large product catalogs",
      "Ensuring secure handling of sensitive user data and payment information",
      "Developing a scalable architecture to handle high traffic loads",
    ],
    outcome:
      "The e-commerce platform was successfully launched, resulting in a 200% increase in online sales for the client within the first three months. The solutions scalability allowed for seamless handling of peak traffic during holiday seasons.",
    testimonial: {
      quote:
        "This e-commerce solution transformed our business. The attention to detail and robust feature set exceeded our expectations.",
      author: "Jane Doe",
      position: "CEO, Fashion Emporium",
    },
  };

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
          height={200}
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

      <Card className="mb-8">
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
      </Card>

      <div className="flex justify-center">
        <Button asChild size="lg">
          <Link href="/contact">Discuss Your Project</Link>
        </Button>
      </div>
    </div>
  );
}
