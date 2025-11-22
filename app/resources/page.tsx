import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-normal text-foreground">
              Free Resources
            </h1>
          </div>
        </div>
      </section>

      {/* Download Form Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-foreground mb-6">
              The 7 Keys to S.U.C.C.E.S.S. Goal Setting.
            </h2>
            <p className="text-lg text-foreground/75 leading-relaxed max-w-3xl mx-auto">
              Goal setting is the foundation of achieving the goals you have for your life or your business. I have put together the <strong>7 top things</strong> you must do prior to tackling goal setting. Fill the form below to download your FREE copy of &apos;The 7 Keys to S.U.C.C.E.S.S. Goal Setting&apos;.
            </p>
          </div>

          <div className="bg-background border border-border rounded-2xl p-8 md:p-12 shadow-sm">
            <form className="space-y-6">
              <div className="mb-4">
                <p className="text-sm text-foreground/60">
                  * indicates required
                </p>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Download Free Resource
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 lg:px-8 bg-primary/5">
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

