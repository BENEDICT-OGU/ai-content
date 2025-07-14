import { useState } from 'react'

const ContentEditor = ({ darkMode }) => {
  const [content, setContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [tone, setTone] = useState('professional')
  const [length, setLength] = useState('medium')

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setContent(`Here's your AI-generated content based on the selected parameters. This content is optimized for ${tone} tone and is ${length} in length. You can edit this content further or generate again with different parameters.`)
      setIsGenerating(false)
    }, 1500)
  }

  return (
    <section className={`min-h-screen py-12 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-light' : 'text-dark'}`}>Content Editor</h1>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Create and refine your AI-generated content</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className={`lg:col-span-1 rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Content Settings</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="tone" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tone</label>
                <select
                  id="tone"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className={`w-full rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2 focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-primary' : 'focus:ring-accent'} focus:border-transparent`}
                >
                  <option value="professional">Professional</option>
                  <option value="casual">Casual</option>
                  <option value="enthusiastic">Enthusiastic</option>
                  <option value="authoritative">Authoritative</option>
                  <option value="friendly">Friendly</option>
                </select>
              </div>

              <div>
                <label htmlFor="length" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Length</label>
                <select
                  id="length"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className={`w-full rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2 focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-primary' : 'focus:ring-accent'} focus:border-transparent`}
                >
                  <option value="short">Short (300 words)</option>
                  <option value="medium">Medium (600 words)</option>
                  <option value="long">Long (1000+ words)</option>
                </select>
              </div>

              <div>
                <label htmlFor="keywords" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Keywords (optional)</label>
                <input
                  type="text"
                  id="keywords"
                  className={`w-full rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2 focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-primary' : 'focus:ring-accent'} focus:border-transparent`}
                  placeholder="SEO keywords, comma separated"
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className={`w-full py-3 px-4 rounded-md font-medium ${darkMode ? 'bg-primary hover:bg-purple-700' : 'bg-accent hover:bg-red-500'} text-white transition-colors duration-200 flex items-center justify-center`}
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : 'Generate Content'}
              </button>
            </div>
          </div>

          <div className={`lg:col-span-3 rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center`}>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className={`text-sm ml-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>content-editor.js</div>
            </div>
            
            <div className="p-6">
              {content ? (
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className={`w-full h-96 p-4 font-mono text-sm rounded-lg ${darkMode ? 'bg-gray-700 text-gray-200 border-gray-600' : 'bg-white text-gray-800 border-gray-300'} border focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-primary' : 'focus:ring-accent'}`}
                />
              ) : (
                <div className={`h-96 flex flex-col items-center justify-center ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  <svg className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <p className="text-lg">Configure your settings and generate content</p>
                </div>
              )}
            </div>
            
            <div className={`px-6 py-4 flex justify-end ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="space-x-3">
                <button className={`px-4 py-2 rounded-md text-sm font-medium ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-600' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}`}>
                  Clear
                </button>
                <button 
                  disabled={!content}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${!content ? (darkMode ? 'bg-gray-600 text-gray-400' : 'bg-gray-200 text-gray-500') : (darkMode ? 'bg-primary hover:bg-purple-700 text-white' : 'bg-accent hover:bg-red-500 text-white')}`}
                >
                  Save Draft
                </button>
                <button 
                  disabled={!content}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${!content ? (darkMode ? 'bg-gray-600 text-gray-400' : 'bg-gray-200 text-gray-500') : (darkMode ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white')}`}
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentEditor