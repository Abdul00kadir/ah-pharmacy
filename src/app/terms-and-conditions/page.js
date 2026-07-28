export default function TermsAndConditionsPage() {
  const lastUpdated = "February 16, 2026";

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-sm space-y-6 text-slate-700 dark:text-slate-300">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Terms and Conditions</h1>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Last updated: {lastUpdated}</p>
        </div>

        <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
            <p className="mt-1 text-sm leading-relaxed">
              By accessing or browsing this website, you agree to abide by these Terms and Conditions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Use of Website</h2>
            <p className="mt-1 text-sm leading-relaxed">
              You agree to use this site strictly for lawful purposes and not to misuse any published content or products.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Product & Healthcare Disclaimer</h2>
            <p className="mt-1 text-sm leading-relaxed">
              Product details are provided for informational and educational purposes. Always consult qualified healthcare professionals regarding medical conditions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Limitation of Liability</h2>
            <p className="mt-1 text-sm leading-relaxed">
              AH Pharmacy shall not be liable for indirect damages or misinterpretation of product information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Contact Information</h2>
            <p className="mt-1 text-sm leading-relaxed">
              For questions regarding these terms, reach us at: <span className="font-semibold text-emerald-600 dark:text-emerald-400">ahpharmacy@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
