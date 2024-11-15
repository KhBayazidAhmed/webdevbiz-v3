import React from "react";

import ProjectShowcase from "./ProjectShowcase";
export default function ProjectSection() {
  return (
    <section className="my-16">
      <h2 className="mb-6 text-3xl font-bold text-primary">
        Featured Projects
      </h2>
      <ProjectShowcase />
    </section>
  );
}
