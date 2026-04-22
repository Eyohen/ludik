import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'

const ADMIN_AUTH_KEY = 'ludik_admin_auth'
const ADMIN_PASSWORD = 'ludik2024'

const navLinks = [
  {
    href: '/admin',
    label: 'Dashboard',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    href: '/admin/blog',
    label: 'Blog Posts',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    href: '/admin/team',
    label: 'Team Members',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    href: '/admin/employees',
    label: 'Employees',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    href: '/admin/submissions',
    label: 'Submissions',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
]

const AdminLayout = () => {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_AUTH_KEY, 'true')
      setAuthed(true)
      setError('')
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_AUTH_KEY)
    setAuthed(false)
    setPassword('')
  }

  const isActive = (href) =>
    href === '/admin' ? location.pathname === '/admin' : location.pathname.startsWith(href)

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#071b3a] px-4">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <span className="font-display text-2xl font-extrabold text-[#fff8d8]">Ludik Energy</span>
            <p className="mt-1 text-sm text-[#f4d35e]">Admin Portal</p>
          </div>
          <form
            onSubmit={handleLogin}
            className="rounded-lg border border-[#f4d35e]/20 bg-[#fff8d8]/8 p-8"
          >
            <h2 className="text-xl font-extrabold text-[#fff8d8]">Sign in</h2>
            <p className="mt-1 text-sm text-[#fff8d8]/60">Enter your admin password to continue.</p>
            <div className="mt-6">
              <label className="mb-1.5 block text-sm font-semibold text-[#fff8d8]/80">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-[#f4d35e]/25 bg-[#fff8d8]/10 px-4 py-2.5 text-sm text-[#fff8d8] placeholder-[#fff8d8]/40 outline-none focus:border-[#f4d35e]/60 focus:ring-1 focus:ring-[#f4d35e]/30"
                placeholder="Enter admin password"
                autoFocus
              />
              {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-lg bg-[#f4d35e] py-2.5 text-sm font-bold text-[#071b3a] transition-colors hover:bg-[#fff8d8]"
            >
              Sign in
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-[#fff8d8]/40">
            <Link to="/" className="underline underline-offset-2 hover:text-[#fff8d8]/70">← Back to website</Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-[#f4f6f8]">
      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col bg-[#071b3a] transition-transform duration-200 lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-[#f4d35e]/15 px-5">
          <span className="font-display text-base font-extrabold text-[#fff8d8]">Ludik Admin</span>
          <button
            className="text-[#fff8d8]/60 hover:text-[#fff8d8] lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setSidebarOpen(false)}
              className={`mb-0.5 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? 'bg-[#f4d35e] text-[#071b3a]'
                  : 'text-[#fff8d8]/70 hover:bg-[#fff8d8]/8 hover:text-[#fff8d8]'
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-[#f4d35e]/15 p-4 space-y-2">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs text-[#fff8d8]/50 hover:text-[#fff8d8]/80"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            View website
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-xs text-[#fff8d8]/50 hover:text-red-400"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Top bar */}
        <header className="flex h-16 items-center justify-between border-b border-[#e7ddaa] bg-white px-5 shadow-sm">
          <button
            className="text-[#526173] lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm font-semibold text-[#526173]">Admin</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071b3a] text-xs font-bold text-[#f4d35e]">
              A
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-5 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
