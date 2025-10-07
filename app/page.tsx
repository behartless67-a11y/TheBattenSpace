import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FeaturedServiceTile } from '@/components/service-tile';
import { services } from '@/data/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const featuredServices = services.filter((s) => s.type === 'featured');

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <Image
          src="/garrett-hall-sunset.jpg"
          alt="Garrett Hall at sunset"
          fill
          className="object-cover"
          quality={85}
          priority
        />
      </div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-primary">Batten Digital Commons</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Your central hub for resources, tools, and information at the Frank Batten School of
            Leadership and Public Policy
          </p>

          {/* Department Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-card/95 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              Home
            </Link>
            <Link
              href="/news"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-card/95 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              News
            </Link>
            <Link
              href="/staff-directory"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-card/95 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              Staff Directory
            </Link>
            <Link
              href="/academics"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-card/95 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              Academics
            </Link>
            <Link
              href="/admissions"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-card/95 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              Admissions
            </Link>
            <Link
              href="/career-services"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-card/95 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              Career Services
            </Link>
            <Link
              href="/marcom"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-card/95 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              MarCom
            </Link>
            <Link
              href="/faculty"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-card/95 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              Faculty
            </Link>
            <Link
              href="/finance"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-card/95 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              Finance
            </Link>
            <Link
              href="/student-services"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-card/95 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              Student Services
            </Link>
            <Link
              href="/it-operations"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-card/95 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              IT and Operations
            </Link>
            <Link
              href="/teaching"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-card/95 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              Teaching
            </Link>
          </nav>
        </div>

        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-primary mb-2">Services</h2>
            <div className="w-16 h-1 bg-accent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <FeaturedServiceTile key={service.id} service={service} />
            ))}
          </div>
        </div>
      </main>

      {/* Upcoming Events Section */}
      <div className="w-full bg-accent text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Bridge to Batten Info Session and Application Launch</h3>
              <p className="text-sm opacity-90">Tuesday, October 7, 2025 at 12:00 PM</p>
              <p className="text-sm opacity-90">Newcomb Hall (Student Center)</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">BSLIP General Body Meeting and Policy Trivia Night</h3>
              <p className="text-sm opacity-90">Wednesday, October 8, 2025 at 7:00 PM</p>
              <p className="text-sm opacity-90">Garrett Hall</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Lunch with Tim Kaine&apos;s Chief of Staff, Mike Henry</h3>
              <p className="text-sm opacity-90">Thursday, October 9, 2025 at 12:00 PM</p>
              <p className="text-sm opacity-90">Batten School</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
