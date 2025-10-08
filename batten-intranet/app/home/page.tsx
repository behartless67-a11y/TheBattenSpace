import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { UpcomingEvents } from '@/components/upcoming-events';
import { NewsSlideshow } from '@/components/news-slideshow';
import { services } from '@/data/services';

export default function Home() {
  const featuredServices = services.filter((s) => s.type === 'featured');

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url(/garrett-hall-sunset.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'grayscale(100%)'
        }}
      ></div>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-background/80 -z-10"></div>

      <Header />

      <main className="w-full mx-auto px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center mt-12">
          <h1 className="text-8xl font-bold mb-4 text-primary animate-fade-in-up whitespace-nowrap">Batten Digital Commons</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6 animate-fade-in-up animation-delay-200"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-400 mb-8">
            Your central hub for resources, tools, and information at the Frank Batten School of
            Leadership and Public Policy
          </p>

          {/* Department Navigation */}
          <nav className="w-full py-4 mb-8">
            <div className="flex items-center justify-center gap-2 px-4">
              <Link
                href="/"
                className="flex-shrink py-3 px-4 rounded-lg text-sm md:text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
              >
                Home
              </Link>
              <Link
                href="/news"
                className="flex-shrink py-3 px-4 rounded-lg text-sm md:text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
              >
                News
              </Link>
              <Link
                href="/staff-directory"
                className="flex-shrink py-3 px-4 rounded-lg text-sm md:text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
              >
                Staff Directory
              </Link>
              <Link
                href="/academics"
                className="flex-shrink py-3 px-4 rounded-lg text-sm md:text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
              >
                Academics
              </Link>
              <Link
                href="/admissions"
                className="flex-shrink py-3 px-4 rounded-lg text-sm md:text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
              >
                Admissions
              </Link>
              <Link
                href="/career-services"
                className="flex-shrink py-3 px-4 rounded-lg text-sm md:text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
              >
                Career Services
              </Link>
              <Link
                href="/marcom"
                className="flex-shrink py-3 px-4 rounded-lg text-sm md:text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
              >
                MarCom
              </Link>
              <Link
                href="/faculty"
                className="flex-shrink py-3 px-4 rounded-lg text-sm md:text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
              >
                Faculty
              </Link>
              <Link
                href="/finance"
                className="flex-shrink py-3 px-4 rounded-lg text-sm md:text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
              >
                Finance
              </Link>
              <Link
                href="/student-services"
                className="flex-shrink py-3 px-4 rounded-lg text-sm md:text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
              >
                Student Services
              </Link>
              <Link
                href="/it-operations"
                className="flex-shrink py-3 px-4 rounded-lg text-sm md:text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
              >
                IT and Operations
              </Link>
              <Link
                href="/teaching"
                className="flex-shrink py-3 px-4 rounded-lg text-sm md:text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
              >
                Teaching
              </Link>
            </div>
          </nav>

          {/* AI Chat Box */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask me anything about Batten School..."
                className="w-full px-6 py-4 rounded-full border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] focus:outline-none focus:border-accent focus:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-lg"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full font-semibold transition-all">
                Ask
              </button>
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="mb-12 max-w-[1600px] mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-primary mb-2">Latest News</h2>
            <div className="w-16 h-1 bg-accent"></div>
          </div>
          <div className="h-[700px]">
            <NewsSlideshow />
          </div>
        </div>

        {/* Services - Full Width Alternating Sections */}
        <div className="mb-12 max-w-[1600px] mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">Services</h2>
            <div className="w-16 h-1 bg-accent"></div>
          </div>

          {/* Room Reservations - Content on Right */}
          <div className="mb-8 bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                  <path d="m9 16 2 2 4-4"/>
                </svg>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-primary mb-4">Room Reservations</h3>
                <p className="text-lg text-foreground mb-6">
                  Easily book meeting rooms, conference spaces, and collaborative work areas in Garrett Hall. View real-time availability, check room amenities, and manage your reservations all in one place.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Real-time room availability</li>
                    <li>View room capacity and amenities</li>
                    <li>Manage recurring reservations</li>
                    <li>Calendar integration</li>
                  </ul>
                </div>
                <Link
                  href="https://roomres.thebattenspace.org/"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all"
                >
                  Book a Room
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Email Lists - Content on Left */}
          <div className="mb-8 bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-3xl font-bold text-primary mb-4">Email Lists</h3>
                <p className="text-lg text-foreground mb-6">
                  Manage and access all Batten School email distribution lists. Subscribe to relevant lists, update your preferences, and stay connected with your teams, departments, and working groups.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-2">What You Can Do:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>View all available email lists</li>
                    <li>Subscribe or unsubscribe from lists</li>
                    <li>Find department and team lists</li>
                    <li>Access list descriptions and purposes</li>
                  </ul>
                </div>
                <Link
                  href="/email-lists"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all"
                >
                  Manage Email Lists
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              <div className="relative h-64 md:h-auto bg-primary/10 flex items-center justify-center order-1 md:order-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Upcoming Events Section */}
      <div
        className="w-full text-white py-12 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/uva-rotunda.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-accent/80"></div>
        <div className="w-full px-8 relative z-10">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-8">Upcoming Events & Key Dates</h2>
          </div>
          <div className="w-full">
            <UpcomingEvents />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
