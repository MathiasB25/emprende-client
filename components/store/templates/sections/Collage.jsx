import { HeadingH4, Collection, Image, Video, Product } from '../elements';

export default function CollageSection({elements}) {

    const heading = elements.filter(e => e.component === "HeadingH4")[0];
    const collageElements = elements.filter(e => e.component !== "HeadingH4");

    return(
        <div className='flex flex-col gap-8 page-width collage-aspect-ratio'>
            <div><HeadingH4 text={heading.value.text || "Multimedia collage"} /></div>
            <div className="collage-grid">
                {collageElements.map(e => {
                    switch (e.component) {
                        case "Collection":
                            return <div className='collage-grid-item'><Collection name={e.value?.name || "Ejemplo de colección"} media={e.value?.media} aspectRatio={e.value?.properties?.aspectRatio} /></div>
                        case "Image":
                            return <div className='collage-grid-item'><Image media={e.value.media} alt={e.value.alt} /></div>
                        case "Video":
                            return <div className='collage-grid-item'><Video media={e.value.media} aspectRatio={e.value.aspectRatio} position={e.value.position} /></div>
                        case "Product":
                            return <div className='collage-grid-item'><Product name={e.value?.name || "Ejemplo de producto"} media={e.value?.media} price={e.value?.price || { price: 1200, currency: "UYU" }} aspectRatio={e.value?.properties?.aspectRatio} /></div>
                    }
                })}
            </div>
        </div>
    )
}