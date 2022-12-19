import { useState } from 'react';
import Link from 'next/link';
import { LinkElement, HeadingH4 } from '../elements';
import useAppContext from '../../../../hooks/useAppContext';
import randomId from '../../../../hooks/randomId';

export default function HeaderSection({href, elements}) {

    const { setEditorPage } = useAppContext();

    const [ active, setActive ] = useState(false);

    const heading = elements[0];
    const links = elements[1];

    return(
        <div className='flex justify-between px-3 sm:px-10 py-5 border-b'>
            <div className='flex items-center gap-6'>
                <div className='mr-4'><HeadingH4 text={heading.value.text} /></div>
                {links.map(e => (
                    <div key={randomId()} className='hidden sm:block' onClick={() => setEditorPage(e.value.url)}><LinkElement text={e.value.text} href={href ? e.value.href : '#'} size="sm" /></div>
                ))}
            </div>
            <div className='flex text-xl'>
                <button className='hidden sm:block w-10 h-10 hover:scale-110'><i className="fa-light fa-magnifying-glass"></i></button>
                <button className='hidden sm:block w-10 h-10 hover:scale-110'><i className="fa-light fa-bag-shopping"></i></button>
                <button className='sm:hidden text-3xl w-10 h-10' onClick={() => setActive(true)}><i className="fa-regular fa-bars"></i></button>
            </div>
            { active && (
                <div className="fixed top-0 left-0 bg-white w-screen h-screen font-normal-weight text-xl px-3 sm:px-10 z-10">
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-between mb-5 p-2 py-5 border-b border-zinc-200'>
                            <h4 className='text-2xl'>{heading.value.text}</h4>
                            <button className='w-10 h-10 text-3xl' onClick={() => setActive(false)}><i className="fa-regular fa-xmark"></i></button>
                        </div>
                        { links.map(e => (
                            <div key={randomId()} className='p-2' onClick={() => setActive(false)}><Link href={e.value.href}>{e.value.text}</Link></div>
                        ))}
                        <button className='text-left p-2 border-t border-zinc-200 mt-5 pt-5'>Buscar</button>
                        <button className='text-left p-2'>Carrito</button>
                    </div>
                </div>
            )}
        </div>
    )
}