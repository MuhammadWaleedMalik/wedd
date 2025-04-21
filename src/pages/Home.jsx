import { motion } from "framer-motion";
import { useState } from "react";
import WeddingInfoTabs from "../components/WeddingInfoTabs";
import { Link } from "react-router-dom";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Navigation */}
  
  
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            variants={slideUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Crafting Unforgettable <br />Wedding Experiences
          </motion.h1>
          <motion.p 
            variants={slideUp}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto"
          >
            Let us transform your wedding dreams into reality with our expert planning and flawless execution.
          </motion.p>
          <motion.div variants={slideUp} whileHover={{ scale: 1.05 }}>
            <Link
            to={"/signup"} 
            className="bg-[#836F57] hover:bg-[#6a5a48] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Begin Your Journey
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce flex flex-col items-center">
            <p className="text-white mb-2 text-sm">Scroll Down</p>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </motion.section>









      {/* Services Section */}



{/* Services Section */}


<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="text-center mb-16"
    >
      <motion.h2 variants={slideUp} className="text-3xl md:text-4xl font-bold text-[#836F57] mb-4">
        Our Comprehensive Services
      </motion.h2>
      <motion.p variants={slideUp} className="text-gray-600 max-w-2xl mx-auto mb-6">
        Everything you need for your perfect day in one place
      </motion.p>
      <motion.div variants={slideUp} className="w-20 h-1 bg-[#836F57] mx-auto"></motion.div>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "AI-Made Invitation Cards",
          description: "Beautifully designed, personalized wedding invitations created by AI.",
          icon: "🎯"
        },
        {
          title: "AI-Made Invitations Text",
          description: "Unique, heartfelt invitation messages crafted by AI for your guests.",
          icon: "🏛️"
        },
        {
          title: "Budget Planner",
          description: "Smart AI-powered budget management to keep your wedding stress-free.",
          icon: "🤝"
        },
        {
          title: "AI-Made Flower Arrangements",
          description: "Stunning floral designs and arrangements suggested by AI.",
          icon: "🎨"
        },
        {
          title: "AI-Made Wedding Vows",
          description: "Touching, customized wedding vows written for you by our AI.",
          icon: "📅"
        },
        {
          title: "AI-Made Wedding Decor",
          description: "Creative, AI-generated decor ideas tailored to your wedding theme.",
          icon: "💰"
        }
      ].map((service, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleUp}
          whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
          className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300 cursor-default"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold text-[#836F57] mb-3">{service.title}</h3>
          <p className="text-gray-700">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>














      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={slideUp} className="text-3xl md:text-4xl font-bold text-[#836F57] mb-4">
              Our Recent Work
            </motion.h2>
            <motion.p variants={slideUp} className="text-gray-600 max-w-2xl mx-auto mb-6">
              Browse through some of our beautifully executed weddings
            </motion.p>
            <motion.div variants={slideUp} className="w-20 h-1 bg-[#836F57] mx-auto"></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sophisticated Vineyard Wedding",
                date: "September 2023",
                location: "Napa Valley, CA",
                image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                title: "Elegant Ballroom Affair",
                date: "July 2023",
                location: "New York, NY",
                image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                title: "Beachfront Destination Wedding",
                date: "May 2023",
                location: "Maui, HI",
                image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                title: "Rustic Barn Celebration",
                date: "October 2023",
                location: "Austin, TX",
                image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                title: "Modern City Chic Wedding",
                date: "August 2023",
                location: "Chicago, IL",
                image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                title: "Intimate Garden Ceremony",
                date: "June 2023",
                location: "Portland, OR",
                image: "https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            ].map((wedding, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-lg shadow-md bg-white group"
              >
                <div className="h-64 bg-gray-300 relative overflow-hidden">
                  <img 
                    src={wedding.image}
                    alt={wedding.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                 
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#836F57] mb-2">{wedding.title}</h3>
                  <p className="text-gray-600">{wedding.date} • {wedding.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link 
              to={"/services  "}
            className="border-2 border-[#836F57] text-[#836F57] hover:bg-[#836F57] hover:text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
             Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#836F57] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={slideUp} className="text-3xl md:text-4xl font-bold mb-4">
              Heartfelt Testimonials
            </motion.h2>
            <motion.p variants={slideUp} className="text-white text-opacity-80 max-w-2xl mx-auto mb-6">
              Don't just take our word for it - hear from our couples
            </motion.p>
            <motion.div variants={slideUp} className="w-20 h-1 bg-white mx-auto"></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "WeddingAssistant exceeded all our expectations. They handled every detail with such care and professionalism, allowing us to truly enjoy our special day.",
                name: "Emily & James",
                role: "June 2023 Wedding",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                quote: "From our first meeting to the last dance, the team was incredible. They brought our vision to life in ways we couldn't have imagined.",
                name: "Olivia & Daniel",
                role: "August 2023 Wedding",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "Worth every penny! They anticipated needs we didn't even know we had and created a seamless, magical experience for us and our guests.",
                name: "Sophia & Matthew",
                role: "September 2023 Wedding",
                image: "https://randomuser.me/api/portraits/women/68.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={scaleUp}
                className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-white text-opacity-80 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-2xl mb-4">"</div>
                <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
     

     
          </motion.div>
        </div>
      </section>

   
   
   
            <WeddingInfoTabs />
   
   
    </div>
  );
};

export default Home;