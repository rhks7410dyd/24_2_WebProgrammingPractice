import React from 'react';


const Para = ({ innerText, onChange }) => (
  <textarea
      value={innerText}
      onChange={(e) => onChange(e.target.value)}
      className="text-lg mb-4 w-full p-2"
      placeholder="Content"
  />
);  

export default Para;

