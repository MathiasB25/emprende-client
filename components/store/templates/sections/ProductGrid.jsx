import Image from 'next/image';
import priceFormat from '../../../../hooks/priceFormat';
import { HeadingH2, Product } from '../elements';
import ProductGridFilterAndSort from './ProductGrid/FilterAndSort';

export default function ProductGridSection({elements}) {

    return(
        <div className='flex flex-col gap-10 page-width font-normal-weight'>
            <div className='text-4xl'>Productos</div>
            <div className='py-6'>
                <div>
                    <ProductGridFilterAndSort />
                </div>
                {elements.length != 0 ? (
                    <div className='grid grid-cols-4 gap-x-2 gap-y-6 py-8'>
                        {elements.map(e => (
                            <div className='relative h-full product-hover cursor-pointer'>
                                <div className='w-full h-full flex flex-col'>
                                    <div className="flex grow items-center justify-center w-full h-full bg-gray-100" style={{aspectRatio: "1/1"}}>
                                        { e.value?.media ? (
                                            <div className="image-container"><Image src={`${e.value?.media}`} width={200} height={200} alt="Product Image" className='image' /></div>
                                        ) : (
                                            <div className='text-4xl text-gray-300'><i className="fa-thin fa-image"></i></div>
                                        )}
                                    </div>
                                    <div className='bottom-0 flex flex-col gap-2 mt-4'>
                                        <div className="font-normal-weight text-xs overflow-hidden">{e.value?.name}</div>
                                        <div className="font-normal-weight">{`${e.value?.price && priceFormat(e.value?.price?.price, e.value?.price?.currency)}`}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='flex items-center justify-center h-80 text-lg'>
                        <div>No se encontraron productos.</div>
                    </div>
                )}
            </div>
        </div>
    )
}