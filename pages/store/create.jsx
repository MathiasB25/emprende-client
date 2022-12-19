// React
import { useEffect, useState } from "react";
// NextJS
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions'
// Form validation
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormikInput from "../../components/FormikInput";
import useAxiosConfig from "../../hooks/useAxiosConfig";
import axios from "axios";

const CreateStoreSchema = Yup.object().shape({
    storeName: Yup.string()
      .min(2, 'El nombre de tu tienda no puede tener menos de 2 caracteres')
      .max(50, 'El nombre de tu tienda no puede tener más de 50 caracteres')
      .matches(/(^[a-zA-Z0-9_ ]*$)|(^[^ !"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+$)/, 'El nombre de tu tienda no puede tener simbolos')
      .required('No puede estar vacío')
});

function StoreCreate({ state, actions }) {
    
    const router = useRouter();

    useEffect(() => {
        if(state.myStore.url) {
            router.push(`/store/${state.myStore.url}/admin`);
        }
    }, [state])

    const handleSubmit = async (values) => {
        actions.createMyStore({name: values.storeName});
    }
    
    return (
        state.myStore.error && (
            <div className="flex justify-center items-center h-screen">
                <div className="md:rounded-md md:shadow-2xl md:bg-white px-10 sm:px-32 md:p-10 py-10 w-full md:w-2/3 lg:w-1/2 2xl:w-1/3 flex gap-20 flex-col justify-between h-full md:h-fit">
                    <div className="w-fit">
                        <Link href="/">
                            <Image src="/img/icon.png" width={150} height={30} alt="Emprende logo" />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-12">
                        <div className="text-3xl">Crea tu tienda</div>
                        <Formik 
                            initialValues={{storeName: ''}} 
                            validationSchema={CreateStoreSchema} 
                            onSubmit={values => handleSubmit(values)}
                        >
                            {({ errors, touched }) => (
                                <Form className="flex flex-col gap-8 font-light">
                                    <div>
                                        <label htmlFor="storeName">Nombre de tu tienda</label>
                                        <FormikInput id="storeName" name={"storeName"} isValid={errors.storeName && touched.storeName} error={errors.storeName} />
                                    </div>
                                    <button className="bg-main-color hover:bg-main-colordark transition-colors text-white rounded-md py-3 px-5" type="submit">Crear mi tienda</button>
                                </Form>
                            )}
                        </Formik>
                        {/* <form className="flex flex-col gap-8 font-light" onSubmit={handleSubmit}>
                            <div>
                                <label className="block" htmlFor="storeName">Nombre de tu tienda</label>
                                <input className="w-full border rounded px-3 py-3" id="storeName" type="text" value={nameInput} onChange={ e => setNameInput(e.target.value)} />
                            </div>
                            <button className="bg-main-color hover:bg-main-colordark transition-colors text-white rounded-md py-3 px-5" type="submit" value="Crear mi tienda">Crear mi tienda</button>
                        </form> */}
                    </div>
                    <div className="flex justify-center">
                        <Link href="/">
                            <button className="text-sm font-light text-gray-500">Emprende</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
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
)(StoreCreate);