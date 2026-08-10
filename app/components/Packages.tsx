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
        "Perfect for routine maintenance washes. Recommended every 2–4 weeks to keep your motorcycle looking its best between deep details.",
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
        "Perfect if it's been a month or two since your last detail. Removes road grime, polishes chrome, conditions surfaces, and restores your motorcycle's shine.",
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
        "Our premium show-quality detail. Perfect before bike shows, long rides, or selling your motorcycle.",
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
      express: "$120+",
      interior: "$150+",
      full: "$220+",
    },
    {
      vehicle: "SUVs",
      express: "$140+",
      interior: "$160+",
      full: "$250+",
    },
    {
      vehicle: "Trucks",
      express: "$150+",
      interior: "$200+",
      full: "$275+",
    },
  ];

  return (
    <section
      id="packages"
      className="bg-black text-white py-20 px-5 md:px-6"
    >
      <FadeIn>

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            Pricing
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Detailing Packages
          </h2>

          <div className="mx-auto mt-8 mb-14 max-w-3xl rounded-2xl border border-yellow-500 bg-yellow-500/10 p-6">

            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
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
              Scheduling two or more vehicles at the same location?
              Contact us for discounted group pricing.
            </p>

          </div>

          <h3 className="text-3xl font-bold mb-12">
            🏍 Motorcycle Packages
          </h3>

          <div className="grid gap-8 lg:grid-cols-3">

            {motorcyclePackages.map((pkg) => (
              <div
                key={pkg.title}
                className={`rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                  pkg.featured
                    ? "border-yellow-500 bg-zinc-900 scale-105 shadow-2xl shadow-yellow-500/10"
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

                <h3 className="mt-6 text-3xl font-bold">
                  {pkg.title}
                </h3>

                <p className="mt-5 text-5xl font-black text-yellow-500">
                  Starting at {pkg.price}
                </p>

                <p className="mt-2 text-gray-400">
                  {pkg.time}
                </p>

                <p className="mt-6 leading-8 text-gray-300">
                  {pkg.description}
                </p>

                <ul className="mt-8 space-y-4 text-left">

                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3"
                    >
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

          <h3 className="mt-24 mb-12 text-3xl font-bold">
            🚗 Vehicle Packages
          </h3>
                    <div className="overflow-hidden rounded-3xl border border-zinc-700">

            <table className="w-full">

              <thead className="bg-zinc-900">

                <tr>

                  <th className="p-5 text-left">Vehicle</th>

                  <th className="p-5 text-center">Express Detail</th>

                  <th className="p-5 text-center">Interior Detail</th>

                  <th className="p-5 text-center">Full Detail</th>

                </tr>

              </thead>

              <tbody>

                {vehiclePackages.map((vehicle) => (

                  <tr
                    key={vehicle.vehicle}
                    className="border-t border-zinc-800"
                  >

                    <td className="p-5 font-semibold">
                      {vehicle.vehicle}
                    </td>

                    <td className="p-5 text-center">
                      {vehicle.express}
                    </td>

                    <td className="p-5 text-center">
                      {vehicle.interior}
                    </td>

                    <td className="p-5 text-center">
                      {vehicle.full}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          <div className="mt-20 rounded-3xl border border-yellow-500 bg-zinc-900 p-10">

            <h3 className="text-3xl font-bold text-yellow-500">
              🚜 Commercial Equipment
            </h3>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-300">
              We also provide detailing services for commercial equipment,
              company trucks, work vans, trailers, fleets, and heavy equipment.
              Every job is different, so we'll provide a custom quote based on
              the size, condition, and scope of work.
            </p>

            <p className="mt-8 text-3xl font-black text-white">
              Call for an Estimate
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
            >
              Request an Estimate
            </a>

          </div>

          <p className="mt-14 max-w-3xl mx-auto text-sm text-gray-500">
            Vehicle pricing shown above is a starting price and may vary based
            on vehicle size, condition, pet hair, excessive dirt, stains, or
            requested add-on services. A final quote will always be provided
            before work begins.
          </p>

        </div>

      </FadeIn>
    </section>
  );
}