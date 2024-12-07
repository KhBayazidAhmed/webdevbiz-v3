import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroImage from "../../public/images/hero.jpg";
import { FaLongArrowAltDown } from "react-icons/fa";
import SkillsSection from "@/components/SkillsSection";
import ServiceSection from "@/components/ServiceSection";
import ProjectSection from "@/components/ProjectSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Page() {
  return (
    <div className="container mx-auto px-4  ">
      <section className="relative flex min-h-screen text-center md:text-left flex-col-reverse items-center justify-around md:flex-row md:justify-between">
        <div className="md:w-1/2">
          <h1 className="mb-4 text-4xl font-bold">
            Hi, I&apos;m Bayazid, a Full Stack Developer
          </h1>
          <p className="mb-4 text-lg">
            I specialize in building scalable, high-performance applications
            with modern technologies like React, Next.js, Node.js, and MongoDB.
          </p>
          <p className="mb-6 text-lg">
            With a passion for clean, efficient code, I help bring innovative
            web solutions to life. Whether you&apos;re looking for full-stack
            development or technical guidance, I&apos;m here to assist you.
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
            placeholder="blur"
            className="rounded-full"
          />
        </div>
        <div className="md:flex hidden justify-center items-center absolute top-[85%] right-3">
          <FaLongArrowAltDown className="text-5xl animate-bounce transition-all duration-1000" />
        </div>
      </section>

      <ProjectSection />
      <SkillsSection />
      <ServiceSection />
      <TestimonialSection />
    </div>
  );
}
