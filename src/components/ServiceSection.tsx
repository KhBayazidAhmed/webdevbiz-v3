import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import database from "@/utils/db/appwrite";
import { dataBaseID } from "@/lib/config";
import { ServicesResponse } from "@/lib/types";

export default async function ServiceSection() {
  const { documents: serviceSectionData } = (await database.listDocuments(
    dataBaseID,
    "6736cfac000fb16cf902"
  )) as ServicesResponse;
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-3xl font-bold text-primary">Services</h2>
      <Tabs
        defaultValue={serviceSectionData[0]?.Category || ""}
        className="w-full text-wrap "
      >
        <TabsList>
          {serviceSectionData.map((service) => (
            <TabsTrigger key={service.$id} value={service.Category}>
              {service.Category}
            </TabsTrigger>
          ))}
        </TabsList>

        {serviceSectionData.map((service) => (
          <TabsContent key={service.$id} value={service.Category}>
            <Card>
              <CardHeader>
                <CardTitle>{service.Title}</CardTitle>
                <CardDescription className="text-balance">
                  {service.Description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  {service.service.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
