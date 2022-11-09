import Link from "next/link"
import { useState } from "react"
import useFormInput from "../hooks/useFormInput"
import useFormLabel from "../hooks/useFormLabel"

const RegisterForm = () => {

  const [ name, setName ] = useState('');
  const [ mail, setMail ] = useState('');
  const [ pass1, setPass1 ] = useState('');
  const [ pass2, setPass2 ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if([name, mail, pass1, pass2].includes('')) {
      console.log('Campos vacios');
    }
  }

  const [ element, setElement ] = useState(null);
  useFormInput(element)

  return(
    <div className="">
      <div>
        <div className="w-full mt-auto box-border mr-auto block">
          <div className="box-border flex flex-row space-between fit-box">
            <div>
              <Link href={'/'}><img className="" src="/img/illustration_login.png" alt="logo"/></Link>
            </div>
            <div className="box-register">
              <div>
                <p className="m-0 font-barlow font-bold mb-4 text-4xl">Crea tu usuario</p>
                <p className="m-0 text-sm font-light text-main-text">Ya tienes una cuenta? <Link href={'/login'}> <span className="m-0 font-semibold text-main-color hover:text-main-colordark"> Login </span> </Link></p>
              </div>
              <div className="flex flex-col mt-1 text-main-text">
                <form action="" className="flex flex-col gap-3" onSubmit={e => handleSubmit(e)}>
                  <div className="input-label relative input-div" onClick={e => setElement(e)}>
                    <label className="label" htmlFor="name">Nombre Completo</label>
                    <input className="input" type="text" name="name" id="name" onChange={e => setName(e.target.value)} value={name} />
                  </div>
                  <div className="input-label relative input-div" onClick={e => setElement(e)}>
                    <label className="label" htmlFor="mail">Correo</label>
                    <input className="input" type="mail" name="mail" id="mail" onChange={e => setMail(e.target.value)} value={mail} />
                  </div>
                  <div className="input-label relative input-div" onClick={e => setElement(e)}>
                    <label className="label" htmlFor="pass1">Contraseña</label>
                    <input className="input" type="password" name="pass1" id="pass1" onChange={e => setPass1(e.target.value)} value={pass1} />
                  </div>
                  <div className="input-label relative input-div" onClick={e => setElement(e)}>
                    <label className="label" htmlFor="pass2">Confirmar Contraseña</label>
                    <input className="input" type="password" name="pass2" id="pass2" onChange={e => setPass2(e.target.value)} value={pass2} />
                  </div>
                  <button className="cursor-pointer font-semibold text-base py-2 mt-6 px-6 rounded-lg text-white bg-main-color w-full h-12 mb-4 hover:bg-main-colordark transition-colors">Register</button>
                  <div>
                    <span className="m-0 text-xs font-light text-main-text text-center">Acepto los <Link href={'/'}><span className="hover:underline font-normal">Términos de servicio</span></Link> y la <Link href={'/'}><span className="hover:underline font-normal">Política de privacidad.</span></Link></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default RegisterForm