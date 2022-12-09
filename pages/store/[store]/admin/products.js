import StoreLayout from "../../../../components/store/admin/StoreLayout"
import StoreGuard from "../../../../components/store/admin/StoreGuard"
import CollapsibleContent from "../../../../components/store/templates/sections/CollapsibleContent"

export default function StoreProducts() {
    return(
        <StoreGuard>
            <StoreLayout title="Productos">
                <div className="text-3xl p-10 border-b border-zinc-100">Productos</div>
                <div className="pb-10">
                    <div className="flex flex-col justify-center items-center gap-6 h-80 font-light">
                        <div className="w-fit text-2xl">Aún no tienes productos</div>
                        <button className="w-fit px-5 py-3 bg-main-color hover:bg-main-colordark transiton-colors text-white rounded-sm">Añadir un producto</button>
                    </div>
                    <CollapsibleContent elements={[
                        { value: { title: "¿Qué es esta sección?", text: "Aquí podrás crear tus productos, organizarlos como quieras, actualizar nombres, precios etc." }}
                    ]} />
                </div>
            </StoreLayout>
        </StoreGuard>
    )
}