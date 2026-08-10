export default function Booking() {
  return (
    <section
      id="booking"
      className="bg-neutral-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
          BOOK ONLINE
        </p>

        <h2 className="text-4xl md:text-5xl font-black mt-4">
          Schedule Your Mobile Detail
        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
          Booking takes less than a minute. Choose your service, select a time
          that works for you, and we'll come directly to your home, workplace,
          or job site anywhere in the Tucson area.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mt-14">

          <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-8">

            <div className="text-5xl mb-5">
              📅
            </div>

            <h3 className="text-2xl font-bold">
              Pick a Time
            </h3>

            <p className="text-gray-400 mt-4">
              Choose the date and appointment time that works best for your schedule.
            </p>

          </div>

          <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-8">

            <div className="text-5xl mb-5">
              🚚
            </div>

            <h3 className="text-2xl font-bold">
              We Come To You
            </h3>

            <p className="text-gray-400 mt-4">
              Home, office, dealership, or job site—we bring everything needed to complete the detail.
            </p>

          </div>

          <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-8">

            <div className="text-5xl mb-5">
              ✨
            </div>

            <h3 className="text-2xl font-bold">
              Enjoy Your Vehicle
            </h3>

            <p className="text-gray-400 mt-4">
              Leave the hard work to us and enjoy a professionally detailed vehicle.
            </p>

          </div>

        </div>

        <div className="mt-14 rounded-2xl border border-yellow-500 bg-yellow-500/10 p-8 max-w-3xl mx-auto">

          <h3 className="text-2xl font-bold text-yellow-400">
            🎂 Birthday Month Special
          </h3>

          <p className="text-gray-200 mt-4 text-lg">
            Receive <span className="font-bold text-white">$30 OFF</span> any motorcycle detailing package booked during August.
          </p>

        </div>

        <a
          href="/book"
          className="inline-block mt-12 bg-yellow-500 text-black font-bold px-12 py-5 rounded-xl hover:bg-yellow-400 transition text-lg"
        >
          Book Your Appointment
        </a>

        <p className="text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
          Questions before booking? Scroll down and send us a message—we're happy to help you choose the right detailing package.
        </p>

      </div>
    </section>
  );
}