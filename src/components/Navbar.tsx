import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="bg-neutral-silver w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="Nexcent Logo" className="h-6 w-auto" />
          </div>

          {/* Enlaces de Navegación (Desktop) */}
          <nav className="hidden lg:flex space-x-8">
            <a
              href="#home"
              className="text-neutral-black hover:text-brand-primary font-inter font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#service"
              className="text-neutral-black hover:text-brand-primary font-inter font-medium transition-colors"
            >
              Service
            </a>
            <a
              href="#feature"
              className="text-neutral-black hover:text-brand-primary font-inter font-medium transition-colors"
            >
              Feature
            </a>
            <a
              href="#product"
              className="text-neutral-black hover:text-brand-primary font-inter font-medium transition-colors"
            >
              Product
            </a>
            <a
              href="#testimonial"
              className="text-neutral-black hover:text-brand-primary font-inter font-medium transition-colors"
            >
              Testimonial
            </a>
            <a
              href="#faq"
              className="text-neutral-black hover:text-brand-primary font-inter font-medium transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Botón de Acción */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-brand-primary bg-transparent font-inter font-medium px-4 py-2 rounded-md hover:bg-[#c8e6c9] transition-colors">
              Login
            </button>
            <button className="bg-brand-primary text-white font-inter font-medium px-6 py-2 rounded-md hover:opacity-90 transition-opacity">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
