import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-neutral-silver pt-20">
      {/* Navbar */}
      <Navbar />

      {/* Contenido temporal de prueba */}
      <main>
        <Hero />
        <Clients />
      </main>
    </div>
  );
}

export default App;
