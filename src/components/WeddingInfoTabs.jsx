import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const WeddingInfoTabs = () => {
  const { t } = useTranslation();
  
  // Enhanced animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  const slideUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      } 
    }
  };

  const slideLeft = {
    hidden: { x: 40, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6,
        delay: 0.2
      } 
    }
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 0.5,
        ease: "backOut"
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const hoverCard = {
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const pulse = {
    pulse: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Data arrays (same as before)
  const whatWeOfferData = {
    aiPlanning: [
      t("Instant visual inspiration for all wedding elements"),
      t("Automated vendor recommendations based on your style"),
      t("Real-time budget tracking and optimization"),
      t("Personalized timeline creation")
    ],
    visualConcept: [
      t("Transform text descriptions into visual concepts"),
      t("See your venue decorated in different styles"),
      t("Generate color palette visualizations"),
      t("Create and compare multiple design options")
    ],
    features: [
      {
        icon: "🏨",
        title: t("Venue Matching"),
        description: t("AI-powered venue recommendations based on your preferences and guest count.")
      },
      {
        icon: "👔",
        title: t("Vendor Network"),
        description: t("Access to our vetted network of wedding professionals with reviews.")
      },
      {
        icon: "📋",
        title: t("Guest Management"),
        description: t("Easy RSVP tracking, seating charts, and communication tools.")
      },
      {
        icon: "🎨",
        title: t("Design Studio"),
        description: t("Virtual mockups of your decor choices before you commit.")
      },
      {
        icon: "💰",
        title: t("Budget Wizard"),
        description: t("Smart budget allocation and expense tracking.")
      },
      {
        icon: "⏱️",
        title: t("Timeline Builder"),
        description: t("Customizable wedding day timeline with reminders.")
      }
    ]
  };

  const aboutUsData = {
    audience: [
      {
        icon: "💍",
        title: t("Couples"),
        description: t("If you're engaged and starting to plan your wedding, WeddingAssistant is your perfect ally. From initial inspiration to the final execution, Wedding AI guides you every step of the way.")
      },
      {
        icon: "📋",
        title: t("Wedding Planners"),
        description: t("Our AI-powered tools help you streamline organization, task management, and client communication, optimizing time and providing personalized solutions.")
      },
      {
        icon: "🏰",
        title: t("Venue Owners"),
        description: t("Showcase your locations to couples searching for the perfect wedding venue. Our tool offers insights on how to optimize your space.")
      }
    ],
    whyChoose: [
      {
        icon: "⏳",
        title: t("⌛ Save Time"),
        description: t("Our AI instantly delivers the best wedding ideas customized to your style and preferences.")
      },
      {
        icon: "💰",
        title: t("💸 Save Money"),
        description: t("Optimize your wedding budget without compromising quality with cost-effective ideas.")
      },
      {
        icon: "✨",
        title: t("🪄 Personalized"),
        description: t("Tailored suggestions for every element of your wedding from flowers to sweet corners.")
      }
    ]
  };

  const faqsData = [
    {
      question: t("What is WeddingAssistant?"),
      answer: t("WeddingAssistant is an innovative Wedding AI platform that uses AI technology to help you quickly and easily generate personalized ideas for your wedding celebration.")
    },
    {
      question: t("How can I start using Wedding AI?"),
      answer: t("To start using WeddingAssistant, simply sign in with your Google account. The sign-up process is fast and easy, giving you instant access to all of our powerful AI-driven wedding planning tools.")
    },
    {
      question: t("Can I try WeddingAssistant for free?"),
      answer: t("Yes! You can try WeddingAssistant for free and explore its basic features without any charges. Dive into our AI-powered tools and discover endless wedding inspiration at no cost.")
    },
    {
      question: t("Are there any recurring charges?"),
      answer: t("No, WeddingAssistant does not have recurring payments. You only pay for additional services or premium features you choose to use. There are no monthly fees or hidden charges.")
    },
    {
      question: t("How do I download the generated files?"),
      answer: t("Downloading your AI-generated images is simple. Once your results are ready, just click on each image and save them directly to your device.")
    },
    {
      question: t("Can I customize the images according to my preferences?"),
      answer: t("Absolutely! WeddingAssistant allows you to customize the images based on your preferences. Specify details such as day or night settings, color schemes, and more.")
    },
    {
      question: t("Will there be new features in the future?"),
      answer: t("Yes, we are constantly working on new features! Soon, you'll be able to upload photos of your venue, and Wedding AI will generate decorated images based on your specifications.")
    }
  ];

  return (
    <div className="font-sans text-gray-900 bg-white overflow-hidden">
      {/* Hero Section with enhanced animation */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-screen max-h-[800px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      >
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            variants={slideUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {t("Your Dream Wedding")}<br />
            <span className="text-[#F3E9D8]">{t("Starts Here")}</span>
          </motion.h1>
          
          <motion.p 
            variants={slideUp}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
          >
            {t("AI-powered wedding planning that saves you time, money, and stress")}
          </motion.p>
          
          <motion.div variants={slideUp}>
            <Link 
              to="/signup"
              className="inline-block bg-[#836F57] hover:bg-[#6a5a48] text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t("Start Planning Now")}
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate="pulse"
          variants={pulse}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.section>

      {/* Floating Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative z-10 -mt-16 mb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={slideUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { number: "10,000+", label: t("Weddings Planned") },
              { number: "95%", label: t("Customer Satisfaction") },
              { number: "40%", label: t("Average Savings") }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                  variants={scaleUp}
                whileHover="hover"
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                custom={index}
              >
                <h3 className="text-4xl font-bold text-[#836F57] mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* What We Offer Section with enhanced animations */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
    
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
              <motion.div 
                variants={slideUp}
                whileHover="hover"
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 transition-all"
              >
                <h3 className="text-2xl font-bold text-[#836F57] mb-4 flex items-center">
                  <span className="mr-3">🤖</span>
                  {t("AI-Powered Planning")}
                </h3>
                <ul className="space-y-4">
                  {whatWeOfferData.aiPlanning.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-[#836F57] mr-3">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                variants={slideUp}
                whileHover="hover"
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 transition-all"
              >
                <h3 className="text-2xl font-bold text-[#836F57] mb-4 flex items-center">
                  <span className="mr-3">🎨</span>
                  {t("Visual Concept Generator")}
                </h3>
                <ul className="space-y-4">
                  {whatWeOfferData.visualConcept.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-[#836F57] mr-3">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div variants={slideLeft} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#836F57] mb-4">
                {t("Everything You Need in One Place")}
              </h2>
              <div className="w-24 h-1 bg-[#836F57] mb-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whatWeOfferData.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={scaleUp}
                  whileHover="hover"
                  custom={index}
                  className="border border-gray-200 p-8 rounded-xl bg-white hover:bg-gray-50 transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-[#836F57] mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

  
  
  
  
      {/* CTA Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-24 bg-[#836F57]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("Ready to Create Your Dream Wedding?")}
          </h2>
          <p className="text-xl text-[#F3E9D8] mb-8 max-w-3xl mx-auto">
            {t("Join thousands of couples who've made their wedding planning stress-free with WeddingAssistant")}
          </p>
          <Link 
            to="/signup"
            className="inline-block bg-white hover:bg-gray-100 text-[#836F57] font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t("Get Started ")}
          </Link>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={slideLeft} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#836F57] mb-4">
                {t("Frequently Asked Questions")}
              </h2>
              <div className="w-24 h-1 bg-[#836F57] mb-6"></div>
              <p className="text-gray-600 max-w-4xl">
                {t("Find answers to common questions about WeddingAssistant and our AI-powered wedding planning tools.")}
              </p>
            </motion.div>

            <div className="space-y-6 mb-16">
              {faqsData.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  custom={index}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-8 bg-gray-50 hover:bg-white transition-colors">
                    <h3 className="text-xl font-bold text-[#836F57] mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={scaleUp}
              className="bg-[#F9F5F0] p-12 rounded-xl text-center border border-[#E8D9C5]"
            >
              <h3 className="text-2xl font-bold text-[#836F57] mb-4">
                {t("Still have questions?")}
              </h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
                {t("Our team is here to help you with any questions about our services and how we can make your wedding planning easier.")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/blog"
                  className="bg-[#836F57] hover:bg-[#6a5a48] text-white font-bold py-3 px-8 rounded-full transition duration-300"
                >
                  {t("Read Us ")}
                </Link>
                <Link 
                  to="/signup"
                  className="bg-white hover:bg-gray-100 text-[#836F57] font-bold py-3 px-8 rounded-full border border-[#836F57] transition duration-300"
                >
                  {t("Sign Up Now")}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WeddingInfoTabs;