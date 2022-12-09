import { HeadingH2, Price, QuantitySelector, BuyButton } from '../elements';

export default function FeaturedProductSection({elements}) {

    return(
        <div className='flex flex-col items-center gap-5 page-width'>
            { elements.map(e => {
                switch (e.component) {
                    case "HeadingH2":
                        return <HeadingH2 text={e.value.text} />; 
                    case "Price":
                        return <Price price={e.value.price.price} stock={e.value.price.stock} align={e.value.properties.align} />; 
                    case "QuantitySelector":
                        return <QuantitySelector align={"center"} />; 
                    case "BuyButton":
                        return <BuyButton text={e.value.text} color={e.value.color} bg={e.value.bg} width={e.value.width} />; 
                }
            })}
        </div>
    )
}