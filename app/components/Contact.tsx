"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const defaultForm = {
  name: "",
  email: "",
  phone: "",
  service: "Sedan",
  message: "",
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [form, setForm] = useState(defaultForm);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess(
        "Thanks for reaching out! We’ll get back to you as soon as possible."
      );
      setForm(defaultForm);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <FadeIn>
      <section id="contact" className="bg-black px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-500">
              Get in Touch
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Ready to Make Your Ride Stand Out?
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-400 md:text-lg md:leading-8">
              From motorcycles and personal vehicles to commercial fleets and
              vehicle sales, NatFlipsWhips delivers detail-focused service that
              keeps your ride looking its best.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-6 sm:p-8">
              <h3 className="text-2xl font-bold">Contact Information</h3>

              <div className="mt-8 space-y-8">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-yellow-500">
                    Phone
                  </p>
                  <a
                    href="tel:5203056529"
                    className="mt-2 block text-xl font-semibold transition hover:text-yellow-500"
                  >
                    (520) 305-6529
                  </a>
                  <p className="mt-2 text-sm text-gray-400">
                    Call or text anytime for a quote or appointment.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-yellow-500">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/natflipswhips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-xl font-semibold transition hover:text-yellow-500"
                  >
                    @NatFlipsWhips
                  </a>
                  <p className="mt-2 text-sm text-gray-400">
                    Follow our latest details, inventory, and transformations.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-yellow-500">
                    Service Area
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-300">
                    Mobile detailing at your home, workplace, dealership, or
                    job site.
                  </p>
                  <p className="mt-2 text-xl font-semibold">
                    Tucson &amp; Surrounding Areas
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-yellow-500">
                    Business Hours
                  </p>
                  <p className="mt-2 text-xl font-semibold">By Appointment</p>
                  <p className="mt-2 text-sm text-gray-400">
                    Flexible scheduling is available for individual vehicles and
                    commercial fleets.
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-3xl border border-zinc-700 bg-zinc-900 p-6 sm:p-8"
            >
              <div>
                <h3 className="text-2xl font-bold">Request a Quote</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Tell us what you drive and how we can help.
                </p>
              </div>

              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-zinc-700 bg-black p-4 text-white outline-none transition placeholder:text-gray-500 focus:border-yellow-500"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-zinc-700 bg-black p-4 text-white outline-none transition placeholder:text-gray-500 focus:border-yellow-500"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-xl border border-zinc-700 bg-black p-4 text-white outline-none transition placeholder:text-gray-500 focus:border-yellow-500"
              />

              <select
  value={form.service}
  onChange={(e) => setForm({ ...form, service: e.target.value })}
  className="w-full rounded-xl border border-zinc-700 bg-black p-4 text-white outline-none transition focus:border-yellow-500"
>
  <option>Sedan Detail</option>
  <option>SUV Detail</option>
  <option>Truck Detail</option>
  <option>Motorcycle Detail</option>
  <option>Commercial Detail</option>
  <option>Vehicle Purchase</option>
  <option>General Question</option>
</select>

              <textarea
                rows={6}
                placeholder="Tell us about your vehicle, preferred service, location, or any questions you have..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-zinc-700 bg-black p-4 text-white outline-none transition placeholder:text-gray-500 focus:border-yellow-500"
                required
              />

              {success && (
                <div
                  role="status"
                  className="rounded-xl border border-green-500/40 bg-green-500/10 p-4"
                >
                  <p className="text-green-400">{success}</p>
                </div>
              )}

              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-500/40 bg-red-500/10 p-4"
                >
                  <p className="text-red-400">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-yellow-500 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <p className="text-center text-sm text-gray-500">
                We typically respond within one business day.
              </p>
            </form>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}