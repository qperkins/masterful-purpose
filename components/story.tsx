export function Story() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <p className="text-primary text-sm font-medium">THE HEART OF THE WORK</p>
            <h2 className="text-5xl font-serif font-normal text-foreground">Narrative Medicine</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/75 leading-relaxed text-lg text-center">
              Narrative medicine recognizes that we are not separate from our stories. Our pain becomes poetry. Our
              struggles become wisdom. Our transformation becomes testimony.
            </p>

            <p className="text-foreground/75 leading-relaxed text-lg text-center mt-6">
              Through the intentional use of words—through expression, reflection, and courageous honesty—we don't just
              process trauma; we transform it into purpose. We don't just survive; we step into our masterful purpose.
            </p>
          </div>

          {/* Video placeholder */}
          <div className="mt-12">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="text-sm mb-2">Video content</p>
                  <p className="text-xs">[Video placeholder - Add your video or testimonials here]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
