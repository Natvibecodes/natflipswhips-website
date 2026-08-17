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
      title: "Premium Exterior Wash",
      time: "Approx. 1–2 Hours",
      description:
        "A premium exterior refresh that removes surface dirt and leaves your paint protected with a ceramic sealant.",
      prices: [
        { vehicle: "Sedans", price: "$125" },
        { vehicle: "SUVs", price: "$145" },
        { vehicle: "Large SUVs & Trucks", price: "$165" },
      ],
      features: [
        "Full exterior foam bath",
        "Ceramic sealant applied to paint — 6-month protection",
        "Wheels & tires deep cleaned",
        "Tire shine applied",
      ],
    },
    {
      title: "Interior Detail",
      time: "Approx. 1.5–2.5 Hours",
      description:
        "A thorough interior reset that refreshes the surfaces, glass, leather, and hard-to-reach areas of your vehicle.",
      prices: [
        { vehicle: "Sedans", price: "$155" },
        { vehicle: "SUVs", price: "$175" },
        { vehicle: "Large SUVs & Trucks", price: "$195" },
      ],
      features: [
        "Complete vacuum and wipe-down of cracks & crevices",
        "UV protection applied to interior surfaces",
        "Leather cleaned",
        "Streak-free glass",
      ],
    },
    {
      title: "Full Detail",
      time: "Approx. 2.5–5 Hours",
      description:
        "The complete inside-and-out detail for vehicles that need a deep clean, long-lasting protection, and a full refresh.",
      prices: [
        { vehicle: "Sedans", price: "$260" },
        { vehicle: "SUVs", price: "$280" },
        { vehicle: "Large SUVs & Trucks", price: "$300" },
      ],
      features: [
        "Full exterior foam bath",
        "Ceramic sealant applied to paint — 6-month protection",
        "Wheels & tires deep cleaned",
        "Tire shine applied",
        "Complete vacuum and wipe-down of cracks & crevices",
        "UV protection applied to interior surfaces",
        "Leather cleaned",
        "Streak-free glass",
      ],
    },
  ];

  const addOns = [
    { name: "Pet Hair Removal", price: "$50", centered: false },
    { name: "Stain Removal", price: "$35/hr", centered: false },
    { name: "Car Seats", price: "$25", centered: false },
    {
      name: "Decontamination & Clay Bar Service",
      price: "$70–$95",
      centered: false,
    },
    { name: "Polish", price: "$75", centered: false },
    {
      name: "Polish & 9-Month Ceramic Coating",
      price: "$150",
      centered: false,
    },
    {
      name: "Polish & 3-Year Ceramic Coating",
      price: "$200",
      note: "Decontamination & clay bar included",
      centered: true,
    },
  ];

  return (
    <section
      id="packages"
      className="bg-black px-4 py-14 text-white sm:px-5 md:px-6 md:py-20"
    >
      <FadeIn>
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Services &amp; Pricing
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
            Detailing Packages
          </h2>

          <div className="mx-auto mb-12 mt-8 max-w-3xl rounded-2xl border border-yellow-500 bg-yellow-500/10 p-5 sm:p-6">
            <h3 className="text-xl font-bold text-yellow-400 sm:text-2xl md:text-3xl">
              🎂 Birthday Month Special
            </h3>

            <p className="mt-3 text-sm text-gray-200 sm:text-lg">
              Receive
              <span className="font-bold text-white"> $30 OFF </span>
              any motorcycle detailing package booked during August.
            </p>
          </div>

          <div className="mx-auto mb-14 max-w-3xl rounded-2xl border border-zinc-700 bg-zinc-900 p-5 sm:p-6">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              🚗 Multiple Vehicle Discount
            </h3>

            <p className="mt-4 text-sm text-gray-300 sm:text-base">
              Scheduling two or more vehicles at the same location? Contact us
              for discounted group pricing.
            </p>
          </div>

          <h3 className="mb-8 text-2xl font-bold sm:mb-12 sm:text-3xl">
            🏍 Motorcycle Packages
          </h3>

          <div className="grid gap-5 sm:gap-8 lg:grid-cols-3">
            {motorcyclePackages.map((pkg) => (
              <div
                key={pkg.title}
                className={`rounded-2xl border p-5 text-left transition-all duration-300 sm:rounded-3xl sm:p-7 md:p-8 lg:hover:-translate-y-2 ${
                  pkg.featured
                    ? "border-yellow-500 bg-zinc-900 shadow-2xl shadow-yellow-500/10 lg:scale-105"
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

                <h4 className="mt-5 text-2xl font-bold sm:mt-6 sm:text-3xl">
                  {pkg.title}
                </h4>

                <p className="mt-4 text-3xl font-black text-yellow-500 sm:mt-5 sm:text-4xl">
                  Starting at {pkg.price}
                </p>

                <p className="mt-2 text-sm text-gray-400 sm:text-base">
                  {pkg.time}
                </p>

                <p className="mt-5 text-sm leading-7 text-gray-300 sm:mt-6 sm:text-base sm:leading-8">
                  {pkg.description}
                </p>

                <p className="mt-5 rounded-xl border border-zinc-700 bg-black/40 p-4 text-sm leading-6 text-gray-300">
                  <span className="font-bold text-yellow-500">Best For: </span>
                  {pkg.bestFor}
                </p>

                <ul className="mt-6 space-y-3 text-sm sm:mt-8 sm:space-y-4 sm:text-base">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="text-yellow-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/book"
                  className={`mt-8 block rounded-xl py-3 text-center font-bold transition sm:mt-10 sm:py-4 ${
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

          <div className="mt-16 sm:mt-24">
            <h3 className="text-2xl font-bold sm:text-3xl">
              🚗 Vehicle Detail Packages
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base">
              Premium mobile detailing for sedans, SUVs, and trucks at your
              home, workplace, dealership, or job site.
            </p>

            <div className="mt-8 grid gap-5 text-left sm:mt-12 sm:gap-8 lg:grid-cols-3">
              {vehiclePackages.map((pkg) => (
                <div
                  key={pkg.title}
                  className="rounded-2xl border border-zinc-700 bg-zinc-900 p-5 transition-all duration-300 hover:border-yellow-500 sm:rounded-3xl sm:p-7 md:p-8 lg:hover:-translate-y-2"
                >
                  <h4 className="text-2xl font-bold text-yellow-400 sm:text-3xl">
                    {pkg.title}
                  </h4>

                  <p className="mt-2 text-sm text-gray-400 sm:text-base">
                    {pkg.time}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-gray-300 sm:mt-6 sm:text-base sm:leading-8">
                    {pkg.description}
                  </p>

                  <div className="mt-6 space-y-3 rounded-xl border border-zinc-700 bg-black/40 p-4">
                    {pkg.prices.map((item) => (
                      <div
                        key={item.vehicle}
                        className="flex items-center justify-between gap-4 text-sm sm:text-base"
                      >
                        <span className="text-gray-300">{item.vehicle}</span>
                        <span className="font-bold text-yellow-500">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-3 text-sm sm:mt-8 sm:space-y-4 sm:text-base">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="text-yellow-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/book"
                    className="mt-8 block rounded-xl bg-yellow-500 py-3 text-center font-bold text-black transition hover:bg-yellow-400 sm:mt-10 sm:py-4"
                  >
                    Book This Package
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 sm:mt-20">
            <h3 className="text-2xl font-bold sm:text-3xl">
              ✨ Add-On Services
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Add extra care and protection to any detailing package.
            </p>

            <div className="mx-auto mt-8 grid max-w-5xl gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
              {addOns.map((addOn) => (
                <div
                  key={addOn.name}
                  className={`rounded-xl border border-zinc-700 bg-zinc-900 p-4 ${
                    addOn.centered
                      ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-md lg:col-span-1 lg:col-start-2"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-semibold text-gray-100">
                      {addOn.name}
                    </h4>

                    <span className="whitespace-nowrap font-bold text-yellow-500">
                      {addOn.price}
                    </span>
                  </div>

                  {addOn.note && (
                    <p className="mt-2 text-sm text-gray-400">{addOn.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-yellow-500 bg-zinc-900 p-6 sm:mt-20 sm:rounded-3xl sm:p-10">
            <h3 className="text-2xl font-bold text-yellow-500 sm:text-3xl">
              🚜 Fleet, Commercial &amp; Custom Motorcycle Services
            </h3>

            <div className="mx-auto mt-7 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Construction Equipment",
                "Company Trucks",
                "Work Vans",
                "Commercial Fleets",
                "Utility Vehicles",
                "Motorcycle Custom Work",
              ].map((service) => (
                <div
                  key={service}
                  className="rounded-xl border border-zinc-700 bg-black/40 p-4 text-center text-sm font-semibold text-gray-200"
                >
                  {service}
                </div>
              ))}
            </div>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Custom pricing is available for one-time or recurring
              maintenance, commercial vehicles, and custom motorcycle work.
              We’ll build a plan around your vehicle, schedule, and scope of
              work.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-block rounded-full bg-yellow-500 px-7 py-3 font-bold text-black transition hover:bg-yellow-400 sm:mt-8 sm:px-8 sm:py-4"
            >
              Request a Custom Quote
            </a>
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-sm text-gray-500 sm:mt-14">
            Vehicle pricing may vary based on vehicle size, condition, pet
            hair, excessive dirt, stains, or requested add-on services. A final
            quote will always be provided before work begins.
          </p>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-zinc-700 bg-zinc-900 p-5 sm:p-6">
            <h3 className="text-xl font-bold text-yellow-400">
              Need something not listed?
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-300 sm:text-base">
              Contact us for a custom quote. We’d be happy to build a detailing
              package that fits your vehicle and your needs.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}