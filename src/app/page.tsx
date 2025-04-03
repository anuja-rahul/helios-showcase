import About from "@/components/home/About";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="relative main h-[200vh] bg-background text-white">
      <Hero />
      <About />
    </main>
  );
}
