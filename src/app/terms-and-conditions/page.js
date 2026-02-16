export default function TermsAndConditionsPage() {
  const lastUpdated = "February 16, 2026";

  return (
    <section className="px-4 py-10 md:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: {lastUpdated}</p>

        <div className="mt-8 space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By using this website, you agree to these terms and conditions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">2. Use of Website</h2>
            <p className="mt-2">
              You agree to use this website only for lawful purposes and not to misuse any content
              or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">3. Product and Service Information</h2>
            <p className="mt-2">
              Product details are shared for general information and may change without prior
              notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">4. Limitation of Liability</h2>
            <p className="mt-2">
              We are not liable for any direct or indirect loss arising from the use of this
              website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">5. Contact Information</h2>
            <p className="mt-2">
              For questions about these terms, contact:{" "}
              <span className="font-medium">support@ahpharmacy.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
