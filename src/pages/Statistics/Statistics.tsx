import { statisticsData } from "./statisticsData";

export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-green-500 py-24">
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-green-100 uppercase tracking-widest font-semibold">
            BIKOAN en chiffres
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Notre croissance parle pour nous
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-green-100">
            Grâce à la confiance de nos clients et partenaires, nous continuons chaque année à développer notre activité tout en maintenant notre engagement envers la qualité.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {statisticsData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-lg"
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                    <Icon size={30} className="text-green-600" />
                  </div>
                </div>

                <h3 className="text-5xl font-black text-white">
                  {item.number}
                  {item.suffix}
                </h3>

                <p className="mt-3 text-lg text-green-100">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}