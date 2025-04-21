import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiHeart, FiMail, FiEdit3, FiDollarSign, FiChevronRight } from 'react-icons/fi';

const colors = {
  primary: "#836F57",       // Main brown color
  secondary: "#F3E9D8",     // Light cream
  accent: "#FFFFFF",        // White
  background: "#aba7a7",    // Dark gray background
  textLight: "#F8F9FA"      // Very light text
};

const Blogs = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FiMail className="text-2xl" />,
      title: t('aiInvitations'),
      description: t('aiInvitationsDesc'),
      color: "bg-[#F3E9D8]",
      details: [
        "Custom-designed invitations in multiple styles",
        "AI-generated invitation card text tailored to your theme",
        "Matching RSVP cards and wedding website designs",
        "Print-ready digital files or direct mailing service"
      ]
    },
    {
      icon: <FiEdit3 className="text-2xl" />,
      title: t('aiVows'),
      description: t('aiVowsDesc'),
      color: "bg-[#836F57] text-[#F8F9FA]",
      details: [
        "Personalized wedding vows based on your love story",
        "Multiple versions to choose from",
        "Tone customization (romantic, humorous, traditional)",
        "Speech writing assistance for other wedding events"
      ]
    },
    {
      icon: <FiDollarSign className="text-2xl" />,
      title: "AI Wedding Budget Planner",
      description: "Smart budget allocation based on your priorities",
      color: "bg-[#F3E9D8]",
      details: [
        "Personalized budget breakdown",
        "Vendor cost estimation tool",
        "Expense tracking dashboard",
        "Money-saving recommendations"
      ]
    }
  ];

  const weddingFlowerFeatures = [
    {
      title: "AI Floral Design Assistant",
      description: "Our AI helps you create stunning floral arrangements",
      benefits: [
        "Seasonal flower recommendations based on your wedding date",
        "Color palette matching with your theme",
        "3D bouquet visualizations before ordering",
        "Local florist recommendations based on your budget"
      ]
    },
    {
      title: "Centerpiece Generator",
      description: "Design perfect table arrangements in minutes",
      benefits: [
        "Virtual try-on with your venue photos",
        "Budget-conscious alternatives",
        "DIY option with step-by-step guides",
        "Sustainability scoring for your selections"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "The AI-generated vows perfectly captured our relationship. We barely had to edit them!",
      author: "— Sarah & James, New York"
    },
    {
      quote: "Saved over $3,000 using the budget planner's vendor recommendations without sacrificing quality.",
      author: "— Priya & Alex, London"
    },
    {
      quote: "Our floral arrangements were exactly as visualized by the AI tool - all our guests complimented them!",
      author: "— Michael & David, San Francisco"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Share Your Vision",
      description: "Tell us about your wedding through our simple questionnaire - colors, theme, budget, and preferences."
    },
    {
      step: "2",
      title: "AI Creates Options",
      description: "Our AI generates multiple design concepts, text options, or budget plans tailored to your input."
    },
    {
      step: "3",
      title: "Refine & Finalize",
      description: "Select your favorites, make adjustments, and get print-ready designs or actionable plans."
    }
  ];

  return (
    <div className="max-w-7xl mt-48 mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ color: colors.primary }}>
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.primary }}>
          Your Complete AI Wedding Assistant
        </h1>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.primary }}>
          From invitations to vows, flowers to finances - our AI tools help you create the perfect wedding with less stress
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-20">
        <div className="rounded-lg p-8 mb-8" style={{ backgroundColor: colors.secondary }}>
          <h2 className="text-2xl font-bold mb-4">Revolutionizing Wedding Planning with AI</h2>
          <p className="mb-4">
            Our platform combines artificial intelligence with wedding expertise to create personalized solutions for every aspect of your special day. 
            Whether you need stunning invitations, heartfelt vows, beautiful floral arrangements, or a manageable budget, our AI tools are designed 
            to save you time, reduce stress, and often save money too.
          </p>
          <p>
            The best part? Everything is tailored to your unique style and preferences. Our AI learns from your initial inputs and gets better at 
            suggesting options the more you use it throughout your planning journey.
          </p>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Our AI Wedding Tools</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg ${feature.color}`}
              style={feature.color.includes('836F57') ? { color: colors.textLight } : {}}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4" style={feature.color.includes('836F57') ? { color: colors.textLight } : { color: colors.primary }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="mb-4">{feature.description}</p>
              <ul className="list-disc pl-5 space-y-2">
                {feature.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Flower Design Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">AI-Powered Floral Design</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {weddingFlowerFeatures.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: colors.secondary }}
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="mb-4">{feature.description}</p>
              <ul className="list-disc pl-5 space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">How Our AI Wedding Tools Work</h2>
        <div className="space-y-8">
          {howItWorks.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start"
              style={{ borderBottom: `1px solid ${colors.primary}`, paddingBottom: '2rem' }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full mb-4 md:mb-0 md:mr-6"
                style={{ backgroundColor: colors.primary, color: colors.textLight }}
              >
                <span className="text-xl font-bold">{step.step}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">What Couples Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg p-8"
              style={{ backgroundColor: colors.secondary }}
            >
              <blockquote className="mb-4 italic">"{testimonial.quote}"</blockquote>
              <p className="font-medium">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Perfect Wedding?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Our AI tools are waiting to help you create beautiful invitations, heartfelt vows, 
          stunning floral designs, and a budget that works for you - all tailored to your unique style.
        </p>
        <Link
          to="/signup"
          className="bg-[#836F57] text-[#F8F9FA] hover:bg-[#F3E9D8] border-2 border-[#836F57] hover:border-[#836F57]
          hover:text-[#836F57] transition-all duration-300"
          style={{ backgroundColor: colors.primary, color: colors.textLight }}
         
         
        >
          Start Planning Now <FiChevronRight className="ml-2" />
        </Link>
      </section>

      {/* Final Note */}
      <section className="mt-20 text-center">
        <div className="inline-flex items-center">
          <FiHeart className="mr-2" style={{ color: colors.primary }} />
          <p className="italic">
            Every love story is unique - let our AI help you celebrate yours perfectly
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blogs;