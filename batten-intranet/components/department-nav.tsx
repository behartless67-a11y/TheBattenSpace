import Link from 'next/link';

export function DepartmentNav() {
  return (
    <nav className="w-full py-4 mb-8 overflow-x-auto">
      <div className="flex items-center justify-center gap-4 px-4 min-w-max flex-wrap">
        <Link
          href="https://roomres.thebattenspace.org/"
          className="flex-shrink-0 text-xs md:text-sm font-bold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Room Reservations
        </Link>
        <Link
          href="/email-lists"
          className="flex-shrink-0 text-xs md:text-sm font-bold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Email Lists
        </Link>
        <Link
          href="/staff-directory"
          className="flex-shrink-0 text-xs md:text-sm font-bold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Staff Directory
        </Link>
        <Link
          href="/academics"
          className="flex-shrink-0 text-xs md:text-sm font-bold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Academics
        </Link>
        <Link
          href="/admissions"
          className="flex-shrink-0 text-xs md:text-sm font-bold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Admissions
        </Link>
        <Link
          href="/career-services"
          className="flex-shrink-0 text-xs md:text-sm font-bold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Career Services
        </Link>
        <Link
          href="/marcom"
          className="flex-shrink-0 text-xs md:text-sm font-bold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          MarCom
        </Link>
        <Link
          href="/faculty"
          className="flex-shrink-0 text-xs md:text-sm font-bold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Faculty
        </Link>
        <Link
          href="/finance"
          className="flex-shrink-0 text-xs md:text-sm font-bold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Finance
        </Link>
        <Link
          href="/student-services"
          className="flex-shrink-0 text-xs md:text-sm font-bold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Student Services
        </Link>
        <Link
          href="/it-operations"
          className="flex-shrink-0 text-xs md:text-sm font-bold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          IT and Operations
        </Link>
        <Link
          href="/teaching"
          className="flex-shrink-0 text-xs md:text-sm font-bold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Teaching
        </Link>
      </div>
    </nav>
  );
}
