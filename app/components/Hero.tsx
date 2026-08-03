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
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-8">

          <h1 className="max-w-4xl text-6xl font-light leading-tight md:text-8xl">

            Crafted
            <br />

            <span className="font-semibold">
              for people
            </span>

            <br />

            who love
            <br />

            their vehicles.

          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-9 text-[#B4B7BD]">

            Premium mobile detailing and carefully selected
            pre-owned vehicles serving Tucson, Arizona.

          </p>

          <div className="mt-14 flex flex-col gap-5 sm:flex-row">

            <a
              href="#booking"
              className="rounded-full border border-white px-8 py-4 text-center font-medium transition hover:bg-white hover:text-black"
            >
              Book a Detail
            </a>

            <a
              href="#inventory"
              className="rounded-full px-8 py-4 text-center font-medium text-[#BFA46F] transition hover:text-white"
            >
              Browse Inventory →
            </a>

          </div>

        </div>

      </section>
    </FadeIn>
  );
}