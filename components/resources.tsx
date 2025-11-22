export function Resources() {
  const resources = [
    {
      title: "The Seven Keys Free Download",
      description:
        "Unlock the foundational principles of goal setting and personal transformation with this essential resource.",
      cta: "Download",
    },
    {
      title: "Online Courses",
      description:
        "Structured learning programs to master Pamela's proven methods for setting and accomplishing meaningful goals.",
      cta: "Explore Courses",
    },
    {
      title: "Blog & Insights",
      description:
        "Regular writings on narrative medicine, healing through expression, and living with intention and purpose.",
      cta: "Read Blog",
    },
  ]

  return (
    <section id="resources" className="py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary text-sm font-medium">SUPPORT YOUR JOURNEY</p>
          <h2 className="text-4xl font-serif font-normal text-foreground">Free Resources</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Access tools and materials to support your growth, whether you attended an event or are beginning your
            journey.
          </p>
        </div>

        <div className="space-y-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group p-8 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all flex justify-between items-start"
            >
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-serif font-normal text-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{resource.description}</p>
              </div>
              <button className="ml-4 px-6 py-2 text-primary font-medium hover:text-primary/70 transition-colors whitespace-nowrap text-sm">
                {resource.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
