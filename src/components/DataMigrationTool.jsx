import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DataMigrationTool = () => {
  const [activeTab, setActiveTab] = useState('migration');
  const [migrationStatus, setMigrationStatus] = useState('idle');
  const [validationResults, setValidationResults] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [migrationConfig, setMigrationConfig] = useState({
    sourceType: 'plsql',
    targetType: 'cpp',
    validationLevel: 'comprehensive',
    performanceOptimization: true,
    dataIntegrityChecks: true,
    rollbackEnabled: true
  });

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const startMigration = async () => {
    setMigrationStatus('running');
    // Simulate migration process
    setTimeout(() => {
      setMigrationStatus('completed');
    }, 3000);
  };

  const runValidation = async () => {
    setValidationResults({
      dataIntegrity: { status: 'passed', issues: 0 },
      performance: { status: 'passed', score: 95 },
      compatibility: { status: 'passed', issues: 0 },
      security: { status: 'passed', vulnerabilities: 0 }
    });
  };

  const migrationSteps = [
    {
      step: 1,
      title: "Source Analysis",
      description: "Analyzing PL/SQL code structure and dependencies",
      status: migrationStatus === 'running' ? 'active' : 'completed'
    },
         {
       step: 2,
       title: "Data Mapping",
       description: "Mapping data types and structures to target database equivalents",
       status: migrationStatus === 'running' ? 'active' : 'pending'
     },
     {
       step: 3,
       title: "Data Migration",
       description: "Migrating PL/SQL data to target database with validation",
       status: migrationStatus === 'running' ? 'active' : 'pending'
     },
    {
      step: 4,
      title: "Validation",
      description: "Running comprehensive validation tests",
      status: migrationStatus === 'completed' ? 'completed' : 'pending'
    }
  ];

  return (
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
            PL/SQL Data Migration & Validation Tool
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced data migration and validation platform for seamless PL/SQL database operations 
            with comprehensive integrity checks and performance optimization.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8">
            <button
              onClick={() => setActiveTab('migration')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'migration'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Data Migration
            </button>
            <button
              onClick={() => setActiveTab('validation')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ml-4 ${
                activeTab === 'validation'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Validation & Testing
            </button>
            <button
              onClick={() => setActiveTab('monitoring')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ml-4 ${
                activeTab === 'monitoring'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Performance Monitoring
            </button>
          </div>

          {/* Migration Tab */}
          {activeTab === 'migration' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Configuration Panel */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Migration Configuration</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Source Type
                      </label>
                      <select
                        value={migrationConfig.sourceType}
                        onChange={(e) => setMigrationConfig({...migrationConfig, sourceType: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="plsql">PL/SQL</option>
                        <option value="oracle">Oracle Database</option>
                        <option value="sql">SQL Scripts</option>
                      </select>
                    </div>

                                         <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">
                         Target Database
                       </label>
                       <select
                         value={migrationConfig.targetType}
                         onChange={(e) => setMigrationConfig({...migrationConfig, targetType: e.target.value})}
                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                       >
                         <option value="oracle">Oracle Database</option>
                         <option value="postgresql">PostgreSQL</option>
                         <option value="mysql">MySQL</option>
                         <option value="sqlserver">SQL Server</option>
                       </select>
                     </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Validation Level
                      </label>
                      <select
                        value={migrationConfig.validationLevel}
                        onChange={(e) => setMigrationConfig({...migrationConfig, validationLevel: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="basic">Basic</option>
                        <option value="comprehensive">Comprehensive</option>
                        <option value="enterprise">Enterprise</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="performanceOptimization"
                          checked={migrationConfig.performanceOptimization}
                          onChange={(e) => setMigrationConfig({...migrationConfig, performanceOptimization: e.target.checked})}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="performanceOptimization" className="ml-2 text-sm text-gray-700">
                          Performance Optimization
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="dataIntegrityChecks"
                          checked={migrationConfig.dataIntegrityChecks}
                          onChange={(e) => setMigrationConfig({...migrationConfig, dataIntegrityChecks: e.target.checked})}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="dataIntegrityChecks" className="ml-2 text-sm text-gray-700">
                          Data Integrity Checks
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="rollbackEnabled"
                          checked={migrationConfig.rollbackEnabled}
                          onChange={(e) => setMigrationConfig({...migrationConfig, rollbackEnabled: e.target.checked})}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="rollbackEnabled" className="ml-2 text-sm text-gray-700">
                          Enable Rollback
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* File Upload and Progress */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">File Upload</h3>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      id="fileUpload"
                      accept=".sql,.plsql,.txt"
                    />
                    <label htmlFor="fileUpload" className="cursor-pointer">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="mt-2 text-sm text-gray-600">
                        <span className="font-medium text-primary-600 hover:text-primary-500">
                          Click to upload
                        </span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PL/SQL files, SQL scripts up to 10MB</p>
                    </label>
                  </div>

                  {selectedFiles.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Selected Files:</h4>
                      <ul className="space-y-1">
                        {selectedFiles.map((file, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {file.name} ({(file.size / 1024).toFixed(1)} KB)
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    onClick={startMigration}
                    disabled={selectedFiles.length === 0 || migrationStatus === 'running'}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {migrationStatus === 'running' ? 'Migrating...' : 'Start Migration'}
                  </button>
                </div>
              </div>

              {/* Migration Progress */}
              {migrationStatus !== 'idle' && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Migration Progress</h3>
                  <div className="space-y-4">
                    {migrationSteps.map((step) => (
                      <div key={step.step} className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          step.status === 'completed' ? 'bg-green-500 text-white' :
                          step.status === 'active' ? 'bg-primary-600 text-white' :
                          'bg-gray-200 text-gray-600'
                        }`}>
                          {step.status === 'completed' ? '✓' : step.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{step.title}</h4>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                        {step.status === 'active' && (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-600"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Validation Tab */}
          {activeTab === 'validation' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Validation Tools</h3>
                  
                  <div className="space-y-6">
                            <div className="p-6 bg-green-50 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">Data Integrity Validation</h4>
          <p className="text-sm text-green-700 mb-4">
                        Comprehensive checks for data consistency, referential integrity, and business rule compliance.
                      </p>
                      <button
                        onClick={runValidation}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Run Validation
                      </button>
                    </div>

                                     <div className="p-6 bg-green-50 rounded-lg">
                   <h4 className="font-semibold text-green-900 mb-2">Performance Testing</h4>
                   <p className="text-sm text-green-700 mb-4">
                     Benchmark performance against original PL/SQL operations and identify optimization opportunities.
                   </p>
                   <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                     Run Performance Test
                   </button>
                 </div>

                            <div className="p-6 bg-green-50 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">Security Audit</h4>
          <p className="text-sm text-green-700 mb-4">
                        Security vulnerability assessment and compliance checking for data protection standards.
                      </p>
                                              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Run Security Audit
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Validation Results</h3>
                  
                  {validationResults ? (
                    <div className="space-y-4">
                      {Object.entries(validationResults).map(([key, result]) => (
                        <div key={key} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              result.status === 'passed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {result.status}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            {key === 'performance' && `Score: ${result.score}%`}
                            {key === 'dataIntegrity' && `Issues found: ${result.issues}`}
                            {key === 'compatibility' && `Compatibility issues: ${result.issues}`}
                            {key === 'security' && `Vulnerabilities: ${result.vulnerabilities}`}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="mt-2">No validation results yet. Run a validation to see results.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Monitoring Tab */}
          {activeTab === 'monitoring' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Monitoring</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white">
                  <h4 className="text-lg font-semibold mb-2">Migration Speed</h4>
                  <p className="text-3xl font-bold">2.5x</p>
                  <p className="text-green-100 text-sm">Faster than manual conversion</p>
                </div>
                
                                 <div className="p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white">
                   <h4 className="text-lg font-semibold mb-2">Accuracy Rate</h4>
                   <p className="text-3xl font-bold">99.8%</p>
                   <p className="text-green-100 text-sm">Data migration accuracy</p>
                 </div>
                
                <div className="p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white">
                  <h4 className="text-lg font-semibold mb-2">Performance Gain</h4>
                  <p className="text-3xl font-bold">10x</p>
                  <p className="text-green-100 text-sm">Performance improvement</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Real-time Metrics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-600">1,247</p>
                      <p className="text-sm text-gray-600">Files Processed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">98.5%</p>
                      <p className="text-sm text-gray-600">Success Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">45s</p>
                      <p className="text-sm text-gray-600">Avg. Processing Time</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">0</p>
                      <p className="text-sm text-gray-600">Active Issues</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DataMigrationTool; 