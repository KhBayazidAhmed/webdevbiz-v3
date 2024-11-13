import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("@/components/ContactForm"));
export default function BlockPage() {
  return (
    <div className="container min-h-[90vh] flex justify-center flex-col mx-auto px-4">
      <h1 className="mb-8  text-4xl font-bold">Contact Me</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="mb-4">
            I&apos;d love to hear from you! Whether you have a question about my
            work, want to discuss a potential project, or just want to say
            hello, feel free to reach out using the form below or by emailing me
            directly.
          </p>
          <p className="mb-4">
            Email:{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-primary hover:underline"
            >
              your.email@example.com
            </a>
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
