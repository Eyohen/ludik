import { useState } from 'react'
import { motion } from 'framer-motion'

const contactImg = 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1400'

const SUBMISSIONS_KEY = 'ludik_submissions'

const faqs = [
  { q: 'What is your typical project timeline?', a: 'Depending on scope of project, complexity, and site conditions, timelines can begin from 3 weeks and above, we develop detailed schedules at the onset of every engagement and maintain regular milestone reporting throughout' },
  { q: 'Do you work internationally?', a: 'Yes. We operate across Africa at the moment with intention to operate beyond, with our primary operations based in South South Nigeria.' },
  { q: 'How do you ensure safety on your projects?', a: 'Through strict HSE protocols, comprehensive compliance management, regular safety audits, and mandatory training for all site personnel. Safety is non-negotiable in every Ludik Energy project.' },
  { q: 'What is your response time for enquiries?', a: 'We respond to all enquiries within 24 hours. For urgent matters, please call us directly on the numbers provided.' },
  { q: 'Can you handle custom or bespoke projects?', a: 'Yes. We specialise in tailoring our services to meet the unique requirements of each client and project environment.' },
  { q: 'Do you offer maintenance contracts?', a: 'Yes. We offer sectional pipeline replacement to full replacement and any other rig maintenance contracts from short term agreements to long term retainer agreements covering preventive and predictive maintenance services.' },
]

function saveSubmission(data) {
  try {
    const existing = JSON.parse(localStorage.getItem(SUBMISSIONS_KEY) || '[]')
    existing.unshift({ ...data, id: Date.now().toString(), submittedAt: new Date().toISOString() })
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(existing))
  } catch {
    // silent
  }
}

const ContactPage = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      saveSubmission(form)
      setSubmitted(true)
      setLoading(false)
    }, 800)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071b3a] pb-20 pt-32 text-white">
        <img
          src={contactImg}
          alt="Aerial view of Calabar, Cross River State, Nigeria"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071b3a]/95 to-[#071b3a]/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f4d35e]">Contact Us</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Let's start a conversation.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#fff8d8]/80">
              We respond to all enquiries within 24 hours and provide tailored solutions to meet your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-[#fff8d8] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Info panel */}
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">Get In Touch</p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#071b3a]">Ludik Energy Limited</h2>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4 rounded-lg border border-[#e7ddaa] bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#071b3a]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f4d35e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-[#526173]">Address</p>
                  <p className="mt-1 font-semibold text-[#071b3a]">State Library Complex Calabar</p>
                  <p className="text-sm text-[#526173]">Cross River State, Nigeria</p>
                </div>
              </div>

              <a
                href="tel:+2348037337221"
                className="flex gap-4 rounded-lg border border-[#e7ddaa] bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#071b3a]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f4d35e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-[#526173]">Phone</p>
                  <p className="mt-1 font-semibold text-[#071b3a]">+234 915 761 9014</p>
                </div>
              </a>

              <a
                href="tel:+2348035703562"
                className="flex gap-4 rounded-lg border border-[#e7ddaa] bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#071b3a]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f4d35e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-[#526173]">Phone</p>
                  <p className="mt-1 font-semibold text-[#071b3a]">+234 915 761 9014</p>
                </div>
              </a>

              <div className="flex gap-4 rounded-lg border border-[#e7ddaa] bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#071b3a]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f4d35e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-[#526173]">Email</p>
                  <p className="mt-1 font-semibold text-[#071b3a]">info@ludikenergyltd.com or  ludik.energy2026@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-[#e7ddaa] bg-white p-8 shadow-sm shadow-[#071b3a]/5">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#071b3a]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f4d35e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="mt-5 text-2xl font-extrabold text-[#071b3a]">Message sent!</h3>
                <p className="mt-3 max-w-sm text-[#526173]">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', organization: '', email: '', phone: '', message: '' }) }}
                  className="mt-6 text-sm font-bold text-[#071b3a] underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-extrabold text-[#071b3a]">Send us a message</h2>
                <p className="mt-1 text-sm text-[#526173]">We respond to all enquiries within 24 hours.</p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-4 py-2.5 text-sm text-[#071b3a] outline-none focus:border-[#071b3a] focus:ring-1 focus:ring-[#071b3a]"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-4 py-2.5 text-sm text-[#071b3a] outline-none focus:border-[#071b3a] focus:ring-1 focus:ring-[#071b3a]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Business / Organisation</label>
                    <input
                      type="text"
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-4 py-2.5 text-sm text-[#071b3a] outline-none focus:border-[#071b3a] focus:ring-1 focus:ring-[#071b3a]"
                      placeholder="ACME Energy Ltd"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-4 py-2.5 text-sm text-[#071b3a] outline-none focus:border-[#071b3a] focus:ring-1 focus:ring-[#071b3a]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-4 py-2.5 text-sm text-[#071b3a] outline-none focus:border-[#071b3a] focus:ring-1 focus:ring-[#071b3a]"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[#071b3a]">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-lg border border-[#e7ddaa] bg-[#fff8d8] px-4 py-2.5 text-sm text-[#071b3a] outline-none focus:border-[#071b3a] focus:ring-1 focus:ring-[#071b3a]"
                      placeholder="Tell us about your project or enquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#071b3a] py-3 text-sm font-bold text-[#fff8d8] transition-colors hover:bg-[#0e2f5a] disabled:opacity-60"
                  >
                    {loading ? 'Sending...' : 'Send message'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">FAQs</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#071b3a]">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-[#e7ddaa]">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-[#071b3a]"
                >
                  {faq.q}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-sm leading-7 text-[#526173]">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
