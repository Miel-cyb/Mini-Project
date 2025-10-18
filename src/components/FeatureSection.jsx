import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="flex flex-wrap items-center justify-center gap-20">
          <div className="w-full md:w-1/2 pr-8">
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
                  <i className="fas fa-lock"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Secure Voting</h3>
                  <p className="text-gray-600">Utilizes blockchain technology for tamper-proof and transparent voting records.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
                  <i className="fas fa-id-card"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Voter Anonymity</h3>
                  <p className="text-gray-600">Ensures voter privacy with advanced cryptographic techniques.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-time Results</h3>
                  <p className="text-gray-600">Monitor election results in real-time with a transparent and auditable dashboard.</p>
                </div>
              </li>
            </ul>
          </div>
          <div >
            <div className="relative">
              <div className="rounded-lg w-72">
                <img src="/voting-rights-election.gif" alt="Feature Animation" className="rounded-lg shadow-lg w-full h-auto object-fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
