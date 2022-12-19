// React
import { useEffect } from "react"
// NextJS
import Head from "next/head"
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../redux/actions'
// Components
import Navbar from "./Navbar"

const Layout = ({state, actions, title, children}) => {

	return(
		<>
			<Head>
				<title>Emprende | {title}</title>
			</Head>
			<Navbar/>
			<div className="xl:5 lg:px-20 xl:px-44 2xl:px-80">{children}</div>
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
)(Layout);