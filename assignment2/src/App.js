import React from 'react';
import profilePic from './profile.jpg';

const App = () => {
  return (
    <div className="flex w-full h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <MainContent />
    </div>
  );
};

const Sidebar = () => (
  <div className="bg-gray-100 p-2 max-w-[250px] flex-grow-0">
    {/* User Info Section */}
    <div className="flex items-center justify-between p-3 mb-4 bg-white rounded-md">
      <div className="flex items-center">
        <img src={profilePic} alt="Profile Pic" className="w-10 h-10 rounded-md mr-2" />
        <div className="text-gray-800">WepP의 ...</div>
      </div>
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        {/* SVG Icon */}
      </svg>
    </div>

    {/* Sidebar Menu Items */}
    <div>
      <SidebarItem icon={<DocIcon />} text="Search" />
      <SidebarItem icon={<DocIcon />} text="Home" />
      <SidebarItem icon={<DocIcon />} text="Assignment 1" />
      <SidebarItem icon={<DocIcon />} text="빠른 메모" />
      <SidebarItem icon={<DocIcon />} text="Journal" />
      <SidebarItem icon={<DocIcon />} text="New Page" />
    </div>
  </div>
);

const SidebarItem = ({ icon, text }) => (
  <div className="flex items-center p-2 text-gray-600 font-bold hover:bg-gray-200 rounded-md cursor-pointer">
    <div className="w-6 h-6">{icon}</div>
    <span className="ml-3">{text}</span>
  </div>
);

const MainContent = () => (
  <div className="flex-grow bg-white p-16">
    <h1 className="text-3xl font-bold mb-4">Assignment</h1>
    <h2 className="text-2xl font-semibold mb-2">Assignment Objective</h2>
    <p className="text-lg mb-4">
      You need to make notion-like webpage with HTML and CSS.<br />
      All you need to do is mimic this page.<br />
      Include the same content from this page in the page you create.<br />
      Try your best to make your page as close as possible to this page.
    </p>
    <h2 className="text-2xl font-semibold mb-2">Scoring Guidelines</h2>
    <ul className="list-disc list-inside mb-4 text-lg">
      <li>You need to mimic overall layout of the page.</li>
      <li>You need to put margin or padding.</li>
      <li>You need to distinguish font size of the [heading, content].</li>
      <li>You need to distinguish font weight of the [heading, content].</li>
      <li>You need to put profile image.</li>
    </ul>
    <p className="text-lg">You need to zip the following files and submit zip file on iCampus.</p>
  </div>
);

const SearchIcon = () => (
  <svg viewBox="0 0 20 20" className="fill-current">
    {/* SVG Path for search icon */}
    <path d="M4 8.75C4 6.12665 6.12665 4 8.75 4C11.3734 4 13.5 6.12665 13.5 8.75C13.5 11.3734 11.3734 13.5 8.75 13.5C6.12665 13.5 4 11.3734 4 8.75ZM8.75 2.5C5.29822 2.5 2.5 5.29822 2.5 8.75C2.5 12.2018 5.29822 15 8.75 15C10.2056 15 11.545 14.5024 12.6073 13.668L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.668 12.6073C14.5024 11.545 15 10.2056 15 8.75C15 5.29822 12.2018 2.5 8.75 2.5Z"></path>
  </svg>
);

const DocIcon = () => (
  <svg viewBox="0 0 20 20" class="fill-current">
  <path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM10.4336 9.00098H5.42969C5.16992 9.00098 4.98535 9.19238 4.98535 9.43164C4.98535 9.67773 5.16992 9.86914 5.42969 9.86914H10.4336C10.6797 9.86914 10.8643 9.67773 10.8643 9.43164C10.8643 9.19238 10.6797 9.00098 10.4336 9.00098ZM10.4336 11.2979H5.42969C5.16992 11.2979 4.98535 11.4893 4.98535 11.7354C4.98535 11.9746 5.16992 12.1592 5.42969 12.1592H10.4336C10.6797 12.1592 10.8643 11.9746 10.8643 11.7354C10.8643 11.4893 10.6797 11.2979 10.4336 11.2979Z">
  </path>
</svg>
)
// Repeat similar SVG components for HomeIcon, AssignmentIcon, NoteIcon, JournalIcon, NewPageIcon as needed

export default App;
