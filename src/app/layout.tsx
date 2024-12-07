import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/Theme-provider";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
export const metadata = {
  title: {
    template: "%s - Web Dev Bayazid",
    default: "Web developer Bayazid",
  },
  description:
    "Professional portfolio of Bayazid, showcasing web development projects and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="relative">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
