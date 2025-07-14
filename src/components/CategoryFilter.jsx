import { motion } from 'framer-motion'
import { FiFilter } from 'react-icons/fi'
import { useState } from 'react'

const CategoryFilter = ({ 
  darkMode, 
  categories, 
  selectedCategory, 
  onSelectCategory 
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  }

  return (
    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/80 border border-gray-200'} shadow-lg backdrop-blur-sm`}>
      <div className="flex items-center mb-4">
        <FiFilter className={`mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
        <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Filter Templates
        </h3>
      </div>
      
      <motion.div 
        className="flex flex-wrap gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            variants={itemVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${
              selectedCategory === category.id ? 
                darkMode ? 
                  'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg' : 
                  'bg-gradient-to-r from-purple-400 to-indigo-400 text-white shadow-lg' : 
                darkMode ? 
                  'bg-gray-700 text-gray-300 hover:bg-gray-600' : 
                  'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.icon && (
              <category.icon className="mr-2" />
            )}
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Advanced filters (collapsible) */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-4 overflow-hidden"
      >
        <div className="pt-4 border-t border-gray-200">
          <h4 className={`text-xs font-medium mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Advanced Filters
          </h4>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={`block text-xs mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Complexity
              </label>
              <select
                className={`w-full text-xs px-3 py-2 rounded-lg border ${
                  darkMode ? 
                    'bg-gray-700 border-gray-600 text-white focus:ring-purple-500' : 
                    'bg-white border-gray-300 text-gray-700 focus:ring-indigo-500'
                } focus:outline-none focus:ring-1`}
              >
                <option>All levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            
            <div>
              <label className={`block text-xs mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Rating
              </label>
              <select
                className={`w-full text-xs px-3 py-2 rounded-lg border ${
                  darkMode ? 
                    'bg-gray-700 border-gray-600 text-white focus:ring-purple-500' : 
                    'bg-white border-gray-300 text-gray-700 focus:ring-indigo-500'
                } focus:outline-none focus:ring-1`}
              >
                <option>Any rating</option>
                <option>4+ stars</option>
                <option>4.5+ stars</option>
                <option>5 stars</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CategoryFilter