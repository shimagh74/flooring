import React from 'react';
import PageHeader from "./PageHeader";
import hybridFloor from "../assets/img/1004.png";

const TermsConditions = () => {
  return (
    <>
    <PageHeader title="Terms and Conditions" imageSrc={hybridFloor} />
    <div className="min-h-screen bg-gray-100 py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing or using the Maple Floors website, you agree to be bound by these terms and
            conditions. If you do not agree, please refrain from using the website.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Website Content</h2>
          <p className="text-gray-700">
            Maple Floors may modify or update the content of its website without notice. While we strive
            for accuracy, we cannot guarantee the correctness of all information. You agree to use the
            website at your own risk and verify any information before making decisions based on it.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. User Conduct</h2>
          <p className="text-gray-700">
            You agree to use the Maple Floors website in a manner that complies with all applicable laws
            and regulations. You will not:
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Engage in any activity that could damage, disable, or interfere with the website or its servers.</li>
            <li>Use the website for any unlawful or harmful purpose.</li>
            <li>Upload or transmit any content that is offensive, harmful, or infringes on the rights of others.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Intellectual Property</h2>
          <p className="text-gray-700">
            All content on the Maple Floors website, including text, images, logos, and trademarks, is
            protected by intellectual property laws. You may not reproduce, modify, distribute, or use
            this content without our prior written consent.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Privacy</h2>
          <p className="text-gray-700">
            Your use of the Maple Floors website is subject to our Privacy Policy, which outlines how we
            collect, use, and protect your personal information.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Disclaimer of Warranties</h2>
          <p className="text-gray-700">
            The Maple Floors website is provided on an "as is" basis without warranties of any kind,
            either express or implied. We do not guarantee that the website will be error-free,
            uninterrupted, or secure.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Limitation of Liability</h2>
          <p className="text-gray-700">
            In no event shall Maple Floors be liable for any direct, indirect, incidental, special, or
            consequential damages arising out of or in connection with your use of the website.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">8. Changes to Terms</h2>
          <p className="text-gray-700">
            Maple Floors may revise these terms and conditions from time to time. Any changes will be
            effective upon posting on the website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">9. Contact Information</h2>
          <p className="text-gray-700">
            If you have any questions about these terms and conditions, please contact us at
            <a href="mailto:info@maplefloors.com.au" className="text-accent underline"> info@maplefloors.com.au</a>.
          </p>
        </section>
      </div>
    </div>
    </>
  );
};

export default TermsConditions;
