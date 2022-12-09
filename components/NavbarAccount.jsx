// React
import { useState, useRef } from "react"
// NextJS
import Link from "next/link";
import { useRouter } from 'next/router';
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../redux/actions'
// Hooks
import useClickOutSide from "../hooks/useClickOutSide";

function NavbarAccount({state, actions, top}) {

    const router = useRouter();

    const auth = state.auth;
    const myStore = state.myStore;

    const [ active, setActive ] = useState(false);

    const menu = useRef(null);
    // Closes menu when menu is active and user click outside menu
    useClickOutSide(menu, setActive);

    function handleLogout() {
        setActive(false);
        actions.authLogout();
        actions.myStoreLogout();
        router.push('/');
    }

    return(
        <>
            <div className="flex items-center z-10" ref={menu}>
                <div onClick={() => setActive(!active)}>
                    <div className="select-none flex items-center gap-2 p-2 h-fit w-fit hover:bg-gray-100 transition-colors cursor-pointer rounded-md">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200">
                        <div>{auth?.name?.slice(0, 1)}</div>
                        </div>
                        <div>{auth?.name}</div>
                    </div>
                </div>

                {active && (
                    <div className={`flex flex-col gap-2 absolute border-t-2 p-5 bg-white shadow-md rounded-b-md ${top}`}>
                        <div className="py-2 px-3 bg-transparent hover:bg-gray-100 transition-colors text-center cursor-pointer rounded-md">
                            <Link href={`#`}><div>Mi Cuenta</div></Link>
                        </div>
                        <div className="py-2 px-3 bg-transparent hover:bg-gray-100 transition-colors text-center cursor-pointer rounded-md">
                            <Link href={`/store/${myStore.url}/admin`}><div>Mi Tienda</div></Link>
                        </div>
                        <div className="py-2 px-3 bg-transparent hover:bg-red-400 hover:text-white transition-colors text-center cursor-pointer rounded-md" onClick={handleLogout}>
                            <div>Cerrar sesión</div>
                        </div>
                    </div>
                )}
            </div>
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
)(NavbarAccount);