// NextJS
import Image from "next/image";
import { useRouter } from "next/router";
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../../../../redux/actions'

function TemplateGridItem({state, actions, template}) {

    const router = useRouter();

    const myStore = state.myStore;

    const { previewImg, name, price, madeBy, id } = template;
    const { fromCommunity } = madeBy;

    return(
        <div className="select-none cursor-pointer flex flex-col shadow-md border rounded-md template-grid-item" style={{aspectRatio: "2/1"}} onClick={() => router.push(`/templates/${id}`)}>
            <div className="image-container">
                <Image src={previewImg} layout={"fill"} className="image rounded-t-md" alt="Template image" />
            </div>
            <div className="py-4 px-5 flex items-center justify-between border-t border-b">
                <div className="flex items-center gap-2">
                    <div>{name}</div>
                    { myStore.template?._id === template?._id && <div className="bg-main-color text-white font-light text-xs w-fit px-2 py-1 rounded-full">En uso</div>}
                </div>
                <div className={`${!price && 'text-main-color'}`}>{`${price ? `$${price} USD`: 'Gratis'}`}</div>
            </div>
            <div className="px-3 py-2 text-xs font-light">Creado por {fromCommunity ? 'la comunidad' : <span className="text-main-color font-normal">Emprende</span>}</div>
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
)(TemplateGridItem);