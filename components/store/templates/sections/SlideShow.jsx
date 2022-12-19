import { useState } from 'react';
import { Image } from '../elements';

export default function SlideshowSection({elements, height}) {

    const [ paginationStyle, setPaginationStyle ] = useState(1);
    const [ pageCount, setPageCount ] = useState(elements.length);
    const [ page, setPage ] = useState(0);

    const slideShowHeight = `${height == "small" ? "500px" : height == "medium" ? "600px" : height == "large" && "700px"}`

    function handlePlus() {
        if(page == pageCount - 1) {
            setPage(0);
            return
        } 
        setPage(page + 1);
    }

    function handleMinus() {
        if(page == 0) {
            setPage(pageCount - 1);
            return
        } 
        setPage(page - 1);
    }
    return(
        <div className='relative py-12 font-normal-weight box-content' style={{height: slideShowHeight}}>
            <div className='flex fixed' style={{transform: `translateX(-${page}00vw)`, transition: 'all .8s'}}>
                {elements.map(e => (
                    <>
                        <div key={randomId()} style={{height: slideShowHeight, width: "100vw"}}>
                            <Image media={e.value.media} content={{ title: "Image slide", description: "Tell your brand's story through images", buttonText: "Button label" }} />
                        </div>
                    </>
                ))}
            </div>
            <div className='absolute w-full bottom-0 flex gap-5 items-center justify-center text-xs h-12 border-b text-zinc-500'>
                <div className='flex justify-center w-8 cursor-pointer' onClick={handleMinus}><i className="fa-regular fa-chevron-left"></i></div>
                <div>{`${page + 1}/${pageCount}`}</div>
                <div className='flex justify-center w-8 cursor-pointer' onClick={handlePlus}><i className="fa-regular fa-chevron-right"></i></div>
            </div>
        </div>
    )
}