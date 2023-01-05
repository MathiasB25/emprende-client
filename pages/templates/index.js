import axios from 'axios';
// React
import { useEffect, useState } from 'react';
// NextJS
import Head from 'next/head';
// Components
import Navbar from '../../components/Navbar';
import TemplateGridItem from '../../components/store/admin/templates/TemplateGridItem';
import Loading from '../../components/Loading';

export default function TemplatesIndex() {
    
    const [ loading, setLoading ] = useState(true);
    // State of filter button on mobile
    const [ filterShow, setFilterShow ] = useState(false);
    // Sort state
    const [ sort, setSort ] = useState('mostUsed');
    const [ showingTemplates, setShowingTemplates ] = useState([]);
    // Price filter
    const [ priceFilter, setPriceFilter ] = useState([]);
    // All templates from DB
    const [ templates, setTemplates ] = useState([]);
    const [ freeTemplates, setFreeTemplates ] = useState([]);
    const [ paidTemplates, setPaidTemplates ] = useState([]);

    useEffect(() => {
        ( async () => {
            const { data } = await axios('/api/getTemplates');
            setTemplates(data);
            setShowingTemplates(data)
            if(typeof data === 'object') {
                const freeTemplates = data.filter( item => item.price === 0 );
                const paidTemplates = data.filter( item => item.price !== 0 );
                setFreeTemplates(freeTemplates);
                setPaidTemplates(paidTemplates);
            }
            setLoading(false);
        }) ();
    }, [])

    useEffect(() => {
        (() => {
            let newArray = [];
            if(priceFilter.includes('free')) freeTemplates.map( item => newArray.push(item));
            if(priceFilter.includes('paid')) paidTemplates.map( item => newArray.push(item));
            if(newArray.length === 0 && priceFilter.length === 0) {
                setShowingTemplates(templates);
                return
            }
            setShowingTemplates(newArray);
        }) ();
    }, [priceFilter])

    const handleFilter = (filter) => {
        if(priceFilter.includes(filter)) {
            setPriceFilter(priceFilter.filter( item => item !== filter ));
            return
        }
        setPriceFilter([...priceFilter, filter])
    }

    return (
        <div>
            <Loading loading={loading} />
            <Head>
                <title>Tienda | Ecommerce Plantillas</title>
            </Head>
            <Navbar/>
            {filterShow && (
                <div className='fixed top-0 left-0 z-20 w-screen h-screen bg-white px-10 sm:px-20'>
                    <div className='flex justify-between text-3xl py-10'>
                        <div>Filtros</div>
                        <div className='cursor-pointer' onClick={() => setFilterShow(false)}><i className="fa-regular fa-xmark"></i></div>
                    </div>
                    <div className='py-5 border-t border-b'>
                        <div className=''>
                            <div className='text-lg'>Ordenar por</div>
                            <div className='flex items-center gap-2 cursor-pointer custom-select relative'>
                                <select name="" id="sortSelect" className='select pl-2 pr-9 w-full' value={sort} onChange={e => setSort(e.target.value)}>
                                    <option value="mostUsed">Más usado</option>
                                    <option value="mostRecent">Más reciente</option>
                                    <option value="priceHigh">Precio, más alto</option>
                                    <option value="priceLow">Precio, más bajo</option>
                                </select>
                                <div className='absolute right-3'><i className="fa-regular fa-chevron-down"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 py-5'>
                        <div className='text-lg'>Precio</div>
                        <div className='flex flex-col gap-2 select-none font-light px-3'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-1'>
                                    <input id='free' type="checkbox" checked={priceFilter.includes('free') ? true : false} onClick={() => handleFilter("free")} />
                                    <label htmlFor='free' className='text-lg'>Gratis</label>
                                </div>
                                <div className='text-lg'>{freeTemplates.length}</div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-1'>
                                    <input id='paid' type="checkbox" checked={priceFilter.includes('paid') ? true : false} onClick={() => handleFilter("paid")} />
                                    <label htmlFor='paid' className='text-lg'>De pago</label>
                                </div>
                                <div className='text-lg'>{paidTemplates.length}</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end py-5'>
                        <button className='px-10 py-3 bg-main-color hover:bg-main-colordark transition-colors text-white rounded-md font-light' onClick={() => setFilterShow(false)}>Guardar</button>
                    </div>
                </div>
            )}
            <div>
                <div className='flex gap-4 flex-col sm:gap-0 sm:flex-row items-center justify-between bg-zinc-50 px-5 lg:px-20 py-14 border-b border-zinc-100'>
                    <div className='text-2xl sm:text-3xl whitespace-nowrap'>Tienda de plantillas</div>
                    <button className='block lg:hidden px-8 py-3 bg-main-color hover:bg-main-colordark transition-colors text-white text-base font-light rounded-md' onClick={() => setFilterShow(true)}>Filtros</button>
                </div>
                <div className='hidden lg:block px-20 pb-5 pt-10 text-2xl'>Filtrar por</div>
                <div className='flex gap-5 px-5 lg:px-20'>
                    <div className='hidden lg:flex flex-col gap-10 lg:w-1/3 xl:w-1/4 2xl:w-1/5'>
                        <div className='flex flex-col gap-3 px-5 py-4 rounded-md bg-zinc-50'>
                            <div>Precio</div>
                            <div className='flex flex-col gap-2 select-none font-light'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-1'>
                                        <input id='free' type="checkbox" checked={priceFilter.includes('free') ? true : false} onClick={() => handleFilter("free")} />
                                        <label htmlFor='free'>Gratis</label>
                                    </div>
                                    <div>{freeTemplates.length}</div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-1'>
                                        <input id='paid' type="checkbox" checked={priceFilter.includes('paid') ? true : false} onClick={() => handleFilter("paid")} />
                                        <label htmlFor='paid'>De pago</label>
                                    </div>
                                    <div>{paidTemplates.length}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 w-full lg:w-2/3 xl:w-3/4 2xl:w-4/5 py-14 lg:py-0'>
                        <div className='hidden lg:flex items-center justify-between'>
                            <div className='font-light'>{showingTemplates.length} plantillas</div>
                            <div className='flex items-center gap-2 cursor-pointer custom-select relative w-fit'>
                                <select name="" id="sortSelect" className='select pl-2 pr-9 w-full' value={sort} onChange={e => setSort(e.target.value)}>
                                    <option value="mostUsed">Más usado</option>
                                    <option value="mostRecent">Más reciente</option>
                                    <option value="priceHigh">Precio, más alto</option>
                                    <option value="priceLow">Precio, más bajo</option>
                                </select>
                                <div className='absolute right-3'><i className="fa-regular fa-chevron-down"></i></div>
                            </div>
                        </div>
                        {showingTemplates.length != 0 ? (
                            <div className='grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-5'>
                                {showingTemplates.length != 0 && showingTemplates.map( template => (
                                    <TemplateGridItem template={template} />
                                ))}
                            </div>
                        ) : (
                            <div className='flex flex-col gap-2 text-center py-10 font-light'>
                                <div className='text-lg'>No se encontraron resultados</div>
                                <div className='text-sm text-gray-500'>Intenta cambiar los filtros para obtener resultados</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}