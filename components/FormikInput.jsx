import { Field } from "formik"

export default function FormikInput({ name, error, isValid, id }) {
    return (
        <>
            <Field id="storeName" className={`w-full border ${!isValid ? 'border-zinc-200' : 'border-red-500'} rounded px-3 py-3`} name="storeName" />
            { isValid ? <div className="text-sm text-red-500">{error}</div> : null }
        </>
    )
}