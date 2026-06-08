import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const BLOG_KEY = 'ludik_blog_posts'

const defaultPosts = [
  {
    id: '1',
    title: 'Embracing Technology in Modern Oil & Gas Operations',
    category: 'Industry Insight',
    excerpt: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.',
    content: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.\n\nAt Ludik Energy Limited, we continuously adopt modern engineering practices to enhance performance, reduce risks, and deliver sustainable solutions for our clients.',
    date: '2026-04-10',
    author: 'Ludik Energy Team',
    imageUrl: '/oilrigsupport.jpeg',
  },
  {
    id: '2',
    title: 'Safety Compliance as a Competitive Advantage',
    category: 'Industry Insight',
    excerpt: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.',
    content: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.\n\nAt Ludik Energy Limited, we continuously adopt modern engineering practices to enhance performance, reduce risks, and deliver sustainable solutions for our clients.',
    date: '2026-04-05',
    author: 'Ludik Energy Team',
    imageUrl: '/engineeringexcellence.jpeg',
  },
  {
    id: '3',
    title: 'Pipeline Integrity Management in the Niger Delta',
    category: 'Industry Insight',
    excerpt: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.',
    content: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.\n\nAt Ludik Energy Limited, we continuously adopt modern engineering practices to enhance performance, reduce risks, and deliver sustainable solutions for our clients.',
    date: '2026-03-28',
    author: 'Ludik Energy Team',
    imageUrl: '/pipelineinfrastructure.jpeg',
  },
  {
    id: '4',
    title: 'The Future of Indigenous Energy Companies in Africa',
    category: 'Industry Insight',
    excerpt: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.',
    content: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.\n\nAt Ludik Energy Limited, we continuously adopt modern engineering practices to enhance performance, reduce risks, and deliver sustainable solutions for our clients.',
    date: '2026-03-20',
    author: 'Ludik Energy Team',
    imageUrl: '/industriesweserve.jpeg',
  },
  {
    id: '5',
    title: 'Preventive Maintenance: Reducing Downtime on Energy Assets',
    category: 'Industry Insight',
    excerpt: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.',
    content: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.\n\nAt Ludik Energy Limited, we continuously adopt modern engineering practices to enhance performance, reduce risks, and deliver sustainable solutions for our clients.',
    date: '2026-03-12',
    author: 'Ludik Energy Team',
    imageUrl: '/maintenance.jpeg',
  },
  {
    id: '6',
    title: 'HSE Standards in Nigerian Upstream Operations',
    category: 'Industry Insight',
    excerpt: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.',
    content: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.\n\nAt Ludik Energy Limited, we continuously adopt modern engineering practices to enhance performance, reduce risks, and deliver sustainable solutions for our clients.',
    date: '2026-03-05',
    author: 'Ludik Energy Team',
    imageUrl: '/hero.jpeg',
  },
  {
    id: '7',
    title: 'Strategic Partnerships Driving Energy Growth',
    category: 'Industry Insight',
    excerpt: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.',
    content: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.\n\nAt Ludik Energy Limited, we continuously adopt modern engineering practices to enhance performance, reduce risks, and deliver sustainable solutions for our clients.',
    date: '2026-02-25',
    author: 'Ludik Energy Team',
    imageUrl: '/projectmanagement.jpeg',
  },
  {
    id: '8',
    title: 'Brownfield Revamps: Maximising Existing Asset Value',
    category: 'Industry Insight',
    excerpt: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.',
    content: 'The oil and gas industry continues to evolve with advancements in technology, safety practices, and operational efficiency. Companies that embrace innovation and maintain strict compliance standards are better positioned to succeed in this dynamic environment.\n\nAt Ludik Energy Limited, we continuously adopt modern engineering practices to enhance performance, reduce risks, and deliver sustainable solutions for our clients.',
    date: '2026-02-18',
    author: 'Ludik Energy Team',
    imageUrl: '/facility.jpeg',
  },
]

