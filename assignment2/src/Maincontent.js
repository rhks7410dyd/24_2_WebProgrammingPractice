import React, { useEffect, useState } from 'react';
import Title  from './Titletypo';
import Subtitle from './Subtitletypo';
import Para  from './Paragraphytypo';

const MainContent = ({selectedDoc, setUnsaveDoc}) => {
  const [formData, setFormData] = useState({title: '', content: '' });

  useEffect(() => {
    if (selectedDoc) {
      setFormData({id:selectedDoc.id, title: selectedDoc.title, content: selectedDoc.content });
    }
  }, [selectedDoc]);

  const handleChange = (e) => {
    const {name, value } = e.target;
    const updatedFormData = {...FormData, [name]:value};
    setFormData(updatedFormData);
    setUnsavedDoc((prev) => ({ ...prev, ...updatedFormData }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex-grow bg-white px-[15%] pt-16">
      {selectedDoc ? (

        <>
          <Title
            innerText={formData.title}
            onChange={(newTitle) => handleChange({target: {name:'title', value:newTitle}})}
          />
          <Para
            innerText={formData.content}
            onChange={(newContent) => handleChange({target: {name:'content', value:newContent}})}
          />
        </>
      ) : (
        <>Loading...</>
      )}
    </form>
  );
}


export default MainContent;