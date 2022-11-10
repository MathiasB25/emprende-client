import { useEffect } from "react"
import useFormInput from "./useFormInput";

const useClickOutSide = (ref, toogle) =>{
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref?.current && !ref?.current.contains(event.target)) {
        toogle(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default useClickOutSide