function getPosts() {
  const imageMap = Object.fromEntries(defaultPosts.map((p) => [p.id, p.imageUrl]))
  try {
    const stored = localStorage.getItem(BLOG_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      // always use the current local image paths for seeded posts
      return parsed.map((p) => imageMap[p.id] ? { ...p, imageUrl: imageMap[p.id] } : p)
    }
    localStorage.setItem(BLOG_KEY, JSON.stringify(defaultPosts))
    return defaultPosts
  } catch {
    return defaultPosts
  }
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

const BlogPage = () => {
  const [posts, setPosts] = useState([])
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    setPosts(getPosts())
  }, [])

  if (posts.length === 0) return null

  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#071b3a] pb-20 pt-32 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f4d35e]">Blog & News</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl">
              Strategic Partnerships Driving Energy Growth
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#fff8d8]/80">
              The Energy Cross River Expo themed "Unlocking Cross River Energy Using Sustainable Finance", brought together government officials, industry stakeholders, investors, development partners, energy experts and finance houses, to discuss strategies for advancing energy development in Cross River State. Ludik Energy Ltd heavily represented, engaged in dialogue, knowledge sharing, and collaboration aimed at promoting investment in the State's energy sector.
              In addition to identifying energy opportunities, Public- Private Partnership models that could be deployed to finance and implement energy projects include:
              •⁠  ⁠Concession model
              •⁠  ⁠Build -Operate - Transfer (BOT) model
              •⁠  ⁠Joint Venture Partnerships
              •⁠  ⁠Lease and management contracts
              •⁠  ⁠Green Public Private Partnership Financing
              Amongst these PPP structures, Ludik Energy Ltd intends to engage wholly in the State's energy blueprint project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-extrabold uppercase tracking-[0.16em] text-[#b48f10]">Featured</p>
          <article
            className="grid overflow-hidden rounded-lg border border-[#e7ddaa] shadow-sm shadow-[#071b3a]/5 lg:grid-cols-[1.1fr_0.9fr] cursor-pointer"
            onClick={() => setExpanded(expanded === featuredPost.id ? null : featuredPost.id)}
          >
            <img
              src={featuredPost.imageUrl}
              alt={featuredPost.title}
              className="h-72 w-full object-cover lg:h-full lg:min-h-[400px]"
            />
            <div className="flex flex-col justify-between p-8">
              <div>
                <span className="rounded-md bg-[#f4d35e]/30 px-2.5 py-1 text-xs font-bold text-[#071b3a]">
                  {featuredPost.category}
                </span>
                <h2 className="mt-4 text-2xl font-extrabold leading-snug text-[#071b3a] sm:text-3xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 leading-7 text-[#526173]">{featuredPost.excerpt}</p>
                {expanded === featuredPost.id && (
                  <div className="mt-4 leading-7 text-[#526173] whitespace-pre-line">
                    {featuredPost.content}
                  </div>
                )}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-[#526173]">{formatDate(featuredPost.date)}</p>
                <button className="text-sm font-bold text-[#071b3a] underline underline-offset-2">
                  {expanded === featuredPost.id ? 'Show less' : 'Read more'}
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Other posts */}
      <section className="bg-[#fff8d8] px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="overflow-hidden rounded-lg border border-[#e7ddaa] bg-white shadow-sm shadow-[#071b3a]/5 cursor-pointer transition-transform hover:-translate-y-1"
                onClick={() => setExpanded(expanded === post.id ? null : post.id)}
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-44 w-full object-cover"
                />
                <div className="p-6">
                  <span className="rounded-md bg-[#f4d35e]/25 px-2.5 py-1 text-xs font-bold text-[#071b3a]">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-lg font-extrabold leading-snug text-[#071b3a]">{post.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#526173] line-clamp-3">{post.excerpt}</p>
                  {expanded === post.id && (
                    <div className="mt-3 text-sm leading-7 text-[#526173] whitespace-pre-line">
                      {post.content}
                    </div>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xs text-[#526173]">{formatDate(post.date)}</p>
                    <button className="text-xs font-bold text-[#071b3a] underline underline-offset-2">
                      {expanded === post.id ? 'Show less' : 'Read more'}
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
