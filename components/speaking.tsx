import Link from "next/link"

export function Speaking() {
  return (
    <section id="speaking" className="py-20 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-primary text-sm font-medium mb-2">KEY NOTE SPEAKER</p>
              <h2 className="text-4xl font-serif font-normal text-foreground">Inspiring Your Audience</h2>
            </div>

            <p className="text-foreground/75 leading-relaxed">
              Pamela is known for inspiring her audience. Her talks include goal setting, poetry, and prose to give her
              audience a life-changing experience.
            </p>

            <ul className="space-y-3">
              {[
                "Goal setting and achievement frameworks",
                "Healing trauma through storytelling",
                "Poetry and prose for personal transformation",
                "Overcoming fear and embracing greatness",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-foreground/75">
                  <span className="text-primary font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/speaker"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Book a Speaking Event
              </Link>
            </div>
          </div>

          <div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="text-sm mb-2">Speaking engagement</p>
                  <p className="text-xs">[Image placeholder]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
