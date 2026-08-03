"use client";

import FadeIn from "./FadeIn";

export default function Packages() {
  return (
    <FadeIn>
      <section
        id="packages"
        className="bg-[#080808] text-white py-28 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.35em] text-[#BFA46F] font-semibold">
              DETAILING PACKAGES
            </p>

            <h2 className="mt-5 text-5xl font-bold">
              Choose Your Detail
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-[#B4B7BD]">
              Premium care with straightforward pricing.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            {/* Basic */}

            <div className="rounded-3xl border border-white/10 bg-[#121212] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#BFA46F]/50">

              <h3 className="text-3xl font-semibold">
                Basic Wash
              </h3>

              <p className="mt-6 text-5xl font-bold text-[#BFA46F]">
                $100
              </p>

              <ul className="mt-8 space-y-4 text-[#B4B7BD]">
                <li>✓ Hand Wash</li>
                <li>✓ Wheels Cleaned</li>
                <li>✓ Tire Shine</li>
                <li>✓ Dry & Finish</li>
              </ul>

              <a
                href="/book"
                className="mt-10 block w-full rounded-full border border-white py-3 text-center font-semibold transition hover:bg-white hover:text-black"
              >
                Book Now
              </a>

            </div>

            {/* Premium */}

            <div className="relative rounded-3xl border border-[#BFA46F] bg-[#121212] p-8 transition-all duration-300 hover:-translate-y-2">

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#BFA46F] px-5 py-2 text-xs font-bold uppercase tracking-widest text-black">
                Most Popular
              </div>

              <h3 className="text-3xl font-semibold mt-5">
                Premium Detail
              </h3>

              <p className="mt-6 text-5xl font-bold text-[#BFA46F]">
                $175
              </p>

              <ul className="mt-8 space-y-4 text-[#B4B7BD]">
                <li>✓ Everything in Basic</li>
                <li>✓ Chrome Polish</li>
                <li>✓ Paint Protection</li>
                <li>✓ Engine Detail</li>
                <li>✓ Premium Finish</li>
              </ul>

              <a
                href="/book"
                className="mt-10 block w-full rounded-full bg-[#BFA46F] py-3 text-center font-semibold text-black transition hover:opacity-90"
              >
                Book Now
              </a>

            </div>

            {/* Showroom */}

            <div className="rounded-3xl border border-white/10 bg-[#121212] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#BFA46F]/50">

              <h3 className="text-3xl font-semibold">
                Showroom Detail
              </h3>

              <p className="mt-6 text-5xl font-bold text-[#BFA46F]">
                $250+
              </p>

              <ul className="mt-8 space-y-4 text-[#B4B7BD]">
                <li>✓ Complete Detail</li>
                <li>✓ Paint Enhancement</li>
                <li>✓ Ceramic Spray Protection</li>
                <li>✓ Custom Add-Ons</li>
              </ul>

              <a
                href="/book"
                className="mt-10 block w-full rounded-full border border-white py-3 text-center font-semibold transition hover:bg-white hover:text-black"
              >
                Book Now
              </a>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}