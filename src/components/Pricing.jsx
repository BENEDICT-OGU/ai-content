const Pricing = ({ darkMode }) => {
  const plans = [
    {
      name: 'Starter',
      price: '$19',
      period: 'per month',
      description: 'Perfect for individuals and small teams getting started with AI content',
      features: [
        '10,000 words per month',
        'Basic content templates',
        'Standard AI models',
        'Email support',
        'Basic analytics'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: 'per month',
      description: 'For growing businesses that need more content and features',
      features: [
        '50,000 words per month',
        'All content templates',
        'Advanced AI models',
        'Priority support',
        'Enhanced analytics',
        'Team collaboration (3 seats)'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs and high volume',
      features: [
        'Unlimited words',
        'All templates + custom',
        'Premium AI models',
        '24/7 dedicated support',
        'Advanced analytics',
        'Unlimited team seats',
        'API access',
        'Custom workflows'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-light' : 'text-dark'}`}>
            Simple, <span className={`${darkMode ? 'text-secondary' : 'text-primary'}`}>Transparent</span> Pricing
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Choose the perfect plan for your content needs. Scale up or down as needed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 ${plan.popular ? (darkMode ? 'bg-gradient-to-br from-primary to-purple-600' : 'bg-gradient-to-br from-accent to-pink-500') : (darkMode ? 'bg-gray-800' : 'bg-white')} shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : (darkMode ? 'text-light' : 'text-dark')}`}>{plan.name}</h3>
              <div className={`mb-4 ${plan.popular ? 'text-white' : (darkMode ? 'text-gray-400' : 'text-gray-600')}`}>{plan.description}</div>
              
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : (darkMode ? 'text-light' : 'text-dark')}`}>{plan.price}</span>
                {plan.period && (
                  <span className={`text-lg ${plan.popular ? 'text-white/80' : (darkMode ? 'text-gray-400' : 'text-gray-600')}`}>/{plan.period}</span>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className={`h-5 w-5 mr-2 ${plan.popular ? 'text-white' : (darkMode ? 'text-secondary' : 'text-primary')}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.popular ? 'text-white' : (darkMode ? 'text-gray-300' : 'text-gray-700')}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-6 rounded-lg font-medium ${plan.popular ? 'bg-white text-dark hover:bg-gray-100' : (darkMode ? 'bg-primary hover:bg-purple-700 text-white' : 'bg-accent hover:bg-red-500 text-white')} transition-colors duration-200`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p className="mb-4">Need something different? We offer custom plans for large organizations.</p>
          <button className={`px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700' : 'bg-white hover:bg-gray-100 text-dark border border-gray-200'} transition-colors duration-200`}>
            Contact Our Sales Team
          </button>
        </div>
      </div>
    </section>
  )
}

export default Pricing