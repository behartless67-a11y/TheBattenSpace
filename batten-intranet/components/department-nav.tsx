import Link from 'next/link';

export function DepartmentNav() {
  return (
    <nav className="w-full py-4 mb-8 overflow-x-auto">
      <div className="flex items-center justify-center gap-2 px-4 min-w-max">
        <Link
          href="/home"
          className="flex-shrink-0 py-3 px-3 rounded-lg text-xs md:text-sm font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
        >
          Home
        </Link>
        <Link
          href="/news"
          className="flex-shrink-0 py-3 px-3 rounded-lg text-xs md:text-sm font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
        >
          News
        </Link>
        <Link
          href="/staff-directory"
          className="flex-shrink-0 py-3 px-3 rounded-lg text-xs md:text-sm font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
        >
          Staff Directory
        </Link>
        <Link
          href="/academics"
          className="flex-shrink-0 py-3 px-3 rounded-lg text-xs md:text-sm font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
        >
          Academics
        </Link>
        <Link
          href="/admissions"
          className="flex-shrink-0 py-3 px-3 rounded-lg text-xs md:text-sm font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
        >
          Admissions
        </Link>
        <Link
          href="/career-services"
          className="flex-shrink-0 py-3 px-3 rounded-lg text-xs md:text-sm font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
        >
          Career Services
        </Link>
        <Link
          href="/marcom"
          className="flex-shrink-0 py-3 px-3 rounded-lg text-xs md:text-sm font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
        >
          MarCom
        </Link>
        <Link
          href="/faculty"
          className="flex-shrink-0 py-3 px-3 rounded-lg text-xs md:text-sm font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
        >
          Faculty
        </Link>
        <Link
          href="/finance"
          className="flex-shrink-0 py-3 px-3 rounded-lg text-xs md:text-sm font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
        >
          Finance
        </Link>
        <Link
          href="/student-services"
          className="flex-shrink-0 py-3 px-3 rounded-lg text-xs md:text-sm font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
        >
          Student Services
        </Link>
        <Link
          href="/it-operations"
          className="flex-shrink-0 py-3 px-3 rounded-lg text-xs md:text-sm font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
        >
          IT and Operations
        </Link>
        <Link
          href="/teaching"
          className="flex-shrink-0 py-3 px-3 rounded-lg text-xs md:text-sm font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center whitespace-nowrap"
        >
          Teaching
        </Link>
      </div>
    </nav>
  );
}
