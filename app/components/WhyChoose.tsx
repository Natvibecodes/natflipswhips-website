"use client";

import FadeIn from "./FadeIn";

export default function WhyChoose() {
  return (
    <FadeIn>
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="text-yellow-500 uppercase tracking-[0.3em] font-semibold">
              WHY CHOOSE NATFLIPSWHIPS
            </p>

            <h2 className="text-5xl font-black mt-4">
              We Come To You.
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
              Skip the waiting rooms, long lines, and drop-offs. We bring
              professional detailing directly to your home, workplace, or job
              site with premium products and professional equipment.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300">

              <div className="text-5xl mb-6">
                🏠
              </div>

              <h3 className="text-2xl font-bold text-yellow-500">
                Home
              </h3>

              <p className="text-gray-400 mt-4">
                Relax while we professionally detail your vehicle in your own driveway.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300">

              <div className="text-5xl mb-6">
                🏢
              </div>

              <h3 className="text-2xl font-bold text-yellow-500">
                Workplace
              </h3>

              <p className="text-gray-400 mt-4">
                Have your vehicle detailed while you're at work and come back to a clean ride.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300">

              <div className="text-5xl mb-6">
                🚜
              </div>

              <h3 className="text-2xl font-bold text-yellow-500">
                Job Sites
              </h3>

              <p className="text-gray-400 mt-4">
                We also service commercial vehicles and equipment directly at your location.
              </p>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}