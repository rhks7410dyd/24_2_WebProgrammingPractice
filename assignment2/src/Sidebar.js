import React,{useEffect,useState} from "react";

const INF = 9879654321;

const Sidebar = ({doclist, selectedDoc, clickotherDoc}) => {
  const [loading, setLoading] = useState();

  const emtpyfunc = () => (
    console.log("This is empty func. I don't implement already.")
  )

  const gotothisdoc = (id) => {
    console.log("gotothidoc",id);
    clickotherDoc(id);
  }
    
  const addnewdoc = (num) => (
    console.log("addnewdoc",num)
  );

  return(
    <div className="bg-gray-100 p-2 h-full min-w-[120px] max-w-[232px]">
      <div className="flex items-center justify-between p-3 mb-4 rounded-md">
        <div className="flex items-center">
          <img src={'./profile.jpg'} alt="Profile Pic" className="rounded-full mr-2" style={{ width: '24px', height: '24px' }} />
          <div className="text-gray-800">WebP의 ...</div>
        </div>
        <EditIcon />
      </div>

      <div className="flex flex-col space-y-1">
        <SidebarItem icon={<SearchIcon />} text="Search" id={INF} selid={INF-1} onClick={() => emtpyfunc()}/>
        <SidebarItem icon={<HomeIcon />} text="Home" id={INF} selid={INF-1} onClick={() => emtpyfunc()}/>
      </div>


      <div className="mt-4 text-sm text-gray-500">Private</div>
      <div className="flex flex-col space-y-1 mt-2">
        {loading ? (
          <span>Loading...</span>
        ) : (
          doclist.map(({id, title, content}) => (
            <SidebarItem key={id} icon={<DocIcon/>} text={title} id={id} selid={selectedDoc.id} onClick={() => gotothisdoc(id)
            }/>
          ))
        )}
        <AddSidebarItem icon={<DocIcon/>} text = "New Page" onClick={() => addnewdoc(doclist.length)} />
      </div>
    </div>

  );
};

const SidebarItem = ({ icon, text, onClick, id, selid }) => (
  <div
    className={`flex items-center p-1 rounded-md hover:bg-gray-200 ${id === selid ? 'bg-gray-300' : ''}`}
    onClick={onClick}
  >
    <div className="flex items-center h-6 w-6 mr-2">{icon}</div>
    <span className="text-gray-800 font-semibold">{text}</span>
  </div>
);

const AddSidebarItem = ({ icon, text, onClick }) => (
  <div
    className={`flex items-center p-1 rounded-md hover:bg-gray-200`}
    onClick={onClick}
  >
    <div className="flex items-center h-6 w-6 mr-2">{icon}</div>
    <span className="text-gray-800 font-semibold">{text}</span>
  </div>
);

const HomeIcon = () => (
  <svg viewBox="0 0 20 20" className="w-6 h-6">
<path d="M10.1416 3.77299C10.0563 3.71434 9.94368 3.71434 9.85837 3.77299L3.60837 8.06989C3.54053 8.11653 3.5 8.19357 3.5 8.2759V14.2499C3.5 14.9402 4.05964 15.4999 4.75 15.4999H7.5L7.5 10.7499C7.5 10.0595 8.05964 9.49987 8.75 9.49987H11.25C11.9404 9.49987 12.5 10.0595 12.5 10.7499L12.5 15.4999H15.25C15.9404 15.4999 16.5 14.9402 16.5 14.2499V8.2759C16.5 8.19357 16.4595 8.11653 16.3916 8.06989L10.1416 3.77299ZM9.00857 2.53693C9.60576 2.12636 10.3942 2.12636 10.9914 2.53693L17.2414 6.83383C17.7163 7.1603 18 7.69963 18 8.2759V14.2499C18 15.7687 16.7688 16.9999 15.25 16.9999H12.25C11.5596 16.9999 11 16.4402 11 15.7499L11 10.9999H9L9 15.7499C9 16.4402 8.44036 16.9999 7.75 16.9999H4.75C3.23122 16.9999 2 15.7687 2 14.2499V8.2759C2 7.69963 2.2837 7.1603 2.75857 6.83383L9.00857 2.53693Z">
</path>
  </svg>
);
const SearchIcon = () => (
  <svg viewBox="0 0 20 20" style={{ width: '24px', height: '24px' }}>
    <path d="M4 8.75C4 6.12665 6.12665 4 8.75 4C11.3734 4 13.5 6.12665 13.5 8.75C13.5 11.3734 11.3734 13.5 8.75 13.5C6.12665 13.5 4 11.3734 4 8.75ZM8.75 2.5C5.29822 2.5 2.5 5.29822 2.5 8.75C2.5 12.2018 5.29822 15 8.75 15C10.2056 15 11.545 14.5024 12.6073 13.668L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.668 12.6073C14.5024 11.545 15 10.2056 15 8.75C15 5.29822 12.2018 2.5 8.75 2.5Z"></path>
  </svg>
);

const DocIcon = () => (
  <svg viewBox="0 0 20 20" style={{ width: '24px', height: '24px' }}>
  <path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM10.4336 9.00098H5.42969C5.16992 9.00098 4.98535 9.19238 4.98535 9.43164C4.98535 9.67773 5.16992 9.86914 5.42969 9.86914H10.4336C10.6797 9.86914 10.8643 9.67773 10.8643 9.43164C10.8643 9.19238 10.6797 9.00098 10.4336 9.00098ZM10.4336 11.2979H5.42969C5.16992 11.2979 4.98535 11.4893 4.98535 11.7354C4.98535 11.9746 5.16992 12.1592 5.42969 12.1592H10.4336C10.6797 12.1592 10.8643 11.9746 10.8643 11.7354C10.8643 11.4893 10.6797 11.2979 10.4336 11.2979Z">
  </path>
</svg>
)

const EditIcon = () => (
  <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-500">
    <path d="M9.944 14.721c.104.094.216.12.336.079l1.703-.688 6.844-6.844-1.406-1.398-6.836 6.836-.711 1.68c-.052.13-.029.242.07.335zm8.102-9.484l1.414 1.406.515-.523a.917.917 0 00.282-.633.76.76 0 00-.258-.61l-.25-.25a.702.702 0 00-.578-.187.975.975 0 00-.617.297l-.508.5zm-9.453.127a3.85 3.85 0 00-3.85 3.85v6.5a3.85 3.85 0 003.85 3.85h6.5a3.85 3.85 0 003.85-3.85V12.95a.85.85 0 10-1.7 0v2.764a2.15 2.15 0 01-2.15 2.15h-6.5a2.15 2.15 0 01-2.15-2.15v-6.5a2.15 2.15 0 012.15-2.15h3.395a.85.85 0 000-1.7H8.593z">
    </path>
  </svg>
);

export default Sidebar;