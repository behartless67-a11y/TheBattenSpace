import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DepartmentNav } from '@/components/department-nav';

export default function SoftwareTools() {
  const tools = [
    {
      name: 'Canvas LMS',
      description: 'Learning management system for course materials, assignments, and grades',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
        </svg>
      ),
      links: [
        { text: 'Canvas Login', href: 'https://canvas.its.virginia.edu/', external: true },
        { text: 'Canvas Resources', href: '#' },
        { text: 'Grade Export Guide', href: '#' },
      ]
    },
    {
      name: 'Microsoft 365',
      description: 'Email, OneDrive, Teams, and Office applications for collaboration',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      links: [
        { text: 'Office 365 Portal', href: 'https://office365.virginia.edu/', external: true },
        { text: 'OneDrive Guide', href: '#' },
        { text: 'Teams Support', href: '#' },
      ]
    },
    {
      name: 'Zoom',
      description: 'Video conferencing for meetings, classes, and virtual events',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 7l-7 5 7 5V7z"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
      ),
      links: [
        { text: 'Zoom Login', href: 'https://virginia.zoom.us/', external: true },
        { text: 'Zoom Room Guides', href: '/it-operations/meeting-rooms' },
        { text: 'Zoom Support', href: 'https://virginia.service-now.com/its', external: true },
      ]
    },
    {
      name: 'Grouper',
      description: 'Access management system for group memberships and permissions',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 21a8 8 0 0 0-16 0"/>
          <circle cx="10" cy="8" r="5"/>
          <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/>
        </svg>
      ),
      links: [
        { text: 'What is Grouper?', href: '#' },
        { text: 'Access Grouper', href: 'https://grouper.virginia.edu/', external: true },
      ]
    },
    {
      name: 'Trumba Calendar',
      description: 'Event calendar management for scheduling and publishing events',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
          <line x1="16" x2="16" y1="2" y2="6"/>
          <line x1="8" x2="8" y1="2" y2="6"/>
          <line x1="3" x2="21" y1="10" y2="10"/>
        </svg>
      ),
      links: [
        { text: 'Trumba Login', href: 'https://www.trumba.com/', external: true },
        { text: 'Calendar Guide', href: '#' },
      ]
    },
    {
      name: 'UVA Workday',
      description: 'Human resources and financial management system',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      links: [
        { text: 'Workday Login', href: 'https://workday.virginia.edu/', external: true },
        { text: 'Workday Help', href: 'https://virginiaworkday.service-now.com/wd', external: true },
      ]
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
          <span>Software & Tools</span>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-primary mb-4">Software & Tools</h1>
          <div className="w-24 h-1 bg-accent mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            Access guides and resources for essential software platforms
          </p>
          <DepartmentNav />
        </div>

        {/* Software Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all rounded-2xl p-8"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                {tool.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-primary mb-3">{tool.name}</h3>
              <p className="text-muted-foreground mb-6">{tool.description}</p>

              {/* Links */}
              <div className="space-y-2">
                {tool.links.map((link, index) => (
                  link.external ? (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:text-accent font-semibold transition-colors flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                      {link.text}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      href={link.href}
                      className="block text-primary hover:text-accent font-semibold transition-colors flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                      {link.text}
                    </Link>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Additional Software Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">Software Downloads</h3>
              <p className="text-muted-foreground mb-3">
                Access UVA-licensed software including Microsoft Office, Adobe Creative Cloud, and specialized academic software.
              </p>
              <a
                href="https://virginia.service-now.com/its?id=itsweb_kb_article&sys_id=2ca18093db7ac744f032f1f51d96191f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent font-semibold"
              >
                Visit UVA Software Gateway →
              </a>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">Specialized Academic Software</h3>
              <p className="text-muted-foreground mb-3">
                Statistical packages (Stata, SPSS, R), data analysis tools, and research software for faculty and students.
              </p>
              <a
                href="mailto:battensupport@virginia.edu"
                className="text-primary hover:text-accent font-semibold"
              >
                Contact IT for Software Requests →
              </a>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">VPN Access</h3>
              <p className="text-muted-foreground mb-3">
                Connect to UVA resources securely from off-campus using the university VPN service.
              </p>
              <a
                href="https://virginia.service-now.com/its?id=itsweb_kb_article&sys_id=f24e5cdfdb3acb804f32fb671d9619d0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent font-semibold"
              >
                UVA VPN Setup Guide →
              </a>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">Two-Factor Authentication</h3>
              <p className="text-muted-foreground mb-3">
                Secure your UVA account with multi-factor authentication using Duo Mobile.
              </p>
              <a
                href="https://virginia.service-now.com/its?id=itsweb_kb_article&sys_id=d9e54727db3dbb80f032f1f51d9619ec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent font-semibold"
              >
                Setup Duo MFA →
              </a>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-primary/95 backdrop-blur border-2 border-accent shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">Need Software Support?</h2>
              <p className="text-primary-foreground/90">
                Contact Batten IT for assistance with software installation, licensing, or troubleshooting.
              </p>
            </div>
            <div className="space-x-4">
              <a
                href="mailto:battensupport@virginia.edu"
                className="inline-block px-8 py-4 rounded-lg text-lg font-semibold bg-accent text-white hover:bg-accent/90 shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)] transition-all whitespace-nowrap"
              >
                Email Batten IT
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
