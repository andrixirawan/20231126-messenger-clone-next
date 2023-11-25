import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      {/* Test */}
      <section className="px-4">
        <div className="container">
          <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
            <ModeToggle />
            <h1 className="animated-gradient bg-clip-text text-4xl font-black text-transparent md:text-6xl">
              Lorem ipsum dolor sit
            </h1>
            <p className="md:w-3/5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae minima blanditiis eligendi aspernatur commodi,
              expedita cumque!
            </p>
            <Button className="mt-4">Get Started</Button>
          </div>
        </div>
      </section>
    </>
  );
}
