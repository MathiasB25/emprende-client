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
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import randomId from "../../../../hooks/randomId";
import useContext from "../../../../hooks/useAppContext";
import useAxiosConfig from "../../../../hooks/useAxiosConfig";

function StoreEditor({ state, actions }) {

    const router = useRouter();

    const store = state.store;

    const [ saved, setSaved ] = useState(false);
    const [ savedError, setSavedError ] = useState(false);
    const [ savingChanges, setSavingChanges ] = useState(false);
    const [ sideBarState, setSideBarState ] = useState({});
    const [ stateChange, setStateChange ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const myStore = state.myStore;
    const { editorPage } = useAppContext();

    useEffect(() => {
        if(myStore.url) {
            if(!store.component) {
                actions.getStore(myStore.url);
            }
        }
    }, [myStore])

    const [ page, setPage ] = useState(null);
    const [ pageSections, setPageSections ] = useState(null);
    
    useEffect(() => {
        if(store?.template) {
            setPageSections(store.pages.filter( page => page.url === editorPage)[0].sections);
            setPage(store.pages.filter( page => page.url === editorPage)[0]);
            setLoading(false);
        }
    }, [store, editorPage])

    const handleSaveChanges = async () => {
        if(savingChanges) {
            return
        }
        setSavingChanges(true);
        const { announceBar, pages, footer } = state.store;
        const config = useAxiosConfig();
        try {
            await axios.post('/api/updateStoreSections', { 
                announceBar, 
                pages, 
                footer, 
                config 
            })
            setSaved(true);
            setTimeout(() => {
                setSaved(false);
            }, 4000)
        } catch (error) {
            setSavedError(true);
            setTimeout(() => {
                setSavedError(false);
            }, 4000)
        } finally {
            setSavingChanges(false);
        }
    }
    console.log(savingChanges)

    return(
        <StoreGuard loading={loading}>
            <div className={`h-screen`}>
                <div className="flex justify-between items-center border-b h-14 px-5">
                    <div className="h-full flex items-center">
                        <Link href={`/store/${myStore.url}/admin/templates`}><div className="text-zinc-700 flex justify-center items-center h-full pr-4 text-2xl cursor-pointer"><i className="fa-solid fa-arrow-left-to-line"></i></div></Link>
                        <div className="flex gap-2 items-center h-full pl-4 border-l font-light text-sm">
                            <div>{myStore.template?.name}</div>
                            <div className="flex items-center text-white bg-main-color h-5 px-2 rounded-full text-xs">
                                <div>Usando</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        { savingChanges && (
                            <div className="text-xs font-light">Guardando...</div>
                        )}
                        { saved && (
                            <div className="text-xs font-light">Cambios guardados.</div>
                        )}
                        { savedError && (
                            <div className="text-xs font-light">Hubo un error.</div>
                        )}
                        <button className={`${savingChanges ? 'opacity-50 cursor-not-allowed' : 'bg-main-color hover:bg-main-colordark'} bg-main-color hover:bg-main-colordark transition-colors px-3 py-2 rounded-md font-light text-white cursor-pointer`} onClick={handleSaveChanges}>Guardar</button>
                    </div>
                </div>
                <div className="flex editor-height overflow-hidden">
                    <div className="h-full w-[20rem] border-r border-zinc-200 overflow-y-scroll">
                        { page?.name && <EditorSidebar props={{ 
                            state: {
                                store,
                                myStore,
                                page,
                                pageSections,
                                stateChange
                            },
                            setter: {
                                setPageSections,
                                setStateChange
                            }
                        }}/>}
                    </div>
                    <div className="editor-content-width bg-zinc-100">
                        <div className="editor-content-height overflow-y-scroll m-5 border bg-white box-content">
                            { store?.template && myStore.url && (
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