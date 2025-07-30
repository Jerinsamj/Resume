import Link from "next/link";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";
import { Download, FileText, MoveRight } from "lucide-react";

export default function HeroSection() {
  const resumeUrl = "https://jerinsamj.github.io/Resume/";

  return (
    <section className="w-full py-24 md:py-32 lg:py-40 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Jerin Sam
          </h1>
          <h2 className="font-headline mt-2 text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
            Creative Software Engineer
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
            I build elegant and efficient software solutions that solve real-world problems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="#contact">
              <Button size="lg">
                Contact Me <MoveRight className="ml-2" />
              </Button>
            </Link>
            <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                View Full Resume <FileText className="ml-2" />
              </Button>
            </Link>
            <Link href={resumeUrl} target="_blank" rel="noopener noreferrer" download>
              <Button size="lg" variant="outline">
                Download PDF <Download className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex justify-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <link.icon className="h-7 w-7" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
