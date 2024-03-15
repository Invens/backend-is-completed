// VerticalMenu.jsx
import React from 'react';
import { Link } from 'next/link';

const LeftVerticalMenu = () => {
  return (
    <div className="bg-gray-900 text-white h-full py-6 text-center font-bold uppercase">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="block p-2 hover:bg-gray-700">
            Categories
          </Link>
        </li>
        <li>
          <Link to="/ProjectImageUpload" className="block p-2 hover:bg-gray-700">
            Projects
          </Link>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default LeftVerticalMenu;
