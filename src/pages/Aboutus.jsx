import React from "react";
import { motion } from "framer-motion";
import { FaTshirt, FaPalette, FaUsers, FaRocket, FaAward } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

const AboutUs = () => {
  // Team data
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "10+ years in graphic design and merchandising",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Williams",
      role: "Lead Designer",
      bio: "Specializes in print-ready mockup templates",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      role: "Developer",
      bio: "Builds the tools that make mockup creation easy",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      name: "Emma Davis",
      role: "Customer Support",
      bio: "Ensures every user has a great experience",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  // Stats
  const stats = [
    { value: "10,000+", label: "Happy Customers", icon: <FaUsers /> },
    { value: "500+", label: "Premium Mockups", icon: <FaTshirt /> },
    { value: "50+", label: "Countries Served", icon: <FaPalette /> },
    { value: "24/7", label: "Support Available", icon: <FiCheckCircle /> }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden opacity-5">
        {[...Array(15)].map((_, i) => (
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero section */}
        <section className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent"
          >
            About MockupFree
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
          >
            Empowering designers and businesses with high-quality mockups since 2018
          </motion.p>
        </section>

        {/* Our story */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <FaRocket className="mr-3 text-pink-500" />
                Our Story
              </h2>
              <p className="text-gray-300 mb-4 text-lg">
                MockupFree began as a small passion project in 2018 when our founder, a graphic designer, struggled to find affordable, high-quality mockups for client presentations.
              </p>
              <p className="text-gray-300 mb-4 text-lg">
                Frustrated with the options available, we set out to create mockups that were both beautiful and practical - templates that designers could use to showcase their work in the best possible light.
              </p>
              <p className="text-gray-300 text-lg">
                Today, we serve thousands of creative professionals worldwide, constantly expanding our library with new, innovative mockup solutions.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Design team working" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm text-pink-400">Our early days</p>
                <h3 className="text-xl font-bold">The beginning of MockupFree</h3>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800 bg-opacity-50 rounded-xl p-6 text-center backdrop-blur-sm"
              >
                <div className="text-4xl text-pink-500 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Our team */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The creative minds behind MockupFree's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative pt-8 px-8">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-pink-500 shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-pink-500 mb-3">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 shadow-xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <FaAward className="mr-3 text-pink-500" />
                Our Mission
              </h2>
              <p className="text-gray-300 mb-4 text-lg">
                To empower designers, entrepreneurs, and businesses with stunning mockups that make their products shine.
              </p>
              <p className="text-gray-300 mb-4 text-lg">
                We believe that great design deserves to be presented beautifully, without the hassle of expensive photoshoots or complicated software.
              </p>
              <p className="text-gray-300 text-lg">
                Our commitment is to keep improving, adding new mockups, and providing exceptional value to our creative community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-black bg-opacity-30 rounded-xl p-4 border border-gray-700"
              >
                <FiCheckCircle className="text-pink-500 text-2xl mb-2" />
                <h3 className="font-bold mb-1">Quality First</h3>
                <p className="text-sm text-gray-300">Print-ready files with perfect details</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-black bg-opacity-30 rounded-xl p-4 border border-gray-700"
              >
                <FiCheckCircle className="text-pink-500 text-2xl mb-2" />
                <h3 className="font-bold mb-1">Constant Updates</h3>
                <p className="text-sm text-gray-300">New mockups added weekly</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-black bg-opacity-30 rounded-xl p-4 border border-gray-700"
              >
                <FiCheckCircle className="text-pink-500 text-2xl mb-2" />
                <h3 className="font-bold mb-1">Fair Pricing</h3>
                <p className="text-sm text-gray-300">Affordable for all creatives</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-black bg-opacity-30 rounded-xl p-4 border border-gray-700"
              >
                <FiCheckCircle className="text-pink-500 text-2xl mb-2" />
                <h3 className="font-bold mb-1">Community Focus</h3>
                <p className="text-sm text-gray-300">Built for designers, by designers</p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;