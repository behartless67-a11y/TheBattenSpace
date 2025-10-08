import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { UpcomingEvents } from '@/components/upcoming-events';
import { NewsSlideshow } from '@/components/news-slideshow';

export default function Home() {

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
            <div className="flex items-center justify-center gap-4 px-4 flex-wrap">
              <Link
                href="/academics"
                className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
              >
                Academics
              </Link>
              <Link
                href="/admissions"
                className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
              >
                Admissions
              </Link>
              <Link
                href="/career-services"
                className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
              >
                Career Services
              </Link>
              <Link
                href="/email-lists"
                className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
              >
                Email Lists
              </Link>
              <Link
                href="/faculty"
                className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
              >
                Faculty
              </Link>
              <Link
                href="/finance"
                className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
              >
                Finance
              </Link>
              <Link
                href="/it-operations"
                className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
              >
                IT & Operations
              </Link>
              <Link
                href="/marcom"
                className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
              >
                MarCom
              </Link>
              <Link
                href="https://roomres.thebattenspace.org/"
                className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
              >
                Room Reservations
              </Link>
              <Link
                href="/staff-directory"
                className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
              >
                Staff Directory
              </Link>
              <Link
                href="/student-services"
                className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
              >
                Student Services
              </Link>
              <Link
                href="/teaching"
                className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
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
