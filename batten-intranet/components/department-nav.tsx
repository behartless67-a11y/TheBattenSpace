import Link from 'next/link';

export function DepartmentNav() {
  return (
    <nav className="w-full py-4 mb-8">
      <div className="flex items-center justify-center gap-4 px-4 flex-wrap">
        <Link
          href="/academics"
          className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
        >
          Academics
        </Link>
        <Link
          href="/admissions"
          className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
        >
          Admissions
        </Link>
        <Link
          href="/career-services"
          className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
        >
          Career Services
        </Link>
        <Link
          href="/email-lists"
          className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
        >
          Email Lists
        </Link>
        <Link
          href="/faculty"
          className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
        >
          Faculty
        </Link>
        <Link
          href="/finance"
          className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
        >
          Finance
        </Link>
        <Link
          href="/it-operations"
          className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
        >
          IT & Operations
        </Link>
        <Link
          href="/marcom"
          className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
        >
          MarCom
        </Link>
        <Link
          href="https://roomres.thebattenspace.org/"
          className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
        >
          Room Reservations
        </Link>
        <Link
          href="/staff-directory"
          className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
        >
          Staff Directory
        </Link>
        <Link
          href="/student-services"
          className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
        >
          Student Services
        </Link>
        <Link
          href="/teaching"
          className="flex-shrink-0 text-base md:text-lg font-extrabold text-accent hover:text-accent/80 transition-all text-center whitespace-nowrap font-sans pl-4 border-l-2 border-accent first:border-l-0 first:pl-0"
        >
          Teaching
        </Link>
      </div>
    </nav>
  );
}
