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
              Cars, trucks, SUVs and motorcycles, detailed where you park them
              across Tucson. Every vehicle is treated like it is our own, from
              the first foam wash to the final shine.
            </p>

            <a
              href="https://www.instagram.com/natflipswhips"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm uppercase tracking-[0.2em] text-[#BFA46F] underline underline-offset-8 hover:opacity-70"
            >
              See more on Instagram
            </a>

          </div>

          {/* Featured Photo */}

          <div className="mt-20 overflow-hidden rounded-3xl shadow-2xl">

            <img
              src="/gallery/mobile-car-detailing-tucson-az-snow-foam-wash-black-sedan.jpg"
              alt="Snow foam wash on a black sedan during mobile car detailing in Tucson, AZ"
              className="h-[650px] w-full object-cover transition duration-500 hover:scale-105"
            />

          </div>

          {/* Gallery Grid */}

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/gallery/car-interior-detailing-tucson-az-red-leather-seats.jpg"
                alt="Red leather seats cleaned during car interior detailing in Tucson, AZ"
                className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/gallery/mobile-auto-detailing-tucson-az-suv-exterior-front.jpg"
                alt="SUV exterior after mobile auto detailing in Tucson, AZ"
                className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/gallery/suv-interior-detailing-tucson-az-dashboard-and-seats.jpg"
                alt="SUV dashboard and seats after interior detailing in Tucson, AZ"
                className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/gallery/soapy-bike-1.png"
                alt="Motorcycle being washed during mobile motorcycle detailing in Tucson, AZ"
                className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/gallery/mobile-detailing-tucson-az-black-sedan-paint-gloss.jpg"
                alt="Black sedan paint gloss after mobile detailing in Tucson, AZ"
                className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/gallery/drying-bike-1.jpg"
                alt="Motorcycle dried and finished after detailing in Tucson, AZ"
                className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}
