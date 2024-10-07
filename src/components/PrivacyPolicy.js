import React from 'react';
import PageHeader from './PageHeader';
import hybridFloor from '../assets/img/1009.png';

const PrivacyPolicy = () => {
  return (
    <>
      <PageHeader title="Privacy Policy" imageSrc={hybridFloor} />
      <div className="min-h-screen bg-gray-100 py-16 px-6 sm:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl overflow-hidden">
          <div className="px-4 md:px-8 py-12">
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect the following information to fulfill your orders and provide a smooth shopping
                  experience:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-6">
                  <li>Name</li>
                  <li>Email Address</li>
                  <li>Delivery Address</li>
                  <li>Telephone Number (optional)</li>
                  <li>Mobile Number (optional)</li>
                  <li>Date of Birth (optional - only required for certain promotions)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  For a comprehensive list of cookies used on our website, please refer to the dedicated
                  "List of Cookies We Collect" section.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The personal information you provide will be used for some or all of the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-6 space-y-2">
                  <li><span className="font-bold">Processing your orders:</span> We need your information to deliver your beautiful Maple floors to you and keep you updated on the delivery status.</li>
                  <li><span className="font-bold">Customer Support:</span> Your contact details allow us to offer timely and personalized assistance if needed.</li>
                  <li><span className="font-bold">Relevant Product Information:</span> We may send you information about new products, special offers, or installation tips that might be relevant to your interests.</li>
                  <li><span className="font-bold">Personalized Shopping Experience:</span> We strive to personalize your shopping journey by tailoring future product recommendations based on your past purchases.</li>
                  <li><span className="font-bold">Improving Our Store:</span> We use the information we gather to improve our website, product selection, and overall shopping experience for future customers.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Marketing Communications</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you register as a user or make a purchase on our website, we might send you occasional
                  marketing or promotional materials. You can easily unsubscribe from these at any time using
                  the "unsubscribe" function within the email itself.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Updating Your Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  You can always access your account on our website to update your personal information.
                  This ensures your details remain accurate and up-to-date.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">Security Measures</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We take data security seriously. Here's how we protect your information:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-6 space-y-2">
                  <li><span className="font-bold">Restricted Access:</span> Only authorized personnel have access to your personal information.</li>
                  <li><span className="font-bold">Technological Safeguards:</span> We implement advanced technology to prevent unauthorized access to our systems.</li>
                  <li><span className="font-bold">Secure Disposal:</span> We securely destroy your personal information when it’s no longer needed for legal or business purposes.</li>
                  <li><span className="font-bold">Financial Transaction Security:</span> When processing your financial details, we use industry-standard 128-bit SSL encryption to protect your data.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed">
                  We will never share your personal information with any third-party organizations except for
                  those directly involved in delivering your Maple floor order or processing your payment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Exceptional Circumstances</h2>
                <p className="text-gray-700 leading-relaxed">
                  In rare cases, we may be required to disclose personal information, such as when there are
                  legal obligations or a threat to life or health.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Compliance with Privacy Laws</h2>
                <p className="text-gray-700 leading-relaxed">
                  Maple Floors is committed to complying with all relevant privacy laws and regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Concerns</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any concerns regarding your privacy or believe we have mishandled your data,
                  please contact us at{' '}
                  <a
                    href="mailto:info@maplefloors.com.au"
                    className="text-accent underline hover:text-accent-hover transition-colors duration-200"
                  >
                    info@maplefloors.com.au
                  </a>
                  . We will promptly address any issues.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
