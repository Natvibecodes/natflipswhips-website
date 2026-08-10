"use client";

import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <FadeIn>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#080808] text-white">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-placeholder.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">

          <p className="mb-6 uppercase tracking-[0.35em] text-sm font-semibold text-[#BFA46F]">
            Tucson's Premium Mobile Detailing
          </p>

          <h1 className="max-w-5xl text-4xl font-light leading-tight sm:text-5xl md:text-7xl lg:text-8xl">

            Premium
            <br />

            <span className="font-semibold">
              Mobile Detailing
            </span>

          </h1>

          <p className="mt-8 max-w-3xl text-xl font-medium text-white">
            Motorcycles • Cars • SUVs • Trucks • Commercial Equipment
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#B4B7BD]">

            We bring premium detailing directly to your home, workplace, or job
            site throughout Tucson. Whether it's your daily driver, weekend
            motorcycle, work truck, or commercial equipment, every vehicle
            receives the same professional care and attention to detail.

          </p>

          <div className="mt-14 flex flex-col gap-5 sm:flex-row">

            <a
              href="#booking"
              className="rounded-full bg-[#BFA46F] px-8 py-4 text-center font-semibold text-black transition hover:bg-[#d7bc84]"
            >
              Book Online
            </a>

            <a
              href="#packages"
              className="rounded-full border border-white px-8 py-4 text-center font-medium transition hover:bg-white hover:text-black"
            >
              View Packages
            </a>

          </div>

          {/* Feature Badges */}

          <div className="mt-14 flex flex-wrap gap-4 text-sm">

            <div className="rounded-full border border-zinc-700 bg-black/40 px-5 py-3">
              ✅ Mobile Service
            </div>

            <div className="rounded-full border border-zinc-700 bg-black/40 px-5 py-3">
              ✨ Premium Products
            </div>

            <div className="rounded-full border border-zinc-700 bg-black/40 px-5 py-3">
              🏆 Professional Quality
            </div>

            <div className="rounded-full border border-zinc-700 bg-black/40 px-5 py-3">
              📍 Serving Tucson & Surrounding Areas
            </div>

          </div>

        </div>

      </section>
    </FadeIn>
  );
}