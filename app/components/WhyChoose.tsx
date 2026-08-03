"use client";

import FadeIn from "./FadeIn";

export default function WhyChoose() {
  return (
    <FadeIn>
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-yellow-500 uppercase tracking-[0.3em] font-semibold">
            WHY CHOOSE NATFLIPSWHIPS
          </p>

          <h2 className="text-5xl font-black mt-4">
            Quality. Honesty. Results.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold text-yellow-500">
                Premium Quality
              </h3>

              <p className="text-gray-400 mt-4">
                Professional products and attention to detail.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-300">
                Honest Service
              </h3>

              <p className="text-gray-400 mt-4">
                No pressure. No gimmicks.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold text-yellow-500">
                Passion Driven
              </h3>

              <p className="text-gray-400 mt-4">
                Built by an enthusiast, not a corporation.
              </p>
            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}