import Feature from "./components/Features/Features";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className="bg-slate-950 pt-10">
      <Hero />
      <Feature />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex">
          <Feature />
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
    </div>
  );
}
