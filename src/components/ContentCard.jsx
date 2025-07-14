import { motion } from 'framer-motion'
import { FiEdit, FiEye, FiShare2, FiMoreVertical } from 'react-icons/fi'
import { useState } from 'react'

const ContentCard = ({ item, darkMode }) => {
  const getTypeColor = () => {
    switch(item.type) {
      case 'blog': return darkMode ? 'bg-blue-900/30 text-blue-300 border-blue-700' : 'bg-blue-100 text-blue-800 border-blue-200'
      case 'social': return darkMode ? 'bg-purple-900/30 text-purple-300 border-purple-700' : 'bg-purple-100 text-purple-800 border-purple-200'
      case 'product': return darkMode ? 'bg-green-900/30 text-green-300 border-green-700' : 'bg-green-100 text-green-800 border-green-200'
      case 'email': return darkMode ? 'bg-yellow-900/30 text-yellow-300 border-yellow-700' : 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default: return darkMode ? 'bg-gray-700 text-gray-300 border-gray-600' : 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusColor = () => {
    return item.status === 'published' 
      ? (darkMode ? 'bg-green-900/30 text-green-300 border-green-700' : 'bg-green-100 text-green-800 border-green-200')
      : (darkMode ? 'bg-yellow-900/30 text-yellow-300 border-yellow-700' : 'bg-yellow-100 text-yellow-800 border-yellow-200')
  }

  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: darkMode ? '0 10px 25px -5px rgba(0, 0, 0, 0.5)' : '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`rounded-xl overflow-hidden border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} shadow-lg`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${getTypeColor()}`}>
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </span>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${getStatusColor()}`}>
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </span>
        </div>
        
        <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
        
        <div className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Created: {new Date(item.date).toLocaleDateString()}
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Words</div>
            <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.wordCount}</div>
          </div>
          <div>
            <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Views</div>
            <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.views.toLocaleString()}</div>
          </div>
          <div>
            <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Engagement</div>
            <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.engagement}</div>
          </div>
        </div>
        
        <div className="relative pt-4">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className={`w-full border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />
          </div>
          <div className="relative flex justify-center">
            <span className={`px-2 text-sm ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'}`}>
              Quality Score
            </span>
          </div>
        </div>
        
        <div className="mt-4">
          <div className={`w-full bg-opacity-20 h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div 
              className={`h-full rounded-full ${item.score > 89 ? 'bg-green-500' : item.score > 79 ? 'bg-yellow-500' : 'bg-red-500'}`}
              style={{ width: `${item.score}%` }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>0</span>
            <span className={`text-xs font-medium ${item.score > 89 ? (darkMode ? 'text-green-400' : 'text-green-600') : item.score > 79 ? (darkMode ? 'text-yellow-400' : 'text-yellow-600') : (darkMode ? 'text-red-400' : 'text-red-600')}`}>
              {item.score}/100
            </span>
            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>100</span>
          </div>
        </div>
      </div>
      
      <div className={`px-6 py-3 flex justify-between ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`p-2 rounded-full ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-600 hover:bg-gray-200'}`}
        >
          <FiEdit className="h-4 w-4" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`p-2 rounded-full ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-600 hover:bg-gray-200'}`}
        >
          <FiEye className="h-4 w-4" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`p-2 rounded-full ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-600 hover:bg-gray-200'}`}
        >
          <FiShare2 className="h-4 w-4" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`p-2 rounded-full ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-600 hover:bg-gray-200'}`}
        >
          <FiMoreVertical className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ContentCard