import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DepartmentNav } from '@/components/department-nav';

export default function WiFiSetup() {
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
          <span>WiFi Setup</span>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-primary mb-4">WiFi Setup</h1>
          <div className="w-24 h-1 bg-accent mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            Connect your computer or mobile device to the UVA wireless network
          </p>
          <DepartmentNav />
        </div>

        {/* Network Options */}
        <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">UVA Network Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">UVA (Recommended)</h3>
              <p className="text-muted-foreground mb-3">
                The primary secure network for UVA faculty, staff, and students. Requires UVA Computing ID credentials.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Most secure option</li>
                <li>• Best performance</li>
                <li>• Access to university resources</li>
                <li>• Automatic device registration</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent/50 pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">eduroam</h3>
              <p className="text-muted-foreground mb-3">
                International education roaming network. Use when visiting other universities or when UVA network is unavailable.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Format: computingid@virginia.edu</li>
                <li>• Works at participating institutions worldwide</li>
                <li>• Same credentials as UVA network</li>
                <li>• Fallback option</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Setup Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Computer Setup */}
          <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all rounded-2xl overflow-hidden">
            <div className="bg-primary/10 p-8 border-b-2 border-primary flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 21h8"/>
                <path d="M12 17v4"/>
              </svg>
              <div>
                <h2 className="text-3xl font-bold text-primary">Computer</h2>
                <p className="text-muted-foreground">Windows & Mac setup</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-bold text-primary mb-4">Connection Steps:</h3>
              <ol className="space-y-3 text-muted-foreground mb-6 list-decimal list-inside">
                <li>Open WiFi settings on your computer</li>
                <li>Select "UVA" network from available networks</li>
                <li>Enter your UVA Computing ID</li>
                <li>Enter your UVA password</li>
                <li>Accept the security certificate if prompted</li>
              </ol>

              <div className="bg-accent/10 border-2 border-accent/30 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-primary mb-2">First Time Setup:</p>
                <p className="text-sm text-muted-foreground">You may need to register your device at <a href="https://netreg.virginia.edu" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">netreg.virginia.edu</a> before connecting.</p>
              </div>

              <a
                href="#"
                className="block text-center px-6 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all"
              >
                Download Computer Guide
              </a>
            </div>
          </div>

          {/* Mobile Setup */}
          <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all rounded-2xl overflow-hidden">
            <div className="bg-primary/10 p-8 border-b-2 border-primary flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                <path d="M12 18h.01"/>
              </svg>
              <div>
                <h2 className="text-3xl font-bold text-primary">Mobile Device</h2>
                <p className="text-muted-foreground">iPhone & Android setup</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-bold text-primary mb-4">Connection Steps:</h3>
              <ol className="space-y-3 text-muted-foreground mb-6 list-decimal list-inside">
                <li>Open WiFi settings on your device</li>
                <li>Select "UVA" network</li>
                <li>Enter your UVA Computing ID</li>
                <li>Enter your UVA password</li>
                <li>Trust the certificate when prompted</li>
              </ol>

              <div className="bg-accent/10 border-2 border-accent/30 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-primary mb-2">iOS Tip:</p>
                <p className="text-sm text-muted-foreground">Go to Settings → WiFi → Tap (i) next to UVA → Verify certificate is trusted</p>
              </div>

              <a
                href="#"
                className="block text-center px-6 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all"
              >
                Download Mobile Guide
              </a>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Troubleshooting WiFi Issues</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">Cannot Connect to UVA Network</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Solutions:</strong>
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Verify your Computing ID and password are correct</li>
                <li>• Check if device is registered at netreg.virginia.edu</li>
                <li>• Try removing and re-adding the network</li>
                <li>• For eduroam: Use full email format (computingid@virginia.edu)</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">Slow or Intermittent Connection</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Solutions:</strong>
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Check signal strength - move closer to access point</li>
                <li>• Clear WiFi cache on your device</li>
                <li>• Try different network (switch between UVA and eduroam)</li>
                <li>• Restart wireless adapter or device</li>
                <li>• Check for bandwidth-heavy apps running</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">Certificate Errors</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Solutions:</strong>
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Accept/trust the UVA certificate when prompted</li>
                <li>• Verify certificate issuer is "InCommon RSA Server CA"</li>
                <li>• Update device operating system</li>
                <li>• Remove old WiFi profiles and reconnect</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">Device-Specific Issues</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Solutions:</strong>
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• <strong>iOS/Android:</strong> Forget network and reconnect</li>
                <li>• <strong>Windows:</strong> Run network troubleshooter</li>
                <li>• <strong>macOS:</strong> Reset network settings if issues persist</li>
                <li>• Check manufacturer support for device-specific WiFi issues</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Guest WiFi</h3>
            <p className="text-muted-foreground mb-4">
              Visitors can connect to "UVA-Guest" network for temporary internet access without UVA credentials.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Open network (no password required)</li>
              <li>• Register through web portal</li>
              <li>• Limited duration access</li>
              <li>• Suitable for conferences and events</li>
            </ul>
          </div>

          <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Still Need Help?</h3>
            <p className="text-muted-foreground mb-6">
              Contact our IT team or UVA IT for assistance with network connectivity issues.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:battensupport@virginia.edu"
                className="block text-center px-6 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all"
              >
                Email Batten IT
              </a>
              <a
                href="https://virginia.service-now.com/its"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary/10 transition-all"
              >
                Contact UVA IT
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
