export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white py-20 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[0.35em] text-[#BFA46F] font-semibold">
            NATFLIPSWHIPS
          </p>

          <h1 className="mt-5 text-5xl font-bold">
            Book Your Detail
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#B4B7BD]">
            Schedule your motorcycle detail in just a few minutes. Pick a time,
            reserve your appointment, and we'll take care of the rest.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Left Column */}

          <div className="space-y-8">

            <div className="rounded-3xl border border-[#BFA46F] bg-[#121212] p-8">

              <h2 className="text-2xl font-semibold">
                Availability This Week
              </h2>

              <div className="mt-6 space-y-4 text-lg">

                <p>🟢 Monday</p>

                <p>🟢 Tuesday</p>

                <p>🟡 Wednesday (Limited)</p>

                <p>🟢 Thursday</p>

                <p>🟢 Friday</p>

                <p>🟢 Saturday</p>

                <p>🔴 Sunday (Unavailable)</p>

              </div>

              <p className="mt-8 text-[#B4B7BD]">
                Book your spot now before this week's appointments fill up.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-[#121212] p-8">

              <h3 className="text-2xl font-semibold">
                Times Available
              </h3>

              <div className="mt-6 space-y-6">

                <div>
                  <p className="text-[#B4B7BD]">
                    Monday – Friday
                  </p>

                  <p className="font-semibold">
                    6:00 AM – 12:00 PM
                  </p>

                  <p className="font-semibold">
                    4:00 PM – 7:00 PM
                  </p>
                </div>

                <div>
                  <p className="text-[#B4B7BD]">
                    Saturday
                  </p>

                  <p className="font-semibold">
                    By Request Only
                  </p>
                </div>

                <div>
                  <p className="text-[#B4B7BD]">
                    Sunday
                  </p>

                  <p className="font-semibold text-red-400">
                    Not Available
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-[#121212] p-8">

              <h3 className="text-2xl font-semibold">
                Vehicle Sales
              </h3>

              <p className="mt-5 text-[#B4B7BD]">
                Showings by appointment.
              </p>

              <p className="mt-2 font-semibold">
                Daily • 10:00 AM – 7:00 PM
              </p>

            </div>

          </div>

          {/* Booking */}

          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:col-span-2">

            <iframe
              src="https://app.squareup.com/appointments/book/xk22ecri0o2wa0/LRP0HY5T79K38/start"
              title="Square Booking"
              width="100%"
              height="1150"
              style={{ border: "none" }}
            />

          </div>

        </div>

      </div>
    </main>
  );
}