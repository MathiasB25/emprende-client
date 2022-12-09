import StoreLayout from '../../../../components/store/admin/StoreLayout'
import StoreGuard from "../../../../components/store/admin/StoreGuard"
import StoreSettingsDropdown from '../../../../components/store/SettingsDropdown'
import Image from 'next/image'

export default function StoreSettings() {
    return(
        <StoreGuard>
            <StoreLayout title="Ajustes">
                <div className="text-3xl p-10 border-b border-zinc-100">Ajustes</div>
                <div className="flex flex-col gap-3 p-10">
                    <StoreSettingsDropdown isActive={true} title={"Detalles de tu tienda"} icon={<i className="fa-solid fa-store"></i>}>
                        <div className='flex flex-col gap-5 py-5 border-t'>
                            <div className='text-xl px-5'>Información básica</div>
                            <div className='grid grid-cols-2 gap-5 px-10'>
                                <div className='w-full'>
                                    <label className='block font-light' htmlFor='storeName'>Nombre de tu tienda</label>
                                    <input id='storeName' disabled type="text" className='w-full p-2 border rounded-md' value={"Emprende"} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 py-5 border-t'>
                            <div className='text-xl px-5'>Dirección</div>
                            <div className='grid grid-cols-2 gap-5 px-10'>
                                <div className='w-full'>
                                    <label className='block font-light' htmlFor='storeCountry'>País/región</label>
                                    <select id='storeCountry' className='w-full p-2 border rounded-md' value="UY">
                                        <option value="AR">Argentina</option>
                                        <option value="BR">Brasil</option>
                                        <option value="CL">Chile</option>
                                        <option value="UY">Uruguay</option>
                                    </select>
                                </div>
                                <div className='w-full'>
                                    <label className='block font-light' htmlFor='storeAddress'>Dirección</label>
                                    <input id='storeAddress' type="text" className='w-full p-2 border rounded-md' placeholder='Dirección' />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-5 px-10 border-gray-200'>
                                <div className='w-full'>
                                    <label className='block font-light' htmlFor='storeApartament'>Apartamento, Casa, etc.</label>
                                    <input id='storeApartament' type="text" className='w-full p-2 border rounded-md' placeholder='Apartamento, Casa, etc.' />
                                </div>
                                <div className='w-full'>
                                    <label className='block font-light' htmlFor='storePostalcode'>Código postal</label>
                                    <input id='storePostalcode' type="text" className='w-full p-2 border rounded-md' placeholder='Código postal' />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-5 px-10'>
                                <div className='w-full'>
                                    <label className='block font-light' htmlFor='storeCity'>Ciudad</label>
                                    <input id='storeCity' type="text" className='w-full p-2 border rounded-md' placeholder='Ciudad' />
                                </div>
                                <div className='w-full'>
                                    <label className='block font-light' htmlFor='storeProvincia'>Provincia</label>
                                    <input id='storeProvincia' type="text" className='w-full p-2 border rounded-md' placeholder='Provincia' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 py-5 border-t'>
                            <div className='text-xl px-5'>Información de contacto</div>
                            <div className='grid grid-cols-2 gap-5 px-10'>
                                <div className='w-full'>
                                    <label className='block font-light' htmlFor='storeTel'>Número de teléfono</label>
                                    <input id='storeTel' type="tel" className='w-full p-2 border rounded-md' placeholder='Número de teléfono' />
                                </div>
                                <div className='w-full'>
                                    <label className='block font-light' htmlFor='storeEmail'>Correo electrónico</label>
                                    <input id='storeEmail' type="email" className='w-full p-2 border rounded-md' placeholder='Correo electrónico' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 py-5 border-t'>
                            <div className='text-xl px-5'>Moneda de la tienda</div>
                            <div className='grid grid-cols-2 gap-5 px-10'>
                                <div className='w-full'>
                                    <label className='block font-light' htmlFor='storeCurrency'>Moneda de la tienda</label>
                                    <select id='storeCurrency' className='w-full p-2 border rounded-md' value="UYU">
                                        <option value="ARS">Peso argentino (ARS)</option>
                                        <option value="BRL">Real brasileño (BRL)</option>
                                        <option value="CLP">Peso chileno (CLP)</option>
                                        <option value="UYU">Peso uruguayo (UYU)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-5 border-t'>
                            <div className='font-light text-gray-500 text-sm'>Hay cambios sin guardar.</div>
                            <button className='font-light px-10 py-3 bg-main-color hover:bg-main-colordark transition-colors text-white rounded-md'>Guardar cambios</button >
                        </div>
                    </StoreSettingsDropdown>
                    <StoreSettingsDropdown title={"Plan"} icon={<i className="fa-solid fa-chart-simple"></i>}>
                        <div className='flex flex-col gap-5 py-5 border-t'>
                            <div className='text-xl px-5'>Detalles del plan</div>
                            <div>
                                <div className='px-5'>
                                    <div className='flex flex-col gap-1 px-5 border-b py-5'>
                                        <div className='text-lg'>Plan: Prueba</div>
                                        <div className='text-gray-500 font-light text-sm'>Actualmente estás en el plan de prueba.</div>
                                    </div>
                                </div>
                                <div className='px-5'>
                                    <div className='flex flex-col gap-1 px-5 border-b py-5'>
                                        <div className='text-lg'>Fecha de la próxima facturación</div>
                                        <div className='text-gray-500 font-light text-sm'>01 enero, 2023</div>
                                    </div>
                                </div>
                                <div className='px-5'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex flex-col gap-1 px-5 py-5'>
                                            <div className='text-lg'>Método de pago</div>
                                            <div className='text-gray-500 font-light text-sm'>No tienes métodos de pago</div>
                                        </div>
                                        <button className='text-sm text-main-color font-light hover:underline'>Actualizar métodos de pago</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StoreSettingsDropdown>
                    <StoreSettingsDropdown title={"Facturación"} icon={<i className="fa-solid fa-money-check-dollar"></i>}>
                        <div className='flex flex-col gap-5 p-5 border-t'>
                            <div className='text-xl'>Métodos de pago</div>
                            <div className='flex flex-col gap-3 px-5 font-light'>
                                <div className='text-sm text-gray-500'>Agrega métodos de pago para compras y tu facturación.</div>
                                <button className='text-sm w-fit px-5 py-3 bg-main-color hover:bg-main-colordark transition-colors text-white rounded-md'>Agregar método de pago</button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 p-5 border-t'>
                            <div className='text-xl'>Moneda de facturación</div>
                            <div className='flex flex-col gap-3 px-5 font-light'>
                                <div className='text-sm text-gray-500'>Tu método de facturión es: <span className='text-black font-normal'>UYU (Peso uruguayo)</span></div>
                            </div>
                        </div>
                    </StoreSettingsDropdown>
                    <StoreSettingsDropdown title={"Pagos"} icon={<i className="fa-sharp fa-solid fa-credit-card"></i>}>
                        <div className='flex flex-col gap-5 p-5 border-t'>
                            <div className='text-xl'>Proveedores de pago</div>
                            <div className='px-5'>
                                <div className='flex justify-between items-center py-4 border-b'>
                                    <div className='flex items-center gap-4'>
                                        <Image width={30} height={30} src="https://res.cloudinary.com/dlvsdz9k1/image/upload/v1667998199/paypal.png" />
                                        <div>Paypal</div>
                                    </div>
                                    <button className='px-5 py-2 rounded-md bg-sky-500 transition-colors text-white font-light'>Activo</button>
                                </div>
                                <div className='flex justify-between items-center py-4 border-b'>
                                    <div className='flex items-center gap-4'>
                                        <Image width={30} height={30} src="https://res.cloudinary.com/dlvsdz9k1/image/upload/v1667998199/visa.png" />
                                        <div>Visa</div>
                                    </div>
                                    <button className='px-5 py-2 rounded-md bg-sky-500 transition-colors text-white font-light'>Activo</button>
                                </div>
                                <div className='flex justify-between items-center py-4 border-b'>
                                    <div className='flex items-center gap-4'>
                                        <Image width={30} height={30} src="https://res.cloudinary.com/dlvsdz9k1/image/upload/v1667998199/mastercard.png" />
                                        <div>Mastercard</div>
                                    </div>
                                    <button className='px-5 py-2 rounded-md bg-yellow-600 transition-colors text-white font-light'>Inactivo</button>
                                </div>
                                <div className='flex justify-between items-center py-4'>
                                    <div className='flex items-center gap-4'>
                                        <Image width={30} height={30} src="https://res.cloudinary.com/dlvsdz9k1/image/upload/v1667998199/crypto.png" />
                                        <div>Criptomonedas</div>
                                    </div>
                                    <button className='px-5 py-2 rounded-md bg-yellow-600 transition-colors text-white font-light'>Inactivo</button>
                                </div>
                                <div className='flex items-center justify-between pt-5 border-t'>
                                    <div className='font-light text-gray-500 text-sm'>Hay cambios sin guardar.</div>
                                    <button className='font-light px-5 py-3 bg-main-color hover:bg-main-colordark transition-colors text-white rounded-md'>Guardar cambios</button >
                                </div>
                            </div>
                        </div>
                    </StoreSettingsDropdown>
                    <StoreSettingsDropdown title={"Dominio"} icon={<i className="fa-solid fa-globe"></i>}>
                        <div className='flex flex-col gap-5 p-5 border-t'>
                            <div className='text-xl'>Comprar o conectar un dominio</div>
                            <div className='px-5 font-light text-gray-500 text-sm'>Asegure el dominio perfecto para su tienda en el que los clientes puedan confiar y encontrar fácilmente. Compre un nuevo dominio de Emprende o conecte un dominio que ya compró de un tercero como Google Domains o GoDaddy.</div>
                            <div className='flex gap-5 px-5'>
                                <button className='px-5 py-3 font-light bg-main-color hover:bg-main-colordark text-white transition-colors rounded-md'>Comprar dominio</button>
                                <button className='px-5 py-3 font-light border border-zinc-200 hover:bg-zinc-100 text-black transition-colors rounded-md'>Conectar dominio</button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 p-5 border-t'>
                            <div className='text-xl'>Dominio actual</div>
                            <div className='flex flex-col gap-3 px-5 font-light'>
                                <div>Dominio: <span className="font-normal">tienda.emprende.com</span></div>
                                <button className='w-fit text-sm text-main-color hover:underline'>Cambiar a un nuevo dominio de emprende.com</button>
                            </div>
                        </div>
                    </StoreSettingsDropdown>
                </div>
            </StoreLayout>
        </StoreGuard>
    )
}