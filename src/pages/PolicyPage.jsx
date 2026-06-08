import { motion } from 'framer-motion'

// Replace these Google Drive share links with real PDF links when available.
// Use File > Share > "Anyone with link can view", then copy the link here.
const POLICY_DOCS = [
  {
    id: 'hr',
    title: 'HR Policy',
    description:
      'Our Human Resources policy covers employment standards, code of conduct, leave entitlements, disciplinary procedures, and employee welfare programmes across all operations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    driveUrl: '#',
  },
  {
    id: 'qaqc',
    title: 'QA & QC Policy',
    description:
      'Our Quality Assurance and Quality Control policy outlines the standards, inspection protocols, and documentation requirements governing the quality of all services and deliverables.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    driveUrl: '#',
  },
  {
    id: 'cr',
    title: 'CR Policy',
    description:
      'Our Corporate Responsibility policy details our commitments to environmental sustainability, community development, ethical business conduct, and regulatory compliance.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    driveUrl: '#',
  },
]

const PolicyPage = () => {
  const handleDownload = (url, title) => {
    if (!url || url === '#') {
      alert(`The ${title} document is not yet available. Please contact us for a copy.`)
      return
    }
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#071b3a] pb-20 pt-32 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f4d35e]">Policy Documents</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl">
              Our governance and compliance framework.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#fff8d8]/80">
              Ludik Energy Limited maintains a comprehensive set of policies that govern our operations, workforce standards, and corporate responsibilities. Download the documents below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy cards */}
      <section className="bg-[#fff8d8] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            {POLICY_DOCS.map((doc, i) => (
              <motion.article
                key={doc.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-start gap-6 rounded-lg border border-[#e7ddaa] bg-white p-8 shadow-sm shadow-[#071b3a]/5 sm:flex-row sm:items-center"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[#071b3a] text-[#f4d35e]">
                  {doc.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-extrabold text-[#071b3a]">{doc.title}</h2>
                  <p className="mt-2 leading-7 text-[#526173]">{doc.description}</p>
                </div>
                <button
                  onClick={() => handleDownload(doc.driveUrl, doc.title)}
                  className="flex shrink-0 items-center gap-2 rounded-lg bg-[#071b3a] px-5 py-3 text-sm font-bold text-[#fff8d8] transition-colors hover:bg-[#0e2f5a]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </button>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-[#e7ddaa] bg-[#0e2f5a]/6 p-6">
            <p className="text-sm leading-7 text-[#526173]">
              <strong className="text-[#071b3a]">Note:</strong> If you require a hard copy of any policy document, or if a document is currently unavailable for download, please{' '}
              <a href="/contact" className="font-semibold text-[#0e2f5a] underline underline-offset-2 hover:text-[#071b3a]">
                contact us
              </a>{' '}
              directly. We respond to all document requests within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PolicyPage
