import { useEffect } from "react"

const useFormLabel = (element) => {

    useEffect(() => {
        function handleClickOutside(event) {
            console.log(element.target.value)
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [element]);
}

export default useFormLabel