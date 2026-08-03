export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 lg:flex-row">

        <div>

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

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">

          <a href="#services" className="hover:text-[#BFA46F] transition">
            Services
          </a>

          <a href="#packages" className="hover:text-[#BFA46F] transition">
            Packages
          </a>

          <a href="#inventory" className="hover:text-[#BFA46F] transition">
            Inventory
          </a>

          <a href="#contact" className="hover:text-[#BFA46F] transition">
            Contact
          </a>

          <a
            href="https://instagram.com/natflipswhips"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#BFA46F] transition"
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