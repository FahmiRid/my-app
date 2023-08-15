import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin2() {
  const navigate = useNavigate();

  const navigateToAdmin3 = () => {
    navigate('/admin3'); // Replace '/admin3' with the actual route to admin3.jsx
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Second Page</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={navigateToAdmin3}
      >
        Next
      </button>
    </div>
  );
}
