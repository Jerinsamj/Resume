"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getProjectDescriptions } from "@/lib/actions";
import { portfolioProjects } from "@/lib/data";

interface Project {
  name: string;
  image: string;
  hint: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
}

export default function PortfolioSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDescriptions() {
      const projectNames = portfolioProjects.map((p) => p.name);
      try {
        const descriptions = await getProjectDescriptions(projectNames);
        const updatedProjects = portfolioProjects.map((project, index) => ({
          ...project,
          description: descriptions[index],
        }));
        setProjects(updatedProjects);
      } catch (error) {
        console.error("Failed to fetch project descriptions", error);
        // Fallback to placeholder descriptions
        const fallbackProjects = portfolioProjects.map((project) => ({
          ...project,
          description: `An innovative project showcasing skills in modern web development. Explore the code and live demo.`,
        }));
        setProjects(fallbackProjects);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDescriptions();
  }, []);

  return (
    <section id="portfolio" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my work, demonstrating my skills in creating modern web experiences.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader>
                      <Skeleton className="h-52 w-full" />
                      <Skeleton className="mt-4 h-8 w-3/4" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="mt-2 h-4 w-5/6" />
                    </CardContent>
                    <CardFooter className="gap-2">
                      <Skeleton className="h-10 w-24" />
                      <Skeleton className="h-10 w-24" />
                    </CardFooter>
                  </Card>
                ))
              : projects.map((project) => (
                  <Card key={project.name} className="flex flex-col overflow-hidden">
                    <CardHeader className="p-0">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="h-52 w-full object-cover"
                        data-ai-hint={project.hint}
                      />
                       <div className="p-6">
                        <CardTitle className="font-headline text-2xl">{project.name}</CardTitle>
                       </div>
                    </CardHeader>
                    <CardContent className="flex-grow p-6 pt-0">
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardContent>
                    <CardFooter className="gap-2 p-6 pt-0">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary">
                          <Github className="mr-2" /> GitHub
                        </Button>
                      </Link>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button>
                          <ExternalLink className="mr-2" /> Live Demo
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
