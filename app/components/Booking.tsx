export default function Booking() {
  return (
    <section
      id="booking"
      className="bg-neutral-950 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
          Book Online
        </p>

        <h2 className="text-5xl font-black mt-4">
          Schedule Your Detail
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Pick a date and time that works best for you.
        </p>

        <a
          href="/book"
          className="inline-block mt-10 bg-yellow-500 text-black font-bold px-10 py-4 rounded-xl hover:bg-yellow-400 transition"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}