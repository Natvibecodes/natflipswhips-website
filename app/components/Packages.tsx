"use client";

import { useState } from "react";
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
      vehicle: "Sedan",
      packages: [
        {
          title: "Basic Detail",
          price: "$120+",
          time: "Approx. 2 Hours",
          description:
            "A clean, polished reset for your daily driver that refreshes the inside and out.",
          bestFor: "Routine maintenance and keeping your sedan looking its best.",
          features: [
            "Foam bath & hand wash",
            "Wheels, tires & exterior trim cleaned",
            "Interior vacuumed",
            "Dash, console & door panels wiped down",
            "Windows cleaned inside and out",
            "Tire shine & final inspection",
          ],
        },
        {
          title: "Refresh Detail",
          price: "$150+",
          time: "Approx. 2.5 Hours",
          description:
            "A deeper refresh for sedans that need extra attention after everyday use.",
          bestFor: "Restoring a clean feel before a trip, event, or change of season.",
          features: [
            "Everything in the Basic Detail",
            "Deeper interior vacuuming",
            "Floor mats cleaned",
            "Cup holders & small areas detailed",
            "Interior surfaces protected",
            "Premium finishing touches",
          ],
        },
        {
          title: "Luxury Detail",
          price: "$220+",
          time: "Approx. 3.5 Hours",
          description:
            "A premium full detail with the extra care your sedan needs to look sale-ready.",
          bestFor: "Special occasions, selling, or giving your vehicle the highest level of care.",
          features: [
            "Everything in the Refresh Detail",
            "Deep interior cleaning",
            "Spot treatment for stains",
            "Detailed trunk cleaning",
            "Paint sealant protection",
            "Premium finishing touches",
          ],
        },
      ],
    },
    {
      vehicle: "SUV",
      packages: [
        {
          title: "Basic Detail",
          price: "$140+",
          time: "Approx. 2.5 Hours",
          description:
            "A full refresh for your SUV, including the extra interior and cargo space that comes with it.",
          bestFor: "Family vehicles, commuters, and everyday adventure vehicles.",
          features: [
            "Foam bath & hand wash",
            "Wheels, tires & exterior trim cleaned",
            "Interior and cargo area vacuumed",
            "Dash, console & door panels wiped down",
            "Windows cleaned inside and out",
            "Tire shine & final inspection",
          ],
        },
        {
          title: "Refresh Detail",
          price: "$160+",
          time: "Approx. 3 Hours",
          description:
            "A deeper interior and exterior refresh for SUVs that need more than a standard cleanup.",
          bestFor: "Road trips, carpools, pets, kids, and seasonal vehicle refreshes.",
          features: [
            "Everything in the Basic Detail",
            "Detailed cargo area cleaning",
            "Floor mats cleaned",
            "Cup holders & small areas detailed",
            "Interior surfaces protected",
            "Premium finishing touches",
          ],
        },
        {
          title: "Luxury Detail",
          price: "$250+",
          time: "Approx. 4 Hours",
          description:
            "Our complete SUV detail with extra attention to the cabin, cargo area, and exterior finish.",
          bestFor: "Selling, special occasions, or bringing your SUV back to its best condition.",
          features: [
            "Everything in the Refresh Detail",
            "Deep interior cleaning",
            "Spot treatment for stains",
            "Detailed cargo area cleaning",
            "Paint sealant protection",
            "Premium finishing touches",
          ],
        },
      ],
    },
    {
      vehicle: "Truck",
      packages: [
        {
          title: "Basic Detail",
          price: "$150+",
          time: "Approx. 2.5 Hours",
          description:
            "A sharp, work-ready cleanup for trucks that need the cab, exterior, and bed area refreshed.",
          bestFor: "Daily drivers, weekend trucks, and regularly maintained work vehicles.",
          features: [
            "Foam bath & hand wash",
            "Wheels, tires & exterior trim cleaned",
            "Cab vacuumed and wiped down",
            "Truck bed blown out or rinsed",
            "Windows cleaned inside and out",
            "Tire shine & final inspection",
          ],
        },
        {
          title: "Refresh Detail",
          price: "$200+",
          time: "Approx. 3 Hours",
          description:
            "A deeper refresh for trucks that work hard and need more attention inside and out.",
          bestFor: "Work trucks, off-road vehicles, and trucks after a busy season.",
          features: [
            "Everything in the Basic Detail",
            "Deeper cab vacuuming",
            "Floor mats cleaned",
            "Detailed console & storage areas",
            "Interior surfaces protected",
            "Premium finishing touches",
          ],
        },
        {
          title: "Luxury Detail",
          price: "$275+",
          time: "Approx. 4 Hours",
          description:
            "A premium truck detail with deeper cleaning and protection for a complete finish.",
          bestFor: "Selling, special events, or bringing a hardworking truck back to life.",
          features: [
            "Everything in the Refresh Detail",
            "Deep interior cleaning",
            "Spot treatment for stains",
            "Detailed truck bed cleaning",
            "Paint sealant protection",
            "Premium finishing touches",
          ],
        },
      ],
    },
  ];

  const [selectedVehicle, setSelectedVehicle] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(0);

  const activeVehicle = vehiclePackages[selectedVehicle];
  const activePackage = activeVehicle.packages[selectedPackage];

  function showPreviousPackage() {
    setSelectedPackage(
      (current) =>
        (current - 1 + activeVehicle.packages.length) %
        activeVehicle.packages.length
    );
  }

  function showNextPackage() {
    setSelectedPackage(
      (current) => (current + 1) % activeVehicle.packages.length
    );
  }

  function chooseVehicle(index: number) {
    setSelectedVehicle(index);
    setSelectedPackage(0);
  }

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
            <h3 className="text-3xl font-bold">🚗 Vehicle Detail Packages</h3>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
              Choose your vehicle, then slide through the detail packages to
              find the level of care that fits your needs.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {vehiclePackages.map((vehicle, index) => (
                <button
                  key={vehicle.vehicle}
                  type="button"
                  onClick={() => chooseVehicle(index)}
                  className={`rounded-full px-6 py-3 font-bold transition ${
                    selectedVehicle === index
                      ? "bg-yellow-500 text-black"
                      : "border border-zinc-700 bg-zinc-900 text-white hover:border-yellow-500 hover:text-yellow-400"
                  }`}
                >
                  {vehicle.vehicle}
                </button>
              ))}
            </div>

            <div
              key={`${activeVehicle.vehicle}-${activePackage.title}`}
              className="mx-auto mt-10 max-w-2xl rounded-3xl border border-yellow-500 bg-zinc-900 p-7 text-left shadow-2xl shadow-yellow-500/10 sm:p-10"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-semibold uppercase tracking-[0.2em] text-yellow-500">
                  {activeVehicle.vehicle}
                </p>

                <p className="text-sm text-gray-400">
                  Package {selectedPackage + 1} of{" "}
                  {activeVehicle.packages.length}
                </p>
              </div>

              <h4 className="mt-5 text-4xl font-black">{activePackage.title}</h4>

              <p className="mt-5 text-5xl font-black text-yellow-500">
                Starting at {activePackage.price}
              </p>

              <p className="mt-2 text-gray-400">{activePackage.time}</p>

              <p className="mt-7 text-lg leading-8 text-gray-300">
                {activePackage.description}
              </p>

              <p className="mt-6 rounded-xl border border-zinc-700 bg-black/40 p-4 leading-6 text-gray-300">
                <span className="font-bold text-yellow-500">Best For: </span>
                {activePackage.bestFor}
              </p>

              <ul className="mt-8 space-y-4">
                {activePackage.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="text-yellow-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/book"
                className="mt-10 block rounded-xl bg-yellow-500 py-4 text-center font-bold text-black transition hover:bg-yellow-400"
              >
                Book This Package
              </a>

              <div className="mt-6 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={showPreviousPackage}
                  className="rounded-xl border border-zinc-700 px-5 py-3 font-bold transition hover:border-yellow-500 hover:text-yellow-400"
                >
                  ← Previous
                </button>

                <div className="flex gap-2">
                  {activeVehicle.packages.map((pkg, index) => (
                    <button
                      key={pkg.title}
                      type="button"
                      onClick={() => setSelectedPackage(index)}
                      aria-label={`View ${pkg.title}`}
                      className={`h-3 w-3 rounded-full transition ${
                        selectedPackage === index
                          ? "bg-yellow-500"
                          : "bg-zinc-700 hover:bg-zinc-500"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={showNextPackage}
                  className="rounded-xl border border-zinc-700 px-5 py-3 font-bold transition hover:border-yellow-500 hover:text-yellow-400"
                >
                  Next →
                </button>
              </div>
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