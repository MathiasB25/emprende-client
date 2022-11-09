import Navbar from "./Navbar"

const Layout = ({children}) => {
  return(
    <>
      <Navbar/>
      <div className="px-20 xl:px-44 2xl:px-80 ">{children}</div>
    </>

  )
}

export default Layout