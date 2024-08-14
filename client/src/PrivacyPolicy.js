import React from 'react';
import Header from './component/Header';
import Cart from './component/Cart';
import Footer from './component/Footer';

const PrivacyPolicy = ({isCartDisplayed, setIsCartDisplayed, itemsInCart, setItemsInCart}) => {

    return (
    <>
        <Header setIsCartDisplayed={setIsCartDisplayed} />
        {isCartDisplayed && (
        <Cart
          isDisplayed={isCartDisplayed}
          itemsInCart={itemsInCart}
          setIsCartDisplayed={setIsCartDisplayed}
          setItemsInCart={setItemsInCart}
        />
      )}
        <div className="p-8 mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            
            <p className="mb-4">
                Welcome to our website. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at info@example.com.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
            <p className="mb-4">
                We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or when you participate in activities on the website.
            </p>
            
            <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
            <ul className="list-disc pl-5 mb-4">
                <li>Name and Contact Data</li>
                <li>Payment Information</li>
                <li>Preferences</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
            <p className="mb-4">
                We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            
            <h3 className="text-xl font-semibold mb-2">Examples of Use</h3>
            <ul className="list-disc pl-5 mb-4">
                <li>To facilitate account creation and logon process.</li>
                <li>To post testimonials with your consent.</li>
                <li>Request feedback and to contact you about your use of our website.</li>
                <li>For our business purposes, such as data analysis, identifying usage trends, and determining the effectiveness of our promotional campaigns.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-2">Sharing Your Information</h2>
            <p className="mb-4">
                We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">Data Retention</h2>
            <p className="mb-4">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">Security of Your Information</h2>
            <p className="mb-4">
                We aim to protect your personal information through a system of organizational and technical security measures.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">Your Privacy Rights</h2>
            <p className="mb-4">
                You have certain rights regarding your personal data, including the right to access, correct, or delete the personal data we hold about you.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
            <p className="mb-4">
                We may update this privacy policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="mb-4">
                If you have questions or comments about this policy, you may email us at info@example.com.
            </p>
        </div>
        <Footer />
    </>
  );
};

export default PrivacyPolicy;
