import Link from "next/link"
import { useEffect, useRef, useState } from "react"
// Hooks
import useClickOutSide from "../hooks/useClickOutSide"
// Components
import NavbarAccount from "./NavbarAccount"
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../redux/actions'

function Navbar({ state, actions }) {

   const auth = state.auth;

   const [toggle, setToggle] = useState(false)
   const handleOpenMenu = () =>{
      setToggle(!toggle)
   }
   
   const menu = useRef(null)
   useClickOutSide(menu, setToggle)

   return (
    <>
      <div className="relative flex items-center px-10 lg:px-20 shadow-md">
         <div className="w-full flex justify-between">
            <div className="flex">
               <div className="h-20 cursor-pointer inline-flex items-center">
                     <Link href={`/`}><img className="navbar-logosize" src="/img/icon.png" alt="logo"/></Link>
               </div>
               {auth.authenticated ? (
                  <div className="hidden lg:flex gap-10 items-center flex-row ml-12 text-gray-500">
                     <Link href="/templates"><p className="cursor-pointer font-medium text-sm flex relative items-center hover:text-main-color transition-colors">Plantillas</p></Link>
                     <Link href="/plans"><p className="cursor-pointer font-medium text-sm flex relative items-center hover:text-main-color transition-colors">Planes</p></Link>
                  </div>
               ) : (
                  <div className="hidden lg:flex gap-10 items-center flex-row ml-12 text-gray-500">
                     <Link href="/"><p className="cursor-pointer font-medium text-sm flex relative items-center hover:text-main-color transition-colors">Inicio</p></Link>
                     <Link href="/"><p className="cursor-pointer font-medium text-sm flex relative items-center hover:text-main-color transition-colors">Planes</p></Link>
                     <Link href="/"><p className="cursor-pointer font-medium text-sm flex relative items-center hover:text-main-color transition-colors">Acerca de</p></Link>
                     <Link href="/"><p className="cursor-pointer font-medium text-sm flex relative items-center hover:text-main-color transition-colors">Contacto</p></Link>
                  </div>
               )}
            </div>
            
            {auth.authenticated ? (
               <NavbarAccount top={"navbar-account-menu"} />
            ) : (
               <div className="flex gap-6 items-center">
                  <div>
                     <button onClick={handleOpenMenu}><i className="text-xl lg:text-base fa-solid fa-magnifying-glass hover:text-main-color"></i></button>
                  </div>
                  <div className="lg:hidden">
                     <button><i className="fa-solid fa-bars text-2xl"></i></button>
                  </div>
                  <div className="hidden lg:flex gap-4">
                     <div>
                        <Link href="/login"><p className="navbar-joinusbuy border border-solid border-main-text hover:bg-main-text hover:text-white">Unite</p></Link>
                     </div>  
                     <div>
                        <Link href="/"><p className="navbar-joinusbuy text-white bg-main-color hover:bg-main-colordark transition-colors">Buy Now</p></Link>
                     </div>
                  </div>
               </div>
            )}
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

const mapStateToProps = (state) => ({
	state: state
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(Actions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar);