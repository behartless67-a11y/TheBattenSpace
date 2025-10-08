import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function OnboardingPage() {
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

      <main className="w-full max-w-[1600px] mx-auto px-8 py-12">
        <div className="bg-card/95 backdrop-blur-sm rounded-lg border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] p-8">
          <h1 className="text-4xl font-bold text-primary mb-6">Onboarding and Offboarding Process</h1>

          <p className="text-lg mb-6">
            Onboarding and Offboarding a new staff member at the Frank Batten School of Leadership and Public Policy has a new process detailed below.
          </p>

          <div className="bg-accent/10 border-l-4 border-accent p-4 mb-8">
            <p className="text-sm">
              <strong>Note:</strong> If you are a manager or are onboarding a new staff member, below are additional instructions on this process. Please familiarize yourself with this entire process prior to starting on for the first time.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">Batten Onboarding Check List</h2>

          <h3 className="text-xl font-semibold text-primary mb-4 mt-6">Onboarding Process</h3>

          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                  1
                </div>
              </div>
              <div>
                <p className="text-foreground">
                  The manager is to submit the form below. Fill out ALL fields with the most accurate information possible.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                  2
                </div>
              </div>
              <div>
                <p className="text-foreground">
                  The form will send you an email confirming receipt.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                  3
                </div>
              </div>
              <div>
                <p className="text-foreground">
                  The form sends a request for the new staff member to be added to the full onboarding &quot;course.&quot;
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                  4
                </div>
              </div>
              <div>
                <p className="text-foreground">
                  The new staff member completes the course and the manager is notified via a form within the course.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border-2 border-primary rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Onboarding Form</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="employeeName" className="block text-sm font-semibold text-foreground mb-2">
                  1. New Employee Name? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="employeeName"
                  className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-foreground mb-2">
                  2. Title? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-semibold text-foreground mb-2">
                  3. Start Date? <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="startDate"
                  className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="personalEmail" className="block text-sm font-semibold text-foreground mb-2">
                  4. Personal Email Address? <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="personalEmail"
                  className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="personalPhone" className="block text-sm font-semibold text-foreground mb-2">
                  5. Personal Phone Number? <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="personalPhone"
                  className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="hiringManager" className="block text-sm font-semibold text-foreground mb-2">
                  6. Hiring Manager? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="hiringManager"
                  className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="onboardingBuddy" className="block text-sm font-semibold text-foreground mb-2">
                  7. Onboarding Buddy? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="onboardingBuddy"
                  className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="dietaryRestrictions" className="block text-sm font-semibold text-foreground mb-2">
                  8. Dietary Restrictions?
                </label>
                <input
                  type="text"
                  id="dietaryRestrictions"
                  className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  9. Marketing Cloud Access Needed? <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="marketingCloud"
                      value="yes"
                      className="mr-2 w-4 h-4 text-accent focus:ring-accent"
                      required
                    />
                    <span className="text-foreground">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="marketingCloud"
                      value="no"
                      className="mr-2 w-4 h-4 text-accent focus:ring-accent"
                      required
                    />
                    <span className="text-foreground">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  10. Will this hire be doing student advising? <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="studentAdvising"
                      value="yes"
                      className="mr-2 w-4 h-4 text-accent focus:ring-accent"
                      required
                    />
                    <span className="text-foreground">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="studentAdvising"
                      value="no"
                      className="mr-2 w-4 h-4 text-accent focus:ring-accent"
                      required
                    />
                    <span className="text-foreground">No</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          <h3 className="text-xl font-semibold text-primary mb-4">Please Note</h3>

          <ul className="list-disc list-inside space-y-3 mb-8 ml-4">
            <li className="text-foreground">
              New staff members will be paired with a mentor or buddy by the hiring manager. The mentor can provide guidance and answer any questions during the initial weeks. Also, the mentor helps facilitate introductions to colleagues and assists with navigating daily operations and workflows.
            </li>
            <li className="text-foreground">
              The onboarding process also includes training sessions tailored to the specific role, ensuring the new hire is well-equipped with the knowledge and skills necessary to perform their duties effectively. Regular check-ins with supervisors are conducted to address any concerns and provide feedback.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-primary mb-4 mt-8">Offboarding Process</h3>

          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                  1
                </div>
              </div>
              <div>
                <p className="text-foreground">
                  The staff member (or manager) leaving Batten notifies{' '}
                  <a href="mailto:battensupport@virginia.edu" className="text-accent hover:underline">
                    battensupport@virginia.edu
                  </a>{' '}
                  of their departure date.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                  2
                </div>
              </div>
              <div>
                <p className="text-foreground">
                  Upon receipt of the request, the staff member is placed into the offboarding course.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                  3
                </div>
              </div>
              <div>
                <p className="text-foreground">
                  Upon completion, the form within the course confirming completion is filled out and an email is sent to{' '}
                  <a href="mailto:battensupport@virginia.edu" className="text-accent hover:underline">
                    battensupport@virginia.edu
                  </a>{' '}
                  to notify Batten staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
