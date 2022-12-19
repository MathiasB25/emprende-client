// React
import { useState } from "react";
// NextJS
import Link from "next/link";
import { useRouter } from "next/router";
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../redux/actions'
// Components
import Input from "./Input";
import { useEffect } from "react";

const LoginForm = ({state, actions}) => {

	const router = useRouter();

	const [ fetchedUser, setFetchedUser ] = useState(false);
	const [ formSubmitted, setFormSubmitted ] = useState(false);
	const [ email, setEmail ] = useState('');
	const [ pass, setPass ] = useState('');

	useEffect(() => {
		if(!formSubmitted) {
			return
		}
		
		if(!state.auth.authenticated) {
			return
		}
		
		if(!state.myStore.error && !state.myStore.loading && !state.myStore.url) {
			actions.getMyStore();
		}
		
		if(!state.myStore.loading && state.myStore.url) {
			router.push(`/store/${state.myStore.url}/admin`);
		}
		
		if(!state.myStore.loading && state.myStore.error) {
			router.push('/store/create');
			return
		} 
	}, [state])

	const handleSubmit = async (e) => {
		e.preventDefault();
		if(state.auth.authenticated) {
			// user is authenticated? If so dont submit.
			return
		}
		if([email, pass].includes('')) {
			// void fields
			return
		}

		setFormSubmitted(true);
		actions.setAuth(email, pass);
  	}

	return (
		<div className="">
		<div className="w-fit mx-auto box-border mr-auto block">
			<div className="box-border flex flex-row space-between fit-box">
			<div className="hidden md:block">
				<img className="h-fit" src="/img/illustration_login.png" alt="logo"/>
			</div>
			<div className="box-register">
				<div>
				<p className="m-0 font-barlow font-bold mb-4 text-4xl">Ingresa tu Usuario</p>
				<p className="m-0 text-sm font-normal-weight text-main-text">¿No tienes una cuenta? <Link href={'/register'}> <span className="m-0 font-semibold text-main-color hover:text-main-colordark"> Crear cuenta </span> </Link></p>
				</div>
				<div className="flex flex-col mt-3 text-main-text">
				<form action="" className="flex flex-col gap-3" onSubmit={e => handleSubmit(e)}>
					<Input props={{
						id: "email",
						label: "Correo electrónico",
						inputType: "email",
						value: email,
						setter: setEmail
						}}
					/>
					<Input props={{
						id: "pass1",
						label: "Contraseña",
						inputType: "password",
						value: pass,
						setter: setPass
						}}
					/>
					<Link href={'/'}><span className="hover:underline text-xs font-normal-weight">¿Olvidaste tu Contraseña?</span></Link>
					<button className="cursor-pointer font-semibold text-base py-2 mt-1 px-6 rounded-lg text-white bg-main-color w-full h-12 mb-4 hover:bg-main-colordark transition-colors">Login</button>
				</form>
				</div>
			</div>
			</div>
		</div>

		
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
)(LoginForm);