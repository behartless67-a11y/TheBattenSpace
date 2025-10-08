import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function EmailLists() {
  const emailLists = [
    {
      name: 'FBS_Staff@virginia.edu',
      contains: 'All Batten Staff',
      managedBy: 'IT',
      useCases: [
        'Invitations to community events (i.e. BH)',
        'Requests for volunteering / sign-ups',
        'Staff meetings & retreats',
        'Invitations to employee events'
      ]
    },
    {
      name: 'FBS_Faculty_Core@virginia.edu',
      contains: 'Batten Core Faculty',
      managedBy: 'Associate Dean, Faculty Affairs',
      useCases: [
        'Official faculty communications',
        'Invitations to community events (i.e. BH)',
        'Invitations to employee events',
        'Teaching or student-related (i.e. award nominations)'
      ]
    },
    {
      name: 'FBS_Teaching_25-26_Fall@virginia.edu',
      contains: 'All faculty (core, postdocs, UVA, adjuncts) teaching in a given semester',
      managedBy: 'Academic Operations, Faculty Affairs',
      useCases: [
        'Official teaching communications',
        'Invitations to community events (i.e. BH)',
        'Invitations to employee social events, as appropriate',
        'Teaching or student-related (i.e. career services)'
      ],
      note: '(updated each semester)'
    },
    {
      name: 'FBS_Faculty_Adjunct@virginia.edu',
      contains: 'Batten Adjunct Faculty',
      managedBy: 'Associate Dean, Faculty Affairs',
      useCases: [
        'Invitations to community events (i.e. BH)',
        'Communications from the Dean, as relevant'
      ]
    },
    {
      name: 'FBS_Faculty_Affiliated@virginia.edu',
      contains: 'Batten Affiliated Faculty',
      managedBy: 'Associate Dean, Faculty Affairs',
      useCases: [
        'Invitations to community events (i.e. BH)',
        'Communications from the Dean, as relevant'
      ]
    },
    {
      name: 'FBS_BA2026@virginia.edu',
      contains: '2026 BA Student Cohort',
      managedBy: 'Academics and IT',
      useCases: [
        'Student engagement communications',
        'Academics / students success communications',
        'Career & Alumni communications',
        'Select student leaders to contact their cohorts'
      ]
    },
    {
      name: 'FBS_BA2027@virginia.edu',
      contains: '2027 BA Student Cohort',
      managedBy: 'Academics and IT',
      useCases: [
        'Student engagement communications',
        'Academics / students success communications',
        'Career & Alumni communications',
        'Select student leaders to contact their cohorts'
      ]
    },
    {
      name: 'FBS_MPP2026@virginia.edu',
      contains: '2026 MPP Student Cohort',
      managedBy: 'Academics and IT',
      useCases: [
        'Student engagement communications',
        'Academics / students success communications',
        'Career & Alumni communications',
        'Select student leaders to contact their cohorts'
      ]
    },
    {
      name: 'FBS_MPP2027@virginia.edu',
      contains: '2027 MPP Student Cohort',
      managedBy: 'Academics and IT',
      useCases: [
        'Student engagement communications',
        'Academics / students success communications',
        'Career & Alumni communications',
        'Select student leaders to contact their cohorts'
      ]
    },
    {
      name: 'FBS_Accel2026@virginia.edu',
      contains: '2026 Accel Student Cohort',
      managedBy: 'Academics and IT',
      useCases: [
        'Student engagement communications',
        'Academics / students success communications',
        'Career & Alumni communications',
        'Select student leaders to contact their cohorts'
      ]
    },
    {
      name: 'FBS_Accel2027@virginia.edu',
      contains: '2027 Accel Student Cohort',
      managedBy: 'Academics and IT',
      useCases: [
        'Student engagement communications',
        'Academics / students success communications',
        'Career & Alumni communications',
        'Select student leaders to contact their cohorts'
      ]
    },
    {
      name: 'FBS_Minor2026@virginia.edu',
      contains: '2026 Minor Student Cohort',
      managedBy: 'Academics and IT',
      useCases: [
        'Student engagement communications',
        'Academics / students success communications',
        'Career & Alumni communications',
        'Select student leaders to contact their cohorts'
      ]
    },
    {
      name: 'FBS_Minor2027@virginia.edu',
      contains: '2027 Minor Student Cohort',
      managedBy: 'Academics and IT',
      useCases: [
        'Student engagement communications',
        'Academics / students success communications',
        'Career & Alumni communications',
        'Select student leaders to contact their cohorts'
      ]
    },
    {
      name: 'FBS_ResearchStaff@virginia.edu',
      contains: 'FBS Research Staff',
      managedBy: 'Academics and IT',
      useCases: [
        'Invitations to community events (i.e. BH)',
        'Invitations to employee social events',
        'Communications from the Dean, as relevant'
      ]
    }
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

      <main className="w-full max-w-7xl mx-auto px-8 py-8">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-primary">Email Lists</h1>
          <div className="w-24 h-1 bg-accent mb-6"></div>
          <p className="text-lg text-muted-foreground mb-4">
            To view owners and moderators:{' '}
            <a
              href="/Mailing List Owners and Moderators.xlsx"
              className="text-accent hover:text-accent/80 underline"
            >
              Mailing List Owners and Moderators.xlsx
            </a>
          </p>

          {/* Department Navigation */}
          <nav className="w-full py-4 mt-8">
            <div className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide flex-wrap">
              <Link
                href="/"
                className="w-40 py-3 rounded-lg text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center"
              >
                Home
              </Link>
              <Link
                href="/news"
                className="w-40 py-3 rounded-lg text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center"
              >
                News
              </Link>
              <Link
                href="/staff-directory"
                className="w-40 py-3 rounded-lg text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center"
              >
                Staff Directory
              </Link>
              <Link
                href="/academics"
                className="w-40 py-3 rounded-lg text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center"
              >
                Academics
              </Link>
              <Link
                href="/admissions"
                className="w-40 py-3 rounded-lg text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center"
              >
                Admissions
              </Link>
              <Link
                href="/career-services"
                className="w-40 py-3 rounded-lg text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center"
              >
                Career Services
              </Link>
              <Link
                href="/marcom"
                className="w-40 py-3 rounded-lg text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center"
              >
                MarCom
              </Link>
              <Link
                href="/faculty"
                className="w-40 py-3 rounded-lg text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center"
              >
                Faculty
              </Link>
              <Link
                href="/finance"
                className="w-40 py-3 rounded-lg text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center"
              >
                Finance
              </Link>
              <Link
                href="/student-services"
                className="w-40 py-3 rounded-lg text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center"
              >
                Student Services
              </Link>
              <Link
                href="/it-operations"
                className="w-40 py-3 rounded-lg text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center"
              >
                IT and Operations
              </Link>
              <Link
                href="/teaching"
                className="w-40 py-3 rounded-lg text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center"
              >
                Teaching
              </Link>
            </div>
          </nav>
        </div>

        {/* Email Lists Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {emailLists.map((list, index) => (
            <Card
              key={index}
              className="border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_8px_24px_rgba(35,45,75,0.6)] transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary flex items-start justify-between gap-2">
                  {list.name.includes('@virginia.edu') ? (
                    <a
                      href={`mailto:?bcc=${list.name}`}
                      className="break-all hover:text-accent transition-colors underline"
                    >
                      {list.name}
                    </a>
                  ) : (
                    <span className="break-all">{list.name}</span>
                  )}
                  {list.note && (
                    <span className="text-xs font-normal text-muted-foreground whitespace-nowrap">
                      {list.note}
                    </span>
                  )}
                </CardTitle>
                <CardDescription>
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold text-foreground">Contains:</span> {list.contains}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Managed By:</span> {list.managedBy}
                    </p>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="font-semibold text-foreground mb-2">Use Cases:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {list.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
