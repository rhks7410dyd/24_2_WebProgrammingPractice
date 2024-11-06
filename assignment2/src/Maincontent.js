import React from 'react';
import Title  from './Titletypo';
import Subtitle from './Subtitletypo';
import Para  from './Paragraphytypo';

const MainContent = () => (
  <div className="flex-grow bg-white px-[15%] pt-16">
    <Title innerText="Assignment" />
    <Para innerText="You need to zip the following files and submit zip file on iCampus." />
  </div>
);


export default MainContent;