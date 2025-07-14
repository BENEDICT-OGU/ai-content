import { motion } from 'framer-motion'
import { FiChevronDown, FiCheck } from 'react-icons/fi'
import { useState } from 'react'

const TemplateForm = ({ template, darkMode }) => {
  const [formData, setFormData] = useState({
    topic: '',
    tone: 'professional',
    keywords: '',
    length: 'medium'
  })

  const tones = [
    { id: 'professional', name: 'Professional' },
    { id: 'casual', name: 'Casual' },
    { id: 'enthusiastic', name: 'Enthusiastic' },
    { id: 'authoritative', name: 'Authoritative' }
  ]

  const lengths = [
    { id: 'short', name: 'Short (300 words)' },
    { id: 'medium', name: 'Medium (600 words)' },
    { id: 'long', name: 'Long (1000+ words)' }
  ]

  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4`}>
      <h4 className={`text-sm font-medium mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Configure your {template.name}
      </h4>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="topic" className={`block text-xs font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Topic / Subject
          </label>
          <input
            id="topic"
            type="text"
            value={formData.topic}
            onChange={(e) => setFormData({...formData, topic: e.target.value})}
            placeholder="What should this content be about?"
            className={`w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500' : 'bg-white border-gray-300 text-dark placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500'} shadow-sm focus:outline-none focus:ring-1`}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="tone" className={`block text-xs font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Tone
            </label>
            <div className="relative">
              <select
                id="tone"
                value={formData.tone}
                onChange={(e) => setFormData({...formData, tone: e.target.value})}
                className={`appearance-none w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-500 text-white focus:ring-purple-500 focus:border-purple-500' : 'bg-white border-gray-300 text-dark focus:ring-indigo-500 focus:border-indigo-500'} shadow-sm focus:outline-none focus:ring-1 pr-8`}
              >
                {tones.map((tone) => (
                  <option key={tone.id} value={tone.id}>{tone.name}</option>
                ))}
              </select>
              <div className={`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <FiChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="length" className={`block text-xs font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Length
            </label>
            <div className="relative">
              <select
                id="length"
                value={formData.length}
                onChange={(e) => setFormData({...formData, length: e.target.value})}
                className={`appearance-none w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-500 text-white focus:ring-purple-500 focus:border-purple-500' : 'bg-white border-gray-300 text-dark focus:ring-indigo-500 focus:border-indigo-500'} shadow-sm focus:outline-none focus:ring-1 pr-8`}
              >
                {lengths.map((length) => (
                  <option key={length.id} value={length.id}>{length.name}</option>
                ))}
              </select>
              <div className={`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <FiChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="keywords" className={`block text-xs font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Keywords (comma separated)
          </label>
          <input
            id="keywords"
            type="text"
            value={formData.keywords}
            onChange={(e) => setFormData({...formData, keywords: e.target.value})}
            placeholder="seo, marketing, content, etc."
            className={`w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500' : 'bg-white border-gray-300 text-dark placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500'} shadow-sm focus:outline-none focus:ring-1`}
          />
        </div>

        <div className="pt-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!formData.topic}
            className={`w-full py-3 rounded-lg font-medium flex items-center justify-center ${!formData.topic ? 
              (darkMode ? 'bg-gray-600 text-gray-400' : 'bg-gray-200 text-gray-500') : 
              (darkMode ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white' : 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white')} shadow-lg`}
          >
            <FiCheck className="mr-2" />
            Generate Content
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default TemplateForm