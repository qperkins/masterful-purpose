import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, Download, FileText, Users } from "lucide-react"

export default function SpeakerPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-normal text-foreground">
              Speaker
            </h1>
          </div>
        </div>
      </section>

      {/* Main Speaker Introduction */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-foreground mb-6">
              ARE YOU LOOKING FOR A DYNAMIC<br />
              TRANSFORMATIONAL SPEAKER, FOR YOUR NEXT CONFERENCE, RETREAT, SEMINAR, OR WORKSHOP?
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-8 mb-12">
            <blockquote className="text-lg md:text-xl text-foreground/80 italic leading-relaxed mb-4">
              &quot;Pamela was AMAZING! We have worked with other speakers, but she delivered results. Her speech delivered eye opening information needed for business achievement mind-shifts. And that&apos;s the bottom line for any business scaling up!&quot;
            </blockquote>
            <p className="text-foreground/70 font-medium">
              — Nia Dennis, Women in Business Mastermind Group, Real Estate Investor Agent
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/75 leading-relaxed">
                How do you want your audience to feel after your event? Do you want them motivated, and inspired? Pamela delivers an eye-opening experience your event audience will speak about for years?
              </p>
              <p className="text-foreground/75 leading-relaxed">
                Pamela&apos;s transparency and authentic truth is life changing and valuable information for a variety of audiences, business conferences, churches, women&apos;s organizations, community leaders, and non-profit groups. Pamela&apos;s is a master in business, she&apos;s an award winning speaker and certified Goal Coach. Don&apos;t miss out on booking Pamela as her calendar fills quickly.
              </p>
              <p className="text-lg font-semibold text-primary">
                You want your speaker to have a phenomenal impact on your audience. You can take your event to the next level. Book Pamela.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center p-8">
                  <p className="text-lg mb-2 font-medium">Pamela Speaking</p>
                  <p className="text-sm">[Speaking Engagement Image Placeholder]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking CTA */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-serif font-normal text-foreground mb-4">
              Book Pamela to speak at your upcoming woman&apos;s retreat, association conference, university, or seminar event
            </h3>
            <a
              href="tel:+18337446483"
              className="inline-block mt-6 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              BOOK PAMELA
            </a>
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="py-20 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-foreground mb-4">
              YOUR INVESTMENT INCLUDES:
            </h2>
          </div>

          <div className="bg-background border border-border rounded-2xl p-8 md:p-12 shadow-sm">
            <ul className="space-y-4 text-foreground/75">
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">›</span>
                <span>Free phone consultation</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">›</span>
                <span>Pre-planning calls for complete understanding of expected deliverables</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">›</span>
                <span>Marketing on Masterful Purpose&apos;s social media sites and email list to promote and market your event (upon request)</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">›</span>
                <span>A customized researched interactive presentation with exercises and take-aways for immediate application and achieving outcomes you want for your audience</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">›</span>
                <span>Transparency and truth, in a professionally prepared, masterly delivered, value packed presentation</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">›</span>
                <span>Accompanying worksheets/ handouts or resource material</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">›</span>
                <span>Availability of book signing immediately following the event for no additional cost</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">›</span>
                <span>Marketing on Masterful Purpose, Social Media and Email list to help promote your event (upon request)</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">›</span>
                <span>Printed and/or digital professional surveys to measure audience satisfaction, take-away and any suggestions</span>
              </li>
            </ul>

            <div className="mt-12 pt-8 border-t border-border text-center">
              <p className="text-xl font-semibold text-foreground mb-4">
                BOOK PAMELA FOR YOUR NEXT EVENT
              </p>
              <a
                href="tel:+18337446483"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                CALL (833) 744-6483 FOR RATES
              </a>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 bg-background border border-border rounded-2xl p-8 shadow-sm">
            <blockquote className="text-lg text-foreground/80 italic leading-relaxed mb-4">
              &quot;Pamela&apos;s speech was transformational and life changing. I felt God&apos;s message to me come straight through her. She is a powerful and dynamic speaker and motivator&quot;
            </blockquote>
            <p className="text-foreground/70 font-medium">
              — Charlotte Samples, B.A.,M.A., P.P.S., University Supervisor
            </p>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-foreground mb-4">
              Most Requested Speaking Topics for Women&apos;s Conferences, Associations, Organizations and Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Topic 1 */}
            <div className="bg-background border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-normal text-foreground mb-4">
                Nevertheless She Persisted
              </h3>
              <p className="text-foreground/75 leading-relaxed mb-4">
                Women have opened once closed doors in the military world, the political arena, and the corporate world just to name a few. Some doors didn&apos;t open and had to be kicked down.
              </p>
              <p className="text-foreground/75 leading-relaxed mb-4">
                Pamela motivates and inspires women as she relates her experience climbing the ladder to the highest enlisted rank in the military. Many women go through similar situations and/or are still facing challenges in this male dominated world.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                Pamela gives practical tips and tools to use when facing your mountain no matter how big or small, or how equipped you feel like you are.
              </p>
            </div>

            {/* Topic 2 */}
            <div className="bg-background border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-normal text-foreground mb-4">
                It is Never Too Late To Be Great
              </h3>
              <p className="text-foreground/75 leading-relaxed mb-4">
                Pamela breaks down all your excuses for not living up to your greatness. Young or old, rich, poor or in-between &quot;as long as you have a pulse you have a purpose&quot;––Paul Newman.
              </p>
              <p className="text-foreground/75 leading-relaxed mb-4">
                Pamela breaks down and gives examples of how you can and must leave a legacy, or continue your legacy. Your audience will leave with a newly fueled purpose.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                Compete against no one. You continue to best yourself. Everyone was born to be great.
              </p>
            </div>

            {/* Topic 3 */}
            <div className="bg-background border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-normal text-foreground mb-4">
                Wake up On Purpose
              </h3>
              <p className="text-foreground/75 leading-relaxed mb-4">
                &quot;No one plans to fail, they fail to plan&quot; – Benjamin Franklin. This is one quote that if you follow with change your life.
              </p>
              <p className="text-foreground/75 leading-relaxed mb-4">
                &quot;Wake up On Purpose&quot;––Pamela Peté is one way to do exactly that. Pamela coaches her audience giving them times and tools on how to be more productive, organized and actually gain some balance in their lives.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="tel:+18337446483"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <Phone size={20} />
              BOOK SPEAKER
            </a>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors">
              <FileText size={20} />
              MEDIA KIT
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors">
              <Users size={20} />
              WORKSHOP REQUEST
            </button>
          </div>

          {/* Headshots Section */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-normal text-foreground mb-6">
              Click On Head Shot To Download
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="aspect-[3/4] bg-muted rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <div className="text-center p-4">
                      <Download size={32} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">Headshot P{num}</p>
                      <p className="text-xs">[Image Placeholder]</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background border border-border rounded-2xl p-8 shadow-sm">
            <blockquote className="text-lg text-foreground/80 italic leading-relaxed mb-4">
              &quot;Pamela was very professional, enthusiastic, passionate, and articulate as she gave her message. She was able to convincingly tie her poem into the theme of the day. I was entertained and motivated to persist&quot;
            </blockquote>
            <p className="text-foreground/70 font-medium">
              — Debbie Franklin, former mayor and council member of the city of Banning, current Chair of the Western Riverside Council of Governments
            </p>
          </div>
        </div>
      </section>

      {/* Client List */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-foreground mb-4">
              PARTIAL CLIENT LIST
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organizations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Organizations</h3>
              <ul className="space-y-2 text-sm text-foreground/75">
                <li>City of Rialto &quot;The State of the Women Conference&quot;</li>
                <li>Time for Change Foundation</li>
                <li>Kiwanis (various cities)</li>
                <li>High Desert Rotary</li>
                <li>General Federation of Women&apos;s Clubs (Riverside)</li>
                <li>National Council of Negro Women</li>
                <li>Moreno Valley ISD</li>
                <li>Youth Essential Skill Program</li>
                <li>Women in Business Ca</li>
                <li>San Bernardino Chamber of Commerce</li>
                <li>Moreno Valley Chamber of Commerce</li>
              </ul>
            </div>

            {/* Medical Centers */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Medical Centers</h3>
              <ul className="space-y-2 text-sm text-foreground/75">
                <li>UCR Medical Center – Irvine CA</li>
                <li>Sharps Medical Center – San Diego CA</li>
                <li>Arrowhead Regional Hospital – San Bernardino CA</li>
                <li>Loma Linda Hospital – Loma Linda CA</li>
                <li>Kaiser Hospital – Fontana CA</li>
              </ul>
            </div>

            {/* Universities & Military */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Universities</h3>
              <ul className="space-y-2 text-sm text-foreground/75 mb-6">
                <li>Arizona State University AZ</li>
                <li>Cal State San Bernardino CA</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">MILITARY</h3>
              <ul className="space-y-2 text-sm text-foreground/75">
                <li>Wright Patterson AFB OH</li>
                <li>March ARB CA</li>
                <li>Fort Irwin CA</li>
                <li>94th ALW MN</li>
                <li>Luke AFB AZ</li>
                <li>Yokota AFB Japan</li>
                <li>Elmendorf AFB AK</li>
                <li>Edwards AFB CA</li>
              </ul>
            </div>

            {/* Media */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">MEDIA</h3>
              <ul className="space-y-2 text-sm text-foreground/75">
                <li>MARK &apos;Ski&apos; Struczewski – Podcast</li>
                <li>Dave Pamah – London Podcast</li>
                <li>Empire Talks Back – TV</li>
              </ul>
            </div>
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

