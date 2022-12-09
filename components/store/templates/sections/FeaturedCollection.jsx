import { HeadingH2, Product } from '../elements';

export default function FeaturedCollectionSection({elements}) {

    const heading = elements.filter(e => e.component === "HeadingH2")[0];
    const collection = elements.filter(e => e.component !== "HeadingH2");

    return(
        <div className='flex flex-col gap-8 page-width'>
            <div>
                { heading && <HeadingH2 text={heading.value.text || "Featured collection"} /> }
            </div>
            <div className='grid-cols-4-media'>
                {collection.length != 0 ? (
                    collection.map(product => (
                        <div><Product name={product.value.name} price={product.value.price} media={product.value.media} aspectRatio={product.value.properties.aspectRatio} /></div>
                    ))
                ) : (
                    <>
                        <div><Product name={"Ejemplo de producto"} price={{price: 1200, currency: "UYU"}} media={""} aspectRatio={"1/1"} /></div>
                        <div><Product name={"Ejemplo de producto"} price={{price: 1200, currency: "UYU"}} media={""} aspectRatio={"1/1"} /></div>
                        <div><Product name={"Ejemplo de producto"} price={{price: 1200, currency: "UYU"}} media={""} aspectRatio={"1/1"} /></div>
                        <div><Product name={"Ejemplo de producto"} price={{price: 1200, currency: "UYU"}} media={""} aspectRatio={"1/1"} /></div>
                    </>
                )}
            </div>
        </div>
    )
}