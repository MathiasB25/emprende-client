// React
import { useEffect } from 'react';
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../../../../redux/actions';
// Components
import { HeadingH2, Product } from '../elements';
// Hooks
import randomId from '../../../../hooks/randomId';

function FeaturedCollectionSection({state, actions, elements}) {

    const heading = elements.filter(e => e.component === "HeadingH2")[0];
    const collection = elements.filter(e => e.component !== "HeadingH2");

    useEffect(() => {
        if(heading.value.text === '' && !heading.modified) {
            actions.updateStoreSection({ section: { component: "FeaturedCollection" }, element: heading, value: { text: "Featured collection" } });
        }
    }, [])

    return(
        <div className='flex flex-col gap-8 page-width'>
            { heading.value.text && (
                <div>
                    { heading && <HeadingH2 text={heading.value.text} /> }
                </div>
            )}
            <div className='grid-cols-4-media'>
                {collection.storeCollection ? (
                    /* then, fetch and map collection products */
                    <div></div>
                    /* collection.map(product => (
                        <div key={randomId()}><Product name={product.value.name} price={product.value.price} media={product.value.media} aspectRatio={product.value.properties.aspectRatio} /></div>
                    )) */
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

const mapStateToProps = (state) => ({
	state: state
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(Actions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FeaturedCollectionSection);