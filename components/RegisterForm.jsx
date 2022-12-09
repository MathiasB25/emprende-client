import Link from "next/link"
import { useState } from "react"
import Input from "./Input"

const RegisterForm = () => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ pass1, setPass1 ] = useState('');
  const [ pass2, setPass2 ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if([name, email, pass1, pass2].includes('')) {
      console.log('Campos vacios');
    }
  }

  return(
    <div className="">
      <div>
        <div className="w-fit mx-auto box-border mr-auto block">
          <div className="box-border flex flex-row space-between fit-box">
            <div className="hidden md:block">
              <img className="h-fit" src="/img/illustration_login.png" alt="logo"/>
            </div>
            <div className="box-register">
              <div>
                <p className="m-0 font-barlow font-bold mb-4 text-4xl">Crea tu usuario</p>
                <p className="m-0 text-sm font-normal-weight text-main-text">Ya tienes una cuenta? <Link href={'/login'}> <span className="m-0 font-semibold text-main-color hover:text-main-colordark"> Login </span> </Link></p>
              </div>
              <div className="flex flex-col mt-1 text-main-text">
                <form action="" className="flex flex-col gap-3" onSubmit={e => handleSubmit(e)}>
                  <Input props={{
                      id: "name",
                      label: "Nombre completo",
                      inputType: "text",
                      value: name,
                      setter: setName
                    }}
                  />
                  <Input props={{
                      id: "email",
                      label: "Correo eletrónico",
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
                  <Input props={{
                      id: "pass2",
                      label: "Confirmar contraseña",
                      inputType: "password",
                      value: pass2,
                      setter: setPass2
                    }}
                  />
                  <button className="cursor-pointer font-semibold text-base py-2 mt-6 px-6 rounded-lg text-white bg-main-color w-full h-12 mb-4 hover:bg-main-colordark transition-colors">Register</button>
                  <div>
                    <span className="m-0 text-xs font-normal-weight text-main-text text-center">Acepto los <Link href={'/'}><span className="hover:underline font-normal">Términos de servicio</span></Link> y la <Link href={'/'}><span className="hover:underline font-normal">Política de privacidad.</span></Link></span>
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