import { useState } from "react";

export default function ProductGridFilterAndSort() {

    const [ availability, setAvailability ] = useState(null);
    const [ priceFrom, setPriceFrom ] = useState(null);
    const [ priceTo, setPriceTo ] = useState(null);
    const [ sort, setSort ] = useState("a-z");

    return (
        <div className='flex items-center justify-between text-xs text-zinc-600'>
            <div className='flex items-center gap-5'>
                <div>Filtrar:</div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <div>Disponibilidad</div>
                    <div><i className="fa-regular fa-chevron-down"></i></div>
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <div>Precio</div>
                    <div><i className="fa-regular fa-chevron-down"></i></div>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <label htmlFor='sortSelect'>Ordenar por:</label>
                <div className='flex items-center gap-2 cursor-pointer custom-select relative'>
                    <select name="" id="sortSelect" className='pr-7 select' value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="featured">Destacado</option>
                        <option value="bestSelling">Mas vendido</option>
                        <option value="a-z">Alfabetico, A-Z</option>
                        <option value="z-a">Alfabetico, Z-A</option>
                        <option value="priceHigh">Precio, más alto</option>
                        <option value="priceLow">Precio, más bajo</option>
                        <option value="DateNew">Fecha, más nuevo</option>
                        <option value="DateOld">Fecha, más viejo</option>
                    </select>
                    <div className='absolute right-3'><i className="fa-regular fa-chevron-down"></i></div>
                </div>
                <div className='text-zinc-400'>{`0 productos`}</div>
            </div>
        </div>
    )
}