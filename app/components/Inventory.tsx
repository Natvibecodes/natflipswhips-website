"use client";

import FadeIn from "./FadeIn";

export default function Inventory() {
  return (
    <FadeIn>
      <section
        id="inventory"
        className="bg-[#0B0B0B] text-white py-28 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.35em] text-[#BFA46F] font-semibold">
              INVENTORY
            </p>

            <h2 className="mt-5 text-5xl font-bold">
              Available Vehicles
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-[#B4B7BD]">
              Every vehicle is professionally detailed, carefully inspected,
              and honestly represented before it's offered for sale.
            </p>

          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            {/* Card 1 */}

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#121212] transition-all duration-300 hover:-translate-y-2 hover:border-[#BFA46F]/50">

              <div className="flex h-64 items-center justify-center bg-[#1A1A1A] text-[#6F737A]">
                Vehicle Photo
              </div>

              <div className="p-8">

                <span className="rounded-full border border-[#BFA46F] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#BFA46F]">
                  Coming Soon
                </span>

                <h3 className="mt-6 text-2xl font-semibold">
                  Next Vehicle Drop
                </h3>

                <p className="mt-4 leading-8 text-[#B4B7BD]">
                  Follow along as new inventory becomes available. Every vehicle
                  is cleaned, photographed, and listed with transparency.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-block rounded-full border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
                >
                  Get Notified
                </a>

              </div>

            </div>

            {/* Card 2 */}

            <div className="overflow-hidden rounded-3xl border border-[#BFA46F] bg-[#121212] transition-all duration-300 hover:-translate-y-2">

              <div className="flex h-64 items-center justify-center bg-[#1A1A1A] text-[#6F737A]">
                Featured Vehicle
              </div>

              <div className="p-8">

                <span className="rounded-full bg-[#BFA46F] px-3 py-1 text-xs font-bold uppercase tracking-widest text-black">
                  Featured
                </span>

                <h3 className="mt-6 text-2xl font-semibold">
                  Quality You Can Trust
                </h3>

                <p className="mt-4 leading-8 text-[#B4B7BD]">
                  We focus on clean, dependable vehicles that we'd confidently
                  recommend to our own family and friends.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-block rounded-full bg-[#BFA46F] px-6 py-3 font-semibold text-black transition hover:opacity-90"
                >
                  Contact Us
                </a>

              </div>

            </div>

            {/* Card 3 */}

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#121212] transition-all duration-300 hover:-translate-y-2 hover:border-[#BFA46F]/50">

              <div className="flex h-64 items-center justify-center bg-[#1A1A1A] text-[#6F737A]">
                Looking for a Vehicle?
              </div>

              <div className="p-8">

                <h3 className="text-2xl font-semibold">
                  Let Us Find It
                </h3>

                <p className="mt-4 leading-8 text-[#B4B7BD]">
                  Tell us what you're looking for and we'll keep an eye out for
                  vehicles that match your needs and budget.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-block rounded-full border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
                >
                  Start Your Search
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}