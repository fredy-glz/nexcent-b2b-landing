import statMembers from "@/assets/stat-members.png";
import statClubs from "@/assets/stat-clubs.svg";
import statEvents from "@/assets/stat-events.svg";
import statPayments from "@/assets/stat-payments.svg";

interface StatItemProps {
  icon: string;
  value: string;
  label: string;
}

const StatItem = ({ icon, value, label }: StatItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0">
        <img src={icon} alt={label} className="w-10 h-10 object-contain" />
      </div>

      <div>
        <h4 className="font-inter font-bold text-2xl text-neutral-dgrey">
          {value}
        </h4>
        <p className="font-inter text-neutral-grey text-sm">{label}</p>
      </div>
    </div>
  );
};

const statsData = [
  {
    id: 1,
    icon: statClubs,
    value: "2,245,341",
    label: "Members",
  },
  {
    id: 2,
    icon: statMembers,
    value: "46,328",
    label: "Clubs",
  },
  {
    id: 3,
    icon: statEvents,
    value: "828,867",
    label: "Event Bookings",
  },
  {
    id: 4,
    icon: statPayments,
    value: "1,926,436",
    label: "Payments",
  },
];

const Achievements = () => {
  return (
    <section className="bg-neutral-silver py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Columna Izquierda: Títulos */}
          <div className="md:w-1/2">
            <h2 className="font-inter font-semibold text-3xl md:text-4xl text-neutral-dgrey leading-tight mb-2">
              Helping a local <br />
              <span className="text-brand-primary">
                business reinvent itself
              </span>
            </h2>
            <p className="font-inter text-neutral-black text-sm md:text-base">
              We reached here with our hard work and dedication
            </p>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-8 md:gap-10">
              {statsData.map((stat) => (
                <StatItem
                  key={stat.id}
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
