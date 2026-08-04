"use client";

import FadeIn from "./FadeIn";

export default function Gallery() {
  return (
    <FadeIn>
      <section
        id="gallery"
        className="bg-[#080808] py-28 px-6 text-white"
      >
        <div className="mx-auto max-w-7xl">

          {/* Header */}

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-[#BFA46F] font-semibold">
              GALLERY
            </p>

            <h2 className="mt-5 text-5xl font-bold">
              Recent Work
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-[#B4B7BD]">
              Every motorcycle is treated like it's our own—from the first foam
              wash to the final shine.
            </p>

          </div>

          {/* Featured Photo */}

          <div className="mt-20 overflow-hidden rounded-3xl shadow-2xl">

            <img
              src="/gallery/soapy-bike-1.png"
              alt="Motorcycle Detail"
              className="h-[650px] w-full object-cover transition duration-500 hover:scale-105"
            />

          </div>

          {/* Gallery Grid */}

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/gallery/foam-wash-1.jpg"
                alt="Foam Wash"
                className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/gallery/drying-bike-1.jpg"
                alt="Drying"
                className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/gallery/drying-bike-2.jpg"
                alt="Finished Detail"
                className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/gallery/clean-mirrors.png"
                alt="Clean Mirrors"
                className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}