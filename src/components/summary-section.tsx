import Image from "next/image";

export default function SummarySection() {
  return (
    <section id="about" className="w-full bg-secondary py-16 md:py-24 lg:py-32">
      <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:px-6">
        <Image
          src="https://placehold.co/600x600.png"
          alt="Jerin Sam J Portrait"
          width={600}
          height={600}
          className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
          data-ai-hint="professional headshot"
        />
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            About Me
          </h2>
          <p className="text-muted-foreground md:text-lg">
            I am a results-driven Software Engineer with a passion for developing innovative software solutions. With a solid foundation in computer science principles and a keen eye for detail, I specialize in building and scaling web applications using modern technologies.
          </p>
          <p className="text-muted-foreground md:text-lg">
            My goal is to leverage my skills to create user-centric products that are both functional and delightful to use. I thrive in collaborative environments and am always eager to learn and adapt to new challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
