import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheck, FiZap, FiBarChart2, FiUsers, FiLayers, FiCode, FiImage, FiVideo, FiMic, FiGlobe } from 'react-icons/fi';

const GetStartedPage = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('creators');
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [currentStep, setCurrentStep] = useState(1);

  const features = [
    {
      icon: <FiZap className="text-purple-500" size={24} />,
      title: "AI-Powered Content Generation",
      description: "Generate high-quality articles, blogs, and marketing copy in seconds with our advanced AI models."
    },
    {
      icon: <FiBarChart2 className="text-blue-500" size={24} />,
      title: "Content Optimization",
      description: "Get real-time suggestions to improve SEO, readability, and engagement metrics."
    },
    {
      icon: <FiUsers className="text-green-500" size={24} />,
      title: "Multi-User Collaboration",
      description: "Work seamlessly with your team with role-based access and version control."
    },
    {
      icon: <FiLayers className="text-orange-500" size={24} />,
      title: "Content Templates",
      description: "Choose from 100+ professionally designed templates for all content needs."
    },
    {
      icon: <FiCode className="text-red-500" size={24} />,
      title: "API Access",
      description: "Integrate our AI directly into your workflows with our developer-friendly API."
    },
    {
      icon: <FiImage className="text-yellow-500" size={24} />,
      title: "Multimedia Support",
      description: "Generate not just text but also images, infographics, and more."
    }
  ];

  const useCases = [
    {
      title: "Content Marketers",
      description: "Create SEO-optimized blog posts and landing pages at scale",
      icon: <FiGlobe className="text-purple-500" size={20} />
    },
    {
      title: "Social Media Managers",
      description: "Generate engaging posts and captions for all platforms",
      icon: <FiUsers className="text-blue-500" size={20} />
    },
    {
      title: "E-commerce Stores",
      description: "Automate product descriptions and marketing content",
      icon: <FiLayers className="text-green-500" size={20} />
    },
    {
      title: "Video Creators",
      description: "Generate scripts, titles, and descriptions for your videos",
      icon: <FiVideo className="text-orange-500" size={20} />
    },
    {
      title: "Podcasters",
      description: "Create show notes, episode summaries, and promotional content",
      icon: <FiMic className="text-red-500" size={20} />
    },
    {
      title: "Developers",
      description: "Integrate AI content generation into your applications",
      icon: <FiCode className="text-yellow-500" size={20} />
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals getting started with AI content",
      features: [
        "10,000 words/month",
        "Basic content templates",
        "SEO suggestions",
        "5 image generations/month",
        "Email support"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "For professionals and small teams",
      features: [
        "50,000 words/month",
        "All content templates",
        "Advanced SEO tools",
        "50 image generations/month",
        "Priority email support",
        "Basic analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large teams and organizations",
      features: [
        "Unlimited words",
        "All premium features",
        "Dedicated AI models",
        "500+ image generations/month",
        "24/7 priority support",
        "Advanced analytics",
        "API access",
        "Custom templates"
      ],
      cta: "Contact Sales"
    }
  ];

  const steps = [
    {
      title: "Create Your Account",
      description: "Sign up in 30 seconds with your email or social account"
    },
    {
      title: "Choose Your Template",
      description: "Select from our library of professionally designed templates"
    },
    {
      title: "Generate Content",
      description: "Let our AI create high-quality content in seconds"
    },
    {
      title: "Edit & Publish",
      description: "Refine and publish directly to your platforms"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}
    >
      {/* Hero Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-purple-50 to-blue-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Revolutionize Your Content <span className="text-purple-600">With AI</span>
            </motion.h1>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-xl max-w-3xl mx-auto mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              The most advanced AI content platform that helps you create, optimize, and distribute content 10x faster
            </motion.p>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg transition-all transform hover:scale-105">
                Start Free Trial <FiArrowRight className="inline ml-2" />
              </button>
              <button className={`px-8 py-4 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} font-medium rounded-lg shadow-lg transition-all transform hover:scale-105`}>
                See Live Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features Built for Creators</h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Everything you need to create exceptional content at scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all duration-300`}
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Who Can Benefit?</h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Designed for professionals across industries
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className={`inline-flex rounded-lg p-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              {['creators', 'teams', 'enterprises'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab 
                      ? (darkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-900 shadow') 
                      : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100')
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} transition-all duration-300 border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-3">
                      {useCase.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{useCase.title}</h3>
                  </div>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{useCase.description}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className={`inline-flex items-center rounded-lg p-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <span className={`px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Billed</span>
              {['monthly', 'yearly'].map((option) => (
                <button
                  key={option}
                  className={`px-6 py-2 rounded-md text-sm font-medium ${
                    selectedPlan === option 
                      ? (darkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-900 shadow') 
                      : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100')
                  }`}
                  onClick={() => setSelectedPlan(option)}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: plan.popular ? 1.03 : 1.01 }}
                className={`relative rounded-xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-2 ${plan.popular ? 'border-purple-500' : darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 -mt-4 mr-6 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{plan.period}</span>
                </div>
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{plan.description}</p>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <FiCheck className="text-green-500 mr-2" />
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium ${plan.popular ? 'bg-purple-600 hover:bg-purple-700 text-white' : darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} transition-colors`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Getting Started Is Easy</h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Create your first AI-generated content in minutes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between mb-8">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index + 1)}
                  className={`flex flex-col items-center ${currentStep === index + 1 ? 'opacity-100' : 'opacity-60'} transition-opacity`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${currentStep === index + 1 ? 'bg-purple-600 text-white' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700 shadow'}`}>
                    {index + 1}
                  </div>
                  <span className={`font-medium ${currentStep === index + 1 ? 'text-purple-600' : darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Step {index + 1}
                  </span>
                </button>
              ))}
            </div>

            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-4">{steps[currentStep - 1].title}</h3>
                  <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{steps[currentStep - 1].description}</p>
                  <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} mb-6`}>
                    {/* Placeholder for step content visualization */}
                    <div className="flex justify-center items-center h-48">
                      <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Step {currentStep} visualization</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    {currentStep > 1 && (
                      <button 
                        className={`px-6 py-2 rounded-lg ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                        onClick={() => setCurrentStep(currentStep - 1)}
                      >
                        Previous
                      </button>
                    )}
                    {currentStep < steps.length ? (
                      <button 
                        className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg ml-auto transition-colors"
                        onClick={() => setCurrentStep(currentStep + 1)}
                      >
                        Next Step
                      </button>
                    ) : (
                      <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg ml-auto transition-colors">
                        Get Started Now
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Content Creation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto mb-10 opacity-90"
          >
            Join thousands of creators and businesses already using our platform
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="px-8 py-4 bg-white hover:bg-gray-100 text-purple-600 font-medium rounded-lg shadow-lg transition-all transform hover:scale-105">
              Start 14-Day Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent hover:bg-white hover:bg-opacity-10 border-2 border-white font-medium rounded-lg transition-all transform hover:scale-105">
              Schedule a Demo
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default GetStartedPage;