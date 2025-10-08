import Image from 'next/image';
import Link from 'next/link';
import { SocialMediaButtons } from './social-media-buttons';

export function Header() {
  return (
    <>
      <SocialMediaButtons />
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full flex flex-col">
        {/* Top bar */}
        <div className="flex h-16 items-center px-8">
          <div className="flex items-center gap-6 flex-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">B</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">BATTEN</span>
                  <span className="text-xs text-muted-foreground">Digital Commons</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground absolute left-1/2 transform -translate-x-1/2">
            <span>Charlottesville, VA</span>
            <span className="text-foreground font-semibold">77°F</span>
            <span>Mostly cloudy</span>
          </div>

          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="text-sm text-muted-foreground">
              Welcome, <span className="font-medium text-foreground">User</span>
            </div>
          </div>
        </div>

        {/* Department Navigation */}
        <nav className="w-full border-t border-border py-2 px-4 bg-background/98">
          <div className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide">
            <Link
              href="/"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-card/95 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-accent/10 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all whitespace-nowrap"
            >
              Home
            </Link>
            <Link
              href="/news"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-card/95 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-accent/10 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all whitespace-nowrap"
            >
              News
            </Link>
            <Link
              href="/staff-directory"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-card/95 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-accent/10 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all whitespace-nowrap"
            >
              Staff Directory
            </Link>
            <Link
              href="/academics"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-card/95 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-accent/10 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all whitespace-nowrap"
            >
              Academics
            </Link>
            <Link
              href="/admissions"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-card/95 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-accent/10 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all whitespace-nowrap"
            >
              Admissions
            </Link>
            <Link
              href="/career-services"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-card/95 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-accent/10 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all whitespace-nowrap"
            >
              Career Services
            </Link>
            <Link
              href="/marcom"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-card/95 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-accent/10 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all whitespace-nowrap"
            >
              MarCom
            </Link>
            <Link
              href="/faculty"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-card/95 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-accent/10 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all whitespace-nowrap"
            >
              Faculty
            </Link>
            <Link
              href="/finance"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-card/95 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-accent/10 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all whitespace-nowrap"
            >
              Finance
            </Link>
            <Link
              href="/student-services"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-card/95 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-accent/10 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all whitespace-nowrap"
            >
              Student Services
            </Link>
            <Link
              href="/it-operations"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-card/95 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-accent/10 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all whitespace-nowrap"
            >
              IT and Operations
            </Link>
            <Link
              href="/teaching"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-card/95 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-accent/10 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all whitespace-nowrap"
            >
              Teaching
            </Link>
          </div>
        </nav>
      </div>
    </header>
    </>
  );
}
