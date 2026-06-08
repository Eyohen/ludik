import { useState } from 'react'
import { motion } from 'framer-motion'

const VENDOR_KEY = 'ludik_vendor_submissions'

function saveVendorSubmission(data) {
  try {
    const existing = JSON.parse(localStorage.getItem(VENDOR_KEY) || '[]')
    existing.unshift({ ...data, id: Date.now().toString(), submittedAt: new Date().toISOString() })
    localStorage.setItem(VENDOR_KEY, JSON.stringify(existing))
  } catch {
    // silent
  }
}

const VendorFormPage = () => {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      saveVendorSubmission(form)
      setSubmitted(true)
      setLoading(false)
    }, 800)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#071b3a] pb-20 pt-32 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f4d35e]">Vendor Registration</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl">
              Become a Ludik Energy vendor.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#fff8d8]/80">
              Fill in the form below to register your business as a vendor or supplier. Our procurement team will review your submission and get in touch within 5 business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#fff8d8] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg border border-[#e7ddaa] bg-white p-8 shadow-sm shadow-[#071b3a]/5">
            {submitted ? (
              <div className="flex flex-col items-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#071b3a]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f4d35e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="mt-5 text-2xl font-extrabold text-[#071b3a]">Submission received!</h2>
                <p className="mt-3 max-w-sm text-[#526173]">
                  Thank you for registering your business. Our procurement team will review your details and contact you within 5 business days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', organization: '', email: '', phone: '', message: '' })
                  }}
                  className="mt-6 text-sm font-bold text-[#071b3a] underline underline-offset-2"
                >
                  Submit another form
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-extrabold text-[#071b3a]">Vendor Registration Form</h2>
                <p className="mt-1 text-sm text-[#526173]">
                  All fields marked * are required.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-4 py-2.5 text-sm text-[#071b3a] outline-none focus:border-[#071b3a] focus:ring-1 focus:ring-[#071b3a]"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">
                      Business / Organisation *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      required
                      value={form.organization}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-4 py-2.5 text-sm text-[#071b3a] outline-none focus:border-[#071b3a] focus:ring-1 focus:ring-[#071b3a]"
                      placeholder="Company or organisation name"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-4 py-2.5 text-sm text-[#071b3a] outline-none focus:border-[#071b3a] focus:ring-1 focus:ring-[#071b3a]"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-4 py-2.5 text-sm text-[#071b3a] outline-none focus:border-[#071b3a] focus:ring-1 focus:ring-[#071b3a]"
                      placeholder="+234 800 000 0000"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">
                      Products / Services Offered *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-4 py-2.5 text-sm text-[#071b3a] outline-none focus:border-[#071b3a] focus:ring-1 focus:ring-[#071b3a]"
                      placeholder="Describe the products or services your business provides..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#071b3a] py-3 text-sm font-bold text-[#fff8d8] transition-colors hover:bg-[#0e2f5a] disabled:opacity-60"
                  >
                    {loading ? 'Submitting...' : 'Submit registration'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default VendorFormPage
