// components/OurValues.tsx

import React from 'react';

const OurValues: React.FC = () => {
  return (
    <div className="border-t-4 border-blue-500 py-8 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* First Column (1/3 of the screen) */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-extrabold mb-4">Our Values</h2>
          <p className="text-gray-700">
            Anthropic exists for our mission: to ensure transformative AI helps people and society flourish. Progress this decade may be rapid, and we expect increasingly capable systems to pose novel challenges. We pursue our mission by building frontier systems, studying their behaviors, working to responsibly deploy them, and regularly sharing our safety insights. We collaborate with other projects and stakeholders seeking a similar outcome.
          </p>
        </div>

        {/* Second Column (2/3 of the screen) */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Value 01 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">01</h3>
            <p className="text-gray-700">Here for the mission</p>
          </div>

          {/* Value 04 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">04</h3>
            <p className="text-gray-700">Do the simple thing that works</p>
          </div>

          {/* Value 02 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">02</h3>
            <p className="text-gray-700">Unusually high trust</p>
          </div>

          {/* Value 03 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">03</h3>
            <p className="text-gray-700">One big team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
