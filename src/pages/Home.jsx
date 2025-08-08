import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection';
import FeaturesGrid from '../components/FeaturesGrid';
import WorkflowDiagram from '../components/WorkflowDiagram';
import UseCaseCards from '../components/UseCaseCards';
import PricingTable from '../components/PricingTable';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DataMug - PL/SQL Data Migration & Validation Tool</title>
        <meta name="description" content="Advanced PL/SQL data migration and validation tool for seamless database operations. Transform your legacy systems with intelligent data analysis and high-performance validation." />
        <meta name="keywords" content="PL/SQL, data migration, validation, database, operations, tool, DataMug" />
      </Helmet>

      <main>
        <HeroSection />
        <FeaturesGrid />
        <WorkflowDiagram />
        <UseCaseCards />
        <PricingTable />
        <ContactForm />
      </main>
    </>
  );
};

export default Home; 