// React
import { useEffect, useState } from "react";
// NextJS
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from 'next/router'
import Head from 'next/head'
// Components
import StoreLayoutSidebar from "./LayoutSidebar";
import StoreLayoutNavbar from "./LayoutNavbar";
// Hooks
import useAppContext from "../../../hooks/useAppContext";
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../../../redux/actions'

function StoreLayout({state, actions, title, children}) {
    
    const myStore = state.myStore;

    const router = useRouter();
    const { store: storeQuery } = router.query;

    return (
        <>
            <Head>
                <title>{myStore.name} | {title}</title>
            </Head>
            <StoreLayoutNavbar store={storeQuery} />
            <div className="flex store-layout-height">
                <StoreLayoutSidebar store={storeQuery} title={title} />
                <div className="w-full lg:w-3/4 xl:w-4/5 2xl:w-5/6 store-layout-height overflow-hidden overflow-y-scroll">{children}</div>
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
)(StoreLayout);