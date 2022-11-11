import Link from "next/link"
import { useState } from "react"
import useFormInput from "../hooks/useFormInput"


const ForgotPassForm = () =>{
  const [ mail, setMail ] = useState('');

  const [ element, setElement ] = useState(null);
  useFormInput(element)
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center text-center py-28 px-5">
        <div className="max-w-md">
          <img className="block mb-10 w-24 h-24 ml-auto mr-auto" src="/img/ic_lock_password.png" alt="" />
          <p className="font-barlow font-bold mb-4 text-2xl">¿Olvidaste tu Contraseña?</p>
          <p className="font-ligth mb-4 text-xs">Ingrese la dirección de correo electrónico asociada con su cuenta <br/>y le enviaremos un enlace para restablecer su contraseña.</p>
        </div>
        <form action="">
          <div className="flex flex-col">
            <div className="input-label relative input-div" onClick={e => setElement(e)}>
              <label className="label" htmlFor="mail">Correo</label>
              <input className="input" type="mail" name="mail" id="mail" onChange={e => setMail(e.target.value)} value={mail} />
            </div>
            <button className="cursor-pointer font-semibold text-base py-2 mt-6 px-6 rounded-lg text-white bg-main-color w-full h-12 mb-4 hover:bg-main-colordark transition-colors">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassForm