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

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js",
    date: "2023-05-15",
    lang: "en",
  },
  {
    id: 2,
    title: "নেক্সট জেএস দিয়ে শুরু করা",
    excerpt:
      "নেক্সট জেএস দিয়ে আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরি করার পদ্ধতি শিখুন",
    date: "2023-05-15",
    lang: "bn",
  },
  // Add more blog posts as needed
];

export default function BlockPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>
                {new Date(post.date).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
