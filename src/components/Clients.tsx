import client1 from "@/assets/client1.svg";
import client2 from "@/assets/client2.svg";
import client3 from "@/assets/client3.svg";
import client4 from "@/assets/client4.svg";
import client5 from "@/assets/client5.svg";
import client6 from "@/assets/client6.svg";

const Clients = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Títulos de la sección */}
        <h2 className="font-inter font-semibold text-3xl text-neutral-dgrey mb-2">
          Our Clients
        </h2>
        <p className="font-inter text-neutral-grey text-base mb-8">
          We have been working with some Fortune 500+ clients
        </p>

        {/* Contenedor de Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:justify-between mt-12">
          <img
            src={client1}
            alt="Client 1 Logo"
            className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
          <img
            src={client2}
            alt="Client 2 Logo"
            className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
          <img
            src={client3}
            alt="Client 3 Logo"
            className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
          <img
            src={client4}
            alt="Client 4 Logo"
            className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
          <img
            src={client5}
            alt="Client 5 Logo"
            className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
          <img
            src={client6}
            alt="Client 6 Logo"
            className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
