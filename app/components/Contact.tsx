"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Motorcycle Detailing",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
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

      setSuccess("✅ Your message has been sent! We'll get back to you soon.");

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "Motorcycle Detailing",
        message: "",
      });
    } catch (err: any) {
      setError(err.message || "Failed to send message.");
    }

    setLoading(false);
  }

  return (
    <FadeIn>
      <section
        id="contact"
        className="bg-black text-white py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
              Contact Us
            </p>

            <h2 className="text-4xl md:text-5xl">
  Questions Before Booking?
</h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Need help choosing the right detailing package or have a question about your motorcycle? 
              Send us a message and we'll get back to you as soon as possible.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-14">

            <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href="tel:5203056529"
                    className="text-xl hover:text-yellow-500 transition"
                  >
                    (520) 305-6529
                    <p className="mt-2 text-sm text-gray-400">
  Call or text anytime.
</p>
                  </a>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Instagram</p>
                  <a
                    href="https://instagram.com/natflipswhips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:text-yellow-500 transition"
                  >
                    @NatFlipsWhips
                  </a>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Service Area</p>
                  <p className="mt-2 text-gray-400">
  Mobile detailing at your home or workplace.
</p>
                  <p className="text-xl">
                    Tucson, Arizona
                  </p>
                </div>

              </div>

            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-zinc-900 border border-zinc-700 rounded-3xl p-8 space-y-6"
            >

              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full rounded-xl bg-black border border-zinc-700 p-4 focus:border-yellow-500 outline-none"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full rounded-xl bg-black border border-zinc-700 p-4 focus:border-yellow-500 outline-none"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="w-full rounded-xl bg-black border border-zinc-700 p-4 focus:border-yellow-500 outline-none"
              />

              <select
                value={form.service}
                onChange={(e) =>
                  setForm({ ...form, service: e.target.value })
                }
                className="w-full rounded-xl bg-black border border-zinc-700 p-4 focus:border-yellow-500 outline-none"
              >
                <option>Motorcycle Detailing</option>
                <option>Vehicle Purchase</option>
                <option>General Question</option>
              </select>

              <textarea
                rows={6}
                placeholder="Tell us how we can help..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full rounded-xl bg-black border border-zinc-700 p-4 focus:border-yellow-500 outline-none resize-none"
                required
              />

              {success && (
                <p className="text-green-400">
                  {success}
                </p>
              )}

              {error && (
                <p className="text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 text-black font-bold py-4 rounded-xl hover:bg-yellow-400 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Request a quote"}
              </button>

            </form>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}