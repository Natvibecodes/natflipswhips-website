"use client";

import FadeIn from "./FadeIn";

export default function Services() {
  return (
    <FadeIn>
      <section
        id="services"
        className="bg-[#0B0B0B] text-white py-28 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.35em] text-[#BFA46F] font-semibold">
              OUR SERVICES
            </p>

            <h2 className="mt-5 text-5xl font-bold">
              Built Around Quality.
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-[#B4B7BD]">
              Whether you're trusting us with your motorcycle or searching for
              your next vehicle, every customer receives the same attention to
              detail, honesty, and professionalism.
            </p>

          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Motorcycle Detailing */}

            <div className="group rounded-3xl border border-white/10 bg-[#121212] p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#BFA46F]/50">

              <div className="mb-8 text-5xl">
                🏍️
              </div>

              <h3 className="text-3xl font-semibold">
                Premium Motorcycle Detailing
              </h3>

              <p className="mt-5 leading-8 text-[#B4B7BD]">
                Professional mobile detailing designed to restore, protect, and
                maintain your motorcycle using premium products and meticulous
                techniques.
              </p>

              <ul className="mt-8 space-y-3 text-[#E8E8E8]">

                <li>✓ Hand Wash & Foam Bath</li>

                <li>✓ Chrome & Metal Polishing</li>

                <li>✓ Paint Protection</li>

                <li>✓ Wheels, Tires & Trim</li>

                <li>✓ Mobile Service at Your Location</li>

              </ul>

              <a
                href="/book"
                className="inline-block mt-10 rounded-full border border-[#BFA46F] px-7 py-3 font-semibold text-[#BFA46F] transition-all duration-300 hover:bg-[#BFA46F] hover:text-black"
              >
                Book a Detail
              </a>

            </div>

            {/* Vehicle Sales */}

            <div className="group rounded-3xl border border-white/10 bg-[#121212] p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#BFA46F]/50">

              <div className="mb-8 text-5xl">
                🚗
              </div>

              <h3 className="text-3xl font-semibold">
                Quality Vehicle Sales
              </h3>

              <p className="mt-5 leading-8 text-[#B4B7BD]">
                Browse carefully selected pre-owned vehicles that are cleaned,
                inspected, and represented honestly before they're offered for
                sale.
              </p>

              <ul className="mt-8 space-y-3 text-[#E8E8E8]">

                <li>✓ Cars, SUVs & Trucks</li>

                <li>✓ Clean, Honest Listings</li>

                <li>✓ Fresh Inventory Added Regularly</li>

                <li>✓ Financing Resources Coming Soon</li>

                <li>✓ Local Tucson Pickup</li>

              </ul>

              <a
                href="#inventory"
                className="inline-block mt-10 rounded-full border border-white px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Browse Inventory
              </a>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}