// React
import { useEffect, useState } from "react";
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../../../../redux/actions';
// Components
import EditorSidebar from "../../../../components/store/admin/EditorSidebar"
import StoreGuard from "../../../../components/store/admin/StoreGuard";
// Hooks
import useAppContext from '../../../../hooks/useAppContext'
import EditorContent from "../../../../components/store/admin/EditorContent";

function StoreEditor({ state, actions }) {

    const [ loading, setLoading ] = useState(true);
    const store = state.store;
    const myStore = state.myStore;
    const { editorPage } = useAppContext();
    
    useEffect(() => {
        if(myStore.url) {
            actions.getStore(myStore.url);
        }
    }, [myStore])

    const [ pageSections, setPageSections ] = useState(null);
    const [ pageName, setPageName ] = useState(null);
    
    useEffect(() => {
        if(store.template) {
            setPageSections(store.pages.filter( page => page.url === editorPage)[0].sections);
            setPageName(store.pages.filter( page => page.url === editorPage)[0].name);
            setLoading(false);
        }
    }, [store, editorPage])

    return(
        <StoreGuard loading={loading}>
            <div className="h-screen">
                <div className="flex justify-between items-center border-b h-14 px-5">
                    <div className="h-full flex items-center">
                        <div className="text-zinc-700 flex justify-center items-center h-full pr-4 text-2xl cursor-pointer"><i class="fa-solid fa-arrow-left-to-line"></i></div>
                        <div className="flex gap-2 items-center h-full pl-4 border-l font-light text-sm">
                            <div>{myStore.template?.name}</div>
                            <div className="flex items-center text-white bg-main-color h-5 px-2 rounded-full text-xs">
                                <div>Usando</div>
                            </div>
                        </div>
                    </div>
                    <button disabled className="bg-main-color hover:bg-main-colordark transition-colors px-3 py-2 rounded-md font-light text-white cursor-pointer">Guardar</button>
                </div>
                <div className="flex editor-height overflow-hidden">
                    <div className="w-[20rem] border-r border-zinc-200 h-screen overflow-y-scroll">
                        <EditorSidebar store={myStore} pageSections={pageSections} pageName={pageName} />
                    </div>
                    <div className="editor-content-width bg-zinc-100">
                        <div className="editor-content-height overflow-y-scroll m-5 border bg-white box-content">
                            { store.template && myStore.url && (
                                <EditorContent store={store} pageSections={pageSections} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </StoreGuard>
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
)(StoreEditor);