export default function PrivacyPolicyPage() {
  const lastUpdated = "February 16, 2026";

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-sm space-y-6 text-slate-700 dark:text-slate-300">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Privacy Policy</h1>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Last updated: {lastUpdated}</p>
        </div>

        <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Information We Collect</h2>
            <p className="mt-1 text-sm leading-relaxed">
              We may collect your name, email address, phone number, and enquiry details when you submit forms on this website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. How We Use Information</h2>
            <p className="mt-1 text-sm leading-relaxed">
              We use your information strictly to respond to customer inquiries, coordinate product delivery, and provide order assistance.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Data Protection</h2>
            <p className="mt-1 text-sm leading-relaxed">
              We maintain appropriate technical safeguards to protect your personal details against unauthorized disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Third-Party Services</h2>
            <p className="mt-1 text-sm leading-relaxed">
              Enquiry submissions are managed securely through verified cloud integrations such as Google Apps Script.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Contact Us</h2>
            <p className="mt-1 text-sm leading-relaxed">
              For any privacy inquiries, reach us at: <span className="font-semibold text-emerald-600 dark:text-emerald-400">ahpharmacy@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
