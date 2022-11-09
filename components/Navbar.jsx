import Link from "next/link"
import { useRef, useState } from "react"
import useClickOutSide from "../hooks/useClickOutSide"


const Navbar = () => {

   const [toggle, setToggle] = useState(false)
   const handleOpenMenu = () =>{
      setToggle(!toggle)
   }
   
   const menu = useRef(null)
   useClickOutSide(menu, setToggle)

  return (
    <>
      <div className="relative flex items-center">
         <div className="w-full flex justify-between border-b border-solid border-gray-300">

            <div className="flex">
               <div className="h-20 cursor-pointer inline-flex items-center">
                     <Link href={'/'}><img className="navbar-logosize" src="/img/icon.png" alt="logo"/></Link>
               </div>
               <div className="flex gap-12 items-center flex-row ml-12 text-gray-500 ">
                     <Link href="/"><p className="cursor-pointer font-medium text-sm flex relative items-center hover:text-main-color"> Components </p></Link>
                     <Link href="/"><p className="cursor-pointer font-medium text-sm flex relative items-center hover:text-main-color"> Pages </p></Link>
                     <Link href="/"><p className="cursor-pointer font-medium text-sm flex relative items-center hover:text-main-color"> Home </p></Link>
                     <Link href="/"><p className="cursor-pointer font-medium text-sm flex relative items-center hover:text-main-color"> Documentation </p></Link>
               </div>
            </div>
            
            <div className="flex gap-6 items-center">
                  <div>
                     <button onClick={handleOpenMenu}><i className="fa-solid fa-magnifying-glass hover:text-main-color"></i></button>
                  </div>
                  <div className="hidden">
                     <button><i className="fa-solid fa-bars"></i></button>
                  </div>
                  <div>
                     <Link href="/"><p className="navbar-joinusbuy border border-solid border-main-text hover:bg-main-text hover:text-white">Join Us</p></Link>
                  </div>  
                  <div>
                     <Link href="/"><p className="navbar-joinusbuy text-white bg-main-color hover:bg-main-colordark transition-colors">Buy Now</p></Link>
                  </div>
            </div>
         </div>
      </div>
      
      {toggle && (
         <div ref={menu} className="navbar-searchblur top-0 left-0 w-full flex absolute items-center h-24 px-6">
            <div className="cursor-text inline-flex gap-3 w-full relative mr-2 font-medium">
               <div>
                  <i className="fa-solid fa-magnifying-glass w-5 h-5 text-main-text"/>
               </div>
               <div className="w-full">
                  <input className="bg-transparent block w-full outline-none text-main-text" placeholder="Search..." type="text" />
               </div>
            </div>
            <div>
               <button className="navbar-joinusbuy text-white bg-main-color hover:bg-main-colordark transition-colors">Search</button>
            </div>
         </div>
      )}
    </>
    )
}

export default Navbar 