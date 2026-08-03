"use client";

import FadeIn from "./FadeIn";

export default function Reviews() {
  return (
    <FadeIn>
      <section id="reviews" className="bg-black py-24 px-6 text-white">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
              Customer Reviews
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Trusted By Local Riders
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-gray-400">
              We treat every motorcycle and every customer with the same level
              of care we'd expect ourselves.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8">
              <div className="mb-6 text-yellow-500 text-2xl">★★★★★</div>

              <p className="leading-8 text-gray-300">
                "Amazing attention to detail. My motorcycle looked better than
                when I bought it."
              </p>

              <h3 className="mt-8 font-bold text-xl">
                — Customer Review
              </h3>
            </div>

            <div className="rounded-3xl border border-yellow-500 bg-gradient-to-b from-zinc-900 to-black p-8">

              <div className="mb-6 text-yellow-500 text-2xl">
                ★★★★★
              </div>

              <p className="leading-8 text-gray-300">
                "Professional, on time, and worth every dollar. I'll definitely
                book again."
              </p>

              <h3 className="mt-8 font-bold text-xl">
                — Customer Review
              </h3>

            </div>

            <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8">

              <div className="mb-6 text-yellow-500 text-2xl">
                ★★★★★
              </div>

              <p className="leading-8 text-gray-300">
                "Excellent communication and quality work from beginning to end."
              </p>

              <h3 className="mt-8 font-bold text-xl">
                — Customer Review
              </h3>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}