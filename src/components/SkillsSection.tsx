import React from "react";
import { Badge } from "@/components/ui/badge";
import database from "@/utils/db/appwrite";
import { dataBaseID, skillCollectionID } from "@/lib/config";
import { SkillDocument } from "@/lib/types";
export default async function SkillsSection() {
  const { SkillsName } = (await database.getDocument(
    dataBaseID,
    skillCollectionID,
    "6736b3e1003b0dc9f4c8"
  )) as SkillDocument;
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-3xl font-bold text-primary">Skills Overview</h2>
      <div className="flex flex-wrap gap-2">
        {SkillsName.map((skill) => (
          <div key={skill}>
            <Badge variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          </div>
        ))}
      </div>
    </section>
  );
}
