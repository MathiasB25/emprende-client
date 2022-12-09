import Image from 'next/image';

export default function BlogElement({heading, description, media}) {

    return (
        <div className='flex flex-col cursor-pointer'>
            <div>
                { media ? (
                    <div className='image-container' style={{aspectRatio: "4/3"}}>
                        <Image src={media} layout="fill" className='image' alt='Blog Image' />
                    </div>
                ): (
                    <div className="flex items-center justify-center bg-zinc-200" style={{aspectRatio: "4/3"}}>
                        <div className="text-zinc-500 text-8xl"><i className="fa-thin fa-image"></i></div>
                    </div>
                )}
            </div>
            <div className='flex flex-col gap-4 pt-8 pb-12 h-full bg-zinc-100 font-normal-weight text-center'>
                <div className='text-2xl'>{heading}</div>
                <div className='text-sm text-zinc-600'>{description}</div>
            </div>
        </div>
    )
}