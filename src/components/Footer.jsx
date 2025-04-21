import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useTranslation();

  // Color scheme matching WeddingInfoTabs
  const colors = {
    primary: "#836F57",       // Main brown color
    secondary: "#F3E9D8",     // Light cream
    accent: "#FFFFFF",        // White
    background: "#5c5b5b",    // Dark gray background
    textLight: "#F8F9FA"      // Very light text
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
      style={{ backgroundColor: colors.background }} 
      className="pt-20 pb-12 w-full"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand Column */}
          <motion.div 
            variants={item}
            className="col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/"
                className="text-3xl font-bold italic tracking-wide"
                style={{ color: colors.secondary }}
              >
                {t("WeddingAssistant")}
              </Link>
            </motion.div>
            <motion.p
              variants={item}
              style={{ color: colors.secondary }}
              className="mt-4 text-base opacity-90"
            >
              {t("AI-powered wedding planning made simple")}
            </motion.p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div 
            variants={item}
            className="col-span-1"
          >
            <motion.h3
              variants={item}
              className="text-lg font-semibold mb-5 uppercase tracking-wider"
              style={{ color: colors.secondary }}
            >
              {t("Quick Links")}
            </motion.h3>
            <ul className="space-y-3">
              {[
                { path: "/", text: t("Home") },
                { path: "/services", text: t("Features") },
                { path: "/pricing", text: t("Pricing") },
          
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    style={{ color: colors.accent }}
                    className="hover:opacity-80 transition-opacity text-base"
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div 
            variants={item}
            className="col-span-1"
          >
            <motion.h3
              variants={item}
              className="text-lg font-semibold mb-5 uppercase tracking-wider"
              style={{ color: colors.secondary }}
            >
              {t("Resources")}
            </motion.h3>
            <ul className="space-y-3">
              {[
                { path: "/blogs", text: t("Blog") },
                { path: "/faqs", text: t("FAQs") },
            
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    style={{ color: colors.accent }}
                    className="hover:opacity-80 transition-opacity text-base"
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div 
            variants={item}
            className="col-span-1"
          >
            <motion.h3
              variants={item}
              className="text-lg font-semibold mb-5 uppercase tracking-wider"
              style={{ color: colors.secondary }}
            >
              {t("Legal")}
            </motion.h3>
            <ul className="space-y-3">
              {[
                { path: "/privacy", text: t("Privacy") },
                { path: "/terms", text: t("Terms") },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    style={{ color: colors.accent }}
                    className="hover:opacity-80 transition-opacity text-base"
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          variants={item}
          className="border-t border-[#836F57] border-opacity-20 my-10"
        />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            variants={item}
          >
            <p 
              style={{ color: colors.secondary }}
              className="text-sm opacity-80"
            >
              &copy; {new Date().getFullYear()} {t("WeddingAssistant. All rights reserved.")}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex space-x-5"
          >
            {[
              { name: "Facebook", icon: "fa-facebook" },
              { name: "Instagram", icon: "fa-instagram" },
              { name: "Pinterest", icon: "fa-pinterest" },
              { name: "Twitter", icon: "fa-twitter" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -3, color: colors.primary }}
                whileTap={{ scale: 0.95 }}
                style={{ color: colors.secondary }}
                className="text-xl"
                aria-label={social.name}
              >
                <i className={`fab ${social.icon}`} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          variants={item}
          className="mt-16 text-center"
        >
          <motion.p
            style={{ color: colors.secondary }}
            className="text-lg mb-6"
          >
            {t("Ready to plan your dream wedding?")}
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/signup"
              style={{ 
                backgroundColor: colors.primary, 
                color: colors.textLight 
              }}
              className="inline-block px-8 py-3 rounded-full font-medium text-base shadow-md hover:shadow-lg transition-all"
            >
              {t("Get Started for Free")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;