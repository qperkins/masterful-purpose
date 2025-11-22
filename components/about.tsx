import Image from "next/image"
import Link from "next/link"

export function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '4/5' }}>
              <Image
                src="/pam-pete-speaker.jpg"
                alt="Pamela Peté - Speaker and Transformation Guide"
                width={600}
                height={750}
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center top' }}
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div>
              <p className="text-primary text-sm font-medium mb-2">ABOUT PAMELA</p>
              <h2 className="text-4xl font-serif font-normal text-foreground">From Pain to Purpose</h2>
            </div>

            <p className="text-foreground/75 leading-relaxed">
              Pamela&apos;s true story of rags to riches against all odds is moving and uplifting. She shares her pain and
              tells what she had to do to rise to success and how by grace of God, she is still alive.
            </p>

            <p className="text-foreground/75 leading-relaxed">
              She is a transitional speaker who agitates change and challenges her audience to face their fears and
              accept their greatness. Through narrative medicine, Pamela teaches that our stories—our wounds, our
              triumphs, our transformations—are the keys to healing and authentic expression.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all gap-1"
              >
                Read her full story
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
