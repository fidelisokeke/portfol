import React, { useState } from 'react';


export default function Coreconcept({image, title, description, details,}){
    const [showDetails, setShowDetails] = useState(false);
    const toggleDetails = () => {
        setShowDetails((prev) => !prev);
      };
      console.log(title, 'details:', details);

    return(
        <li className="border rounded-xl p-6 flex flex-col items-center 
                   shadow-sm hover:shadow-lg transform hover:scale-105 
                   transition duration-300 ease-out bg-white">
            <img  src={image}
        alt={title} className="w-32 h-32 object-cover mb-2"/>
            <h3>{title}</h3>
            <p>{description}</p>


            {/* ③ Learn More / Show Less button */}
      <button
        onClick={toggleDetails}
        className="
    inline-block px-4 py-2 rounded-md font-medium
    text-indigo-600 bg-indigo-100
    hover:bg-indigo-200 hover:text-indigo-800
    transition-colors duration-200
    mb-4
  "
      >
        {showDetails ? 'Show Less' : 'Learn More'}
      </button>

      {/* ④ Conditionally render the details text */}
      {showDetails && (
        <p className="text-gray-700 text-sm text-center">
          {details}
        </p>
      )}
    
        </li>
    )
}