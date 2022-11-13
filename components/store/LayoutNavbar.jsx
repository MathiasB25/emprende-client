import Link from "next/link"
import useAuth from "../../hooks/useAuth"

export default function StoreLayoutNavbar({store}) {

    const { auth } = useAuth();

    return(
        <div className="relative flex items-center px-5 lg:px-10 border-b shadow-sm">
            <div className="w-full flex justify-between">
                <div className="h-14 cursor-pointer inline-flex items-center">
                    <Link href={`/store/${store}/`}><img className="navbar-logosize" src="/img/icon.png" alt="logo"/></Link>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center gap-2 p-2 h-fit w-fit hover:bg-gray-100 transition-colors cursor-pointer rounded-md">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200">
                            <div>{auth.name.slice(0, 1)}</div>
                        </div>
                        <div>{auth.name}</div>
                    </div>
                </div>
            </div>
        </div>        
    )
}