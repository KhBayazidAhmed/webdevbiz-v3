import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dataBaseID } from "@/lib/config";
import { testimonialResponseData } from "@/lib/types";
import database from "@/utils/db/appwrite";

export default async function TestimonialSection() {
  const { documents: testimonials } = (await database.listDocuments(
    dataBaseID,
    "6736e89f00347c382a71"
  )) as testimonialResponseData;
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-3xl font-bold text-primary">Testimonials</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.$id}>
            <Card>
              <CardHeader>
                <CardTitle>{testimonial.Name}</CardTitle>
                <CardDescription>{testimonial.Role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>&quot;{testimonial.Text}&quot;</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
