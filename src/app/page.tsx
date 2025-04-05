import About from "@/components/home/About";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="relative w-screen !overflow-x-hidden main min-h-dvh bg-background text-white box-border">
      <Hero />
      <About />
    </main>
  );
}
