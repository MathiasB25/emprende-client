import Image from 'next/image'
import priceFormat from '../../../../hooks/priceFormat';

export default function ProductElement({ name, media, price, aspectRatio }) {

    return (
        <>
            {/* Product */}
            <div className='relative h-full' style={{aspectRatio}}>
                <div className='absolute w-full h-full flex flex-col'>
                    <div className="flex grow items-center w-full h-full bg-gray-100 cursor-pointer">
                        { media && (
                            <div className="image-container"><Image src={media} width={200} height={200} alt="Product Image" className='image' /></div>
                        )}
                        <div className="absolute pl-5 font-normal-weight">
                            <div className="hover:underline">{name}</div> 
                        </div>
                    </div>
                    <div className="my-4 font-normal-weight">{`${price?.price && priceFormat(price?.price, price?.currency)}`}</div>
                </div>
            </div>
        </>
    )
}