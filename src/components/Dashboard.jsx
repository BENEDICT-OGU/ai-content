import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiSearch, FiFilter, FiRefreshCw, FiTrendingUp, FiUsers, FiFileText, FiBarChart2 } from 'react-icons/fi'
import ContentCard from './ContentCard'
import DashboardChart from './DashboardChart'
import ActivityFeed from './ActivityFeed'
import AICreativeAssistant from './AICreativeAssistant'

const Dashboard = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const [contentType, setContentType] = useState('all')
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showAssistant, setShowAssistant] = useState(false)

  // Simulate loading
  const refreshData = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  // Stats data with animation variants
  const stats = [
    {
      id: 1,
      name: 'Content Generated',
      value: '1,248',
      change: '+12.5%',
      icon: FiFileText,
      trend: 'up'
    },
    {
      id: 2,
      name: 'Team Members',
      value: '8',
      change: '+2',
      icon: FiUsers,
      trend: 'up'
    },
    {
      id: 3,
      name: 'Content Score',
      value: '92.4',
      change: '+3.2%',
      icon: FiBarChart2,
      trend: 'up'
    },
    {
      id: 4,
      name: 'Engagement Rate',
      value: '8.7%',
      change: '-0.5%',
      icon: FiTrendingUp,
      trend: 'down'
    }
  ]

  // Content items
  const contentItems = [
    {
      id: 1,
      title: "The Future of AI in Content Marketing",
      type: "blog",
      date: "2023-06-15",
      status: "published",
      wordCount: 1450,
      score: 92,
      views: 12500,
      engagement: '8.2%'
    },
    {
      id: 2,
      title: "10 Tips for Better Social Media Engagement",
      type: "social",
      date: "2023-06-10",
      status: "draft",
      wordCount: 320,
      score: 85,
      views: 8700,
      engagement: '6.8%'
    },
    {
      id: 3,
      title: "Product Description: Premium Wireless Headphones",
      type: "product",
      date: "2023-06-05",
      status: "published",
      wordCount: 180,
      score: 88,
      views: 15600,
      engagement: '15.3%'
    },
    {
      id: 4,
      title: "Email Campaign: Summer Sale Announcement",
      type: "email",
      date: "2023-05-28",
      status: "published",
      wordCount: 420,
      score: 90,
      views: 9800,
      engagement: '12.5%'
    },
    {
      id: 5,
      title: "How to Improve Your Website's SEO in 2023",
      type: "blog",
      date: "2023-05-20",
      status: "draft",
      wordCount: 2100,
      score: 95,
      views: 11200,
      engagement: '9.1%'
    },
  ]

  // Filter content based on type and search
  const filteredContent = contentItems
    .filter(item => contentType === 'all' || item.type === contentType)
    .filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className={`min-h-screen py-12 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animated stats */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-light' : 'text-dark'}`}>Dashboard Overview</h1>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Welcome back! Here's what's happening with your content.</p>
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAssistant(true)}
            className={`mt-4 md:mt-0 px-6 py-3 rounded-lg ${darkMode ? 'bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary' : 'bg-gradient-to-r from-accent to-pink-500 hover:from-pink-500 hover:to-accent'} text-white font-medium flex items-center`}
          >
            <FiPlus className="mr-2" /> New Content
          </motion.button>
        </div>

        {/* Stats cards with animations */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg overflow-hidden relative`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -mr-10 -mt-10" 
                style={{ background: darkMode ? 'linear-gradient(135deg, #6e45e2 0%, #88d3ce 100%)' : 'linear-gradient(135deg, #ff6b6b 0%, #88d3ce 100%)' }}
              />
              <div className="relative z-10">
                <div className={`flex items-center justify-between ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span className="text-sm">{stat.name}</span>
                  <stat.icon className={`h-5 w-5 ${stat.trend === 'up' ? (darkMode ? 'text-secondary' : 'text-primary') : (darkMode ? 'text-red-400' : 'text-red-500')}`} />
                </div>
                <div className="mt-2 flex items-baseline">
                  <span className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</span>
                  <span className={`ml-2 text-sm font-medium ${stat.trend === 'up' ? (darkMode ? 'text-secondary' : 'text-primary') : (darkMode ? 'text-red-400' : 'text-red-500')}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main dashboard content */}
        <div className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
          {/* Tab navigation with animated underline */}
          <div className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <nav className="flex -mb-px">
              {['overview', 'content', 'analytics', 'team'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-medium relative ${activeTab === tab ? (darkMode ? 'text-primary' : 'text-accent') : (darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700')}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="activeTab"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${darkMode ? 'bg-primary' : 'bg-accent'}`}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab content with animated transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Chart section */}
                  <div>
                    <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Content Performance</h2>
                    <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <DashboardChart darkMode={darkMode} />
                    </div>
                  </div>

                  {/* Recent activity and quick stats */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Recent Activity</h2>
                      <ActivityFeed darkMode={darkMode} />
                    </div>
                    <div>
                      <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quick Actions</h2>
                      <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} space-y-4`}>
                        <motion.button 
                          whileHover={{ x: 5 }}
                          className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${darkMode ? 'bg-gray-600 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-sm`}
                        >
                          <FiFileText className={`mr-3 ${darkMode ? 'text-secondary' : 'text-primary'}`} />
                          <span>New Blog Post</span>
                        </motion.button>
                        <motion.button 
                          whileHover={{ x: 5 }}
                          className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${darkMode ? 'bg-gray-600 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-sm`}
                        >
                          <FiUsers className={`mr-3 ${darkMode ? 'text-secondary' : 'text-primary'}`} />
                          <span>Invite Team Member</span>
                        </motion.button>
                        <motion.button 
                          whileHover={{ x: 5 }}
                          className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${darkMode ? 'bg-gray-600 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-sm`}
                        >
                          <FiBarChart2 className={`mr-3 ${darkMode ? 'text-secondary' : 'text-primary'}`} />
                          <span>Generate Report</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'content' && (
                <div className="space-y-6">
                  {/* Content filters */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiSearch className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                      </div>
                      <input
                        type="text"
                        placeholder="Search content..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={`block w-full pl-10 pr-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-primary focus:border-primary' : 'bg-white border-gray-300 text-dark placeholder-gray-500 focus:ring-accent focus:border-accent'}`}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <select
                        value={contentType}
                        onChange={(e) => setContentType(e.target.value)}
                        className={`rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white focus:ring-primary focus:border-primary' : 'bg-white border-gray-300 text-dark focus:ring-accent focus:border-accent'} px-3 py-2 focus:outline-none focus:ring-2`}
                      >
                        <option value="all">All Content</option>
                        <option value="blog">Blog Posts</option>
                        <option value="social">Social Media</option>
                        <option value="product">Product Descriptions</option>
                        <option value="email">Email Content</option>
                      </select>
                      <motion.button
                        whileHover={{ rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={refreshData}
                        disabled={isLoading}
                        className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${isLoading ? 'animate-spin' : ''}`}
                      >
                        <FiRefreshCw className={`h-5 w-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                      </motion.button>
                    </div>
                  </div>

                  {/* Content grid */}
                  {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                      <div className="animate-pulse flex space-x-4">
                        <div className={`rounded-full h-12 w-12 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                      </div>
                    </div>
                  ) : (
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {filteredContent.map((item) => (
                        <motion.div
                          key={item.id}
                          variants={itemVariants}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ContentCard item={item} darkMode={darkMode} />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Coming Soon</h2>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Advanced analytics features are under development.</p>
                </div>
              )}

              {activeTab === 'team' && (
                <div className="space-y-6">
                  <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Coming Soon</h2>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Team management features are under development.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* AI Creative Assistant Modal */}
      <AnimatePresence>
        {showAssistant && (
          <AICreativeAssistant darkMode={darkMode} onClose={() => setShowAssistant(false)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Dashboard