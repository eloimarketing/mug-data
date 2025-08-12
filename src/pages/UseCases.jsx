import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import UseCaseCards from '../components/UseCaseCards';

const UseCases = () => {
  const detailedUseCases = [
    {
      industry: "Financial Services",
      description: "Transform legacy banking systems with high-performance C++ applications",
      challenges: [
        "Legacy PL/SQL systems with 20+ years of business logic",
        "Compliance requirements for data security",
        "High transaction volumes requiring performance optimization",
        "Integration with modern fintech platforms"
      ],
      solutions: [
        "Automated migration of complex financial algorithms",
        "Enhanced security with encrypted data handling",
        "10x performance improvement for transaction processing",
        "Seamless integration with modern APIs"
      ],
      results: [
        "50% reduction in transaction processing time",
        "99.99% uptime achieved",
        "Full regulatory compliance maintained",
        "$2M annual cost savings"
      ],
              color: "bg-green-500"
    },
    {
      industry: "Healthcare",
      description: "Modernize patient data management systems for better care delivery",
      challenges: [
        "HIPAA compliance requirements",
        "Real-time patient data processing",
        "Integration with multiple healthcare systems",
        "Data accuracy and integrity requirements"
      ],
      solutions: [
        "HIPAA-compliant data handling and encryption",
        "Real-time data processing capabilities",
        "Standardized data exchange protocols",
        "Comprehensive audit trails"
      ],
      results: [
        "Real-time patient monitoring enabled",
        "100% HIPAA compliance achieved",
        "Reduced data processing errors by 95%",
        "Improved patient care outcomes"
      ],
      color: "bg-green-500"
    },
    {
      industry: "E-commerce",
      description: "Scale your online business with high-performance order processing",
      challenges: [
        "High-volume order processing during peak times",
        "Inventory management across multiple warehouses",
        "Real-time pricing and discount calculations",
        "Customer data security requirements"
      ],
      solutions: [
        "Scalable order processing architecture",
        "Real-time inventory synchronization",
        "Dynamic pricing engine optimization",
        "Secure customer data handling"
      ],
      results: [
        "10x faster order processing",
        "99.9% inventory accuracy",
        "Real-time pricing updates",
        "Enhanced customer experience"
      ],
              color: "bg-green-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Use Cases - DataMug PL/SQL to C++ Migration Solutions</title>
        <meta name="description" content="Explore how DataMug helps different industries migrate from PL/SQL to C++ with real-world use cases and success stories." />
      </Helmet>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-green-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Industry Use Cases
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover how DataMug transforms PL/SQL systems across different industries 
                with tailored migration solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Use Case Cards */}
        <UseCaseCards />

        {/* Detailed Use Cases */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Detailed Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world examples of how DataMug has transformed businesses across industries
              </p>
            </motion.div>

            <div className="space-y-16">
              {detailedUseCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-8 lg:p-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Header */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 ${useCase.color} rounded-lg flex items-center justify-center text-white text-2xl font-bold mr-4`}>
                          {useCase.industry.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {useCase.industry}
                          </h3>
                          <p className="text-gray-600">
                            {useCase.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Challenges
                      </h4>
                      <ul className="space-y-3">
                        {useCase.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        Solutions
                      </h4>
                      <ul className="space-y-3">
                        {useCase.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Results
                      </h4>
                      <ul className="space-y-3">
                        {useCase.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proven Results Across Industries
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                DataMug has delivered measurable improvements for organizations worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Successful Migrations</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">10M+</div>
                <div className="text-gray-600 font-medium">Lines of Code Converted</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">99%</div>
                <div className="text-gray-600 font-medium">Customer Satisfaction</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">10x</div>
                <div className="text-gray-600 font-medium">Performance Improvement</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary-600">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join hundreds of organizations that have successfully migrated their 
                PL/SQL systems to modern C++ with DataMug.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-secondary">
                  Start Your Migration
                </Link>
                <Link to="/pricing" className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default UseCases; 