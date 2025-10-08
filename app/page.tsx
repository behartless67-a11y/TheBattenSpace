import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FeaturedServiceTile } from '@/components/service-tile';
import { UpcomingEvents } from '@/components/upcoming-events';
import { NewsSlideshow } from '@/components/news-slideshow';
import { services } from '@/data/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

        {/* Services Icons */}
        <div className="mb-12 max-w-[1600px] mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-primary mb-2">Services</h2>
            <div className="w-16 h-1 bg-accent"></div>
          </div>
          <div className="grid grid-cols-6 gap-6">
            {featuredServices.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-20 h-20 rounded-xl bg-primary hover:bg-primary/90 flex items-center justify-center shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all duration-300 hover:scale-110">
                  {service.icon === 'calendar-check' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
                  )}
                  {service.icon === 'mail' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  )}
                  {service.icon === 'headset' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/></svg>
                  )}
                  {service.icon === 'users-round' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>
                  )}
                  {service.icon === 'folder-open' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>
                  )}
                  {service.icon === 'target' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                  )}
                </div>
                <span className="text-sm font-semibold text-center group-hover:text-primary transition-colors">{service.title}</span>
              </Link>
            ))}
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
