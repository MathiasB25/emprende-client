

const useFormInput = (event) =>{

    const label = event.target.parentElement.children[0];
    const input = event.target.parentElement.children[1];
    const div = event.target.parentElement;

    div.addEventListener('click', () => { 
        label.style.animationName = 'labelActive'
        label.style.animationDuration = '0.2s'
        label.style.animationTimingFunction = 'ease-in-out'
    
        input.style.backgroundColor = 'rgba(145, 158, 171, 0.24)'
    
        setTimeout( () => {
            label.style.top = '30%'
            label.style.fontSize = '10px'
            label.style.color = 'var(--main-color)'
        }, 190)

        return
    })
    document.body.addEventListener('click', () => { 
        label.style.animationName = 'labelInactive'
        label.style.animationDuration = '0.2s'
        label.style.animationTimingFunction = 'ease-in-out'
    
        input.style.backgroundColor = '#f7f7f8'
    
        setTimeout( () => {
            label.style.top = '50%'
            label.style.fontSize = '13px'
            label.style.color = 'var(--main-text)'
        }, 190)
    })
    

}


export default useFormInput