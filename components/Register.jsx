import Link from "next/link"
import useFormInput from "../hoocks/useFormInput"

const Register = () => {

  return(
    <div className="">
      <div className="w-full flex justify-between border-b border-solid border-gray-300">
        <div className="h-20 cursor-pointer inline-flex items-center">
            <Link href={'/'}><img className="navbar-logosize" src="/img/icon.png" alt="logo"/></Link>
        </div>
        <div className="h-20 cursor-pointer inline-flex items-center">
            <Link href={'/'}><span className="hover:underline">Support</span></Link>
        </div>
      </div>

      <div>
        <div className="w-full mt-auto box-border mr-auto block">
          <div className="box-border flex flex-row space-between">
            <div>
              <Link href={'/'}><img className="" src="/img/illustration_login.png" alt="logo"/></Link>
            </div>
            <div className="box-register">
              <div>
                <p className="m-0 font-barlow font-bold mb-4 text-4xl">Crea tu usuario</p>
                <p className="m-0 text-sm font-light text-main-text">Ya tienes una cuenta? <Link href={'/'}> <span className="m-0 font-semibold text-main-color hover:text-main-colordark"> Login </span> </Link></p>
              </div>
              <div className="flex flex-col mt-1 text-main-text">
                <form action="">
                  <div className="mt-3 relative" onClick={(e) => useFormInput(e)}>
                    <label className="label" htmlFor="name">Nombre Completo</label>
                    <input className="register-input" type="text" name="name" id="name" />
                  </div>
                  <div className="mt-3 relative" onClick={(e) => useFormInput(e)}>
                    <label className="label" htmlFor="mail">Correo</label>
                    <input className="register-input" type="mail" name="mail" id="mail"/>
                  </div>
                  <div className="mt-3 relative" onClick={(e) => useFormInput(e)}>
                    <label className="label" htmlFor="pass1">Contraseña</label>
                    <input className="register-input" type="password" name="pass1" id="pass1"/>
                  </div>
                  <div className="mt-3 relative" onClick={(e) => useFormInput(e)}>
                    <label className="label" htmlFor="pass2">Confirmar Contraseña</label>
                    <input className="register-input" type="password" name="pass2" id="pass2"/>
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

export default Register