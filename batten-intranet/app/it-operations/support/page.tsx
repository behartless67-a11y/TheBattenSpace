import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DepartmentNav } from '@/components/department-nav';

export default function ITSupport() {
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

      <main className="w-full max-w-[1600px] mx-auto px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-muted-foreground">
          <Link href="/it-operations" className="hover:text-primary">IT & Operations</Link>
          <span className="mx-2">/</span>
          <span>Get Help & Support</span>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-primary mb-4">Get Help & Support</h1>
          <div className="w-24 h-1 bg-accent mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            Submit tickets and get technical assistance from the Batten IT team
          </p>
          <DepartmentNav />
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email Support */}
          <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-3">Email Support</h2>
            <p className="text-muted-foreground mb-6">
              Send us an email for any IT-related questions, issues, or requests. We typically respond within 24 hours during business days.
            </p>
            <a
              href="mailto:battensupport@virginia.edu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all"
            >
              battensupport@virginia.edu
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Phone Support */}
          <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-3">Phone Support</h2>
            <p className="text-muted-foreground mb-6">
              Call Ben Hartless, Assistant Director of IT, for urgent technical support or complex issues that need immediate attention.
            </p>
            <a
              href="tel:540-460-7676"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all"
            >
              (540) 460-7676
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Common Issues Section */}
        <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Common Issues & Quick Solutions</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">Password Reset</h3>
              <p className="text-muted-foreground mb-2">
                For UVA Computing ID password resets, visit the UVA IT password reset portal or contact UVA IT Help Desk.
              </p>
              <a href="https://virginia.service-now.com/its" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-semibold">
                UVA IT Help Desk →
              </a>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">WiFi Connection Issues</h3>
              <p className="text-muted-foreground mb-2">
                Having trouble connecting to the UVA wireless network? Check our WiFi setup guides for step-by-step instructions.
              </p>
              <Link href="/it-operations/wifi" className="text-primary hover:text-accent font-semibold">
                View WiFi Setup Guides →
              </Link>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">Printer Not Working</h3>
              <p className="text-muted-foreground mb-2">
                Can&apos;t print? Make sure your printer is properly configured using our setup guides for PC or Mac.
              </p>
              <Link href="/it-operations/printing" className="text-primary hover:text-accent font-semibold">
                View Printing Setup →
              </Link>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">Meeting Room Technology</h3>
              <p className="text-muted-foreground mb-2">
                Need help with AV equipment, Zoom Rooms, or presentation technology? View our meeting room guides.
              </p>
              <Link href="/it-operations/meeting-rooms" className="text-primary hover:text-accent font-semibold">
                View Meeting Room Tech →
              </Link>
            </div>
          </div>
        </div>

        {/* IT Team */}
        <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Your IT Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-primary text-lg mb-2">Mark Outten</h3>
              <p className="text-sm text-muted-foreground mb-3">Director of IT</p>
              <p className="text-sm text-muted-foreground">Office: Garrett Hall 104</p>
            </div>
            <div>
              <h3 className="font-bold text-primary text-lg mb-2">Ben Hartless</h3>
              <p className="text-sm text-muted-foreground mb-3">Assistant Director of IT</p>
              <p className="text-sm text-muted-foreground">Office: Garrett Hall 104</p>
              <p className="text-sm text-muted-foreground">Phone: (540) 460-7676</p>
            </div>
            <div>
              <h3 className="font-bold text-primary text-lg mb-2">Jeffrey Whelchel</h3>
              <p className="text-sm text-muted-foreground mb-3">IT Coordinator</p>
              <p className="text-sm text-muted-foreground">Office: Garrett Hall L056</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
