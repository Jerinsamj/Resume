import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/lib/data";
import { School } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Education
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications.
            </p>
          </div>
          <div className="grid grid-cols-1">
            {education.map((edu) => (
              <Card key={edu.degree} className="mx-auto max-w-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <School className="h-10 w-10 text-primary" />
                    <div>
                        <p className="font-bold">{edu.degree}</p>
                        <p className="text-lg font-medium text-primary">{edu.institution}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-16">
                  <p className="text-muted-foreground">{edu.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
