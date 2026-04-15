const quickLinks = [
  { name: 'Company', href: '#company' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Operations', href: '#operations' },
  { name: 'Compliance', href: '#compliance' },
];

const services = [
  'Construction',
  'Civil engineering',
  'Electrification',
  'Dredging',
  'Fabrication',
  'Oil and gas services',
];

const Footer = () => {
  return (
    <footer className="border-t border-[#f4d35e]/20 bg-[#071b3a] px-4 pb-8 pt-14 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-extrabold text-[#fff8d8]">Ludik Energy Limited</span>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#fff8d8]/70">
              Construction, structural civil engineering, borehole, electrification, dredging, fabrication, FPSO, oil and gas services, general supply, and contract execution.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#fff8d8]/62">
              Alba Plaza, Plot 91, Obafemi Awolowo Way, Jabi, Abuja.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#f4d35e]">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-[#fff8d8]/65 transition-colors hover:text-[#fff8d8]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#f4d35e]">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service} className="text-sm text-[#fff8d8]/65">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-[#f4d35e]/18 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-[#fff8d8]/50">
            &copy; 2026 Ludik Energy Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            <a href="mailto:ludikenergy@gmail.com" className="text-[#fff8d8]/55 transition-colors hover:text-[#fff8d8]">
              ludikenergy@gmail.com
            </a>
            <a href="tel:+2348037337221" className="text-[#fff8d8]/55 transition-colors hover:text-[#fff8d8]">
              +234 (0) 803 733 7221
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
