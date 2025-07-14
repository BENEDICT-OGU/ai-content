import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiStar, FiClock, FiTrendingUp, FiCopy, FiDownload, FiShare2, FiFileText, } from 'react-icons/fi'
import TemplateForm from './TemplateForm'
import { useState } from 'react'    

const TemplatePreviewModal = ({ template, darkMode, onClose }) => {
  const [activeTab, setActiveTab] = useState('preview')
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(template.description)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 transition-opacity"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-sm" />
        </motion.div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal content */}
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          className={`inline-block align-bottom rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-500'}`}
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          <div className="sm:flex">
            {/* Left panel - Template info */}
            <div className={`sm:w-1/3 p-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="flex items-center mb-4">
                <div 
                  className="h-12 w-12 rounded-lg mr-4 flex items-center justify-center text-white"
                  style={{ background: `linear-gradient(135deg, ${template.colors[0]}, ${template.colors[1]})` }}
                >
                  <FiFileText className="h-6 w-6" />
                </div>
                <div>
                  <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {template.name}
                  </h2>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {/* {categories.find(c => c.id === template.category)?.name} */}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Template Details
                </h3>
                <div className={`rounded-lg p-4 ${darkMode ? 'bg-gray-600' : 'bg-white'} shadow-sm`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Uses</p>
                      <p className={`flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        <FiTrendingUp className="mr-1" />
                        {template.uses.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Rating</p>
                      <p className={`flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        <FiStar className="mr-1" />
                        {template.rating}/5
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Time Saved</p>
                      <p className={`flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        <FiClock className="mr-1" />
                        {template.timeSaved}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Complexity</p>
                      <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {template.complexity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Description
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {template.description}
                </p>
              </div>

              <div className="mt-6 space-y-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-medium ${darkMode ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700' : 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600'} text-white shadow-lg`}
                >
                  Use This Template
                </motion.button>
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={copyToClipboard}
                    className={`flex-1 py-2 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} text-sm font-medium`}
                  >
                    <FiCopy className="mr-2" />
                    {copied ? 'Copied!' : 'Copy'}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 py-2 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} text-sm font-medium`}
                  >
                    <FiDownload className="mr-2" />
                    Save
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 py-2 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} text-sm font-medium`}
                  >
                    <FiShare2 className="mr-2" />
                    Share
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Right panel - Template preview */}
            <div className="sm:w-2/3 p-6">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  {['preview', 'form', 'examples'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab ? (darkMode ? 'border-purple-500 text-purple-400' : 'border-indigo-500 text-indigo-600') : (darkMode ? 'border-transparent text-gray-500 hover:text-gray-400' : 'border-transparent text-gray-500 hover:text-gray-700')}`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="mt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === 'preview' && (
                      <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4`}>
                        <div className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm`}>
                          <h4 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Sample Output Preview
                          </h4>
                          <div className={`border-l-4 ${darkMode ? 'border-purple-500 bg-gray-700' : 'border-indigo-500 bg-gray-50'} pl-4 py-2`}>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              This is a sample output that would be generated using the "{template.name}" template. The AI will create content based on your specific inputs and requirements.
                            </p>
                            <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              For blog posts, you'll typically get an introduction, several well-structured sections with headings, and a conclusion with a call-to-action.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'form' && (
                      <TemplateForm template={template} darkMode={darkMode} />
                    )}

                    {activeTab === 'examples' && (
                      <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4`}>
                        <h4 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Example Outputs
                        </h4>
                        <div className="space-y-4">
                          {[1, 2, 3].map((example) => (
                            <div key={example} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} shadow-sm`}>
                              <h5 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Example {example}
                              </h5>
                              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                This is an example of content generated using this template with different input parameters.
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default TemplatePreviewModal