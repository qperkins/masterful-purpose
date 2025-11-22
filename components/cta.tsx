export function CTA() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-12 md:p-16 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-normal text-foreground">Ready to Begin Your Healing Journey?</h2>
            <p className="text-foreground/70 text-lg">
              Connect with Pamela to explore how narrative medicine can transform your life through the power of words
              and authentic expression.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="tel:+18337446483"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Call (833) 7-IGNITE
            </a>
            <button className="px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors">
              Send a Message
            </button>
          </div>

          <div className="text-sm text-foreground/60">
            <p>Available for keynotes, workshops, and consultations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
