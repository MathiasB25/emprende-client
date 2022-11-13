import Navbar from "./Navbar"
import Head from "next/head"

const Layout = ({title, children}) => {
  return(
    <>
      <Head>
        <title>Emprende | {title}</title>
      </Head>
      <Navbar/>
      <div className="xl:5 lg:px-20 xl:px-44 2xl:px-80 ">{children}</div>
    </>

  )
}

export default Layout