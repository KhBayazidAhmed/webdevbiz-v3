"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useToast } from "@/hooks/use-toast";
import { useFormStatus } from "react-dom";
import { CreateContact } from "@/actions/contact";
import { useActionState } from "react"; // Ensure this works on the client side
import { useEffect } from "react";

export default function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(CreateContact, undefined);

  // Toast messages triggered after state changes
  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Success",
        description: "Your message has been sent successfully.",
        duration: 5000,
      });
    } else if (state?.success === false) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        duration: 5000,
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-4">
      <Input type="text" name="name" placeholder="Your Name" required />
      <Input type="email" name="email" placeholder="Your Email" required />
      <Input type="text" name="subject" placeholder="Subject" required />
      <Textarea name="message" placeholder="Your Message" required />
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending: isLoading } = useFormStatus();

  return (
    <Button disabled={isLoading} type="submit">
      {isLoading ? "Sending..." : "Send Message"}
    </Button>
  );
}
