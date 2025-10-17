import React from 'react'

const Overview = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Election Overview</h2>
        <p className="text-md text-gray-600 leading-relaxed">
          The campus election is your chance to influence student leadership and drive positive change.  
          By voting, you play a role in selecting representatives who will advocate for student interests,  
          enhance campus policies, and ensure a better academic environment for all.
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Card 1 */}
        <div className="p-6 border rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-3">Candidate Profiles</h3>
          <p className="text-gray-500">Get to know the candidates and their policies before making your decision.</p>
        </div>

        {/* Card 2 */}
        <div className="p-6 border rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-3">Voting Process</h3>
          <p className="text-gray-500">Easily cast your vote through our secure and transparent system.</p>
        </div>

        {/* Card 3 */}
        <div className="p-6 border rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-3">Impact of Your Vote</h3>
          <p className="text-gray-500">Every vote counts! Shape the future of student leadership on campus.</p>
        </div>
      </div>
    </section>
  );
};

export default Overview;




