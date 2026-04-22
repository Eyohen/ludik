import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const logo = '/logo.jpeg'

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    children: [
      { name: 'Our Team', href: '/about/team' },
      { name: 'Policy', href: '/about/policy' },
    ],
  },
  { name: 'Services', href: '/services' },
  {
    name: 'Projects',
    href: '/projects',
    children: [
      { name: 'Our Portfolio', href: '/projects/portfolio' },
    ],
  },
  { name: 'Blog', href: '/blog' },
]

const ChevronIcon = ({ open }) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()
  const navRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
    setOpenDropdown(null)
  }, [location.pathname])

  const isActive = (href) =>
    href === '/'
      ? location.pathname === '/'
      : location.pathname === href || location.pathname.startsWith(href + '/')

  return (
    <nav ref={navRef} className="fixed left-1/2 top-4 z-50 w-[93%] max-w-7xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-lg border border-[#f4d35e]/40 bg-white px-4 py-3 shadow-lg shadow-[#071b3a]/12 sm:px-5">
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

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? 'bg-[#071b3a]/8 text-[#071b3a]'
                      : 'text-[#526173] hover:text-[#071b3a]'
                  }`}
                >
                  {item.name}
                  <ChevronIcon open={openDropdown === item.name} />
                </button>
                {openDropdown === item.name && (
                  <div className="absolute left-0 top-full z-10 mt-2 min-w-[190px] overflow-hidden rounded-lg border border-[#e7ddaa] bg-[#fff8d8] shadow-xl shadow-[#071b3a]/14">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={`block px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#071b3a]/6 hover:text-[#071b3a] ${
                          location.pathname === child.href
                            ? 'bg-[#071b3a]/8 text-[#071b3a]'
                            : 'text-[#526173]'
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`rounded-md px-3 py-1.5 text-sm font-semibold transition-colors ${
                  isActive(item.href)
                    ? 'bg-[#071b3a]/8 text-[#071b3a]'
                    : 'text-[#526173] hover:text-[#071b3a]'
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <Link
          to="/contact"
          className="hidden rounded-lg bg-[#071b3a] px-5 py-2.5 text-sm font-bold text-[#fff8d8] transition-colors hover:bg-[#0e2f5a] lg:inline-flex lg:items-center"
        >
          Contact us
        </Link>

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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mt-2 rounded-lg border border-[#e7ddaa] bg-[#fff8d8] p-4 shadow-xl shadow-[#071b3a]/12 lg:hidden">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                  className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-[#526173] hover:text-[#071b3a]"
                >
                  {item.name}
                  <ChevronIcon open={mobileExpanded === item.name} />
                </button>
                {mobileExpanded === item.name && (
                  <div className="mb-2 ml-3 border-l-2 border-[#f4d35e]/60 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block py-2 text-sm font-semibold text-[#526173] hover:text-[#071b3a]"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2.5 text-sm font-semibold text-[#526173] hover:text-[#071b3a]"
              >
                {item.name}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="mt-3 block w-full rounded-lg bg-[#071b3a] py-2.5 text-center text-sm font-bold text-[#fff8d8] transition-colors hover:bg-[#0e2f5a]"
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
