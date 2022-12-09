// Components
import EditorSidebar from "../../../../components/store/admin/EditorSidebar"
/* import TemplateDefaultIndex from "../../../../components/store/templates/default/Index"; */
import StoreGuard from "../../../../components/store/admin/StoreGuard";
// Hooks
import useAppContext from '../../../../hooks/useAppContext'

export default function StoreEditor() {
    const { myStore } = useAppContext();
    
    return(
        <StoreGuard>
            <div>
                <div>
                    <EditorSidebar store={myStore} />
                </div>
                <div>
                    {/* <TemplateDefaultIndex store={myStore} /> */}
                </div>
            </div>
        </StoreGuard>
    )
}