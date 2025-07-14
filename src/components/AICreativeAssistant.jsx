import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiMessageSquare, FiImage, FiCode, FiMusic } from 'react-icons/fi'
import { useState } from 'react'

const AICreativeAssistant = ({ darkMode, onClose }) => {
  const [activeTab, setActiveTab] = useState('text')
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
        >
          <div 
            className="absolute inset-0 bg-gray-900 bg-opacity-75"
            onClick={onClose}
          />
        </motion.div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className={`inline-block align-bottom rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                AI Creative Assistant
              </h3>
              <button
                onClick={onClose}
                className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-500'}`}
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-6">
              <div className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <nav className="flex -mb-px space-x-8">
                  {[
                    { id: 'text', icon: FiMessageSquare, label: 'Text' },
                    { id: 'image', icon: FiImage, label: 'Images' },
                    { id: 'code', icon: FiCode, label: 'Code' },
                    { id: 'audio', icon: FiMusic, label: 'Audio' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === tab.id ? (darkMode ? 'border-primary text-primary' : 'border-accent text-accent') : (darkMode ? 'border-transparent text-gray-400 hover:text-gray-300' : 'border-transparent text-gray-500 hover:text-gray-700')}`}
                    >
                      <tab.icon className={`mr-2 ${activeTab === tab.id ? (darkMode ? 'text-primary' : 'text-accent') : (darkMode ? 'text-gray-400' : 'text-gray-500')}`} />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="prompt" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Describe what you want to create
              </label>
              <textarea
                id="prompt"
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-primary focus:border-primary' : 'bg-white border-gray-300 text-dark placeholder-gray-500 focus:ring-accent focus:border-accent'}`}
                placeholder="e.g. 'A blog post about the future of renewable energy'"
              />
            </div>

            <div className="flex justify-end space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className={`px-4 py-2 rounded-md text-sm font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGenerate}
                disabled={!prompt || isGenerating}
                className={`px-4 py-2 rounded-md text-sm font-medium ${!prompt || isGenerating ? (darkMode ? 'bg-gray-600 text-gray-400' : 'bg-gray-200 text-gray-500') : (darkMode ? 'bg-primary hover:bg-purple-700 text-white' : 'bg-accent hover:bg-red-500 text-white')}`}
              >
                {isGenerating ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </span>
                ) : 'Generate'}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AICreativeAssistant