import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const logo = '/logo.jpeg';

const navLinks = [
  { name: 'Company', href: '#company' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Operations', href: '#operations' },
  { name: 'Compliance', href: '#compliance' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href) => href.startsWith('/') && location.pathname === href;

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[93%] max-w-7xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-lg border border-[#f4d35e]/35 bg-[#fff8d8]/94 px-4 py-3 shadow-lg shadow-[#071b3a]/12 backdrop-blur-md sm:px-5">
        <Link to="/" className="flex items-center gap-3 font-display text-xl font-extrabold text-[#071b3a]">
          <img
            src={logo}
            alt="Ludik Energy Limited logo"
            className="h-10 w-10 rounded-lg object-cover"
          />
          <span className="leading-none">
            Ludik
            <span className="block text-xs font-bold uppercase tracking-[0.24em] text-[#b48f10]">Energy Limited</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm font-semibold text-[#526173] transition-colors hover:text-[#071b3a]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/"
            className={`text-sm font-semibold transition-colors ${
              isActive('/') ? 'text-[#0e2f5a]' : 'text-[#526173] hover:text-[#071b3a]'
            }`}
          >
            Home
          </Link>
          <a href="#contact" className="rounded-lg bg-[#071b3a] px-5 py-2.5 text-sm font-bold text-[#fff8d8] transition-colors hover:bg-[#0e2f5a]">
            Contact us
          </a>
        </div>

        <button
          className="p-2 text-[#071b3a] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="mt-2 rounded-lg border border-[#e7ddaa] bg-[#fff8d8]/97 p-4 shadow-xl shadow-[#071b3a]/12 backdrop-blur-md animate-slide-down lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2.5 text-sm font-semibold text-[#526173] hover:text-[#071b3a]"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 block w-full rounded-lg bg-[#071b3a] py-2.5 text-center text-sm font-bold text-[#fff8d8] transition-colors hover:bg-[#0e2f5a]"
            onClick={() => setMobileOpen(false)}
          >
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
