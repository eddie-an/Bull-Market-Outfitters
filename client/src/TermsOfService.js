import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Cart from './component/Cart';

const TermsOfService = ({isCartDisplayed, setIsCartDisplayed, itemsInCart, setItemsInCart}) => {
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
            <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
            
            <p className="mb-4">
                These Terms of Service ("Terms") govern your use of our website and services ("Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree with these Terms, do not use our Service.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">Use of Service</h2>
            <p className="mb-4">
                You may use the Service only in compliance with these Terms and all applicable local, state, national, and international laws, rules, and regulations. You are responsible for your own conduct and any content that you create, share, or display while using the Service.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">Accounts</h2>
            <p className="mb-4">
                When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device. You agree to accept responsibility for all activities that occur under your account.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
            <p className="mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of our company and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of our company.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">Termination</h2>
            <p className="mb-4">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
            <p className="mb-4">
                In no event shall our company, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
            <p className="mb-4">
                These Terms shall be governed and construed in accordance with the laws of the State of [Your State], without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">Changes to Terms</h2>
            <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="mb-4">
                If you have any questions about these Terms, please contact us at support@example.com.
            </p>
        </div>
        <Footer />
    </>
  );
};

export default TermsOfService;
