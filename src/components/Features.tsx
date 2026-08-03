import iconMembership from "@/assets/icon-membership.svg";
import iconAssociation from "@/assets/icon-association.svg";
import iconClub from "@/assets/icon-club.svg";

interface FeatureCardProps {
  icon: string;
  title: React.ReactNode;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-green-50 rounded-tl-3xl rounded-br-3xl flex items-center justify-center mb-6">
        <img
          src={icon}
          alt="Feature Icon"
          className="w-10 h-10 object-contain"
        />
      </div>
      <h3 className="font-inter font-bold text-2xl text-neutral-dgrey mb-3 text-center">
        {title}
      </h3>
      <p className="font-inter text-neutral-grey text-sm text-center">
        {description}
      </p>
    </div>
  );
};

const featuresData = [
  {
    id: 1,
    icon: iconMembership,
    title: (
      <>
        Membership <br /> Organisations
      </>
    ),
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 2,
    icon: iconAssociation,
    title: (
      <>
        National <br /> Associations
      </>
    ),
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 3,
    icon: iconClub,
    title: (
      <>
        Clubs And <br /> Groups
      </>
    ),
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

const Features = () => {
  return (
    <section id="service" className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="font-inter font-semibold text-3xl md:text-4xl text-neutral-dgrey leading-tight mb-4">
            Manage your entire community <br className="hidden md:block" /> in a
            single system
          </h2>
          <p className="font-inter text-neutral-grey text-base">
            Who is Nextcent suitable for?
          </p>
        </div>

        {/* Grid iterando sobre los datos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
