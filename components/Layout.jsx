import Navbar from "./Navbar"

const Layout = ({children}) => {
  return(
    <>
      <Navbar/>
      <div className="xl:5 lg:px-20 xl:px-44 2xl:px-80 ">{children}</div>
    </>

  )
}

export default Layout