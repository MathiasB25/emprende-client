// NextJS
import Link from "next/link";
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../../../../redux/actions';
// Components
import StoreLayout from "../../../../components/store/admin/StoreLayout";
import StoreGuard from "../../../../components/store/admin/StoreGuard";

function StoreHome({ state, actions }) {

    const myStore = state.myStore;

    return (
        <StoreGuard>
            <StoreLayout title="Inicio">
                <div className="text-3xl p-10 border-b border-zinc-100">Inicio</div>
                <div className="p-10 text-2xl">Completa tu tienda</div>
                <div className="font-light pb-10">
                    {/* Items container */}
                    <div className="flex flex-col mx-4 sm:mx-10 border border-zinc-100 rounded-md shadow-md">
                        {/* Item */}
                        <div className="flex justify-between items-center px-6 py-8 border-b">
                            <div className="flex items-center gap-5">
                                <div className="text-main-color"><i className="text-3xl fa-regular fa-circle-check"></i></div>
                                <div className="flex flex-col gap-1">
                                    <div className="text-xl font-normal">Obtén un plan</div>
                                    <div className="text-sm text-gray-500 pr-5">Obteniendo el plan básico anual, te regalamos el primer mes y 5% de descuento cada mes por el primer año.</div>
                                </div>
                            </div>
                            <button className="text-main-color hover:underline h-fit whitespace-nowrap">Planes</button>
                        </div>
                        <div className="flex justify-between items-center px-6 py-8 border-b">
                            <div className="flex items-center gap-5">
                                {myStore.template ? (
                                    <div className={myStore.template && 'text-main-color'}><i className="text-3xl fa-regular fa-circle-check"></i></div>
                                ) : (
                                    <div><i className="text-3xl fa-regular fa-circle"></i></div>
                                )}
                                <div className="flex flex-col gap-1">
                                    <div className="text-xl font-normal">Elige una plantilla</div>
                                    <div className="text-sm text-gray-500 pr-5">Elige una plantilla y empieza a darle color a tu tienda.</div>
                                </div>
                            </div>
                            <Link href="/templates" ><button className="text-main-color hover:underline h-fit whitespace-nowrap">Plantillas</button></Link>
                        </div>
                        <div className="flex justify-between items-center px-6 py-8 border-b">
                            <div className="flex items-center gap-5">
                                <div className=""><i className="text-3xl fa-regular fa-circle"></i></div>
                                <div className="flex flex-col gap-1">
                                    <div className="text-xl font-normal">Agrega productos</div>
                                    <div className="text-sm text-gray-500 pr-5">Escribe una descripción, agrega fotos, establece un precio a los productos que piensas vender.</div>
                                </div>
                            </div>
                            <button className="text-main-color hover:underline h-fit whitespace-nowrap">Productos</button>
                        </div>
                        <div className="flex justify-between items-center px-6 py-8">
                            <div className="flex items-center gap-5">
                                <div className=""><i className="text-3xl fa-regular fa-circle"></i></div>
                                <div className="flex flex-col gap-1">
                                    <div className="text-xl font-normal">Agrega un dominio</div>
                                    <div className="text-sm text-gray-500 pr-5">Agregar un dominio personalizado ayuda a tus clientes a encontrar tu tienda con facilidad.</div>
                                </div>
                            </div>
                            <button className="text-main-color hover:underline h-fit whitespace-nowrap">Dominios</button>
                        </div>
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
)(StoreHome);