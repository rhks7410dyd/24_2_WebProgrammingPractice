import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './Maincontent';

const App = () => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;