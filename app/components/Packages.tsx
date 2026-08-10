"use client";

import FadeIn from "./FadeIn";

export default function Packages() {
  const motorcyclePackages = [
    {
      title: "Basic Detail",
      badge: "Essential Care",
      price: "$100",
      time: "Approx. 1.5 Hours",
      featured: false,
      description:
        "A thorough maintenance wash that keeps your motorcycle clean and protected between deeper details.",
      bestFor: "Maintenance washes every 2–4 weeks.",
      features: [
        "Foam bath & hand wash",
        "Wheels & tires cleaned",
        "Seat cleaned",
        "Plastic & trim wiped down",
        "Light air blower drying",
        "Final inspection",
      ],
    },
    {
      title: "Refresh Detail",
      badge: "⭐ Most Popular",
      price: "$150",
      time: "Approx. 2.5 Hours",
      featured: true,
      description:
        "A deeper reset that removes road grime, restores shine, and refreshes the surfaces that need the most attention.",
      bestFor: "Restoring shine and protecting your bike between seasons.",
      features: [
        "Foam bath & hand wash",
        "Wheels, tires & fenders cleaned",
        "Chrome & metal polished",
        "Seat & surfaces wiped down",
        "Whitewall-safe cleaning",
        "Chain cleaned & lubricated",
        "Light air blower drying",
        "Final inspection",
      ],
    },
    {
      title: "Luxury Detail",
      badge: "Show Quality",
      price: "$250",
      time: "Approx. 3.5 Hours",
      featured: false,
      description:
        "Our premium show-quality detail with extra attention for paint, chrome, leather, and finishing touches.",
      bestFor:
        "Shows, selling, long trips, or riders who want the highest level of care.",
      features: [
        "Everything in the Refresh Detail",
        "Tank & fairing deep clean",
        "Engine detailing",
        "Leather conditioning",
        "Premium chrome polish",
        "Paint sealant protection",
        "Premium finishing touches",
      ],
    },
  ];

  const vehiclePackages = [
    {
      vehicle: "Sedans",
      essential: "$120+",
      refresh: "$150+",
      luxury: "$220+",
    },
    {
      vehicle: "SUVs",
      essential: "$140+",
      refresh: "$160+",
      luxury: "$250+",
    },
    {
      vehicle: "Trucks",
      essential: "$150+",
      refresh: "$200+",
      luxury: "$275+",
    },
  ];

  const vehicleDetailLevels = [
    {
      title: "✨ Essential Detail",
      description:
        "A clean exterior reset for regularly maintained vehicles that need a polished, refreshed look.",
    },
    {
      title: "⭐ Refresh Detail",
      description:
        "A balanced interior and exterior refresh for vehicles that need extra attention after everyday use.",
    },
    {
      title: "👑 Luxury Detail",
      description:
        "Our most complete vehicle detail, ideal for a deeper clean, special occasion, or getting ready to sell.",
    },
  ];

  return (
    <section id="packages" className="bg-black px-5 py-20 text-white md:px-6">
      <FadeIn>
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Services &amp; Pricing
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Detailing Packages
          </h2>

          <div className="mx-auto mb-14 mt-8 max-w-3xl rounded-2xl border border-yellow-500 bg-yellow-500/10 p-6">
            <h3 className="text-2xl font-bold text-yellow-400 md:text-3xl">
              🎂 Birthday Month Special
            </h3>

            <p className="mt-3 text-lg text-gray-200">
              Receive
              <span className="font-bold text-white"> $30 OFF </span>
              any motorcycle detailing package booked during August.
            </p>
          </div>

          <div className="mx-auto mb-16 max-w-3xl rounded-2xl border border-zinc-700 bg-zinc-900 p-6">
            <h3 className="text-2xl font-bold text-white">
              🚗 Multiple Vehicle Discount
            </h3>

            <p className="mt-4 text-gray-300">
              Scheduling two or more vehicles at the same location? Contact us
              for discounted group pricing.
            </p>
          </div>

          <h3 className="mb-12 text-3xl font-bold">🏍 Motorcycle Packages</h3>

          <div className="grid gap-8 lg:grid-cols-3">
            {motorcyclePackages.map((pkg) => (
              <div
                key={pkg.title}
                className={`rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                  pkg.featured
                    ? "scale-105 border-yellow-500 bg-zinc-900 shadow-2xl shadow-yellow-500/10"
                    : "border-zinc-700 bg-zinc-900 hover:border-yellow-500"
                }`}
              >
                <span
                  className={`inline-block rounded-full px-4 py-2 text-sm font-semibold ${
                    pkg.featured
                      ? "bg-yellow-500 text-black"
                      : "bg-zinc-800 text-yellow-400"
                  }`}
                >
                  {pkg.badge}
                </span>

                <h4 className="mt-6 text-3xl font-bold">{pkg.title}</h4>

                <p className="mt-5 text-5xl font-black text-yellow-500">
                  Starting at {pkg.price}
                </p>

                <p className="mt-2 text-gray-400">{pkg.time}</p>

                <p className="mt-6 leading-8 text-gray-300">{pkg.description}</p>

                <p className="mt-5 rounded-xl border border-zinc-700 bg-black/40 p-4 text-left text-sm leading-6 text-gray-300">
                  <span className="font-bold text-yellow-500">Best For: </span>
                  {pkg.bestFor}
                </p>

                <ul className="mt-8 space-y-4 text-left">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="text-yellow-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/book"
                  className={`mt-10 block rounded-xl py-4 font-bold transition ${
                    pkg.featured
                      ? "bg-yellow-500 text-black hover:bg-yellow-400"
                      : "bg-zinc-800 hover:bg-zinc-700"
                  }`}
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <h3 className="mb-5 text-3xl font-bold">🚗 Vehicle Packages</h3>

            <p className="mx-auto max-w-3xl leading-7 text-gray-400">
              Choose the level of care that fits your vehicle and its current
              condition. Every package is completed with the same
              detail-focused approach.
            </p>

            <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
              {vehicleDetailLevels.map((detailLevel) => (
                <div
                  key={detailLevel.title}
                  className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6"
                >
                  <h4 className="text-xl font-bold text-yellow-400">
                    {detailLevel.title}
                  </h4>
                  <p className="mt-3 leading-7 text-gray-300">
                    {detailLevel.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-4xl rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5 leading-7 text-gray-200">
              Vehicle packages include exterior washing, interior cleaning,
              premium products, and mobile service. Additional services are
              available upon request.
            </p>

            <div className="mt-8 overflow-x-auto rounded-3xl border border-zinc-700">
              <table className="min-w-[720px] w-full">
                <thead className="bg-zinc-900">
                  <tr>
                    <th className="p-5 text-left">Vehicle</th>
                    <th className="p-5 text-center">
                      <span className="block text-base text-yellow-400">
                        Essential Detail
                      </span>
                      <span className="mt-1 block text-xs font-normal text-gray-400">
                        Exterior reset
                      </span>
                    </th>
                    <th className="p-5 text-center">
                      <span className="block text-base text-yellow-400">
                        Refresh Detail
                      </span>
                      <span className="mt-1 block text-xs font-normal text-gray-400">
                        Interior &amp; exterior care
                      </span>
                    </th>
                    <th className="p-5 text-center">
                      <span className="block text-base text-yellow-400">
                        Luxury Detail
                      </span>
                      <span className="mt-1 block text-xs font-normal text-gray-400">
                        Complete premium care
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {vehiclePackages.map((vehicle) => (
                    <tr
                      key={vehicle.vehicle}
                      className="border-t border-zinc-800 transition hover:bg-zinc-900/60"
                    >
                      <td className="p-5 font-semibold">{vehicle.vehicle}</td>
                      <td className="p-5 text-center">{vehicle.essential}</td>
                      <td className="p-5 text-center">{vehicle.refresh}</td>
                      <td className="p-5 text-center">{vehicle.luxury}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-20 rounded-3xl border border-yellow-500 bg-zinc-900 p-8 md:p-10">
            <h3 className="text-3xl font-bold text-yellow-500">
              🚜 Fleet &amp; Commercial Services
            </h3>

            <div className="mx-auto mt-8 grid max-w-4xl gap-4 text-left sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Construction Equipment",
                "Company Trucks",
                "Work Vans",
                "Commercial Fleets",
                "Utility Vehicles",
              ].map((service) => (
                <div
                  key={service}
                  className="rounded-xl border border-zinc-700 bg-black/40 p-4 text-center font-semibold text-gray-200"
                >
                  {service}
                </div>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Custom pricing available for one-time or recurring maintenance.
              We’ll build a plan around your vehicles, schedule, and scope of
              work.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
            >
              Request a Custom Quote
            </a>
          </div>

          <p className="mx-auto mt-14 max-w-3xl text-sm text-gray-500">
            Vehicle pricing shown above is a starting price and may vary based
            on vehicle size, condition, pet hair, excessive dirt, stains, or
            requested add-on services. A final quote will always be provided
            before work begins.
          </p>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-zinc-700 bg-zinc-900 p-6">
            <h3 className="text-xl font-bold text-yellow-400">
              Need something not listed?
            </h3>
            <p className="mt-3 leading-7 text-gray-300">
              Contact us for a custom quote. We’d be happy to build a detailing
              package that fits your vehicle and your needs.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
