import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './Maincontent';
import axios from 'axios';

const App = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [doclist, setDoclist] = useState([]);
  const [unsavedDoc, setUnsavedDoc] = useState(null);

  useEffect(() => {
    const fetchDocuments = async() => {
      try {
        const response = await axios.get("http://localhost:8888/docList");
        setDoclist(response.data);
  
        const defaultDoc = response.data.find(doc => doc.id == 1);
        setSelectedDoc(defaultDoc);
        setUnsavedDoc(defaultDoc);
      } catch (err) {
        console.error("Error fetching doclist:", err);
      }
    };

    fetchDocuments();
  },[]);

  const changeDocSelect = async (id) => {
    if (unsavedDoc) {
      try {
        await axios.post("http://localhost:8888/saveDoc", unsavedDoc);
      } catch (error) {
        console.error("Error saving doc:", error);
      }
    }
    const selected = doclist.find(doc => doc.id === id);
    setSelectedDoc(selected);
    setUnsavedDoc(selected);
  };

  return (
    <div className="flex w-screen h-screen">
      <Sidebar doclist={doclist} selectedDoc={selectedDoc} clickotherDoc={changeDocSelect}/>
      <MainContent selectedDoc={selectedDoc} setUnsavedDoc={setUnsavedDoc} />
    </div>
  );
};

export default App;