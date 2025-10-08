import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DepartmentNav } from '@/components/department-nav';

export default function MeetingRoomTech() {
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
          <span>Meeting Room Technology</span>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-primary mb-4">Meeting Room Technology</h1>
          <div className="w-24 h-1 bg-accent mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            Learn how to use AV equipment, Zoom Rooms, and presentation technology
          </p>
          <DepartmentNav />
        </div>

        {/* Room Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* 2420 Old Ivy */}
          <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all rounded-2xl overflow-hidden">
            <div className="bg-primary/10 p-8 border-b-2 border-primary">
              <h2 className="text-3xl font-bold text-primary mb-2">2420 Old Ivy</h2>
              <p className="text-muted-foreground">Rooms 131 & 133</p>
            </div>
            <div className="p-8">
              <h3 className="font-bold text-primary mb-3">Room Features:</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Crestron-controlled AV system
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Zoom Room integration
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Wireless presentation (AirTame)
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Professional audio system
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Automated lighting and shades
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Divided or combined room modes
                </li>
              </ul>

              <div className="bg-accent/10 border-2 border-accent/30 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-primary mb-2">Room Modes:</p>
                <p className="text-sm text-muted-foreground"><strong>Divided:</strong> Each room operates independently</p>
                <p className="text-sm text-muted-foreground"><strong>Combined:</strong> Single large space with full microphone access</p>
              </div>

              <a
                href="#"
                className="block text-center px-6 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all"
              >
                View Old Ivy Instructions
              </a>
            </div>
          </div>

          {/* Great Hall */}
          <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all rounded-2xl overflow-hidden">
            <div className="bg-primary/10 p-8 border-b-2 border-primary">
              <h2 className="text-3xl font-bold text-primary mb-2">Great Hall</h2>
              <p className="text-muted-foreground">Garrett Hall</p>
            </div>
            <div className="p-8">
              <h3 className="font-bold text-primary mb-3">Room Features:</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Advanced presentation capabilities
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Zoom Room integration
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Professional AV controls
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Multiple display screens
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Advanced sound system
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Large capacity venue
                </li>
              </ul>

              <div className="bg-accent/10 border-2 border-accent/30 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-primary mb-2">Best For:</p>
                <p className="text-sm text-muted-foreground">Large presentations, town halls, guest speakers, and special events</p>
              </div>

              <a
                href="#"
                className="block text-center px-6 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all"
              >
                View Great Hall Instructions
              </a>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Common Troubleshooting</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-accent pl-4">
              <h3 className="font-bold text-primary mb-2">Displays Not Working</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Check power connections and settings</li>
                <li>• Verify input source selection</li>
                <li>• Restart control system if needed</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-4">
              <h3 className="font-bold text-primary mb-2">Audio Issues</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Check microphone mute status</li>
                <li>• Verify audio levels in system</li>
                <li>• Confirm Zoom Room audio settings</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-4">
              <h3 className="font-bold text-primary mb-2">Control Panel Unresponsive</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Perform soft reset of system</li>
                <li>• Check network connectivity</li>
                <li>• Verify power to control panel</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-4">
              <h3 className="font-bold text-primary mb-2">Projection Problems</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Verify projector power status</li>
                <li>• Check screen position (up/down)</li>
                <li>• Test with different input sources</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Support Contact */}
        <div className="bg-primary/95 backdrop-blur border-2 border-accent shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">Need Technical Support?</h2>
              <p className="text-primary-foreground/90 mb-2">For AV system issues, contact Spectrum Integrators (our vendor)</p>
              <p className="text-primary-foreground/90">Phone: (434) 977-2797 ext. 3</p>
              <p className="text-primary-foreground/90">Email: support@spectrumintegrators.com</p>
            </div>
            <a
              href="mailto:battensupport@virginia.edu"
              className="px-8 py-4 rounded-lg text-lg font-semibold bg-accent text-white hover:bg-accent/90 shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)] transition-all whitespace-nowrap"
            >
              Contact Batten IT
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
