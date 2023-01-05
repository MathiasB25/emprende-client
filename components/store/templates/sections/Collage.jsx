// React
import { useEffect } from 'react';
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../../../../redux/actions';
// Components
import { HeadingH4, Collection, Image, Video, Product } from '../elements';
// Hooks
import randomId from '../../../../hooks/randomId';

function CollageSection({state, actions, elements}) {

    const heading = elements.filter(e => e.component === "HeadingH4")[0];
    const collageElements = elements.filter(e => e.component !== "HeadingH4");

    useEffect(() => {
        if(heading.value.text === '' && !heading.modified) {
            actions.updateStoreSection({ section: { component: "Collage" }, element: heading, value: { text: "Multimedia collage" } });
        }
    }, [])

    return(
        <div className='flex flex-col gap-8 page-width collage-aspect-ratio'>
            { heading.value.text && (
                <div><HeadingH4 text={heading.value.text} /></div>
            )}
            <div className="collage-grid">
                {collageElements.map(e => {
                    switch (e.component) {
                        case "Collection":
                            return <div key={randomId()} className='collage-grid-item'><Collection name={e.value?.name || "Ejemplo de colección"} media={e.value?.media} aspectRatio={e.value?.properties?.aspectRatio} /></div>
                        case "Image":
                            return <div key={randomId()} className='collage-grid-item'><Image media={e.value.media} alt={e.value.alt} /></div>
                        case "Video":
                            return <div key={randomId()} className='collage-grid-item'><Video media={e.value.media} aspectRatio={e.value.aspectRatio} position={e.value.position} /></div>
                        case "Product":
                            return <div key={randomId()} className='collage-grid-item'><Product name={e.value?.name || "Ejemplo de producto"} media={e.value?.media} price={e.value?.price || { price: 1200, currency: "UYU" }} aspectRatio={e.value?.properties?.aspectRatio} /></div>
                    }
                })}
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
)(CollageSection);