import Image from "next/image"
import ImageContentElement from "./ImageContent"

export default function ImageElement({media, alt, content}) {

    return (
        <div className="image-container">
            {media ? (
                <Image src={media} layout="fill" className='image -z-10' alt={alt} />
            ) : (
                <div className="flex items-center justify-center gap-2 font-normal-weight text-5xl bg-gray-100 h-full text-zinc-400">
                    <i className="fa-thin fa-image"></i>
                </div>
            )}
            {content && (
                <ImageContentElement title={content.title} description={content.description} buttonText={content.buttonText} />
            )}
        </div>
    )
}