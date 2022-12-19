import StoreLayout from "../../../../components/store/admin/StoreLayout"
import StoreGuard from "../../../../components/store/admin/StoreGuard"
import CollapsibleContent from "../../../../components/store/templates/sections/CollapsibleContent"

export default function StoreDiscounts() {
    return(
        <StoreGuard>
            <StoreLayout title="Descuentos">
            <div className="text-3xl p-10 border-b border-zinc-100">Descuentos</div>
            <div className="pb-10">
                    <div className="flex flex-col justify-center items-center gap-6 h-80 font-light">
                        <div className="w-fit text-2xl">Aún no tienes descuentos</div>
                        <button className="w-fit px-5 py-3 bg-main-color hover:bg-main-colordark transiton-colors text-white rounded-sm">Crear descuento</button>
                    </div>
                    <CollapsibleContent elements={[
                        { value: { title: "¿Qué es esta sección?", text: "Crea códigos de descuentos especiales para tus clientes y incrementa tus ventas!" }}
                    ]} />
                </div>
            </StoreLayout>
        </StoreGuard>
    )
}