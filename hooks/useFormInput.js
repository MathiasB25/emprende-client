import { useEffect } from "react"

const useFormInput = (element) => {
    element = element?.target;

    useEffect(() => {
        function handleClickOutside(event) {
            let evt = event.target?.parentElement;
            if(event.target.classList[0] === 'input-label') {
                evt = event.target;
            }
            if(evt?.classList[0] === 'input-label') {
                let div = evt;
                let label = evt?.children[0];
                let input = evt?.children[1];

                if(label.children?.length !== 0) {
                    label = label.children[0]
                }
            
                if(input.children?.length !== 0) {
                    input = input.children[1]
                }
                
                label.style.animationName = 'labelActive'
                label.style.animationDuration = '0.2s'
                label.style.animationTimingFunction = 'ease-in-out'
            
                div.style.backgroundColor = 'rgba(145, 158, 171, 0.24)'
            
                setTimeout( () => {
                    label.style.top = '30%'
                    label.style.fontSize = '10px'
                    label.style.color = 'var(--main-color)'
                }, 180)
            }
            if(element?.classList[0] != 'input-label') {
                element = element?.parentElement;
            }
            if(element && !element?.contains(event.target)) {
                let div = element;
                let label = element?.children[0];
                let input = element?.children[1];

                if(label.children?.length !== 0) {
                    label = label.children[0]
                }
            
                if(input.children?.length !== 0) {
                    input = input.children[1]
                }
                
                label.style.animationName = 'labelInactive'
                label.style.animationDuration = '0.2s'
                label.style.animationTimingFunction = 'ease-in-out'
            
                div.style.backgroundColor = '#f7f7f8'
                setTimeout( () => {
                    label.style.top = '50%'
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