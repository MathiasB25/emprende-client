import Image from "next/image"
import { useEffect, useState } from "react"

export default function Loading({loading}) {
    const [ show, setShow ] = useState(true);
    const [ animation, setAnimation ] = useState(false);

    useEffect(() => {
        function handleShow() {
            setShow(true);
            !loading && setTimeout(() => {
                setAnimation(true);
                setTimeout(() => {
                    setShow(false);
                    setAnimation(false);
                }, 680)
            }, 500)
        }
        handleShow();
    }, [loading])


    return(
        show && (
            <div className={`${animation && 'loading-close'} top-0 left-0 fixed w-screen h-screen flex justify-center items-center bg-white z-50`}>
                <div className="loading-show">
                    <Image width={200} height={40} src="/img/icon.png" alt="Ecommerce Logo" />
                </div>
            </div>
        )
    )
}