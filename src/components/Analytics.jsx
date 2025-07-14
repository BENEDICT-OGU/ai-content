import { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  LineChart, Line, ScatterChart, Scatter, ZAxis, Treemap
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTrendingUp, FiUsers, FiEye, FiClock, FiShare2, FiHeart } from 'react-icons/fi';

const Analytics = ({ darkMode }) => {
  const [timeRange, setTimeRange] = useState('6m');
  const [activeTab, setActiveTab] = useState('overview');
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  // Content data with more metrics
  const contentData = [
    { name: 'Jan', blog: 12, social: 8, product: 5, video: 3, total: 28, trend: 1.2 },
    { name: 'Feb', blog: 18, social: 12, product: 7, video: 5, total: 42, trend: 1.8 },
    { name: 'Mar', blog: 15, social: 10, product: 6, video: 4, total: 35, trend: 0.9 },
    { name: 'Apr', blog: 22, social: 15, product: 9, video: 7, total: 53, trend: 2.1 },
    { name: 'May', blog: 19, social: 13, product: 8, video: 6, total: 46, trend: 1.5 },
    { name: 'Jun', blog: 25, social: 18, product: 11, video: 9, total: 63, trend: 2.4 },
  ];

  // Performance data with more categories
  const performanceData = [
    { name: 'Published', value: 68, fill: '#6e45e2' },
    { name: 'Drafts', value: 15, fill: '#88d3ce' },
    { name: 'Archived', value: 17, fill: '#ff6b6b' },
    { name: 'Scheduled', value: 22, fill: '#ffa502' },
    { name: 'Pending Review', value: 8, fill: '#7bed9f' },
  ];

  // Engagement data
  const engagementData = [
    { name: 'Mon', engagement: 4.2, reach: 1200, shares: 45 },
    { name: 'Tue', engagement: 5.1, reach: 1800, shares: 62 },
    { name: 'Wed', engagement: 3.8, reach: 1500, shares: 38 },
    { name: 'Thu', engagement: 6.2, reach: 2200, shares: 78 },
    { name: 'Fri', engagement: 7.5, reach: 2800, shares: 92 },
    { name: 'Sat', engagement: 5.9, reach: 2100, shares: 65 },
    { name: 'Sun', engagement: 8.1, reach: 3200, shares: 110 },
  ];

  // Audience demographics
  const audienceData = [
    { subject: '18-24', A: 120, B: 110, fullMark: 150 },
    { subject: '25-34', A: 98, B: 130, fullMark: 150 },
    { subject: '35-44', A: 86, B: 130, fullMark: 150 },
    { subject: '45-54', A: 99, B: 100, fullMark: 150 },
    { subject: '55+', A: 85, B: 90, fullMark: 150 },
  ];

  // Top performing content
  const topContent = [
    { id: 1, title: 'The Future of AI Content', type: 'blog', views: 12500, engagement: '8.2%', score: 94, likes: 842, shares: 312, duration: '5 min' },
    { id: 2, title: 'Summer Sale Announcement', type: 'email', views: 9800, engagement: '12.5%', score: 89, likes: 721, shares: 198, duration: '2 min' },
    { id: 3, title: 'Premium Headphones Review', type: 'product', views: 8700, engagement: '6.8%', score: 87, likes: 654, shares: 143, duration: '7 min' },
    { id: 4, title: '10 Social Media Tips', type: 'social', views: 15600, engagement: '15.3%', score: 96, likes: 1128, shares: 487, duration: '4 min' },
    { id: 5, title: 'SEO Best Practices', type: 'blog', views: 11200, engagement: '9.1%', score: 91, likes: 932, shares: 276, duration: '6 min' },
  ];

  // KPI cards data
  const kpiData = [
    { title: "Total Views", value: "124,832", change: "+12.5%", icon: <FiEye />, trend: 'up' },
    { title: "Engagement Rate", value: "8.7%", change: "+3.2%", icon: <FiTrendingUp />, trend: 'up' },
    { title: "New Followers", value: "2,841", change: "+5.8%", icon: <FiUsers />, trend: 'up' },
    { title: "Avg. Time Spent", value: "4.2 min", change: "-0.3%", icon: <FiClock />, trend: 'down' },
  ];

  // Tree map data for content distribution
  const treeMapData = [
    { name: 'Technology', size: 35, fill: '#6e45e2' },
    { name: 'Business', size: 28, fill: '#88d3ce' },
    { name: 'Health', size: 22, fill: '#ff6b6b' },
    { name: 'Entertainment', size: 18, fill: '#ffa502' },
    { name: 'Education', size: 15, fill: '#7bed9f' },
    { name: 'Lifestyle', size: 12, fill: '#70a1ff' },
  ];

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label, darkMode }) => {
    if (active && payload && payload.length) {
      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg shadow-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
        >
          <p className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>{label}</p>
          {payload.map((item, index) => (
            <p key={index} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {item.name}: <span style={{ color: item.color }}>{item.value}</span>
            </p>
          ))}
        </motion.div>
      );
    }
    return null;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <h1 className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Content Analytics</h1>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Comprehensive insights into your content performance</p>
        </motion.div>

        {/* Time range selector */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-between items-center mb-8"
        >
          <div className="flex space-x-2">
            {['1w', '1m', '3m', '6m', '1y'].map((range) => (
              <motion.button
                key={range}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  timeRange === range 
                    ? (darkMode ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white') 
                    : (darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100')
                }`}
                onClick={() => setTimeRange(range)}
              >
                {range}
              </motion.button>
            ))}
          </div>
          
          <div className="flex space-x-4">
            {['overview', 'content', 'audience', 'engagement'].map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab 
                    ? (darkMode ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white') 
                    : (darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100')
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* KPI Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {kpiData.map((kpi, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all duration-300 hover:shadow-xl`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{kpi.title}</p>
                  <h3 className={`text-2xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{kpi.value}</h3>
                </div>
                <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-purple-500`}>
                  {kpi.icon}
                </div>
              </div>
              <div className={`mt-4 flex items-center text-sm ${
                kpi.trend === 'up' ? (darkMode ? 'text-green-400' : 'text-green-600') : (darkMode ? 'text-red-400' : 'text-red-600')
              }`}>
                {kpi.change}
                <span className="ml-1">{kpi.trend === 'up' ? '↑' : '↓'}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Charts Grid */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10"
        >
          {/* Content Created Chart */}
          <motion.div 
            variants={itemVariants}
            className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all duration-300 hover:shadow-xl`}
          >
            <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Content Created</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={contentData}>
                  <defs>
                    <linearGradient id="colorBlog" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6e45e2" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#6e45e2" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSocial" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#88d3ce" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#88d3ce" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorProduct" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff6b6b" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ff6b6b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="name" stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                  <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                  <Tooltip content={<CustomTooltip darkMode={darkMode} />} />
                  <Legend />
                  <Area type="monotone" dataKey="blog" stroke="#6e45e2" fillOpacity={1} fill="url(#colorBlog)" name="Blog Posts" />
                  <Area type="monotone" dataKey="social" stroke="#88d3ce" fillOpacity={1} fill="url(#colorSocial)" name="Social Media" />
                  <Area type="monotone" dataKey="product" stroke="#ff6b6b" fillOpacity={1} fill="url(#colorProduct)" name="Products" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Content Status Chart */}
          <motion.div 
            variants={itemVariants}
            className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all duration-300 hover:shadow-xl`}
          >
            <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Content Status</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={performanceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    animationBegin={0}
                    animationDuration={1000}
                    animationEasing="ease-out"
                  >
                    {performanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip darkMode={darkMode} />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Engagement Chart */}
          <motion.div 
            variants={itemVariants}
            className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all duration-300 hover:shadow-xl`}
          >
            <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Engagement Metrics</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="name" stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                  <YAxis yAxisId="left" stroke="#6e45e2" />
                  <YAxis yAxisId="right" orientation="right" stroke="#ff6b6b" />
                  <Tooltip content={<CustomTooltip darkMode={darkMode} />} />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="engagement" stroke="#6e45e2" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Engagement Rate (%)" />
                  <Line yAxisId="right" type="monotone" dataKey="shares" stroke="#ff6b6b" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Shares" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Audience Demographics */}
          <motion.div 
            variants={itemVariants}
            className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all duration-300 hover:shadow-xl`}
          >
            <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Audience Demographics</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={audienceData}>
                  <PolarGrid stroke={darkMode ? '#374151' : '#e5e7eb'} />
                  <PolarAngleAxis dataKey="subject" stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                  <Radar name="Male" dataKey="A" stroke="#6e45e2" fill="#6e45e2" fillOpacity={0.6} />
                  <Radar name="Female" dataKey="B" stroke="#88d3ce" fill="#88d3ce" fillOpacity={0.6} />
                  <Legend />
                  <Tooltip content={<CustomTooltip darkMode={darkMode} />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Distribution */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-10`}
        >
          <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Content Distribution by Category</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <Treemap
                data={treeMapData}
                dataKey="size"
                aspectRatio={4/3}
                stroke="#fff"
                fill={darkMode ? '#1f2937' : '#f9fafb'}
                content={<CustomTooltip darkMode={darkMode} />}
              >
                {treeMapData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Treemap>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Top Performing Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Top Performing Content</h2>
            <button className={`px-4 py-2 rounded-lg text-sm font-medium ${
              darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}>
              View All
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300 bg-gray-700' : 'text-gray-500 bg-gray-50'} uppercase tracking-wider`}>Title</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300 bg-gray-700' : 'text-gray-500 bg-gray-50'} uppercase tracking-wider`}>Type</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300 bg-gray-700' : 'text-gray-500 bg-gray-50'} uppercase tracking-wider`}>Views</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300 bg-gray-700' : 'text-gray-500 bg-gray-50'} uppercase tracking-wider`}>Engagement</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300 bg-gray-700' : 'text-gray-500 bg-gray-50'} uppercase tracking-wider`}>Likes</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300 bg-gray-700' : 'text-gray-500 bg-gray-50'} uppercase tracking-wider`}>Shares</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300 bg-gray-700' : 'text-gray-500 bg-gray-50'} uppercase tracking-wider`}>Duration</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300 bg-gray-700' : 'text-gray-500 bg-gray-50'} uppercase tracking-wider`}>Score</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                {topContent.map((item) => (
                  <motion.tr 
                    key={item.id} 
                    className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.type === 'blog' ? (darkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800') :
                        item.type === 'social' ? (darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800') :
                        item.type === 'product' ? (darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800') :
                        (darkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800')
                      }`}>
                        {item.type}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{item.views.toLocaleString()}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{item.engagement}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      <div className="flex items-center">
                        <FiHeart className="mr-1 text-red-500" />
                        {item.likes}
                      </div>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      <div className="flex items-center">
                        <FiShare2 className="mr-1 text-blue-500" />
                        {item.shares}
                      </div>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{item.duration}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            item.score > 89 ? 'bg-green-500' : 
                            item.score > 79 ? 'bg-yellow-500' : 'bg-red-500'
                          }`} 
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.score}/100</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Analytics;