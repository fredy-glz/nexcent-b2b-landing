import unlockImage from "@/assets/unlock-illustration.svg";

const Unlock = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          {/* Columna Izquierda: Ilustración */}
          <div className="md:w-2/5 flex justify-center">
            <img
              src={unlockImage}
              alt="Unlock Illustration"
              className="w-full max-w-[440px] object-contain"
            />
          </div>

          {/* Columna Derecha: Texto y Botón */}
          <div className="md:w-3/5">
            <h2 className="font-inter font-semibold text-3xl md:text-4xl text-neutral-dgrey leading-tight mb-4">
              The unseen of spending three years at pixelgrade
            </h2>
            <p className="font-inter text-neutral-grey text-sm md:text-base mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="bg-brand-primary text-white font-inter font-medium px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unlock;
