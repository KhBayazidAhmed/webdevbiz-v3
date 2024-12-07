import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import database from "@/utils/db/appwrite";
import { dataBaseID, projectCollectionID } from "@/lib/config";

type Documents = {
  title: string;
  description: string;
  image: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
};

export default async function ProjectShowcase() {
  const response = await database.listDocuments(
    dataBaseID,
    projectCollectionID
  );
  const projects = response.documents as unknown as Documents[];
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.$id} className=" ">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center flex-col">
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={300}
              placeholder="blur"
              className="mb-4 rounded-lg"
            />
          </CardContent>
          <CardFooter className="flex justify-center items-center flex-col">
            <Button asChild>
              <Link href={`/portfolio/${project.$id}`}>View Project</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
