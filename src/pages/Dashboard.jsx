import React from 'react';
import Header from '../components/Dashboard/Header';
import Statistics from '../components/Dashboard/Statistics';
import FeaturedStartups from '../components/Dashboard/FeaturedStartups';
import PartnerInvestors from '../components/Dashboard/PartnerInvestors';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Statistics />
      <FeaturedStartups />
      <PartnerInvestors />
    </div>
  );
}
