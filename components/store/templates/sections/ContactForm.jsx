import { HeadingH2 } from '../elements';

export default function ContactFormSection({elements}) {

    const heading = elements.filter(e => e.component === "HeadingH2")[0];

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className='flex flex-col gap-8 page-width'>
            <div>
                { heading && <HeadingH2 text={heading.value.text} /> }
            </div>
            <div className="">
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <div className='flex gap-5'>
                        <div className='w-full'>
                            <label htmlFor="name" className="font-normal-weight">Nombre</label>
                            <input id='name' type="text" className='border border-zinc-600 h-11 w-full outline-none pl-3' placeholder='Tu nombre' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="email" className="font-normal-weight">Correo electrónico</label>
                            <input id='email' type="email" className='border border-zinc-600 h-11 w-full outline-none pl-3' placeholder='Tu correo electrónico' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="tel" className="font-normal-weight">Numero de teléfono</label>
                        <input id='tel' type="tel" className='border border-zinc-600 h-11 w-full outline-none pl-3' placeholder='Tu numero de teléfono' />
                    </div>
                    <div>
                        <label htmlFor="textarea" className="font-normal-weight">Comentario</label>
                        <textarea name="" id="textarea" cols="30" rows="5" className='resize-none border border-zinc-600 w-full outline-none pl-3 pt-3' placeholder='Escribe un comentario'></textarea>
                    </div>
                    <input type="submit" value="Enviar" className='bg-black text-white py-3 px-14 cursor-pointer w-fit' />
                </form>
            </div>
        </div>
    )
}