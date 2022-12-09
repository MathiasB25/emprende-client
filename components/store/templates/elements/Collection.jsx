import Image from 'next/image'

export default function CollectionElement({ name, media, aspectRatio }) {

    return (
        <>
            {/* Collection */}
            <div className='relative h-full' style={{aspectRatio}}>
                <div className="absolute w-full h-full flex grow items-center bg-gray-100 cursor-pointer">
                    { media && (
                        <div className="image-container"><Image src={media} width={200} height={200} alt="Collection Image" className='image' /></div>
                    )}
                    <div className="absolute flex items-center gap-2 pl-5 font-normal-weight">
                        <div className="hover:underline">{name}</div> 
                        <i className="hidden sm:block fa-light fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            {/* Collection List */}
            {/* <div className="grid gap-2 grid-cols-3"></div> */}
        </>
    )
}