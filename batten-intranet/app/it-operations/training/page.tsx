import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DepartmentNav } from '@/components/department-nav';

export default function ITTraining() {
  const upcomingSessions = [
    {
      title: 'Leveraging AI',
      date: 'October 21, 2025 at 9:30am',
      location: 'Zoom',
      description: 'Explore practical applications of AI tools to enhance your productivity and work efficiency.',
      topics: ['AI tools overview', 'Practical AI applications', 'Productivity enhancement', 'Best practices']
    },
    {
      title: 'Work on the Go',
      date: 'November 11, 2025 at 9:30am',
      location: 'Zoom',
      description: 'Learn to stay productive while mobile with tips for syncing your phone and laptop. Bring both devices for hands-on practice!',
      topics: ['Mobile productivity', 'Device syncing', 'Cloud access', 'Mobile security']
    },
    {
      title: 'Deep Dive: Making Outlook Work for You',
      date: 'January 21, 2026 at 9:30am',
      location: 'Zoom',
      description: 'Master email management, calendar features, and productivity tips in Outlook. Includes review of mailing lists.',
      topics: ['Email organization', 'Calendar management', 'Mailing list review', 'Rules and filters']
    },
    {
      title: 'TBD',
      date: 'February 17, 2026 at 9:30am',
      location: 'Zoom',
      description: 'Topic to be determined - check back for updates or suggest a topic!',
      topics: []
    },
    {
      title: 'TBD',
      date: 'March 17, 2026 at 9:30am',
      location: 'Zoom',
      description: 'Topic to be determined - check back for updates or suggest a topic!',
      topics: []
    },
  ];

  const pastSessions = [
    {
      title: 'Deep Dive: OneDrive and File Management',
      date: 'September 16, 2025',
      materials: ['Agenda', 'Recording']
    },
    {
      title: 'Keyboard Shortcuts and Tips',
      date: 'July 2025',
      materials: ['Windows/macOS shortcuts cheat sheet']
    },
  ];

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
          <span>IT Training (BITS)</span>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-primary mb-4">IT Training (BITS)</h1>
          <div className="w-24 h-1 bg-accent mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            Batten IT Sessions - Technology training for faculty and staff
          </p>
          <DepartmentNav />
        </div>

        {/* What is BITS */}
        <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">What is BITS?</h2>
          <p className="text-muted-foreground mb-6">
            Batten IT Sessions (BITS) are regular technology training sessions designed to help faculty and staff become more productive with the tools they use every day. Each session includes presentations, demonstrations, and hands-on practice with technology topics relevant to your work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h3 className="font-bold text-primary mb-1">Interactive</h3>
              <p className="text-sm text-muted-foreground">Hands-on learning with real examples</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="font-bold text-primary mb-1">Collaborative</h3>
              <p className="text-sm text-muted-foreground">Learn from peers and share tips</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="m3 11 18-5v12L3 14v-3z"/>
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
                </svg>
              </div>
              <h3 className="font-bold text-primary mb-1">Practical</h3>
              <p className="text-sm text-muted-foreground">Skills you can use immediately</p>
            </div>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Upcoming Sessions</h2>
          {upcomingSessions.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {upcomingSessions.map((session, index) => (
                <div
                  key={index}
                  className="bg-background/95 backdrop-blur border-2 border-accent shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all rounded-2xl p-8"
                >
                  <div className="flex items-start justify-between gap-6 flex-wrap">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                          {session.date}
                        </span>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                          📍 {session.location}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-3">{session.title}</h3>
                      <p className="text-muted-foreground mb-4">{session.description}</p>
                      {session.topics.length > 0 && (
                        <div>
                          <p className="font-semibold text-primary mb-2">Topics Covered:</p>
                          <ul className="grid grid-cols-2 gap-2">
                            {session.topics.map((topic, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                                  <path d="M20 6 9 17l-5-5"/>
                                </svg>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <a
                      href="mailto:battensupport@virginia.edu?subject=BITS%20Registration"
                      className="flex-shrink-0 px-8 py-4 rounded-lg font-semibold bg-accent text-white hover:bg-accent/90 shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)] transition-all whitespace-nowrap"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8 text-center">
              <p className="text-muted-foreground mb-4">No upcoming sessions scheduled at this time. Check back soon!</p>
              <a
                href="mailto:battensupport@virginia.edu?subject=BITS%20Training%20Interest"
                className="inline-block text-primary hover:text-accent font-semibold"
              >
                Email us to suggest a topic →
              </a>
            </div>
          )}
        </div>

        {/* Past Sessions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Past Sessions & Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastSessions.map((session, index) => (
              <div
                key={index}
                className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-semibold text-muted-foreground">{session.date}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{session.title}</h3>
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">Available Materials:</p>
                  <ul className="space-y-1">
                    {session.materials.map((material, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="7 10 12 15 17 10"/>
                          <line x1="12" x2="12" y1="15" y2="3"/>
                        </svg>
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Quick Reference Guides</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-2 text-primary hover:text-accent font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" x2="12" y1="15" y2="3"/>
                  </svg>
                  Windows/macOS Keyboard Shortcuts
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-primary hover:text-accent font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" x2="12" y1="15" y2="3"/>
                  </svg>
                  AI Tools Cheat Sheet
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-primary hover:text-accent font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" x2="12" y1="15" y2="3"/>
                  </svg>
                  Outlook Tips & Tricks
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Request a Topic</h3>
            <p className="text-muted-foreground mb-6">
              Have a technology topic you&apos;d like to learn more about? Suggest it for an upcoming BITS session!
            </p>
            <a
              href="mailto:battensupport@virginia.edu?subject=BITS%20Topic%20Suggestion"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all"
            >
              Suggest a Topic
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
