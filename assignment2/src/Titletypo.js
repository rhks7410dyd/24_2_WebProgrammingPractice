import React from 'react';

const Title = ({ innerText, onChange }) => (
  <input
      type="text"
      value={innerText}
      onChange={(e) => onChange(e.target.value)}
      className="text-3xl font-bold mb-4 w-full p-2"
      placeholder="Title"
  />
);

export default Title;