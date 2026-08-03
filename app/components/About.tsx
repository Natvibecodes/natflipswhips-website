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

            <h2 className="mt-5 text-5xl font-bold">
              More Than a Detail.
              <br />
              A Commitment to Quality.
            </h2>

          </div>

          <div className="mt-16 max-w-4xl mx-auto space-y-8 text-lg leading-9 text-[#B4B7BD]">

            <p>
              NatFlipsWhips was built on a simple belief: every vehicle deserves
              to be treated with care, and every customer deserves honest,
              dependable service. Whether we're detailing your motorcycle or
              helping you purchase your next vehicle, quality always comes first.
            </p>

            <p>
              We focus on the details that matter—clear communication, reliable
              service, and results we're proud to stand behind. Our goal isn't
              just to make vehicles look their best, it's to earn your trust and
              become the first call you make when you need detailing or a quality
              pre-owned vehicle.
            </p>

            <p>
              Proudly based in Tucson, Arizona, we're committed to building
              long-term relationships through hard work, professionalism, and
              genuine care for every customer we serve.
            </p>

          </div>

          <div className="mt-16 flex justify-center">

            <a
              href="#contact"
              className="rounded-full bg-[#BFA46F] px-8 py-4 font-semibold text-black transition duration-300 hover:opacity-90"
            >
              Get a Free Quote Today
            </a>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}