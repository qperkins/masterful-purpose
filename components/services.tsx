export function Services() {
  const services = [
    {
      title: "Keynote Speaking",
      description:
        "Inspiring talks on goal setting, poetry, and personal transformation that deliver life-changing experiences to your audience.",
    },
    {
      title: "Workshops & Events",
      description:
        "Interactive sessions covering narrative medicine, goal setting for business and personal growth, and healing through expression.",
    },
    {
      title: "Online Courses",
      description:
        "Learn the proven methods and frameworks for setting and accomplishing goals in the real world with structured guidance.",
    },
    {
      title: "Free Resources",
      description:
        "Access supporting materials including The Seven Keys Free Download and additional resources for your journey.",
    },
  ]

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary text-sm font-medium">WHAT I OFFER</p>
          <h2 className="text-4xl font-serif font-normal text-foreground">Transformative Services</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore the different ways I can support your healing and growth journey through narrative medicine and
            purposeful expression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <h3 className="text-xl font-serif font-normal text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
