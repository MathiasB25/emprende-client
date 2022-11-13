import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import Head from 'next/head'
import useAuth from "../../hooks/useAuth"
import StoreLayoutSidebar from "./LayoutSidebar";
import StoreLayoutNavbar from "./LayoutNavbar";

export default function StoreLayout({title, children}) {

    const router = useRouter();
    const { store } = router.query;

    const { auth, loading } = useAuth();

    useEffect(() => {
        if(loading === false && Object.keys(auth).length === 0) {
            router.push('/login')
        }
    }, [loading]) 

    return (
        Object.keys(auth).length != 0 && (
            <>
                <Head>
                    <title>{store} | {title}</title>
                </Head>
                <StoreLayoutNavbar store={store} />
                <div className="flex store-layout-height">
                    <StoreLayoutSidebar store={store} title={title} />
                    <div className="w-full lg:w-3/4 xl:w-4/5 2xl:w-5/6 store-layout-height overflow-hidden overflow-y-scroll">{children}</div>
                </div>
            </>
        )
    )    
}