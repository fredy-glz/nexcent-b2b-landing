import heroImage from "../assets/hero.svg";

const Hero = () => {
  return (
    <section id="home" className="bg-neutral-silver py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Columna Izquierda: Texto y CTA */}
          <div className="md:w-2/3">
            <h1 className="font-inter font-bold text-4xl md:text-6xl text-neutral-dgrey leading-tight mb-4">
              Lessons and insights <br />
              <span className="text-brand-primary">from 8 years</span>
            </h1>
            <p className="font-inter text-neutral-grey text-sm md:text-base mb-8">
              Where to grow your business as a photographers: site or social
              media?
            </p>
            <button className="bg-brand-primary text-white font-inter font-medium px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
              Register
            </button>
          </div>

          {/* Columna Derecha: Ilustración */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            {/* El div rodea la imagen para asegurar proporciones y responsividad */}
            <img
              src={heroImage}
              alt="Hero Illustration"
              className="w-full max-w-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
