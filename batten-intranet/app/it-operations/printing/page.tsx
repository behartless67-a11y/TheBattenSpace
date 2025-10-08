import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DepartmentNav } from '@/components/department-nav';

export default function PrintingSetup() {
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
          <span>Printing Setup</span>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-primary mb-4">Printing Setup</h1>
          <div className="w-24 h-1 bg-accent mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            Connect to Batten printers from your PC or Mac
          </p>
          <DepartmentNav />
        </div>

        {/* Setup Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* PC Setup */}
          <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all rounded-2xl overflow-hidden">
            <div className="bg-primary/10 p-8 border-b-2 border-primary flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect width="14" height="8" x="5" y="2" rx="2"/>
                <rect width="20" height="8" x="2" y="14" rx="2"/>
                <path d="M6 18h2"/>
                <path d="M12 18h6"/>
              </svg>
              <div>
                <h2 className="text-3xl font-bold text-primary">Windows PC</h2>
                <p className="text-muted-foreground">Setup for Windows computers</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-bold text-primary mb-4">Installation Steps:</h3>
              <ol className="space-y-3 text-muted-foreground mb-6 list-decimal list-inside">
                <li>Open Settings → Printers & Scanners</li>
                <li>Click &quot;Add printer or scanner&quot;</li>
                <li>Select network printer by IP or name</li>
                <li>Install appropriate drivers</li>
                <li>Set as default printer (optional)</li>
              </ol>

              <div className="bg-accent/10 border-2 border-accent/30 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-primary mb-2">Common Issues:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Driver not found: Download from manufacturer</li>
                  <li>• Can&apos;t find printer: Check network connection</li>
                  <li>• Print jobs stuck: Clear print queue</li>
                </ul>
              </div>

              <a
                href="#"
                className="block text-center px-6 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all"
              >
                Download PC Guide
              </a>
            </div>
          </div>

          {/* Mac Setup */}
          <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all rounded-2xl overflow-hidden">
            <div className="bg-primary/10 p-8 border-b-2 border-primary flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/>
                <path d="M10 2c1 .5 2 2 2 5"/>
              </svg>
              <div>
                <h2 className="text-3xl font-bold text-primary">macOS</h2>
                <p className="text-muted-foreground">Setup for Mac computers</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-bold text-primary mb-4">Installation Steps:</h3>
              <ol className="space-y-3 text-muted-foreground mb-6 list-decimal list-inside">
                <li>Open System Preferences → Printers & Scanners</li>
                <li>Click &quot;+&quot; to add a printer</li>
                <li>Select from network printers list</li>
                <li>macOS will download drivers automatically</li>
                <li>Configure print options and defaults</li>
              </ol>

              <div className="bg-accent/10 border-2 border-accent/30 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-primary mb-2">Common Issues:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Printer not found: Ensure on same network</li>
                  <li>• Driver issues: Update macOS</li>
                  <li>• Authentication failed: Check credentials</li>
                </ul>
              </div>

              <a
                href="#"
                className="block text-center px-6 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all"
              >
                Download Mac Guide
              </a>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Troubleshooting Common Printer Issues</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">Print Jobs Stuck in Queue</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Solution:</strong> Clear the print queue and restart the print spooler service.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Windows: Open Services → Restart &quot;Print Spooler&quot;</li>
                <li>• Mac: System Preferences → Printers → Reset printing system</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">Driver Installation Issues</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Solution:</strong> Download the latest drivers from the manufacturer&apos;s website.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Identify your printer model</li>
                <li>• Visit manufacturer website</li>
                <li>• Download drivers for your OS version</li>
                <li>• Uninstall old drivers before installing new ones</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">Network Connectivity Problems</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Solution:</strong> Verify printer IP address and network connection.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Check if printer is powered on</li>
                <li>• Verify network cable is connected (if wired)</li>
                <li>• Ping the printer IP address</li>
                <li>• Ensure you&apos;re on the correct network (not guest WiFi)</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">Authentication Failures</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Solution:</strong> Check user credentials and permissions.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Use your UVA Computing ID credentials</li>
                <li>• Verify account has printing permissions</li>
                <li>• Try removing and re-adding printer</li>
                <li>• Contact IT if credentials don&apos;t work</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Printing Policies</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                Use duplex (double-sided) printing when possible
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                Preview documents before printing
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                Contact IT for large print jobs
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                Security printing available for confidential documents
              </li>
            </ul>
          </div>

          <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Need Help?</h3>
            <p className="text-muted-foreground mb-6">
              If you&apos;re still having trouble setting up your printer or experiencing issues, our IT team is here to help.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:battensupport@virginia.edu"
                className="block text-center px-6 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all"
              >
                Email IT Support
              </a>
              <Link
                href="/it-operations/support"
                className="block text-center px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary/10 transition-all"
              >
                View All Support Options
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
