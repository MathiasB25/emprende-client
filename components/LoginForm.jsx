import Link from "next/link"
import { useState } from "react"
import useFormInput from "../hooks/useFormInput"
import Input from "./Input"


const LoginForm = () => {

  const [ email, setEmail ] = useState('');
  const [ pass1, setPass1 ] = useState('');

  const [ element, setElement ] = useState(null);
  useFormInput(element)

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
              <p className="m-0 text-sm font-light text-main-text">¿No tienes una cuenta? <Link href={'/register'}> <span className="m-0 font-semibold text-main-color hover:text-main-colordark"> Crear cuenta </span> </Link></p>
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
                      value: pass1,
                      setter: setPass1
                    }}
                />
                <Link href={'/'}><span className="hover:underline text-xs font-light">¿Olvidaste tu Contraseña?</span></Link>
                <button className="cursor-pointer font-semibold text-base py-2 mt-1 px-6 rounded-lg text-white bg-main-color w-full h-12 mb-4 hover:bg-main-colordark transition-colors">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      
    </div>

  )
}

export default LoginForm