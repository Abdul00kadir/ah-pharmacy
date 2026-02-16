export default function PrivacyPolicyPage() {
  const lastUpdated = "February 16, 2026";

  return (
    <section className="px-4 py-10 md:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: {lastUpdated}</p>

        <div className="mt-8 space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
            <p className="mt-2">
              We may collect your name, email, phone number, and message when you submit forms on
              this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">2. How We Use Information</h2>
            <p className="mt-2">
              We use your information to respond to enquiries, improve our services, and share
              relevant updates when required.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">3. Data Protection</h2>
            <p className="mt-2">
              We use reasonable security practices to protect your personal information from
              unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">4. Third-Party Services</h2>
            <p className="mt-2">
              Some data may be processed through trusted third-party services such as Google Sheets
              for form storage and management.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">5. Contact Us</h2>
            <p className="mt-2">
              For any privacy-related questions, contact us at:{" "}
              <span className="font-medium">support@ahpharmacy.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
