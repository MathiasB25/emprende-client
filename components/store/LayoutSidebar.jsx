import { useRef, useState } from "react";
import Link from "next/link";

export default function StoreLayoutSidebar({store, title}) {

    const sidebar = useRef(null);
    const opacity = useRef(null);

    const [ active, setActive ] = useState(false);
    
    const handleResize = () => {
        if(active && window.innerWidth >= 1024) {
            if(sidebar.current === null || opacity.current === null) return
            setActive(false);
            sidebar.current.style.animationName = 'storeSidebarOpen'
            opacity.current.style.animationName = 'storeOpacityOpen'
        }
    }
    if(active) window.addEventListener('resize', handleResize)

    const handleClose = () => {
        sidebar.current.style.animationName = 'storeSidebarClose'
        opacity.current.style.animationName = 'storeOpacityClose'
        setTimeout(() => {
            setActive(false);
            sidebar.current.style.animationName = 'storeSidebarOpen'
            opacity.current.style.animationName = 'storeOpacityOpen'
        }, 480)
    }

    return(
        <>
            <div className={`${active && 'hidden'} shadow-sm flex lg:hidden cursor-pointer items-center justify-center rounded-full absolute top-20 left-3 w-8 h-8 bg-main-color text-white hover:bg-main-colordark transition-colors`} onClick={() => setActive(true)}><i className="fa-regular fa-arrow-right-from-line"></i></div>
            <div ref={sidebar} className={`${active && 'store-layout-sidebar'} relative hidden lg:block lg:w-1/4 xl:w-1/5 2xl:w-1/6 h-full border-r border-gray-100 shadow-sm`}>
            <div className={`${!active && 'hidden'} shadow-sm flex lg:hidden cursor-pointer items-center justify-center rounded-full absolute top-4 right-5 transition-colors z-10 text-xl`} onClick={handleClose}><i className="fa-regular fa-arrow-left-from-line"></i></div>
                <div className={`relative flex flex-col gap-1 py-5 pt-14 lg:pt-5 h-full w-full`}>
                    <Link href={`/store/${store}/`}>
                        <div className={`${title == "Inicio" ? "bg-zinc-100 border-main-color" : "border-transparent"} border-l-4 pl-4 p-2 mr-5 rounded-tr-md rounded-br-md hover:bg-zinc-100 transition-colors`}>
                            <div className="flex gap-2 items-center">
                                <i className={`${title == "Inicio" ? "fa-solid text-main-color" : "fa-regular"} fa-house text-lg w-6 text-center`}></i>
                                <div>Inicio</div>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/store/${store}/orders`}>
                        <div className={`${title == "Ordenes" ? "bg-zinc-100 border-main-color" : "border-transparent"} border-l-4 pl-4 p-2 mr-5 rounded-tr-md rounded-br-md hover:bg-zinc-100 transition-colors`}>
                            <div className="flex gap-2 items-center">
                                <i className={`${title == "Ordenes" ? "fa-solid text-main-color" : "fa-regular"} fa-inbox text-lg w-6 text-center`}></i>
                                <div>Ordenes</div>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/store/${store}/products`}>
                        <div className={`${title == "Productos" ? "bg-zinc-100 border-main-color" : "border-transparent"} border-l-4 pl-4 p-2 mr-5 rounded-tr-md rounded-br-md hover:bg-zinc-100 transition-colors`}>
                            <div className="flex gap-2 items-center">
                                <i className={`${title == "Productos" ? "fa-solid text-main-color" : "fa-regular"} fa-tags text-lg w-6 text-center`}></i>
                                <div>Productos</div>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/store/${store}/clients`}>
                        <div className={`${title == "Clientes" ? "bg-zinc-100 border-main-color" : "border-transparent"} border-l-4 pl-4 p-2 mr-5 rounded-tr-md rounded-br-md hover:bg-zinc-100 transition-colors`}>
                            <div className="flex gap-2 items-center">
                                <i className={`${title == "Clientes" ? "fa-solid text-main-color" : "fa-regular"} fa-user text-lg w-6 text-center`}></i>
                                <div>Clientes</div>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/store/${store}/discounts`}>
                        <div className={`${title == "Descuentos" ? "bg-zinc-100 border-main-color" : "border-transparent"} border-l-4 pl-4 p-2 mr-5 rounded-tr-md rounded-br-md hover:bg-zinc-100 transition-colors`}>
                            <div className="flex gap-2 items-center">
                                <i className={`${title == "Descuentos" ? "fa-solid text-main-color" : "fa-regular"} fa-badge-percent text-lg w-6 text-center`}></i>
                                <div>Descuentos</div>
                            </div>
                        </div>
                    </Link>
                    <div>
                        <div className="ml-5 text-sm mt-5">Tienda</div>
                        <Link href={`/store/${store}`}>
                            <div className={`${title == "Tienda" ? "bg-zinc-100 border-main-color" : "border-transparent"} border-l-4 pl-4 p-2 mr-5 rounded-tr-md rounded-br-md hover:bg-zinc-100 transition-colors`}>
                                <div className="flex gap-2 items-center">
                                    <i className={`${title == "Tienda" ? "fa-solid text-main-color" : "fa-regular"} fa-store text-lg w-6 text-center`}></i>
                                    <div>Mi Tienda</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="absolute bottom-0 bg-white w-full pr-5">
                        <Link href={`/store/${store}/settings`}>
                            <div className={`border-l-4 pl-4 p-2 rounded-tr-md rounded-br-md my-5 ${title == "Ajustes" ? "bg-zinc-100 border-main-color" : "border-transparent"} hover:bg-zinc-200 w-full mr-5`}>
                                <div>
                                    <div className="flex gap-2 items-center">
                                        <i className={`${title == "Ajustes" ? "fa-solid text-main-color" : "fa-regular"} fa-gear text-lg w-6 text-center`}></i>
                                        <div>Ajustes</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {active && <div ref={opacity} className={`${active && 'store-layout-opacity'}`} onClick={handleClose}></div>}
        </>
    )
}