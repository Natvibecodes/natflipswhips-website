"use client";

import FadeIn from "./FadeIn";

export default function Services() {
  return (
    <FadeIn>
      <section
        id="services"
        className="bg-[#0B0B0B] text-white py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.35em] text-[#BFA46F] font-semibold">
              WHAT WE DETAIL
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold">
              Professional Mobile Detailing
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-[#B4B7BD]">
              Whether it's your weekend motorcycle, family SUV, work truck,
              commercial equipment, or your next vehicle purchase, we're
              committed to delivering premium service with attention to every
              detail.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* Motorcycles */}

            <div className="rounded-3xl border border-white/10 bg-[#121212] p-8 transition hover:-translate-y-2 hover:border-[#BFA46F]/50">

              <div className="text-5xl mb-6">🏍️</div>

              <h3 className="text-2xl font-semibold">
                Motorcycles
              </h3>

              <ul className="mt-6 space-y-3 text-[#B4B7BD]">
                <li>✓ Harleys</li>
                <li>✓ Sport Bikes</li>
                <li>✓ Cruisers</li>
                <li>✓ Touring Bikes</li>
                <li>✓ Dirt Bikes</li>
              </ul>

            </div>

            {/* Cars */}

            <div className="rounded-3xl border border-white/10 bg-[#121212] p-8 transition hover:-translate-y-2 hover:border-[#BFA46F]/50">

              <div className="text-5xl mb-6">🚗</div>

              <h3 className="text-2xl font-semibold">
                Cars & Sedans
              </h3>

              <ul className="mt-6 space-y-3 text-[#B4B7BD]">
                <li>✓ Daily Drivers</li>
                <li>✓ Luxury Vehicles</li>
                <li>✓ Sports Cars</li>
                <li>✓ Coupes</li>
                <li>✓ Electric Vehicles</li>
              </ul>

              <p className="mt-6 text-sm text-[#BFA46F] font-semibold">
                Coming Soon
              </p>

            </div>

            {/* Trucks */}

            <div className="rounded-3xl border border-white/10 bg-[#121212] p-8 transition hover:-translate-y-2 hover:border-[#BFA46F]/50">

              <div className="text-5xl mb-6">🛻</div>

              <h3 className="text-2xl font-semibold">
                SUVs & Trucks
              </h3>

              <ul className="mt-6 space-y-3 text-[#B4B7BD]">
                <li>✓ SUVs</li>
                <li>✓ Pickup Trucks</li>
                <li>✓ Jeeps</li>
                <li>✓ Diesel Trucks</li>
                <li>✓ Lifted Vehicles</li>
              </ul>

              <p className="mt-6 text-sm text-[#BFA46F] font-semibold">
                Coming Soon
              </p>

            </div>

            {/* Commercial */}

            <div className="rounded-3xl border border-white/10 bg-[#121212] p-8 transition hover:-translate-y-2 hover:border-[#BFA46F]/50">

              <div className="text-5xl mb-6">🚜</div>

              <h3 className="text-2xl font-semibold">
                Commercial Equipment
              </h3>

              <ul className="mt-6 space-y-3 text-[#B4B7BD]">
                <li>✓ Fleet Vehicles</li>
                <li>✓ Work Trucks</li>
                <li>✓ Construction Equipment</li>
                <li>✓ Utility Vehicles</li>
                <li>✓ Company Vehicles</li>
              </ul>

              <p className="mt-6 text-sm text-[#BFA46F] font-semibold">
                Coming Soon
              </p>

            </div>

          </div>

          <div className="mt-20 rounded-3xl border border-[#BFA46F]/30 bg-[#121212] p-10 text-center">

            <h3 className="text-3xl font-semibold">
              Looking for a Vehicle?
            </h3>

            <p className="mt-5 max-w-3xl mx-auto leading-8 text-[#B4B7BD]">
              NatFlipsWhips also specializes in carefully selected pre-owned
              vehicles. Every vehicle is cleaned, inspected, and honestly
              represented before being offered for sale.
            </p>

            <a
              href="#inventory"
              className="inline-block mt-10 rounded-full border border-[#BFA46F] px-8 py-4 font-semibold text-[#BFA46F] transition hover:bg-[#BFA46F] hover:text-black"
            >
              Browse Inventory
            </a>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}