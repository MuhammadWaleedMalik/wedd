import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Explore = () => {
  // Categories data
  const categories = [
    {
      id: "hoodies",
      title: "Hoodie Mockups",
      description: "Premium quality hoodie templates for your designs",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-600 to-blue-800"
    },
    {
      id: "tshirts",
      title: "T-Shirt Mockups",
      description: "Showcase your designs on various t-shirt styles",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-red-500 to-red-700"
    },
    {
      id: "pants",
      title: "Pants Mockups",
      description: "Professional pants and jeans templates",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-green-600 to-green-800"
    },
    {
      id: "posters",
      title: "Poster Mockups",
      description: "Present your artwork in realistic poster formats",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      id: "socks",
      title: "Socks Mockups",
      description: "Showcase designs on various mug styles",
      image: "https://sockscribe.pk/cdn/shop/products/Marrakesh_f122688f-78a5-4b6e-bbb4-3a353c701d13.png?v=1698174702",
      color: "from-purple-500 to-purple-700"
    },
    {
      id: "hats",
      title: "Hat Mockups",
      description: "Premium hat templates for your branding",
      image: "https://img.drz.lazcdn.com/static/pk/p/2e31fb4011454950b86f1a8a5a7a278b.jpg_960x960q80.jpg_.webp",
      color: "from-pink-500 to-pink-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
          Explore Mockups
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Browse our premium collection of mockup templates
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -10 }}
            className="relative group rounded-xl overflow-hidden shadow-xl h-80"
          >
            <Link to={`/category/${category.id}`} className="block h-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${category.color}`}>
                  Popular
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="flex items-center text-pink-400 group-hover:text-pink-300 transition-colors">
                  <span>Make Mockups</span>
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <h2 className="text-2xl font-bold mb-6">Can't find what you're looking for?</h2>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg font-bold hover:opacity-90 transition-opacity"
        >
         Home
          <FiArrowRight className="ml-2" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Explore;