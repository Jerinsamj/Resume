export default function SummarySection() {
  return (
    <section id="about" className="w-full bg-secondary py-16 md:py-24 lg:py-32">
      <div className="container grid items-center gap-8 px-4 md:grid-cols-1 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Professional Summary
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Efficient and diligent with the ability to handle multiple projects simultaneously with a high degree of accuracy. I love to be creative while being proficient and monitoring software performance tests. I have excellent understanding of development principles and practices for diverse operating systems.
          </p>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            With a strong background in software development, automation, and compliance, I bring hands-on experience delivering scalable solutions using Python, React, JavaScript, and Microsoft Power Platform.
          </p>
        </div>
      </div>
    </section>
  );
}
