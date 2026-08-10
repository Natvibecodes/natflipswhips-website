"use client";

import FadeIn from "./FadeIn";

export default function About() {
  return (
    <FadeIn>
      <section
        id="about"
        className="bg-[#0B0B0B] text-white py-28 px-6"
      >
        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-[#BFA46F] font-semibold">
              ABOUT NATFLIPSWHIPS
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold">
              Built From Passion.
              <br />
              Driven By Excellence.
            </h2>

          </div>

          <div className="mt-16 max-w-4xl mx-auto space-y-8 text-lg leading-9 text-[#B4B7BD]">

            <p>
              Hi, I'm Nataly, founder of NatFlipsWhips. What started as a passion
              for cars and motorcycles has grown into a business built around
              quality, integrity, and genuine care for every vehicle I work on.
            </p>

            <p>
              Whether I'm detailing your motorcycle, cleaning your daily driver,
              restoring a work truck, or helping someone purchase a quality
              pre-owned vehicle, my goal is always the same: treat every vehicle
              like it's my own and every customer with honesty and respect.
            </p>

            <p>
              NatFlipsWhips is more than a detailing business. It's a growing
              automotive brand committed to providing premium mobile detailing,
              quality vehicle sales, and exceptional customer service throughout
              Tucson and the surrounding communities.
            </p>

            <p>
              I believe the little details matter. Clear communication, showing
              up when I say I will, using quality products, and standing behind
              my work are what set NatFlipsWhips apart. My goal is to earn your
              trust and become the first person you think of whenever you need a
              vehicle detailed or are looking for your next vehicle.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3 text-center">

            <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-8">

              <div className="text-4xl mb-4">🚚</div>

              <h3 className="text-xl font-bold">
                Mobile Service
              </h3>

              <p className="mt-3 text-gray-400">
                We come directly to your home, workplace, or job site.
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-8">

              <div className="text-4xl mb-4">✨</div>

              <h3 className="text-xl font-bold">
                Premium Products
              </h3>

              <p className="mt-3 text-gray-400">
                Professional-grade products and meticulous attention to detail.
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-8">

              <div className="text-4xl mb-4">🤝</div>

              <h3 className="text-xl font-bold">
                Honest Service
              </h3>

              <p className="mt-3 text-gray-400">
                Transparent communication and quality you can count on.
              </p>

            </div>

          </div>

          <div className="mt-16 flex justify-center">

            <a
              href="/book"
              className="rounded-full bg-[#BFA46F] px-10 py-4 font-semibold text-black transition duration-300 hover:opacity-90"
            >
              Book Your Appointment
            </a>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}