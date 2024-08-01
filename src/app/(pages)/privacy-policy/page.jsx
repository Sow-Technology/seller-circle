import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Data Privacy Policy</h1>

        <h2 className="text-2xl font-bold mb-2">Introduction</h2>
        <p className="mb-4">
          At <Link href="/contact">Seller Circle</Link>, we are committed to
          protecting your privacy and ensuring the security of your personal
          information. This Data Privacy Policy outlines how we collect, use,
          store, and protect your information when you visit our website, use
          our services, or interact with us in any way. By accessing or using
          our website, you agree to the practices described in this policy.
        </p>

        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Personal Information:</strong> We may collect personal
            information that you provide to us voluntarily, such as your name,
            email address, phone number, and any other details you provide when
            contacting us or using our services.
          </li>
          <li>
            <strong>Usage Data:</strong> We automatically collect certain
            information about your visit to our website, including your IP
            address, browser type, operating system, referring URLs, pages
            viewed, and the time spent on our site.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies
            and similar tracking technologies to enhance your experience on our
            website. Cookies are small data files stored on your device that
            help us understand how you use our site and remember your
            preferences.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>To Provide and Improve Our Services:</strong> We use your
            personal information to deliver the services you request, respond to
            your inquiries, and improve our offerings based on your feedback and
            usage patterns.
          </li>
          <li>
            <strong>To Communicate with You:</strong> We may use your contact
            information to send you updates, promotional materials, and other
            information related to our services. You can opt out of receiving
            these communications at any time.
          </li>
          <li>
            <strong>To Analyze and Enhance Website Performance:</strong> We use
            usage data and cookies to analyze how visitors interact with our
            website, identify trends, and improve the overall user experience.
          </li>
          <li>
            <strong>For Legal and Security Purposes:</strong> We may use your
            information to comply with legal obligations, protect our rights and
            interests, and ensure the security of our website and services.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">
          How We Protect Your Information
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Data Security:</strong> We implement industry-standard
            security measures to protect your personal information from
            unauthorized access, disclosure, alteration, or destruction. This
            includes the use of encryption, firewalls, and secure server
            technologies.
          </li>
          <li>
            <strong>Data Retention:</strong> We retain your personal information
            only for as long as necessary to fulfill the purposes for which it
            was collected or as required by law. We regularly review and
            securely delete or anonymize data that is no longer needed.
          </li>
          <li>
            <strong>Third-Party Services:</strong> We may share your information
            with trusted third-party service providers who assist us in
            operating our website and delivering our services. These providers
            are contractually obligated to protect your information and use it
            only for the purposes specified by us.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Your Rights and Choices</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Access and Correction:</strong> You have the right to
            access, correct, or update your personal information. If you wish to
            exercise these rights, please contact us using the information
            provided below.
          </li>
          <li>
            <strong>Opting Out:</strong> You can opt out of receiving
            promotional communications from us by following the unsubscribe
            instructions included in those messages. Note that you may still
            receive transactional or service-related communications.
          </li>
          <li>
            <strong>Cookie Management:</strong> You can manage your cookie
            preferences through your browser settings. However, disabling
            cookies may affect your experience on our website.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Data Privacy Policy from time to time to reflect
          changes in our practices or legal requirements. We will notify you of
          any significant changes by posting the updated policy on our website.
          We encourage you to review this policy periodically to stay informed
          about how we protect your information.
        </p>

        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Data Privacy Policy
          or how we handle your personal information, please contact us at:
        </p>
        <p className="mb-4 text-background font-bold">
          <Link href="/contact">Seller Circle</Link>
        </p>
        <p className="mb-4">
          E-mail :{" "}
          <a href="mailto:contact@sellercircle.in" className="text-background">
            contact@sellercircle.in
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
