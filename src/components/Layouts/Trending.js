
import React from 'react';
import { Link } from 'react-router-dom';

export const Trending = () => {
  return (
    <div className="bg-white dark:bg-gray">
      <Link to="/trending" className="text-gray-700 dark:text-white">Trending</Link>
    </div>
  );
};