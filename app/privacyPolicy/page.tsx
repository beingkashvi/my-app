import React from "react";
export default function Policy() {
    const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Privacy Policy for ResumeGenie</h1>

          <p className="text-sm text-gray-500 mb-4">
            <strong>Effective Date:</strong> {formattedDate}
          </p>
          <p className="text-sm text-gray-500 mb-8">
            <strong>Last Updated:</strong> {formattedDate}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect various types of information to improve our services and provide a better user experience:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details.</li>
              <li><strong>Resume details:</strong> Educational qualifications, work experience, and skills.</li>
              <li><strong>Non-Personal Information:</strong> Browser type, device information, IP address, and usage data.</li>
              <li>Cookies and tracking technologies to enhance user experience.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To generate and customize resumes.</li>
              <li>To improve website functionality and user experience.</li>
              <li>To communicate updates, offers, and important notifications.</li>
              <li>To comply with legal requirements and prevent fraudulent activities.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Sharing of Information</h2>
            <p className="text-gray-700 mb-4">
              We do <strong>not</strong> sell or rent your personal data. However, we may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Service Providers:</strong> Third-party vendors assisting us with operations (e.g., hosting, analytics, email services).</li>
              <li><strong>Legal Compliance:</strong> Authorities if required by law, regulations, or legal processes.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement security measures to protect your information from unauthorized access, alteration, or destruction. However, no internet-based service is 100% secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">
              You have the following rights and choices regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Access and Update:</strong> You can review and update your personal information by contacting us.</li>
              <li><strong>Opt-Out:</strong> You can opt out of receiving marketing emails by clicking the "unsubscribe" link in our emails.</li>
              <li><strong>Cookie Preferences:</strong> You can manage cookies through your browser settings.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your data as long as necessary to fulfill the purposes stated in this policy unless a longer retention period is required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Third-Party Links</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices, and we encourage you to read their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Children’s Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not intended for users under the age of 18. We do not knowingly collect personal data from minors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this policy from time to time. Any changes will be posted on this page with the updated date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              <strong>ResumeGenie</strong><br />
              <a href="https://resumegenie.live/" className="text-blue-500 hover:underline">
                https://resumegenie.live/
                </a> <br/>
                <a href="resume.genie.contact@gmail.com" className="text-blue-500 hover:underline">
                resume.genie.contact@gmail.com
                </a> <br/>
              Rajasthan, India
            </p>
          </section>

          <div className="mt-8 text-center text-gray-600 text-sm">
            By using our website, you agree to the terms outlined in this Privacy Policy.
          </div>
        </div>
      </div>
  );
}
