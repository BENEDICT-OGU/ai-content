const Footer = ({ darkMode }) => {
  const links = [
    {
      title: 'Product',
      items: [
        { name: 'Features', href: '#' },
        { name: 'Templates', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Integrations', href: '#' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Webinars', href: '#' },
        { name: 'API Status', href: '#' }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' }
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Status', href: '#' },
        { name: 'Community', href: '#' }
      ]
    }
  ]

  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <span className={`text-2xl font-bold ${darkMode ? 'text-secondary' : 'text-primary'}`}>NexusAI</span>
            </div>
            <p className={`mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              The most advanced AI content platform for modern teams and businesses.
            </p>
            <div className="flex space-x-6 mt-6">
              {['twitter', 'facebook', 'linkedin', 'github'].map((social) => (
                <a key={social} href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  <span className="sr-only">{social}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d={`M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z`} clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {links.map((column) => (
            <div key={column.title}>
              <h3 className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.items.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="col-span-2 lg:col-span-1">
            <h3 className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              Subscribe to our newsletter
            </h3>
            <p className={`mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-4 flex">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`min-w-0 flex-auto rounded-l-md border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-primary focus:border-primary' : 'bg-white border-gray-300 text-dark placeholder-gray-400 focus:ring-accent focus:border-accent'} px-4 py-2 focus:outline-none focus:ring-2`}
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className={`rounded-r-md px-4 py-2 border border-transparent text-sm font-medium ${darkMode ? 'bg-primary hover:bg-purple-700 text-white' : 'bg-accent hover:bg-red-500 text-white'} focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkMode ? 'focus:ring-primary' : 'focus:ring-accent'}`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} flex flex-col md:flex-row justify-between items-center`}>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} NexusAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Privacy Policy</a>
            <a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Terms of Service</a>
            <a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer