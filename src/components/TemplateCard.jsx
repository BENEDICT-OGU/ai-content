import { motion } from 'framer-motion'
import { FiStar, FiClock, FiTrendingUp } from 'react-icons/fi'
import { useState } from 'react'

const TemplateCard = ({ template, darkMode }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      {/* Gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br opacity-20"
        style={{ background: `linear-gradient(135deg, ${template.colors[0]}, ${template.colors[1]})` }}
      />
      
      {/* Template header */}
      <div className="relative z-10 p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {template.name}
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {template.description}
            </p>
          </div>
          {template.isNew && (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-800'}`}>
              New
            </span>
          )}
        </div>

        {/* Template stats */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className={`flex items-center justify-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <FiTrendingUp className="mr-1" />
              <span className="text-xs">{template.uses.toLocaleString()}</span>
            </div>
            <div className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Uses</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <FiStar 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.floor(template.rating) ? (darkMode ? 'text-yellow-400' : 'text-yellow-500') : (darkMode ? 'text-gray-600' : 'text-gray-300')}`} 
                />
              ))}
            </div>
            <div className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Rating</div>
          </div>
          <div className="text-center">
            <div className={`flex items-center justify-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <FiClock className="mr-1" />
              <span className="text-xs">{template.timeSaved}</span>
            </div>
            <div className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Saved</div>
          </div>
        </div>

        {/* Complexity meter */}
        <div className="mt-6">
          <div className="flex justify-between mb-1">
            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Complexity</span>
            <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {template.complexity}
            </span>
          </div>
          <div className={`w-full bg-opacity-20 h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div 
              className={`h-full rounded-full ${template.complexity === 'Easy' ? 'bg-green-500' : template.complexity === 'Intermediate' ? 'bg-yellow-500' : 'bg-red-500'}`}
              style={{ 
                width: template.complexity === 'Easy' ? '33%' : 
                       template.complexity === 'Intermediate' ? '66%' : '100%' 
              }}
            />
          </div>
        </div>

        {/* Use template button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mt-6 w-full py-3 rounded-xl font-medium ${darkMode ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700' : 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600'} text-white shadow-lg`}
        >
          Use Template
        </motion.button>
      </div>

      {/* Featured badge */}
      {template.isFeatured && (
        <div className={`absolute top-0 right-0 transform rotate-12 translate-x-6 -translate-y-2 px-4 py-1 text-xs font-bold ${darkMode ? 'bg-yellow-600 text-yellow-100' : 'bg-yellow-400 text-yellow-900'}`}>
          Featured
        </div>
      )}
    </motion.div>
  )
}

export default TemplateCard