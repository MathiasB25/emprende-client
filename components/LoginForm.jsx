import Link from "next/link"
import { useState } from "react"
import useFormInput from "../hooks/useFormInput"
import useFormLabel from "../hooks/useFormLabel"


const LoginForm = () => {

  const [ mail, setMail ] = useState('');
  const [ pass1, setPass1 ] = useState('');

  const [ element, setElement ] = useState(null);
  useFormInput(element)

  return (
    <div className="">
      <div className="w-full mt-auto box-border mr-auto block">
        <div className="box-border flex flex-row space-between fit-box">
          <div>
            <Link href={'/'}><img className="h-fit" src="/img/illustration_login.png" alt="logo"/></Link>
          </div>
          <div className="box-register">
            <div>
              <p className="m-0 font-barlow font-bold mb-4 text-4xl">Ingresa tu Usuario</p>
              <p className="m-0 text-sm font-light text-main-text">¿No tienes una cuenta? <Link href={'/register'}> <span className="m-0 font-semibold text-main-color hover:text-main-colordark"> Crear cuenta </span> </Link></p>
            </div>
            <div className="flex flex-col mt-5 text-main-text">
              <form action="" className="flex flex-col gap-3" onSubmit={e => handleSubmit(e)}>
                <div className="input-label relative input-div" onClick={e => setElement(e)}>
                  <label className="label" htmlFor="mail">Correo</label>
                  <input className="input" type="mail" name="mail" id="mail" onChange={e => setMail(e.target.value)} value={mail} />
                </div>
                <div className="input-label relative input-div" onClick={e => setElement(e)}>
                  <label className="label" htmlFor="pass1">Contraseña</label>
                  <input className="input" type="password" name="pass1" id="pass1" onChange={e => setPass1(e.target.value)} value={pass1} />
                </div>
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