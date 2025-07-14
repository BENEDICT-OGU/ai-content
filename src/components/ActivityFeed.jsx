import { motion } from 'framer-motion'
import { FiEdit, FiUsers, FiFileText, FiBarChart2 } from 'react-icons/fi'
import { useState } from 'react'

const activities = [
  {
    id: 1,
    type: 'content',
    title: 'Published "The Future of AI Content"',
    time: '2 hours ago',
    icon: FiFileText,
    color: 'text-primary'
  },
  {
    id: 2,
    type: 'team',
    title: 'Sarah joined your team',
    time: '1 day ago',
    icon: FiUsers,
    color: 'text-secondary'
  },
  {
    id: 3,
    type: 'edit',
    title: 'You edited "Summer Sale Announcement"',
    time: '1 day ago',
    icon: FiEdit,
    color: 'text-accent'
  },
  {
    id: 4,
    type: 'analytics',
    title: 'New analytics data available',
    time: '2 days ago',
    icon: FiBarChart2,
    color: 'text-green-500'
  },
  {
    id: 5,
    type: 'content',
    title: 'Drafted "SEO Best Practices"',
    time: '3 days ago',
    icon: FiFileText,
    color: 'text-primary'
  }
]

const ActivityFeed = ({ darkMode }) => {
  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4`}>
      <ul className="divide-y divide-gray-200">
        {activities.map((activity, index) => (
          <motion.li 
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`py-4 ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} px-3 rounded-lg`}
          >
            <div className="flex items-center space-x-3">
              <div className={`flex-shrink-0 ${activity.color}`}>
                <activity.icon className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {activity.title}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {activity.time}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default ActivityFeed