import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DepartmentNav } from '@/components/department-nav';

export default function ITOperations() {
  const services = [
    {
      id: 'support',
      title: 'Get Help & Support',
      description: 'Submit tickets and get technical assistance from the Batten IT team for any technology-related issues or questions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/>
        </svg>
      ),
      links: [
        { text: 'View All Support Options', href: '/it-operations/support' },
        { text: 'Email Support', href: 'mailto:battensupport@virginia.edu' },
        { text: 'IT Team Directory', href: '/staff-directory' },
      ]
    },
    {
      id: 'meeting-rooms',
      title: 'Meeting Room Technology',
      description: 'Learn how to use AV equipment, Zoom Rooms, and presentation technology in 2420 Old Ivy and Great Hall.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <circle cx="12" cy="12" r="4"/>
        </svg>
      ),
      links: [
        { text: 'View Meeting Room Tech', href: '/it-operations/meeting-rooms' },
        { text: '2420 Old Ivy Instructions', href: '/it-operations/meeting-rooms' },
        { text: 'Great Hall Technology Guide', href: '/it-operations/meeting-rooms' },
      ]
    },
    {
      id: 'printing',
      title: 'Printing Setup',
      description: 'Connect to Batten printers from your PC or Mac with step-by-step instructions for driver installation and configuration.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
          <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/>
          <rect x="6" y="14" width="12" height="8" rx="1"/>
        </svg>
      ),
      links: [
        { text: 'View Printing Setup', href: '/it-operations/printing' },
        { text: 'PC Printer Setup', href: '/it-operations/printing' },
        { text: 'Mac Printer Setup', href: '/it-operations/printing' },
      ]
    },
    {
      id: 'wifi',
      title: 'WiFi Setup',
      description: 'Connect your computer or mobile device to the UVA wireless network with our configuration guides.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h.01"/>
          <path d="M8.5 16.429a5 5 0 0 1 7 0"/>
          <path d="M5 12.859a10 10 0 0 1 14 0"/>
          <path d="M2 8.82a15 15 0 0 1 20 0"/>
        </svg>
      ),
      links: [
        { text: 'View WiFi Setup', href: '/it-operations/wifi' },
        { text: 'Computer WiFi Setup', href: '/it-operations/wifi' },
        { text: 'Mobile Device Setup', href: '/it-operations/wifi' },
      ]
    },
    {
      id: 'software',
      title: 'Software & Tools',
      description: 'Access guides and resources for Canvas LMS, Zoom, Microsoft 365, and other essential software platforms.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8"/>
          <path d="M12 17v4"/>
        </svg>
      ),
      links: [
        { text: 'View All Software & Tools', href: '/it-operations/software' },
        { text: 'Canvas Resources', href: '/it-operations/software' },
        { text: 'Zoom Support', href: '/it-operations/software' },
        { text: 'Microsoft 365 Help', href: '/it-operations/software' },
      ]
    },
    {
      id: 'training',
      title: 'IT Training (BITS)',
      description: 'Join our Batten IT Sessions for hands-on training on productivity tools, shortcuts, AI tools, and technology best practices.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
          <path d="M12 2v2"/>
          <path d="M12 20v2"/>
          <path d="m4.93 4.93 1.41 1.41"/>
          <path d="m17.66 17.66 1.41 1.41"/>
          <path d="M2 12h2"/>
          <path d="M20 12h2"/>
          <path d="m6.34 17.66-1.41 1.41"/>
          <path d="m19.07 4.93-1.41 1.41"/>
        </svg>
      ),
      links: [
        { text: 'View BITS Training', href: '/it-operations/training' },
        { text: 'Upcoming Training Sessions', href: '/it-operations/training' },
        { text: 'Past Session Materials', href: '/it-operations/training' },
        { text: 'Keyboard Shortcuts Cheat Sheet', href: '/it-operations/training' },
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
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-primary mb-4">IT & Operations</h1>
          <div className="w-24 h-1 bg-accent mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            Technology resources, support, and training for the Batten School community
          </p>
          <DepartmentNav />
        </div>

        {/* Support Contact Banner */}
        <div className="mb-12 bg-primary/95 backdrop-blur border-2 border-accent shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-1">Need IT Support?</h2>
                <p className="text-primary-foreground/90">Contact our team for assistance with any technology issues</p>
              </div>
            </div>
            <a
              href="mailto:battensupport@virginia.edu"
              className="px-8 py-4 rounded-lg text-lg font-semibold bg-accent text-white hover:bg-accent/90 shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)] transition-all whitespace-nowrap"
            >
              Email Support
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all rounded-2xl p-8"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Links */}
              <div className="space-y-2">
                {service.links.map((link, index) => (
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
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* IT Team Section */}
        <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Meet the IT Team</h2>
          <p className="text-muted-foreground mb-6">
            Our dedicated IT team is here to support your technology needs. Connect with us for assistance, training, or project collaboration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <h3 className="font-bold text-primary mb-1">Mark Outten</h3>
              <p className="text-sm text-muted-foreground">Director of IT</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-primary mb-1">Ben Hartless</h3>
              <p className="text-sm text-muted-foreground">Assistant Director of IT</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-primary mb-1">Jeffrey Whelchel</h3>
              <p className="text-sm text-muted-foreground">IT Coordinator</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-primary mb-1">Nikitha Edunuri</h3>
              <p className="text-sm text-muted-foreground">Salesforce Application Manager</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-primary mb-1">Bryan Crenshaw</h3>
              <p className="text-sm text-muted-foreground">IT Team Member</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/staff-directory"
              className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors"
            >
              View Full Staff Directory
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
