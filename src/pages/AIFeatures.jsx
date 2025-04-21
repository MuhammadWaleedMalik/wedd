import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const colors = {
  primary: "#836F57",       // Main brown color
  secondary: "#F3E9D8",     // Light cream
  accent: "#836F57",        // White
  background: "#aba7a7",    // Dark gray background
  textLight: "#F8F9FA"      // Very light text
};

const WeddingAIFeatures = () => {
  const features = [
    {
      id: 1,
      title: "AI Wedding Invitations",
      description: "Create stunning, personalized wedding invitations with our AI designer. Choose from hundreds of templates or let our AI generate a unique design based on your preferences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      link: "/ai-invitations",
      color: `bg-[${colors.primary}]`
    },
    {
      id: 2,
      title: "AI Invitation Text",
      description: "Struggling with wording? Our AI generates perfect invitation text tailored to your wedding style, whether formal, casual, or themed.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      link: "/ai-invitation-text",
      color: `bg-[${colors.primary}]`
    },
    {
      id: 3,
      title: "AI Flower Arrangements",
      description: "Get custom flower arrangement designs based on your wedding theme, season, and budget. Visualize how they'll look in your venue.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: "/ai-flowers",
         color: `bg-[${colors.primary}]`
 },
    {
      id: 4,
      title: "AI Budget Planner",
      description: "Our smart budget tool helps you allocate funds efficiently, tracks expenses, and suggests cost-saving alternatives without compromising quality.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: "/ai-budget",
      color: `bg-[${colors.primary}]`
    },
    {
      id: 5,
      title: "AI Wedding Vows",
      description: "Express your love perfectly with AI-generated vow templates that capture your unique relationship story and personality.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      link: "/ai-vows",
      color: `bg-[${colors.primary}]`
    },
    
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const featureVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
      transition: {
        duration: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`min-h-screen py-12 mt-24 px-4 sm:px-6 lg:px-8 bg-[${colors.background}]`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-[${colors.primary}]`}>
            Your Perfect Wedding, Powered by AI
          </h1>
          <p className={`mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-[${colors.textLight}]`}>
            Discover how artificial intelligence can simplify your wedding planning while making it more personal than ever.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <Link to={feature.link} key={feature.id}>
              <motion.div
                variants={featureVariants}
                whileHover="hover"
                className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${feature.color} p-6 h-full`}
              >
                <div className="flex-shrink-0">
                  <div className={`flex items-center justify-center h-12 w-12 rounded-md bg-opacity-20 bg-[${colors.primary}]`}>
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1 mt-4">
                  <h3 className={`text-xl font-semibold text-[${feature.id % 2 === 0 ? colors.secondary : colors.textLight}]`}>
                    {feature.title}
                  </h3>
                  <p className={`mt-2 text-base ${feature.id % 2 === 0 ? 'text-gray-700' : 'text-gray-200'}`}>
                    {feature.description}
                  </p>
                </div>
                <div className="mt-6">
                  <div className={`inline-flex items-center text-sm font-medium ${feature.id % 2 === 0 ? `text-[${colors.primary}]` : `text-[${colors.textLight}]`}`}>
                    Learn more
                    <svg
                      className={`ml-2 h-4 w-4 ${feature.id % 2 === 0 ? `text-[${colors.primary}]` : `text-[${colors.textLight}]`}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>



        <motion.div

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className={`text-2xl font-semibold text-[${colors.secondary}]`}>How It Works</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className={`p-6 rounded-lg bg-[${colors.secondary}]`}>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-[${colors.primary}] mb-4 mx-auto">
                <span className="text-xl text-amber-950 font-bold">1</span>
              </div>
              <h3 className={`text-lg font-medium text-[${colors.primary}]`}>Choose Your Feature</h3>
              <p className={`mt-2 text-base text-[${colors.primary}]`}>
                Select from our AI-powered wedding planning tools
              </p>
            </div>
            
            <div className={`p-6 rounded-lg bg-[${colors.secondary}]`}>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-[${colors.primary}] mb-4 mx-auto">
                <span className="text-xl text-amber-950 font-bold">2</span>
              </div>
              <h3 className={`text-lg font-medium text-[${colors.primary}]`}>Personalize</h3>
              <p className={`mt-2 text-base text-[${colors.primary}]`}>
                Give us your preferences and details
              </p>
            </div>
            <div className={`p-6 rounded-lg bg-[${colors.secondary}]`}>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-[${colors.primary}] mb-4 mx-auto">
                <span className="text-xl text-amber-950 font-bold">3</span>
              </div>
              <h3 className={`text-lg font-medium text-[${colors.primary}]`}>Get AI Magic</h3>
              <p className={`mt-2 text-base text-[${colors.primary}]`}>
                Receive customized results in seconds
              </p>
            </div>
          </div>
        </motion.div>

      
      
      
      </div>
    </div>
  );
};

export default WeddingAIFeatures;