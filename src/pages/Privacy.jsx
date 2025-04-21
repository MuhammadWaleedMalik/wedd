import { useState } from 'react';
import { FaRing, FaHeart, FaLock, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import weddingPrivacyImage from '/images/logo.jpg'; // Replace with your actual image path

const Privacy = () => {

  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: 'data-collection',
      title: 'Data Collection',
      content: (
        <div className="space-y-2 text-[#836F57]">
          <p>When you use our AI wedding services, we may collect:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Personal information you provide (names, email addresses, wedding dates)</li>
            <li>Preferences for your wedding (colors, themes, styles)</li>
            <li>Content you generate (invitations, vows, bouquet designs)</li>
            <li>Usage data to improve our services</li>
          </ul>
          <p className="pt-2">We collect this data solely to create personalized wedding elements for you.</p>
        </div>
      )
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Data',
      content: (
        <div className="space-y-2 text-[#836F57]">
          <p>Your information is used exclusively for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Generating AI-created wedding content</li>
            <li>Personalizing your experience</li>
            <li>Improving our AI models for better wedding suggestions</li>
            <li>Communicating about your wedding creations</li>
          </ul>
          <p className="pt-2">We never sell your data or use it for unrelated marketing.</p>
        </div>
      )
    },
    {
      id: 'data-protection',
      title: 'Data Protection',
      content: (
        <div className="space-y-2 text-[#836F57]">
          <p>We implement robust security measures:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Encryption of all transmitted data</li>
            <li>Secure storage with limited access</li>
            <li>Regular security audits</li>
            <li>Automatic deletion of wedding data after 6 months of inactivity</li>
          </ul>
          <p className="pt-2">Your wedding dreams are as precious to us as they are to you.</p>
        </div>
      )
    },
    {
      id: 'ai-generated-content',
      title: 'AI-Generated Content',
      content: (
        <div className="space-y-2 text-[#836F57]">
          <p>About the wedding content we create:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>All invitations, vows, and designs are unique to you</li>
            <li>We don't reuse or repurpose your generated content</li>
            <li>You maintain full rights to all AI-created wedding elements</li>
            <li>Our AI is trained on licensed and public domain wedding materials</li>
          </ul>
          <p className="pt-2">Your wedding should be as unique as your love story.</p>
        </div>
      )
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      content: (
        <div className="space-y-2 text-[#836F57]">
          <p>You have complete control over:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Accessing all data we have about you</li>
            <li>Correcting any inaccurate information</li>
            <li>Requesting deletion of your data</li>
            <li>Downloading your AI-created wedding content</li>
          </ul>
          <p className="pt-2">Contact us anytime at <a href="mailto:privacy@aiweddingdreams.com" className="text-[#F3E9D8] underline">privacy@aiweddingdreams.com</a> to exercise these rights.</p>
        </div>
      )
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#aba7a7] py-12 mt-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaRing className="mx-auto text-4xl text-[#836F57] mb-4" />
          </motion.div>
          <h1 className="text-4xl font-serif font-bold text-[#F3E9D8] mb-3">Your Privacy Matters</h1>
          <p className="text-lg text-[#F8F9FA] max-w-2xl mx-auto">
            As we help create your perfect wedding, we protect your information with the same care as we would our own.
          </p>
        </div>

        <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
          <img 
            src={weddingPrivacyImage} 
            alt="Couple looking at wedding plans" 
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="bg-[#FFFFFF] rounded-xl shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-start mb-6">
              <FaLock className="text-[#836F57] text-2xl mt-1 mr-3" />
              <div>
                <h2 className="text-2xl font-serif font-semibold text-[#836F57]">Our Privacy Commitment</h2>
                <p className="text-[#836F57] mt-2">
                  We understand that wedding planning involves sharing personal dreams and details.
                  This policy explains how we protect and use your information while creating your
                  AI-generated invitations, vows, bouquets, and other wedding elements.
                </p>
              </div>
            </div>

            <motion.div 
              className="flex justify-center my-8"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaHeart className="text-[#F3E9D8] text-3xl" />
            </motion.div>

            <div className="space-y-4">
              {sections.map((section) => (
                <div key={section.id} className="border border-[#F3E9D8] rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    aria-expanded={activeSection === section.id}
                    className="w-full flex justify-between items-center p-4 bg-[#F3E9D8] hover:bg-[#836F57] transition-colors"
                  >
                    <h3 className="text-lg font-medium text-[#836F57] text-left">{section.title}</h3>
                    {activeSection === section.id ? (
                      <FaChevronUp className="text-[#836F57]" />
                    ) : (
                      <FaChevronDown className="text-[#836F57]" />
                    )}
                  </button>

                  <AnimatePresence>
                    {activeSection === section.id && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="p-4 bg-[#FFFFFF] border-t border-[#F3E9D8]"
                      >
                        {section.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Privacy;
