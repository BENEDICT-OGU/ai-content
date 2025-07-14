import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronRight, FiUsers, FiTrendingUp, FiSearch } from 'react-icons/fi'
import { RiRobot2Line, RiLightbulbFlashLine } from 'react-icons/ri'
import { useState } from 'react'

const AIRecommendationPanel = ({ darkMode, onClose, templates, onSelectTemplate }) => {
  const [step, setStep] = useState(1)
  const [selectedGoal, setSelectedGoal] = useState(null)
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const [recommendations, setRecommendations] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const goals = [
    { id: 'awareness', name: 'Brand Awareness', icon: RiLightbulbFlashLine },
    { id: 'engagement', name: 'Audience Engagement', icon: FiUsers },
    { id: 'conversion', name: 'Lead Conversion', icon: FiTrendingUp },
    { id: 'seo', name: 'SEO Optimization', icon: FiSearch }
  ]

  const industries = [
    { id: 'tech', name: 'Technology' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'health', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'education', name: 'Education' },
    { id: 'marketing', name: 'Marketing' }
  ]

  const getRecommendations = () => {
    setIsLoading(true)
    // Simulate AI recommendation
    setTimeout(() => {
      const recommended = templates
        .filter(t => 
          (selectedGoal === 'seo' && t.category === 'website') ||
          (selectedGoal === 'engagement' && t.category === 'social') ||
          (selectedGoal === 'conversion' && t.category === 'ad') ||
          (selectedGoal === 'awareness' && t.category === 'blog')
        )
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
      setRecommendations(recommended)
      setIsLoading(false)
      setStep(3)
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`fixed bottom-8 right-8 w-full z-[10000] max-w-md rounded-2xl shadow-2xl overflow-hidden ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <RiRobot2Line className={`h-6 w-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            <h3 className={`text-lg font-bold ml-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              AI Recommendations
            </h3>
          </div>
          <button
            onClick={onClose}
            className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-500'}`}
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h4 className={`text-sm font-medium mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                What's your primary content goal?
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {goals.map((goal) => (
                  <motion.button
                    key={goal.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setSelectedGoal(goal.id)
                      setStep(2)
                    }}
                    className={`p-4 rounded-xl flex flex-col items-center ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
                  >
                    <goal.icon className={`h-6 w-6 mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{goal.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center mb-2">
                <button 
                  onClick={() => setStep(1)}
                  className={`p-1 rounded-full mr-2 ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-500'}`}
                >
                  <FiChevronRight className="h-5 w-5 transform rotate-180" />
                </button>
                <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  What industry are you in?
                </h4>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {industries.map((industry) => (
                  <motion.button
                    key={industry.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setSelectedIndustry(industry.id)
                      getRecommendations()
                    }}
                    className={`p-3 rounded-lg text-sm ${selectedIndustry === industry.id ? 
                      (darkMode ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white') : 
                      (darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}`}
                  >
                    {industry.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center mb-4">
                <button 
                  onClick={() => setStep(2)}
                  className={`p-1 rounded-full mr-2 ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-500'}`}
                >
                  <FiChevronRight className="h-5 w-5 transform rotate-180" />
                </button>
                <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Recommended Templates
                </h4>
              </div>

              {isLoading ? (
                <div className="flex justify-center items-center h-32">
                  <div className="animate-pulse flex flex-col items-center">
                    <RiRobot2Line className={`h-8 w-8 mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'} animate-bounce`} />
                    <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Analyzing your needs...</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {recommendations.map((template) => (
                    <motion.div
                      key={template.id}
                      whileHover={{ x: 5 }}
                      onClick={() => onSelectTemplate(template)}
                      className={`p-3 rounded-lg flex items-center cursor-pointer ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
                    >
                      <div 
                        className="h-10 w-10 rounded-lg mr-3 flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${template.colors[0]}, ${template.colors[1]})` }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {template.name}
                        </p>
                        <p className={`text-xs truncate ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {template.description}
                        </p>
                      </div>
                      <FiChevronRight className={`h-5 w-5 ml-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default AIRecommendationPanel