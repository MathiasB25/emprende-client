import randomId from '../../../../hooks/randomId';
import { HeadingH2, Price, QuantitySelector, BuyButton } from '../elements';

export default function FeaturedProductSection({elements}) {

    return(
        <div className='flex flex-col items-center gap-5 page-width'>
            { elements.map(e => {
                switch (e.component) {
                    case "HeadingH2":
                        return <HeadingH2 key={randomId()} text={e.value.text} />; 
                    case "Price":
                        return <Price key={randomId()} price={e.value.price.price} stock={e.value.price.stock} align={e.value.properties.align} />; 
                    case "QuantitySelector":
                        return <QuantitySelector key={randomId()} align={"center"} />; 
                    case "BuyButton":
                        return <BuyButton key={randomId()} text={e.value.text} color={e.value.color} bg={e.value.bg} width={e.value.width} />; 
                }
            })}
        </div>
    )
}