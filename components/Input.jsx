import { useEffect, useRef, useState } from "react";
import useFormInput from "../hooks/useFormInput"
import useFormLabel from "../hooks/useFormLabel"

const Input = ({props}) => {

    const ref = useRef(null);
    const [ label, setLabel ] = useState(null);
    const [ element, setElement ] = useState(null);
    useFormInput(element)

    const handleLabel = (e) => {
        props.setter(e.target.value)
        ref?.current?.children[1]?.value != '' ? setLabel(true) : setLabel(false);
    }
    return (
        <div ref={ref} className="input-div relative" onClick={(e) => setElement(e)}>
            <label className="label" htmlFor={props.id}>{!label && <p>{props.label}</p>}</label>
            <input className={`${label && 'bottom-0 top-1/2 -translate-y-1/2'} input`} type={props.inputType} id={props.id} onChange={e => handleLabel(e)} value={props.value} />
        </div>
    )
}

export default Input