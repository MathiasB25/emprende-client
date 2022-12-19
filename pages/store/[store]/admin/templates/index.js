// NextJS
import Image from "next/image";
import Link from "next/link";
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../../../../../redux/actions'
// Componentes
import StoreGuard from "../../../../../components/store/admin/StoreGuard";
import StoreLayout from "../../../../../components/store/admin/StoreLayout";
import TemplateGridItem from "../../../../../components/store/admin/templates/TemplateGridItem";

function StoreThemes({ state, actions }) {

    const myStore = state.myStore;

    return (
        <StoreGuard>
            <StoreLayout title="Plantillas">
                <div className="text-3xl px-5 sm:px-10 py-10 border-b border-zinc-100">Plantillas</div>
                <div className="flex flex-col px-3 sm:px-10">
                    <div className="flex flex-col gap-5 py-10">
                        {myStore.template ? (
                            <div className="">
                                <div className="flex flex-col shadow-md border rounded-md" style={{aspectRatio: "16/9"}}>
                                    <div className="image-container">
                                        <Image src={myStore.template.previewImg} layout={"fill"} className="image rounded-t-md" alt="Template image" />
                                    </div>
                                    <div className="flex-col gap-10 flex sm:flex-row sm:items-center sm:gap-0 justify-between border-t py-4 px-5">
                                        <div className="flex items-center gap-3">
                                            <div className="hidden sm:block rounded-md border image-container" style={{width: "6rem", height: "5rem"}}>
                                                <Image src={myStore.template.previewImg} layout={"fill"} className="image rounded-t-md" alt="Template image" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <div className="text-lg font-semibold">{myStore.template.name}</div>
                                                    <div className="py-1 px-2 sm:px-4 bg-main-color text-white font-light rounded-full text-xs sm:text-sm">Plantilla actual</div>
                                                </div>
                                                <div className="text-sm font-light text-gray-500">
                                                    <div className="">{`Versión de ${myStore.template.name}: `}<span className="font-normal">{myStore.template.version}</span></div>
                                                    <div className="">Creado por {myStore.template.fromCommunity ? 'la comunidad' : <span className="text-main-color font-normal">Emprende</span>}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=""><Link href={`/store/${myStore.url}/admin/editor`}><button className="w-full sm:w-fit py-2 px-5 bg-main-color hover:bg-main-colordark transition-colors text-white font-light rounded-md">Ir al editor</button></Link></div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col sm:flex-row items-center justify-between border border-gray-100 shadow-md py-5 px-6 rounded-md">
                                <div className="flex items-center gap-3 sm:pr-5 text-center sm:text-left">
                                    <div className="text-3xl hidden sm:block">
                                        <i className="fa-regular fa-pen-circle"></i>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div>Aún no has elegido una plantilla</div>
                                        <div className="font-light text-sm text-gray-500">Explora las plantillas que tenemos para ofrecerte y empieza a darle color a tu ecommerce</div>
                                    </div>
                                </div>
                                <Link href="/templates"><button className="text-main-color hover:text-main-colordark font-light hover:underline transition-colors pt-5 sm:p-0">Plantillas</button></Link>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-5 py-10 border-t">
                        <div className="flex items-center justify-between">
                            <div className="text-2xl">Tus plantillas</div>
                            <Link href="/templates"><button className="font-light text-main-color hover:text-main-colordark transition-colors hover:underline">Ir a tienda</button></Link>
                        </div>
                        { myStore.ownedTemplates?.length === 0 && (
                            <div className="flex flex-col gap-5 items-center py-20">
                                <div className="font-light text-lg">No has agregado plantillas.</div>
                                <Link href="/templates">
                                    <button className="bg-main-color hover:bg-main-colordark transition-colors text-white rounded-md font-light px-5 py-3">Buscar plantillas</button>
                                </Link>
                            </div>
                        ) }
                        {myStore.ownedTemplates && (
                            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
                                {myStore.ownedTemplates?.map( template => (
                                    <TemplateGridItem key={template.id} template={template} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </StoreLayout>
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
)(StoreThemes);