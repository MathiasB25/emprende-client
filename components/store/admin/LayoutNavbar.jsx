// NextJS
import Link from "next/link"
import Image from "next/image";
// Components
import NavbarAccount from '../../../components/NavbarAccount'
// Redux
import { useSelector } from "react-redux";

export default function StoreLayoutNavbar({store}) {

    const state = useSelector(state => state);

    return(
        <div className="relative flex items-center px-5 lg:px-10 border-b shadow-sm">
            <div className="w-full flex justify-between">
                <div className="h-14 cursor-pointer inline-flex items-center">
                    <Link href={`/store/${store}/admin`}><Image width={150} height={30} src='/img/icon.png' alt="Ecommerce Logo" /></Link>
                </div>
                <NavbarAccount state={state} top={"top-14"} />
            </div>
        </div>        
    )
}