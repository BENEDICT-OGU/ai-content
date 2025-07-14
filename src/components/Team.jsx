import { useState } from 'react'

const Team = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('members')

  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Content Manager',
      email: 'alex@example.com',
      lastActive: '2 hours ago',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'SEO Specialist',
      email: 'sarah@example.com',
      lastActive: '1 day ago',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Social Media',
      email: 'michael@example.com',
      lastActive: '30 minutes ago',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Copywriter',
      email: 'emily@example.com',
      lastActive: '5 hours ago',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
  ]

  const invitations = [
    {
      id: 1,
      email: 'ryan@example.com',
      role: 'Content Editor',
      sent: '3 days ago',
      status: 'Pending'
    },
    {
      id: 2,
      email: 'lisa@example.com',
      role: 'Marketing Specialist',
      sent: '1 week ago',
      status: 'Pending'
    }
  ]

  return (
    <section className={`min-h-screen py-12 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-light' : 'text-dark'}`}>Team Collaboration</h1>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Manage your team members and permissions</p>
        </div>

        <div className={`rounded-xl p-1 mb-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('members')}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${activeTab === 'members' ? (darkMode ? 'bg-gray-700 text-white' : 'bg-white text-dark shadow') : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100')}`}
            >
              Team Members
            </button>
            <button
              onClick={() => setActiveTab('invitations')}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${activeTab === 'invitations' ? (darkMode ? 'bg-gray-700 text-white' : 'bg-white text-dark shadow') : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100')}`}
            >
              Invitations
            </button>
            <button
              onClick={() => setActiveTab('permissions')}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${activeTab === 'permissions' ? (darkMode ? 'bg-gray-700 text-white' : 'bg-white text-dark shadow') : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100')}`}
            >
              Permissions
            </button>
          </div>
        </div>

        {activeTab === 'members' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Team Members ({teamMembers.length})</h2>
              <button className={`px-4 py-2 rounded-md text-sm font-medium ${darkMode ? 'bg-primary hover:bg-purple-700' : 'bg-accent hover:bg-red-500'} text-white`}>
                + Invite Member
              </button>
            </div>

            <div className={`rounded-xl overflow-hidden shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <ul className="divide-y divide-gray-200">
                {teamMembers.map((member) => (
                  <li key={member.id} className={`p-4 hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={member.avatar} alt={member.name} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>{member.name}</p>
                        <p className={`text-sm truncate ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{member.role}</p>
                      </div>
                      <div className="hidden md:block">
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{member.email}</p>
                      </div>
                      <div>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{member.lastActive}</p>
                      </div>
                      <div>
                        <button className={`p-2 rounded-full ${darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}>
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'invitations' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Pending Invitations ({invitations.length})</h2>
              <button className={`px-4 py-2 rounded-md text-sm font-medium ${darkMode ? 'bg-primary hover:bg-purple-700' : 'bg-accent hover:bg-red-500'} text-white`}>
                + New Invitation
              </button>
            </div>

            <div className={`rounded-xl overflow-hidden shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                  <tr>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Email</th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Role</th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Sent</th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Status</th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  {invitations.map((invite) => (
                    <tr key={invite.id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{invite.email}</td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{invite.role}</td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{invite.sent}</td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>{invite.status}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className={`mr-3 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-900'}`}>Resend</button>
                        <button className={darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-900'}>Cancel</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'permissions' && (
          <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Role Permissions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                  <tr>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Role</th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Create Content</th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Edit Content</th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Publish</th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Analytics</th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Team</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  {[
                    { role: 'Admin', create: true, edit: true, publish: true, analytics: true, team: true },
                    { role: 'Content Manager', create: true, edit: true, publish: true, analytics: true, team: false },
                    { role: 'Editor', create: true, edit: true, publish: false, analytics: false, team: false },
                    { role: 'Contributor', create: true, edit: false, publish: false, analytics: false, team: false },
                    { role: 'Viewer', create: false, edit: false, publish: false, analytics: true, team: false },
                  ].map((item, index) => (
                    <tr key={index} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {item.create ? (
                          <span className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>Yes</span>
                        ) : (
                          <span className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800'}`}>No</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {item.edit ? (
                          <span className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>Yes</span>
                        ) : (
                          <span className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800'}`}>No</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {item.publish ? (
                          <span className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>Yes</span>
                        ) : (
                          <span className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800'}`}>No</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {item.analytics ? (
                          <span className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>Yes</span>
                        ) : (
                          <span className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800'}`}>No</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {item.team ? (
                          <span className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>Yes</span>
                        ) : (
                          <span className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800'}`}>No</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Team