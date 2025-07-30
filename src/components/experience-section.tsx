import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-center justify-center gap-8">
          <div className="space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Work Experience
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A timeline of my professional journey and key contributions.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-border"></div>
            {experience.map((item, index) => (
              <div
                key={index}
                className={`relative mb-8 flex w-full items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`absolute left-1/2 h-4 w-4 -translate-x-1/2 transform rounded-full bg-primary ring-4 ring-background`}
                ></div>
                <Card
                  className={`w-full lg:w-[45%] ${
                    index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <span className="font-bold">{item.role}</span>
                      <span className="text-sm font-normal text-muted-foreground">{item.period}</span>
                    </CardTitle>
                    <p className="text-lg font-medium text-primary">{item.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
