import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WorkflowDiagram from '../components/WorkflowDiagram';

const HowItWorks = () => {
  const detailedSteps = [
    {
      step: "01",
      title: "Code Upload & Analysis",
      description: "Upload your PL/SQL files or connect your database directly to our secure platform. Our AI engine analyzes your code structure, dependencies, and business logic patterns.",
      details: [
        "Secure file upload with encryption",
        "Database connection support",
        "Automatic dependency detection",
        "Code complexity analysis"
      ],
      icon: "📁"
    },
    {
      step: "02",
      title: "Intelligent Parsing",
      description: "Advanced parsing algorithms understand your PL/SQL syntax and semantics, including stored procedures, functions, packages, triggers, and complex business logic.",
      details: [
        "PL/SQL syntax parsing",
        "Semantic analysis",
        "Business logic extraction",
        "Error detection and reporting"
      ],
      icon: "🔍"
    },
    {
      step: "03",
      title: "Code Conversion",
      description: "Our intelligent algorithms convert PL/SQL to optimized C++ while preserving functionality, performance, and maintaining your original business logic.",
      details: [
        "C++17/20 code generation",
        "Performance optimization",
        "Memory management",
        "Error handling conversion"
      ],
      icon: "⚡"
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Automated testing ensures the converted code maintains original behavior and performance. Comprehensive validation against your original PL/SQL logic.",
      details: [
        "Unit test generation",
        "Integration testing",
        "Performance benchmarking",
        "Data integrity validation"
      ],
      icon: "✅"
    },
    {
      step: "05",
      title: "Code Delivery",
      description: "Receive your converted C++ code with comprehensive documentation, deployment guides, and ongoing support for a smooth transition.",
      details: [
        "Complete C++ codebase",
        "Technical documentation",
        "Deployment instructions",
        "Migration support"
      ],
      icon: "📦"
    }
  ];

  return (
    <>
      <Helmet>
        <title>How It Works - DataMug PL/SQL to C++ Migration Process</title>
        <meta name="description" content="Learn how DataMug's 5-step process intelligently converts your PL/SQL code to modern C++ with accuracy and performance." />
      </Helmet>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                How DataMug Works
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our streamlined 5-step process ensures your PL/SQL to C++ migration is 
                efficient, accurate, and hassle-free.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Workflow Diagram */}
        <WorkflowDiagram />

        {/* Detailed Steps */}
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
                Detailed Process Breakdown
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each step is designed to ensure maximum accuracy and efficiency in your migration
              </p>
            </motion.div>

            <div className="space-y-16">
              {detailedSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                        {step.step}
                      </div>
                      <div className="text-6xl">{step.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`bg-gray-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                        {step.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Step {step.step}
                      </h4>
                      <p className="text-gray-600">
                        {step.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Why Choose DataMug's Process?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven methodology delivers results that manual conversion simply cannot match
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">10x Faster</h3>
                <p className="text-gray-600">
                  Automated conversion process that's 10 times faster than manual rewriting
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">99% Accuracy</h3>
                <p className="text-gray-600">
                  AI-powered analysis ensures 99% accuracy in code conversion
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Zero Risk</h3>
                <p className="text-gray-600">
                  Comprehensive testing and validation eliminate migration risks
                </p>
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
                Ready to Start Your Migration?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Experience the DataMug difference with our proven 5-step migration process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-secondary">
                  Get Started Today
                </Link>
                <Link to="/features" className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  View Features
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HowItWorks; 