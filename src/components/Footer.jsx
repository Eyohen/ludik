import { Link } from 'react-router-dom'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/about/team' },
  { name: 'Policy Documents', href: '/about/policy' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Our Portfolio', href: '/projects/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Vendor Form', href: '/vendor-form' },
]

const services = [
  'Oil Rig Project Support',
  'Pipeline Infrastructure',
  'Energy Project Management',
  'Industrial Maintenance Support',
]

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#f4d35e]/20 bg-[#071b3a] px-4 pb-8 pt-14 text-white">
      <img
        src="/footer.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,58,0.97),rgba(7,27,58,0.9),rgba(14,47,90,0.82))]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-extrabold text-[#fff8d8]">Ludik Energy Limited</span>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#fff8d8]/70">
              A Premier Indigenous Upstream oil and gas engineering company delivering advanced, high-performance solutions across the energy value chain in Nigeria and beyond.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#fff8d8]/62">
              State Library Complex Calabar, Cross River State, Nigeria.
            </p>
            <div className="mt-4 space-y-1">
              <a href="tel:+2348037337221" className="block text-sm text-[#f4d35e]/80 transition-colors hover:text-[#f4d35e]">
                +234 803 733 7221
              </a>
              <a href="tel:+2348035703562" className="block text-sm text-[#f4d35e]/80 transition-colors hover:text-[#f4d35e]">
                +234 803 570 3562
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#f4d35e]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#fff8d8]/65 transition-colors hover:text-[#fff8d8]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#f4d35e]">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-[#fff8d8]/65 transition-colors hover:text-[#fff8d8]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-[#f4d35e]/18 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-[#fff8d8]/50">
            &copy; {new Date().getFullYear()} Ludik Energy Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            <a href="mailto:ludikenergy@gmail.com" className="text-[#fff8d8]/55 transition-colors hover:text-[#fff8d8]">
              ludikenergy@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
