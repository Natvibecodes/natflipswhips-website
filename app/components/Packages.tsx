"use client";

import FadeIn from "./FadeIn";

export default function Packages() {
  const packages = [
    {
      title: "Basic Detail",
      badge: "Essential Care",
      price: "Starting at $100",
      time: "Approx. 1.5 Hours",
      featured: false,
      description:
        "Perfect for routine maintenance and keeping your motorcycle looking clean between full details.",
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
      price: "Starting at $150",
      time: "Approx. 2 Hours",
      featured: true,
      description:
        "Restore your motorcycle's shine with our most popular detailing package.",
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
      title: "Luxury Motorcycle Detail",
      badge: "Ultimate Protection",
      price: "Starting at $250",
      time: "Approx. 3.5 Hours",
      featured: false,
      description:
        "Our premium detailing experience for riders who want their motorcycle looking its absolute best.",
      features: [
        "Everything included in the Refresh Detail",
        "Tank & fairing deep clean",
        "Engine detailing",
        "Leather conditioning",
        "Paint sealant protection",
        "Premium finishing touches",
      ],
    },
  ];

  return (
    <section
      id="packages"
      className="bg-black text-white py-24 px-6"
    >
      <FadeIn>
        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
Pricing          </p>

          <h2 className="text-5xl font-black mt-4">
            Motorcycle Detailing Packages
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Professional motorcycle detailing designed to keep your ride
            protected, polished, and road ready.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className={`rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                  pkg.featured
                    ? "border-yellow-500 bg-zinc-900 scale-105 shadow-2xl shadow-yellow-500/10"
                    : "border-zinc-700 bg-zinc-900 hover:border-yellow-500"
                }`}
              >
                <div className="mb-6">

                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                      pkg.featured
                        ? "bg-yellow-500 text-black"
                        : "bg-zinc-800 text-yellow-400"
                    }`}
                  >
                    {pkg.badge}
                  </span>

                </div>

                <h3 className="text-3xl font-bold">
                  {pkg.title}
                </h3>

                <p className="text-yellow-500 text-3xl font-black mt-5">
                  {pkg.price}
                </p>

                <p className="text-gray-400 mt-2">
                  {pkg.time}
                </p>

                <p className="text-gray-300 mt-6 leading-relaxed">
                  {pkg.description}
                </p>

                <ul className="mt-8 space-y-4 text-left">

                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <span className="text-yellow-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}

                </ul>

                <a
                  href="/book"
                  className={`block mt-10 rounded-xl py-4 font-bold transition ${
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

          <p className="text-gray-500 text-sm max-w-3xl mx-auto mt-12">
            Prices may vary depending on motorcycle size, condition, and requested add-on services.
            A final quote will always be provided before work begins.
          </p>

        </div>
      </FadeIn>
    </section>
  );
}