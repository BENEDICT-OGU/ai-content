import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiFilter, FiRefreshCw, FiStar, FiClock, FiTrendingUp, FiZap, FiFileText, FiGlobe, FiMail, FiDollarSign, FiVideo, } from 'react-icons/fi'
import { RiRobot2Line, RiLightbulbFlashLine } from 'react-icons/ri'
import TemplateCard from './TemplateCard'
import TemplatePreviewModal from './TemplatePreviewModal'
import CategoryFilter from './CategoryFilter'
import AIRecommendationPanel from './AIRecommendationPanel'

const ContentTemplates = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSort, setSelectedSort] = useState('popular')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'

  // Simulate loading
  const refreshTemplates = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1000)
  }

  // Template categories
  const categories = [
    { id: 'all', name: 'All Templates', icon: RiRobot2Line },
    { id: 'blog', name: 'Blog Content', icon: FiFileText },
    { id: 'social', name: 'Social Media', icon: FiTrendingUp },
    { id: 'marketing', name: 'Marketing', icon: FiZap },
    { id: 'website', name: 'Website Copy', icon: FiGlobe },
    { id: 'product', name: 'Product Descriptions', icon: RiLightbulbFlashLine },
    { id: 'email', name: 'Email Campaigns', icon: FiMail },
    { id: 'ad', name: 'Ad Copy', icon: FiDollarSign },
    { id: 'video', name: 'Video Scripts', icon: FiVideo }
  ]

  // Sort options
  const sortOptions = [
    { id: 'popular', name: 'Most Popular', icon: FiTrendingUp },
    { id: 'newest', name: 'Newest', icon: FiClock },
    { id: 'rating', name: 'Top Rated', icon: FiStar }
  ]

  // Template data with additional fields
  const templates = [
    {
      id: 1,
      name: 'Comprehensive Blog Post',
      category: 'blog',
      description: 'Generate a complete blog post with introduction, sections, and conclusion',
      uses: 12500,
      rating: 4.9,
      created: '2023-05-15',
      complexity: 'Intermediate',
      timeSaved: '2.5 hours',
      previewImage: '/blog-template-preview.jpg',
      colors: ['#6e45e2', '#88d3ce'],
      isNew: false,
      isFeatured: true
    },
    {
      id: 2,
      name: 'SEO Meta Description',
      category: 'website',
      description: 'Create compelling meta descriptions optimized for search engines',
      uses: 8900,
      rating: 4.7,
      created: '2023-06-10',
      complexity: 'Easy',
      timeSaved: '30 minutes',
      previewImage: '/seo-template-preview.jpg',
      colors: ['#ff6b6b', '#f7caca'],
      isNew: true,
      isFeatured: false
    },
    {
      id: 3,
      name: 'Instagram Caption Generator',
      category: 'social',
      description: 'Engaging captions with hashtag suggestions for Instagram posts',
      uses: 15600,
      rating: 4.8,
      created: '2023-04-22',
      complexity: 'Easy',
      timeSaved: '20 minutes',
      previewImage: '/instagram-template-preview.jpg',
      colors: ['#ff9a9e', '#fad0c4'],
      isNew: false,
      isFeatured: true
    },
    {
      id: 4,
      name: 'Product Feature Highlights',
      category: 'product',
      description: 'Convert product specs into compelling feature descriptions',
      uses: 6700,
      rating: 4.6,
      created: '2023-07-05',
      complexity: 'Intermediate',
      timeSaved: '1 hour',
      previewImage: '/product-template-preview.jpg',
      colors: ['#a18cd1', '#fbc2eb'],
      isNew: false,
      isFeatured: false
    },
    {
      id: 5,
      name: 'Email Newsletter',
      category: 'email',
      description: 'Professional email newsletter template with multiple sections',
      uses: 10200,
      rating: 4.8,
      created: '2023-06-18',
      complexity: 'Intermediate',
      timeSaved: '1.5 hours',
      previewImage: '/email-template-preview.jpg',
      colors: ['#84fab0', '#8fd3f4'],
      isNew: true,
      isFeatured: true
    },
    {
      id: 6,
      name: 'Long-Form Ultimate Guide',
      category: 'blog',
      description: 'Comprehensive guide with research, examples, and actionable tips',
      uses: 7800,
      rating: 4.9,
      created: '2023-05-30',
      complexity: 'Advanced',
      timeSaved: '4 hours',
      previewImage: '/guide-template-preview.jpg',
      colors: ['#ffc3a0', '#ffafbd'],
      isNew: false,
      isFeatured: true
    },
    {
      id: 7,
      name: 'Video Script Template',
      category: 'video',
      description: 'Structured script for YouTube videos with hooks and CTAs',
      uses: 5200,
      rating: 4.7,
      created: '2023-07-12',
      complexity: 'Intermediate',
      timeSaved: '2 hours',
      previewImage: '/video-template-preview.jpg',
      colors: ['#a6c1ee', '#fbc2eb'],
      isNew: true,
      isFeatured: false
    },
    {
      id: 8,
      name: 'Facebook Ad Copy',
      category: 'ad',
      description: 'High-converting ad copy for Facebook campaigns',
      uses: 9300,
      rating: 4.8,
      created: '2023-06-05',
      complexity: 'Intermediate',
      timeSaved: '45 minutes',
      previewImage: '/ad-template-preview.jpg',
      colors: ['#ff758c', '#ff7eb3'],
      isNew: false,
      isFeatured: true
    }
  ]

  // Filter templates based on selections
  const filteredTemplates = templates
    .filter(template => {
      const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          template.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (selectedSort === 'popular') return b.uses - a.uses
      if (selectedSort === 'newest') return new Date(b.created) - new Date(a.created)
      if (selectedSort === 'rating') return b.rating - a.rating
      return 0
    })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  }

  return (
    <section className={`min-h-screen py-12 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animated gradient */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center relative overflow-hidden rounded-2xl p-8"
        >
          <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-r from-purple-900/30 to-indigo-900/30' : 'bg-gradient-to-r from-purple-100 to-indigo-100'} rounded-2xl`} />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px] opacity-10" />
          <div className="relative z-10">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Content <span className={`${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500'}`}>Templates</span>
            </h1>
            <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Jumpstart your content creation with our professionally designed AI templates
            </p>
          </div>
        </motion.div>

        {/* Filters and controls */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`mb-8 p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700' : 'bg-white/80 backdrop-blur-md border border-gray-200'} shadow-lg`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              </div>
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`block w-full pl-10 pr-3 py-3 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500' : 'bg-white border-gray-300 text-dark placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500'} shadow-sm focus:outline-none focus:ring-2`}
              />
            </div>

            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} shadow-sm`}
              >
                {viewMode === 'grid' ? (
                  <svg className={`h-5 w-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className={`h-5 w-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                )}
              </motion.button>

              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={refreshTemplates}
                disabled={isLoading}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} shadow-sm ${isLoading ? 'animate-spin' : ''}`}
              >
                <FiRefreshCw className={`h-5 w-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowRecommendations(!showRecommendations)}
                className={`px-4 py-2 rounded-lg flex items-center ${darkMode ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700' : 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600'} text-white shadow-lg`}
              >
                <RiLightbulbFlashLine className="mr-2" />
                Get Recommendations
              </motion.button>
            </div>
          </div>

          {/* Category filter chips with animations */}
          <motion.div 
            className="mt-6 flex flex-wrap gap-2"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                variants={itemVariants}
                whileHover="hover"
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${selectedCategory === category.id ? 
                  (darkMode ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white' : 'bg-gradient-to-r from-purple-400 to-indigo-400 text-white') : 
                  (darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}`}
              >
                <category.icon className="mr-2" />
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Sort options */}
          <div className="mt-6 flex items-center">
            <span className={`mr-3 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Sort by:</span>
            <div className="flex space-x-2">
              {sortOptions.map((option) => (
                <motion.button
                  key={option.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSort(option.id)}
                  className={`px-3 py-1 rounded-full text-sm flex items-center ${selectedSort === option.id ? 
                    (darkMode ? 'bg-indigo-900/50 text-indigo-300 border border-indigo-700' : 'bg-indigo-100 text-indigo-700 border border-indigo-200') : 
                    (darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}`}
                >
                  <option.icon className="mr-1" />
                  {option.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AI Recommendations Panel */}
        <AnimatePresence>
          {showRecommendations && (
            <AIRecommendationPanel 
              darkMode={darkMode} 
              onClose={() => setShowRecommendations(false)}
              templates={templates}
              onSelectTemplate={setSelectedTemplate}
            />
          )}
        </AnimatePresence>

        {/* Loading state */}
        {isLoading ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center h-64"
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { 
                    repeat: Infinity, 
                    duration: 2, 
                    ease: "linear" 
                  },
                  scale: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5
                  }
                }}
                className={`h-12 w-12 rounded-full border-4 ${darkMode ? 'border-purple-500 border-t-transparent' : 'border-indigo-500 border-t-transparent'}`}
              />
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
              >
                Loading templates...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Grid View */}
            {viewMode === 'grid' && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredTemplates.map((template) => (
                  <motion.div
                    key={template.id}
                    variants={itemVariants}
                    whileHover="hover"
                    onClick={() => setSelectedTemplate(template)}
                  >
                    <TemplateCard template={template} darkMode={darkMode} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* List View */}
            {viewMode === 'list' && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'}`}
              >
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                    <tr>
                      <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        Template
                      </th>
                      <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        Category
                      </th>
                      <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        Uses
                      </th>
                      <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        Rating
                      </th>
                      <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        Time Saved
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                    {filteredTemplates.map((template) => (
                      <motion.tr 
                        key={template.id}
                        variants={itemVariants}
                        whileHover={{ backgroundColor: darkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(243, 244, 246, 0.5)' }}
                        className={darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'}
                        onClick={() => setSelectedTemplate(template)}
                      >
                        <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          <div className="flex items-center">
                            <div 
                              className="flex-shrink-0 h-10 w-10 rounded-lg mr-4"
                              style={{ background: `linear-gradient(135deg, ${template.colors[0]}, ${template.colors[1]})` }}
                            />
                            <div>
                              <div className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{template.name}</div>
                              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{template.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {categories.find(c => c.id === template.category)?.name}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {template.uses.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon 
                                  key={i} 
                                  className={`h-4 w-4 ${i < Math.floor(template.rating) ? (darkMode ? 'text-yellow-400' : 'text-yellow-500') : (darkMode ? 'text-gray-600' : 'text-gray-300')}`} 
                                />
                              ))}
                            </div>
                            <div className={`ml-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {template.rating}
                            </div>
                          </div>
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {template.timeSaved}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedTemplate(template)
                            }}
                            className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-900'}`}
                          >
                            View
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </>
        )}

        {/* Empty state */}
        {!isLoading && filteredTemplates.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`rounded-2xl p-12 text-center ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'}`}
          >
            <RiRobot2Line className={`mx-auto h-12 w-12 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            <h3 className={`mt-2 text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>No templates found</h3>
            <p className={`mt-1 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Reset filters
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Template Preview Modal */}
      <AnimatePresence>
        {selectedTemplate && (
          <TemplatePreviewModal 
            template={selectedTemplate} 
            darkMode={darkMode} 
            onClose={() => setSelectedTemplate(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}

const StarIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export default ContentTemplates