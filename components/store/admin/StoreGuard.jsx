// React
import { useEffect } from "react";
// NextJS
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../../../redux/actions'
// Components
import Loading from "../../Loading";

function StoreGuard({ state, actions, children, loading }) {

    const router = useRouter();
    const { store: storeQuery } = router.query;

    const stateAuth = state.auth;
    const auth = state.auth;
    const myStore = state.myStore;
    const fetchLoading = state.auth.loading || state.myStore.loading;

    useEffect(() => {
        if(stateAuth.error) {
            router.push('/login')
        }
    }, [state])

    return(
        <>
            <Loading loading={loading ? loading : fetchLoading} />
            {auth.authenticated && Object.keys(myStore).length != 0 && storeQuery === myStore.url && (
                <div>{children}</div>
            )}
            { !fetchLoading && storeQuery !== myStore.url && (
                <div className="h-screen flex gap-10 flex-col justify-center mx-auto store-access-width">
                    <Link href="/"><Image src='/img/icon.png' width={150} height={30} alt="Ecommerce Logo" /></Link>
                    <div className="flex flex-col gap-4">
                        <div className="text-3xl font-medium">No es posible acceder a esta <span className="uppercase text-main-color font-semibold">Tienda</span></div>
                        <div className="text-gray-500">
                            <div className="font-normal-weight">Parece que no tienes acceso a esta tienda. Ponte en contacto con el administrador de la tienda para acceder.</div>
                        </div>
                    </div>
                    <div className="w-fit">
                        <Link href={ myStore.url ? `/store/${myStore.url}/admin` : '/store/create'}>
                            <div className="w-fit px-10 py-4 bg-main-color hover:bg-main-colordark transition-colors text-white cursor-pointer font-normal-weight rounded-md">
                                <div>{ myStore.url ? 'Ir a mi Tienda' : 'Crear mi tienda'}</div>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </>
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
)(StoreGuard);