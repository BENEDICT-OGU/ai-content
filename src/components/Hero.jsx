import { Link } from 'react-router-dom'

const Hero = ({ darkMode }) => {
  return (
    <section className={`relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-dark to-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className={`bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-secondary to-primary' : 'bg-gradient-to-r from-primary to-accent'}`}>
              AI-Powered Content Creation
            </span>
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Generate high-quality content in seconds with our advanced AI platform. Blogs, social media, ads, and more - all with a single click.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/dashboard" 
              className={`px-8 py-4 rounded-lg text-lg font-semibold ${darkMode ? 'bg-primary hover:bg-purple-700' : 'bg-accent hover:bg-red-500'} text-white transition-all transform hover:scale-105`}
            >
              Start Creating Free
            </Link>
            <Link 
              to="/templates" 
              className={`px-8 py-4 rounded-lg text-lg font-semibold ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-light' : 'bg-white hover:bg-gray-100 text-dark'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all transform hover:scale-105`}
            >
              Explore Templates
            </Link>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500 filter blur-3xl opacity-70 animate-float"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-secondary filter blur-3xl opacity-70 animate-float animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full bg-accent filter blur-3xl opacity-70 animate-float animation-delay-4000"></div>
        </div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className={`rounded-2xl overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center`}>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className={`text-sm ml-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>content-generator.js</div>
          </div>
          <div className="p-6">
            <div className="font-mono text-sm md:text-base">
              <div className={`mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>// Generate a blog post about AI content creation</div>
              <div className={`mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>const blogPost = await</div>
              <div className={`mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>  nexusAI.generate(</div>
              <div className={`ml-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>template: "blog-post",</div>
              <div className={`ml-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>topic: "The Future of AI Content",</div>
              <div className={`ml-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>tone: "professional",</div>
              <div className={`ml-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>length: "1500 words"</div>
              <div className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>);</div>
              <div className={`mt-4 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>console.log(blogPost);</div>
              <div className={`mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>// Perfect SEO-optimized content generated in seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero