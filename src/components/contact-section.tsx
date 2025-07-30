import { contactInfo } from "@/lib/data";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or just want to say hello? I&apos;d love to hear from you.
            </p>
            <div className="flex justify-center space-x-4">
              {contactInfo.map((info) => (
                 <a
                    key={info.label}
                    href={info.label === 'Email' ? `mailto:${info.value}` : '#'}
                    className="text-primary hover:text-primary/80"
                    aria-label={info.label}
                  >
                  <info.icon className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}
