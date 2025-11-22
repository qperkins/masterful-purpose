import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  // Placeholder blog posts - replace with actual content
  const blogPosts = [
    {
      id: 1,
      title: "The Power of Narrative Medicine in Healing Trauma",
      excerpt: "Discover how storytelling and narrative medicine can transform pain into purpose and help you heal from trauma through authentic expression.",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Narrative Medicine",
      image: "/blog-placeholder-1.jpg"
    },
    {
      id: 2,
      title: "Setting Goals That Actually Stick: The 7 Keys Framework",
      excerpt: "Learn the foundational principles of goal setting that Pamela has used to achieve success. These seven keys will transform how you approach your goals.",
      date: "January 8, 2025",
      readTime: "7 min read",
      category: "Goal Setting",
      image: "/blog-placeholder-2.jpg"
    },
    {
      id: 3,
      title: "From Pain to Purpose: My Journey of Transformation",
      excerpt: "Pamela shares her personal story of overcoming adversity and finding her calling through poetry, speaking, and helping others discover their purpose.",
      date: "January 1, 2025",
      readTime: "10 min read",
      category: "Personal Story",
      image: "/blog-placeholder-3.jpg"
    },
    {
      id: 4,
      title: "Wake Up On Purpose: Starting Your Day with Intention",
      excerpt: "Learn practical strategies for beginning each day with purpose and intention. Discover how morning routines can set the tone for achieving your goals.",
      date: "December 25, 2024",
      readTime: "6 min read",
      category: "Productivity",
      image: "/blog-placeholder-4.jpg"
    },
    {
      id: 5,
      title: "Nevertheless She Persisted: Breaking Barriers in Male-Dominated Fields",
      excerpt: "Pamela reflects on her experience climbing to the highest enlisted rank in the military and shares insights for women facing similar challenges.",
      date: "December 18, 2024",
      readTime: "8 min read",
      category: "Women's Empowerment",
      image: "/blog-placeholder-5.jpg"
    },
    {
      id: 6,
      title: "It's Never Too Late to Be Great: Finding Your Purpose at Any Age",
      excerpt: "Age is just a number when it comes to pursuing your dreams. Discover how to leave a legacy and continue your journey of greatness regardless of where you are in life.",
      date: "December 11, 2024",
      readTime: "6 min read",
      category: "Purpose",
      image: "/blog-placeholder-6.jpg"
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-normal text-foreground">
              Blog
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Insights on narrative medicine, goal achievement, personal transformation, and living with purpose
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <div className="text-center p-4">
                      <p className="text-sm font-medium mb-1">Blog Image</p>
                      <p className="text-xs">[Image Placeholder]</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-foreground/60">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-serif font-normal text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-foreground/70 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1 text-sm text-foreground/60">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all text-sm"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More / Pagination */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background border border-border rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-foreground mb-4">
              Subscribe For Latest Updates
            </h2>
            <p className="text-foreground/70 mb-6">
              Stay informed on the Masterful Purpose news that matters most to you.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-foreground/60 mt-4">
              We promise not to spam you. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <blockquote className="text-2xl md:text-3xl font-serif font-normal text-foreground italic leading-relaxed">
              &quot;I complete my top seven goals every day. My top seven task everyday give me the most results towards my 30-day goal.&quot;
            </blockquote>
            <p className="text-lg text-foreground/70">— Pamela Peté</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

