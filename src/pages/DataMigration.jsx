import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import DataMigrationTool from '../components/DataMigrationTool';

const DataMigration = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
             title: "Intelligent Data Mapping",
       description: "Advanced algorithms automatically map PL/SQL data types and structures to target database equivalents while preserving data integrity."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Comprehensive Validation",
      description: "Multi-layer validation ensures data consistency, referential integrity, and business rule compliance throughout the migration process."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
             title: "Performance Optimization",
       description: "Intelligent optimization algorithms ensure the migrated data operations outperform the original PL/SQL with modern database optimizations."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Enterprise Security",
      description: "Bank-grade security with data encryption, secure file handling, and compliance with industry standards like SOC 2 and GDPR."
    }
  ];

  const benefits = [
    {
      title: "10x Faster Migration",
      description: "Automated processes reduce migration time from months to days",
      metric: "90%"
    },
    {
      title: "99.8% Accuracy",
      description: "Advanced validation ensures near-perfect data conversion",
      metric: "99.8%"
    },
    {
      title: "Zero Data Loss",
      description: "Comprehensive integrity checks prevent any data corruption",
      metric: "100%"
    },
    {
      title: "Real-time Monitoring",
      description: "Live progress tracking and performance metrics",
      metric: "24/7"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Data Migration Tool - DataMug PL/SQL to C++ Migration Platform</title>
        <meta name="description" content="Advanced PL/SQL data migration and validation tool for seamless database conversion with comprehensive integrity checks and performance optimization." />
        <meta name="keywords" content="PL/SQL, data migration, validation, C++, database conversion, DataMug" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="section-padding gradient-bg relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
                             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                 PL/SQL Data Migration
                 <span className="block text-primary-200">& Validation Tool</span>
               </h1>
               <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
                 Advanced data migration platform that intelligently migrates your PL/SQL databases to modern database systems 
                 with comprehensive validation, integrity checks, and performance optimization.
               </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4">
                  Start Free Trial
                </button>
                <button className="btn-secondary text-lg px-8 py-4">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
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
                 Advanced Migration Features
               </h2>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                 Our comprehensive data migration platform provides everything you need for successful 
                 PL/SQL database migration with enterprise-grade reliability.
               </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="bg-primary-100 rounded-lg p-6 mb-4 inline-block">
                    <div className="text-primary-600">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
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
                Why Choose DataMug Migration?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of automated data migration with enterprise-grade reliability 
                and comprehensive validation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 text-center"
                >
                  <div className="text-4xl font-bold text-primary-600 mb-4">
                    {benefit.metric}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Tool Component */}
        <DataMigrationTool />

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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Data?
              </h2>
                             <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
                 Join hundreds of organizations that have successfully migrated their PL/SQL databases 
                 to modern database systems with DataMug's advanced migration platform.
               </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Get Started Free
                </button>
                <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DataMigration; 