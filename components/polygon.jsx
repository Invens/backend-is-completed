"use client";

'use client';
import React, { useState } from 'react';

const SvgMap = () => {
  const [selectedPolygon, setSelectedPolygon] = useState(null);

  // Function to handle polygon/text click events
  const handlePolygonClick = (polygonId) => {
    // Update the selectedPolygon state when a polygon is clicked
    setSelectedPolygon(polygonId);
  };

  return (
    <div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 3206 2085"
        style={{
          backgroundImage:
            'url("https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/smd/linedrawings/Room+image+final.jpg")',
          backgroundSize: 'cover',
        }}
      >
        {/* Polygon element */}
        <polygon
          points="800,-3,1182,439,2094,459,2420,201,2505,130,2661,-3"
          fill={selectedPolygon === 'polygon-text0' ? 'green' : 'transparent'}
          fillOpacity="0.2"
          onClick={() => handlePolygonClick('polygon-text0')}
          style={{ cursor: 'pointer' }}
        />

        {/* Text element */}
        <text
          fill="white"
          opacity="0.75"
          fontWeight={400}
          x="1998.6666666666667"
          fontSize={40}
          id="polygon-text0"
          y="203.83333333333334"
          onClick={() => handlePolygonClick('polygon-text0')}
          className="cursor-pointer"
          style={{color: 'black'}}
        >
          False Ceiling
        </text>
      </svg>

      <div>
        Selected Polygon: {selectedPolygon || 'None'}
      </div>
    </div>
  );
};

export default SvgMap;
