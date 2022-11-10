import { useEffect } from "react"

const useFormInput = (element) => {
    element = element?.target;
    if(element?.classList.value == '') {
        element = element?.parentElement.parentElement;
    }
    if(element && element?.classList[0] == 'label' || element?.classList[0] == 'null') {
        element = element?.parentElement;
    }
    useEffect(() => {
        function handleClickOutside(event) {
            let evt = event.target?.parentElement;
            if(evt.classList[0] == 'label') {
                evt = evt.parentElement;
            }
            if(evt?.classList[0] === 'input-div') {
                let div = evt;
                let label = evt?.children[0];

                if(label.classList[0] != 'label') {
                    label = label.parentElement;
                }
                
                label.style.animationName = 'labelActive'
                label.style.animationDuration = '0.2s'
                label.style.animationTimingFunction = 'ease-in-out'
            
                div.style.backgroundColor = 'rgba(145, 158, 171, 0.24)'
            
                setTimeout( () => {
                    label.style.height = '70%'
                    label.style.fontSize = '10px'
                    label.style.color = 'var(--main-color)'
                }, 180)
            }
            if(element && !element?.contains(event.target) && element?.style.backgroundColor != 'rgb(247, 247, 248)') {
                let div = element;
                let label = element?.children[0];
                
                if(label.classList[0] != 'label') {
                    label = label.parentElement;
                }

                label.style.animationName = 'labelInactive'
                label.style.animationDuration = '0.2s'
                label.style.animationTimingFunction = 'ease-in-out'
            
                div.style.backgroundColor = 'rgb(247, 247, 248)'
                setTimeout( () => {
                    label.style.height = '100%'
                    label.style.fontSize = '13px'
                    label.style.color = 'var(--main-text)'
                    label.style.animationName = ''
                }, 180)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [element]);
}

export default useFormInput