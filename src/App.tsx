import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";

function App() {
  return (
    <div className="min-h-screen bg-neutral-silver pt-20">
      {/* Navbar */}
      <Navbar />

      {/* Contenido temporal de prueba */}
      <main>
        <Hero />
        <Clients />
        <Features />
      </main>
    </div>
  );
}

export default App;
