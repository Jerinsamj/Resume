"use client";

import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import InterviewDialog from "./interview-dialog";

function getGreeting(name: string | null) {
  const hour = new Date().getHours();
  let timeOfDay;
  if (hour < 12) timeOfDay = "Good Morning";
  else if (hour < 18) timeOfDay = "Good Afternoon";
  else timeOfDay = "Good Evening";

  return name ? `${timeOfDay}, ${name}, I'm Jerin!` : `${timeOfDay}, I'm Jerin!`;
}

export default function HeroSection() {
  const [greeting, setGreeting] = useState("Hello, I'm Jerin!");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const resumeUrl = "https://drive.google.com/file/d/1A3xWEQQzc0HDBDUonSP05uvQdtZiWx4F/view?usp=sharing";

  const updateGreeting = () => {
    const storedName = localStorage.getItem("userName");
    setGreeting(getGreeting(storedName));
  };
  
  useEffect(() => {
    updateGreeting();
  }, []);


  return (
    <section className="w-full py-24 md:py-32 lg:py-40 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            {greeting}
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Experienced IT professional specializing in software development, cloud technologies, and automation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                Download Resume <Download className="ml-2" />
              </Button>
            </a>
            <Button size="lg" onClick={() => setIsDialogOpen(true)}>
              Invite for Interview
            </Button>
          </div>
        </div>
      </div>
      <InterviewDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen} onNameSubmitted={updateGreeting} />
    </section>
  );
}
