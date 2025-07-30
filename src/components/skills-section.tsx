import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-secondary py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Technical Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My expertise across the full stack, from frontend design to backend infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {skills.map((skillCategory) => (
              <Card key={skillCategory.category}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <skillCategory.icon className="h-7 w-7 text-primary" />
                    <span className="font-headline text-2xl">{skillCategory.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillCategory.technologies.map((tech) => (
                    <div key={tech.name} className="space-y-1">
                      <div className="flex justify-between">
                        <p className="font-medium">{tech.name}</p>
                        <p className="text-sm text-muted-foreground">{tech.level}%</p>
                      </div>
                      <Progress value={tech.level} aria-label={`${tech.name} proficiency`} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
