import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiFrown, FiArrowRight, FiHome, FiSearch } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 sm:px-6 py-12 overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-500"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Error code */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-9xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent"
        >
          404
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Page Not Found
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-400 mb-8"
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Frown icon */}
        <motion.div
          initial={{ rotate: -20, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mb-8"
        >
          <FiFrown className="text-5xl text-pink-500" />
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <Link
            to="/"
            className="flex items-center justify-center px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-medium transition-colors"
          >
            <FiHome className="mr-2" />
            Go to Homepage
          </Link>
        
        </motion.div>

        {/* Contact support */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-gray-500"
        >
          Still can't find what you need?{' '}
          <Link
            to="/aboutus"
            className="text-pink-400 hover:underline inline-flex items-center"
          >
            Contact support <FiArrowRight className="ml-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;