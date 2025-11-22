import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-normal text-foreground">
              Events
            </h1>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-foreground mb-4">
              Past Events
            </h2>
            <p className="text-lg text-foreground/70">
              A look at some of our recent speaking engagements and events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event 1 - Christian Women In The Media Association */}
            <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center p-4">
                    <p className="text-sm font-medium mb-1">Event Photo</p>
                    <p className="text-xs">[Image Placeholder]</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                  <Calendar size={16} />
                  <span>November 21, 2019</span>
                </div>
                <h3 className="text-xl font-serif font-normal text-foreground mb-2">
                  Christian Women In The Media Association
                </h3>
                <p className="text-foreground/70 text-sm mb-3">
                  Pamela was the keynote speaker at this inspiring event.
                </p>
                <div className="space-y-2 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>6:30 – 8:30 p.m.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5" />
                    <span>Rancho Cucamonga Central Park Community Center<br />11200 Base Line Road<br />Rancho Cucamonga, CA 91730</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event 2 - Book Signing */}
            <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center p-4">
                    <p className="text-sm font-medium mb-1">Event Photo</p>
                    <p className="text-xs">[Image Placeholder]</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                  <Calendar size={16} />
                  <span>May 18, 2019</span>
                </div>
                <h3 className="text-xl font-serif font-normal text-foreground mb-2">
                  Pamela Peté&apos;s Book Signing
                </h3>
                <p className="text-foreground/70 text-sm mb-3">
                  Masterful Purpose Goal and Daily Action Planner and Guide. FREE MINI WORKSHOP for those who purchase the planner and guide.
                </p>
                <div className="space-y-2 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>1-4 pm PDT (workshop 3-4 pm)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5" />
                    <span>Arbor Vitae Life Spa<br />707 E. Main Street<br />Redlands, CA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event 3 - Wyndham San Diego */}
            <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center p-4">
                    <p className="text-sm font-medium mb-1">Event Photo</p>
                    <p className="text-xs">[Image Placeholder]</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                  <Calendar size={16} />
                  <span>April 25-27, 2019</span>
                </div>
                <h3 className="text-xl font-serif font-normal text-foreground mb-2">
                  Wyndham San Diego Bayside Hotel
                </h3>
                <p className="text-foreground/70 text-sm mb-3">
                  Pamela was a featured speaker at this 3-day event. Open to the public - an awesome experience!
                </p>
                <div className="space-y-2 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>7:15 p.m.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5" />
                    <span>Wyndham San Diego Bayside Hotel<br />San Diego, CA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event 4 - Exxon */}
            <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center p-4">
                    <p className="text-sm font-medium mb-1">Event Photo</p>
                    <p className="text-xs">[Image Placeholder]</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                  <Calendar size={16} />
                  <span>July 20, 2019</span>
                </div>
                <h3 className="text-xl font-serif font-normal text-foreground mb-2">
                  Exxon
                </h3>
                <p className="text-foreground/70 text-sm mb-3">
                  Pamela was the keynote speaker at this corporate event.
                </p>
                <div className="space-y-2 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>11:30 a.m.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5" />
                    <span>Exxon<br />Baytown, TX</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event 5 - Girls to Pearls */}
            <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center p-4">
                    <p className="text-sm font-medium mb-1">Event Photo</p>
                    <p className="text-xs">[Image Placeholder]</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                  <Calendar size={16} />
                  <span>May 11, 2019</span>
                </div>
                <h3 className="text-xl font-serif font-normal text-foreground mb-2">
                  Girls to Pearls Spring Tea and Scholarship Benefit
                </h3>
                <p className="text-foreground/70 text-sm mb-3">
                  Pamela presented her poetry at the 20th Annual &quot;Girls to Pearls Spring Tea and Scholarship Benefit&quot;.
                </p>
                <div className="space-y-2 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>11:30 a.m.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event 6 - Wright Patterson AFB */}
            <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center p-4">
                    <p className="text-sm font-medium mb-1">Event Photo</p>
                    <p className="text-xs">[Image Placeholder]</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                  <Calendar size={16} />
                  <span>April 12-14, 2019</span>
                </div>
                <h3 className="text-xl font-serif font-normal text-foreground mb-2">
                  Wright Patterson AFB Spring Retreat
                </h3>
                <p className="text-foreground/70 text-sm mb-3">
                  Pamela was the featured speaker at the Prairies of the Church Spring Retreat. A 3-day event at Wright Patterson Air Force Base.
                </p>
                <div className="space-y-2 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>7:20 p.m. (All three days)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5" />
                    <span>Wright Patterson AFB<br />Hueston, Ohio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-foreground mb-4">
              Book Pamela For Your Next Event
            </h2>
            <p className="text-lg text-foreground/70">
              Fill out the form below to request Pamela for your speaking engagement
            </p>
          </div>

          <div className="bg-background border border-border rounded-2xl p-8 md:p-12 shadow-sm">
            <form className="space-y-6">
              <div className="mb-4">
                <p className="text-sm text-foreground/60">
                  * indicates required
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventFirstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="eventFirstName"
                    name="eventFirstName"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="eventLastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="eventLastName"
                    name="eventLastName"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="eventEmail" className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="eventEmail"
                  name="eventEmail"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="eventPhone" className="block text-sm font-medium text-foreground mb-2">
                  Phone <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  id="eventPhone"
                  name="eventPhone"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="eventCompanyName" className="block text-sm font-medium text-foreground mb-2">
                  Company Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="eventCompanyName"
                  name="eventCompanyName"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="eventAddress" className="block text-sm font-medium text-foreground mb-2">
                  Address <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="eventAddress"
                  name="eventAddress"
                  placeholder="Street Address"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mb-2"
                />
                <input
                  type="text"
                  id="eventAddress2"
                  name="eventAddress2"
                  placeholder="Address Line 2"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mb-2"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    id="eventCity"
                    name="eventCity"
                    placeholder="City"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <select
                    id="eventState"
                    name="eventState"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                  <input
                    type="text"
                    id="eventZip"
                    name="eventZip"
                    placeholder="ZIP Code"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="eventOrgType" className="block text-sm font-medium text-foreground mb-2">
                  Organization Type <span className="text-primary">*</span>
                </label>
                <select
                  id="eventOrgType"
                  name="eventOrgType"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select organization type</option>
                  <option value="womens-group">Women&apos;s Group</option>
                  <option value="chamber-event">Chamber Event</option>
                  <option value="company-event">Company Event</option>
                  <option value="conference">Conference</option>
                  <option value="college-university">College/University</option>
                </select>
              </div>

              <div>
                <label htmlFor="eventDetails" className="block text-sm font-medium text-foreground mb-2">
                  Event Dates and Topics of Interest <span className="text-primary">*</span>
                </label>
                <textarea
                  id="eventDetails"
                  name="eventDetails"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Please provide event dates, location, and topics of interest..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Submit Request
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

