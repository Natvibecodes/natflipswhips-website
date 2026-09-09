export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 lg:flex-row">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-black">
            <span className="text-white">Nat</span>
            <span className="text-[#BFA46F]">FlipsWhips</span>
          </h2>

          <p className="mt-2 text-gray-400">
            Premium Motorcycle Detailing & Quality Vehicle Sales
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Proudly serving Tucson, Arizona.
          </p>
        </div>

        <div className="text-center">
          <h3 className="font-bold text-[#BFA46F]">Business Hours</h3>

          <p className="mt-2 text-sm text-gray-400">
            Monday–Friday: 7:00 AM–6:00 PM
          </p>

          <p className="text-sm text-gray-400">
            Saturday: 7:00 AM–12:00 PM
          </p>

          <p className="text-sm text-gray-500">Sunday: Closed</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href="#services" className="transition hover:text-[#BFA46F]">
            Services
          </a>

          <a href="#packages" className="transition hover:text-[#BFA46F]">
            Packages
          </a>

          <a href="#inventory" className="transition hover:text-[#BFA46F]">
            Inventory
          </a>

          <a href="#contact" className="transition hover:text-[#BFA46F]">
            Contact
          </a>

          <a
            href="https://instagram.com/natflipswhips"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#BFA46F]"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NatFlipsWhips. All rights reserved.
      </div>
    </footer>
  );
}