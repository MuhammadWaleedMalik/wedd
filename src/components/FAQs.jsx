import React, { useState } from 'react';
import { FaHeart, FaChevronDown, FaRing, FaGift, FaLock } from 'react-icons/fa';
// import { GiFlowers, GiWeddingCake } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';

const FAQs = () => {
  const colors = {
    primary: "#836F57",
    secondary: "#F3E9D8",
    accent: "#FFFFFF",
    background: "#5c5b5b",
    textLight: "#F8F9FA"
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does the AI create wedding invitations?",
      answer: "Our AI analyzes your preferences, wedding theme, and relationship details to generate personalized invitation text. You can customize fonts, colors, and wording before finalizing.",
      icon: <FaRing size={20} />
    },
    {
      question: "Can I edit the AI-generated wedding vows?",
      answer: "Absolutely! The AI provides a heartfelt foundation that you can personalize. We recommend adding personal anecdotes and special memories to make it uniquely yours.",
      icon: <FaHeart size={20} />
    },
    {
      question: "How accurate are the AI flower bouquet suggestions?",
      answer: "Our AI considers seasonality, color schemes, and wedding themes to suggest bouquets. For best results, consult with your florist about flower availability in your region.",
      // icon: <GiFlowers size={20} />
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and wedding registry integrations. Digital products are delivered immediately after payment confirmation.",
      icon: <FaGift size={20} />
    },
    {
      question: "Is my wedding data kept private?",
      answer: "Yes! All personal details (names, dates, venues) are encrypted. We never share your information with third parties without consent.",
      icon: <FaLock size={20} />
    },
    {
      question: "Can I get a physical copy of my invitation design?",
      answer: "Yes! We partner with premium printers to deliver high-quality paper invitations. Choose from various materials like linen, pearlized, or recycled paper.",
      // icon: <GiWeddingCake size={20} />
    }
  ];

  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.textLight,
      padding: '2rem',
      borderRadius: '10px',
      marginTop : '250px' ,
      maxWidth: '1100px',
      margin: '2rem auto',
      fontFamily: "'Playfair Display', serif"
    }}>
      
      <h1 style={{
        color: colors.secondary,
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '2.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}>
        {/* <GiWeddingCake /> Wedding FAQs */}
      </h1>

      <div style={{ marginTop: '1.5rem' }}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              marginBottom: '1rem',
              borderBottom: `1px solid ${colors.primary}`,
              paddingBottom: '1rem'
            }}
          >
            <motion.button
              onClick={() => toggleFAQ(index)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                color: colors.textLight,
                cursor: 'pointer',
                padding: '0.5rem 0',
                textAlign: 'left',
                fontSize: '1.1rem'
              }}
              whileHover={{ color: colors.secondary }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ color: colors.secondary }}>{faq.icon}</span>
                {faq.question}
              </div>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
              >
                <FaChevronDown color={colors.secondary} />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    padding: '1rem',
                    backgroundColor: colors.primary,
                    borderRadius: '8px',
                    marginTop: '0.5rem',
                    lineHeight: '1.6'
                  }}>
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div style={{
        marginTop: '2rem',
        textAlign: 'center',
        color: colors.secondary,
        borderTop: `1px solid ${colors.primary}`,
        paddingTop: '1.5rem'
      }}>
        <p>Still have questions? Contact us at <span style={{ color: colors.accent }}>support@aiwedding.com</span></p>
      </div>
    </div>
  );
};

export default FAQs;