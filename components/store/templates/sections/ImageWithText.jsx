import { Image, HeadingH2, Description, BuyButton } from '../elements';

export default function ImageWithTextSection({elements}) {

    const image = elements.filter(e => e.component === "Image")[0];

    return(
        <div className='grid-cols-2-media items-center page-width' style={{aspectRatio: "5/2"}}>
            <div className='grid-cols-2-media-image h-full'>
                <Image media={image.value.media} alt={image.value.alt} />
            </div>
            <div>
                <div className="flex flex-col items-start gap-6 w-full p-14">
                    { elements.map(e => {
                        switch (e.component) { 
                            case "HeadingH2":
                                return <HeadingH2 text={e.value.text} size={"3xl"} isStatic={true} />; 
                            case "Description":
                                return <Description text={e.value.text} align={"left"}  />; 
                            case "BuyButton":
                                return <BuyButton text={e.value.text} color={e.value.properties.color} bg={e.value.properties.bg} width={e.value.properties.width} />; 
                        }
                    })}
                </div>
            </div>
        </div>
    )
}