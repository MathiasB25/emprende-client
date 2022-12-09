import StoreLayout from "../../../../components/store/admin/StoreLayout"
import StoreGuard from "../../../../components/store/admin/StoreGuard"

export default function StoreOrders() {
    return(
        <StoreGuard>
            <StoreLayout title="Ordenes">
                <div className="text-3xl p-10 border-b border-zinc-100">Ordenes</div>
                <div className="pb-10">
                    <div className="flex flex-col justify-center items-center gap-3 h-80 font-light">
                        <div className="w-fit text-2xl">Aún no tienes ordenes</div>
                        <div className="text-center text-gray-500 text-sm">Todas las ordenes que entren a tu tienda las podrás ver y manejar aquí.</div>
                    </div>
                </div>
            </StoreLayout>
        </StoreGuard>
    )
}