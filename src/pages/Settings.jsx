
import { useState } from 'react'


const Settings = ({ darkMode }) => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weeklyDigest: true,
    productUpdates: true
  })

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target
    setNotifications(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  return (
    <section className={`min-h-screen py-12 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-light' : 'text-dark'}`}>Account Settings</h1>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Manage your profile and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`lg:col-span-1 rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <nav className="space-y-1">
              {[
                { name: 'Profile', href: '#', current: false },
                { name: 'Notifications', href: '#', current: true },
                { name: 'Billing', href: '#', current: false },
                { name: 'Team', href: '#', current: false },
                { name: 'Integrations', href: '#', current: false },
                { name: 'API Keys', href: '#', current: false },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${item.current ? (darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900') : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900')}`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className={`lg:col-span-2 rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Notification Preferences</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email Notifications</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="email"
                        name="email"
                        type="checkbox"
                        checked={notifications.email}
                        onChange={handleNotificationChange}
                        className={`focus:ring-0 h-4 w-4 rounded ${darkMode ? 'bg-gray-700 border-gray-600 text-primary' : 'bg-white border-gray-300 text-accent'}`}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="email" className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                      <p className={darkMode ? 'text-gray-500' : 'text-gray-500'}>Receive email notifications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="weeklyDigest"
                        name="weeklyDigest"
                        type="checkbox"
                        checked={notifications.weeklyDigest}
                        onChange={handleNotificationChange}
                        className={`focus:ring-0 h-4 w-4 rounded ${darkMode ? 'bg-gray-700 border-gray-600 text-primary' : 'bg-white border-gray-300 text-accent'}`}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="weeklyDigest" className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Weekly Digest</label>
                      <p className={darkMode ? 'text-gray-500' : 'text-gray-500'}>Get a weekly summary of your content performance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="productUpdates"
                        name="productUpdates"
                        type="checkbox"
                        checked={notifications.productUpdates}
                        onChange={handleNotificationChange}
                        className={`focus:ring-0 h-4 w-4 rounded ${darkMode ? 'bg-gray-700 border-gray-600 text-primary' : 'bg-white border-gray-300 text-accent'}`}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="productUpdates" className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Product Updates</label>
                      <p className={darkMode ? 'text-gray-500' : 'text-gray-500'}>Receive updates about new features</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Push Notifications</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="push"
                        name="push"
                        type="checkbox"
                        checked={notifications.push}
                        onChange={handleNotificationChange}
                        className={`focus:ring-0 h-4 w-4 rounded ${darkMode ? 'bg-gray-700 border-gray-600 text-primary' : 'bg-white border-gray-300 text-accent'}`}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="push" className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Push Notifications</label>
                      <p className={darkMode ? 'text-gray-500' : 'text-gray-500'}>Receive push notifications on your devices</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md text-sm font-medium ${darkMode ? 'bg-primary hover:bg-purple-700' : 'bg-accent hover:bg-red-500'} text-white shadow-sm`}
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Settings