import React from 'react'

function navbar() {
  return (
<div className='w-5/6 h-8 bg-slate-800 rounded-3xl p-7 flex justify-between relative top-7 left-24 border-gray-700'>
      <div className='logo relative bottom-4 '>
      <svg width="55" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99992 20.0002L19.9999 10.0002L29.9999 20.0002L19.9999 30.0002L9.99992 20.0002Z" fill="#CAFF33"/>
            <path d="M36.6666 13.3335L29.9999 20.0002V10.0002H19.9999L26.6666 3.3335H36.6666V13.3335Z" fill="#CAFF33"/>
            <path d="M36.6666 26.6668L29.9999 20.0002V30.0002H19.9999L26.6666 36.6668H36.6666V26.6668Z" fill="#CAFF33"/>
            <path d="M3.33325 26.6668L9.99992 20.0002V30.0002H19.9999L13.3333 36.6668H3.33325L3.33325 26.6668Z" fill="#CAFF33"/>
            <path d="M3.33325 13.3335L9.99992 20.0002V10.0002H19.9999L13.3333 3.3335H3.33325L3.33325 13.3335Z" fill="#CAFF33"/>
            </svg>
      </div>
      <div className='relative bottom-3 flex gap-x-4 place-content-center text-l  '>
       <div className='flex items-center justify-center hover:bg-slate-500 hover:text-white rounded-3xl p-3.5 transition duration-300 ease-in-out'>Home</div>
       <span className='flex items-center justify-center hover:bg-slate-500 hover:text-white rounded-2xl p-3.5 transition duration-300 ease-in-out'>Careers</span>
       <span className='flex items-center justify-center  hover:bg-slate-500 hover:text-white rounded-2xl p-3.5 transition duration-300 ease-in-out' >About</span>
       <span className='flex items-center justify-center  hover:bg-slate-500 hover:text-white rounded-2xl p-3.5 transition duration-300 ease-in-out'>Security</span>
      </div>
      <a href="./Components/Login.jsx" className='w-24 h-10 bg-[#CAFF33] text-black font-bold  flex items-center justify-center rounded-3xl p-5  relative  bottom-5 '>
       <button>Login</button>
      </a>    
    </div>
  )
}

export default navbar

// import React from 'react'
// import { Link } from 'react-router-dom' // Import Link from react-router-dom

// function Navbar() {
//   return (
//     <div className='w-5/6 h-8 bg-slate-800 rounded-3xl p-7 flex justify-between relative top-7 left-24 border-gray-700'>
//       <div className='logo relative bottom-4 '>
//         <svg width="55" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M9.99992 20.0002L19.9999 10.0002L29.9999 20.0002L19.9999 30.0002L9.99992 20.0002Z" fill="#CAFF33"/>
//           <path d="M36.6666 13.3335L29.9999 20.0002V10.0002H19.9999L26.6666 3.3335H36.6666V13.3335Z" fill="#CAFF33"/>
//           <path d="M36.6666 26.6668L29.9999 20.0002V30.0002H19.9999L26.6666 36.6668H36.6666V26.6668Z" fill="#CAFF33"/>
//           <path d="M3.33325 26.6668L9.99992 20.0002V30.0002H19.9999L13.3333 36.6668H3.33325L3.33325 26.6668Z" fill="#CAFF33"/>
//           <path d="M3.33325 13.3335L9.99992 20.0002V10.0002H19.9999L13.3333 3.3335H3.33325L3.33325 13.3335Z" fill="#CAFF33"/>
//         </svg>
//       </div>
//       <div className='relative bottom-3 flex gap-x-4 place-content-center text-l'>
//         <div className='flex items-center justify-center hover:bg-slate-500 hover:text-white rounded-3xl p-3.5 transition duration-300 ease-in-out'>Home</div>
//         <span className='flex items-center justify-center hover:bg-slate-500 hover:text-white rounded-2xl p-3.5 transition duration-300 ease-in-out'>Careers</span>
//         <span className='flex items-center justify-center hover:bg-slate-500 hover:text-white rounded-2xl p-3.5 transition duration-300 ease-in-out'>About</span>
//         <span className='flex items-center justify-center hover:bg-slate-500 hover:text-white rounded-2xl p-3.5 transition duration-300 ease-in-out'>Security</span>
//       </div>
//       {/* Use Link for navigation */}
//       <Link to="/login" className='w-24 h-10 bg-[#CAFF33] text-black font-bold flex items-center justify-center rounded-3xl p-5 relative bottom-5'>
//         <button>Login</button>
//       </Link>    
//     </div>
//   )
// }

// export default Navbar
