import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className=" flex h-20 flex-row bg-white">
      <div className="flex shrink-0 basis-5 items-center justify-center px-2 outline outline-2">
        LOGO
      </div>
      <div className="flex basis-40 items-center px-6 outline outline-2">
        <h2 className="font-syncopate font-semibold md:text-4xl lg:text-5xl">
          IQBAL FIRDAUS
        </h2>
      </div>
      <div className="flex basis-50 items-center justify-end bg-paleGreen px-6 outline outline-2">
        <ul className="flex flex-row items-center space-x-10 font-roboto-mono lg:text-3xl">
          <li>Home</li>
          <li>Skills</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex shrink-0 basis-5 items-center justify-center px-2 outline outline-2">
        ICON
      </div>
    </nav>
    // <nav className="grid h-20 grid-cols-12 gap-1 bg-white outline outline-2">
    //   <div className="col-span-1 col-start-1 flex items-center justify-center bg-white py-4 outline outline-2">
    //     <a>
    //       <h2>LOGO</h2>
    //     </a>
    //   </div>
    //   <div className="col-span-4 col-start-2 flex items-center justify-start bg-white px-4 py-4 outline outline-2">
    //     <h2 className=" text-5xl">NAME</h2>
    //   </div>
    //   <div className="col-span-6 col-start-6 flex items-center justify-end bg-paleGreen py-4 px-9 outline outline-2">
    //     <ul className="flex flex-row space-x-10 text-3xl">
    //       <li>Home</li>
    //       <li>Skills</li>
    //       <li>About</li>
    //     </ul>
    //   </div>
    //   <div className="col-start-12 flex items-center justify-center bg-white py-4 outline outline-2">
    //     a
    //   </div>
    // </nav>
    // <nav className="bg-white w-full outline outline-2">
    //   <div className="mx-auto justify-between bg-paleYellow px-4 md:flex md:items-center md:px-8 lg:w-full">
    //     <div>
    //       <div className="flex items-center justify-between bg-palePink py-3 md:block md:py-5">
    //         <div className="outline outline-2">
    //           <a href="javascript:void(0)">
    //             <h2 className="text-2xl font-bold">LOGO</h2>
    //           </a>
    //         </div>
    //         <div className="md:hidden">
    //           <button
    //             className="text-gray-700 focus:border-gray-400 p-2 outline-none focus:border"
    //             onClick={() => setNavbar(!navbar)}>
    //             {navbar ? (
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="h-6 w-6"
    //                 viewBox="0 0 20 20"
    //                 fill="currentColor">
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             ) : (
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="h-6 w-6"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 strokeWidth={2}>
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M4 6h16M4 12h16M4 18h16"
    //                 />
    //               </svg>
    //             )}
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <div
    //         className={`flex-1 justify-self-center pb-3 outline outline-2 md:mt-0 md:block md:pb-0 ${
    //           navbar ? "block" : "hidden"
    //         } bg-paleGreen`}>
    //         <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
    //           <li className="text-gray-600 hover:text-blue-600">
    //             <a href="javascript:void(0)">Home</a>
    //           </li>
    //           <li className="text-gray-600 hover:text-blue-600">
    //             <a href="javascript:void(0)">Blog</a>
    //           </li>
    //           <li className="text-gray-600 hover:text-blue-600">
    //             <a href="javascript:void(0)">About US</a>
    //           </li>
    //           <li className="text-gray-600 hover:text-blue-600">
    //             <a href="javascript:void(0)">Contact US</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}
