// React
import { useState, useEffect, useRef } from "react";
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../../../redux/actions';

function EditorSidebarSection({ state, actions, props }) {

    const { element, section } = props;
    
    const [ text, setText ] = useState(element.value?.text);
    const [ heading, setHeading ] = useState(element.value?.heading);
    const [ description, setDescription ] = useState(element.value?.description);

    switch (element.component) {
        case "Text":

            useEffect(() => {
                if(element.value.text != text) {
                    const timeOutId = setTimeout(() => {
                        actions.updateStoreSection({ section, element, value: { text } });
                    }, 1000);
                    return () => clearTimeout(timeOutId);
                }
            }, [text]);

            return(
                <div className="flex flex-col gap-5 pt-5">
                    <div>
                        <label htmlFor="text" className="block">Texto</label>
                        <input className="border rounded-md w-full p-2 outline-none text-sm" type="text" name="" id="text" placeholder="Escribe un texto" value={text} onChange={e => setText(e.target.value)} />
                    </div>
                </div>
            )
        case "HeadingH1":
        
            useEffect(() => {
                if(element.value.text != text) {
                    const timeOutId = setTimeout(() => {
                        actions.updateStoreSection({ section, element, value: { text } });
                    }, 1000);
                    return () => clearTimeout(timeOutId);
                }
            }, [text]);

            return(
                <div className="pt-5">
                    <label htmlFor="headingh2" className="block">Titulo</label>
                    <input className="border rounded-md w-full p-2 outline-none text-sm" type="text" name="" id="headingh2" placeholder="Escribe un titulo" value={text} onChange={e => setText(e.target.value)} />
                </div>
            )
        case "HeadingH2":
            
            useEffect(() => {
                if(element.value.text != text) {
                    const timeOutId = setTimeout(() => {
                        actions.updateStoreSection({ section, element, value: { text } });
                    }, 1000);
                    return () => clearTimeout(timeOutId);
                }
            }, [text]);

            return(
                <div className="pt-5">
                    <label htmlFor="headingh2" className="block">Titulo</label>
                    <input className="border rounded-md w-full p-2 outline-none text-sm" type="text" name="" id="headingh2" placeholder="Escribe un titulo" value={text} onChange={e => setText(e.target.value)} />
                </div>
            )
        case "HeadingH4":
            
            useEffect(() => {
                if(element.value.text != text) {
                    const timeOutId = setTimeout(() => {
                        actions.updateStoreSection({ section, element, value: { text } });
                    }, 1000);
                    return () => clearTimeout(timeOutId);
                }
            }, [text]);

            return(
                <div className="pt-5">
                    <label htmlFor="headingh2" className="block">Titulo</label>
                    <input className="border rounded-md w-full p-2 outline-none text-sm" type="text" name="" id="headingh2" placeholder="Escribe un titulo" value={text} onChange={e => setText(e.target.value)} />
                </div>
            )
        case "Description":

            useEffect(() => {
                if(element.value.text != text) {
                    const timeOutId = setTimeout(() => {
                        actions.updateStoreSection({ section, element, value: { text } });
                    }, 1000);
                    return () => clearTimeout(timeOutId);
                }
            }, [text]);

            return(
                <div className="pt-5">
                    <label htmlFor="description" className="block">Descripción</label>
                    <textarea className="resize-none border rounded-md w-full p-2 outline-none text-sm" name="" id="description" cols="30" rows="4" placeholder="Escribe una descripción" value={text} onChange={e => setText(e.target.value)}></textarea>
                </div>
            )
        case "Button":

            useEffect(() => {
                if(element.value.text != text) {
                    const timeOutId = setTimeout(() => {
                        actions.updateStoreSection({ section, element, value: { text } });
                    }, 1000);
                    return () => clearTimeout(timeOutId);
                }
            }, [text]);

            return(
                <div className="pt-5">
                    <label htmlFor="btn" className="block">Botón</label>
                    <input className="border rounded-md w-full p-2 outline-none text-sm" type="text" name="" id="btn" placeholder="Texto del botón" value={text} onChange={e => setText(e.target.value)} />
                </div>
            )
        case "Video":
            return(
                <div className="pt-5">
                    <div>Video</div>
                    <label htmlFor="fileUpload" className="cursor-pointer border rounded-md p-2 py-5 flex flex-col items-center justify-center gap-2 text-zinc-800 hover:text-black transition-colors bg-zinc-100" style={{aspectRatio: "3/2"}}>
                        <i className="fa-solid fa-video text-6xl"></i>
                        <div>Subir un video</div>
                    </label>
                    <input className="border hidden" type="file" src="" alt="" id="fileUpload" />
                </div>
            )
        case "Image":
            return(
                <div className="pt-5">
                    <div>Imagen</div>
                    <label htmlFor="fileUpload" className="cursor-pointer border rounded-md p-2 py-5 flex flex-col items-center justify-center gap-2 text-zinc-800 hover:text-black transition-colors bg-zinc-100" style={{aspectRatio: "3/2"}}>
                        <i className="fa-solid fa-image text-6xl"></i>
                        <div>Subir una imagen</div>
                    </label>
                    <input className="border hidden" type="file" src="" alt="" id="fileUpload" />
                </div>
            )
        case "Product":
            return(
                <div className="flex flex-col gap-1 pt-5">
                    <div>Producto</div>
                    <button className="border py-2 text-sm rounded-md w-full bg-zinc-100 hover:bg-zinc-50 transition-colors">Elegir producto</button>
                </div>
            )
        case "Collection":
            return(
                <div className="flex flex-col gap-1 pt-5">
                    <div>Colección</div>
                    { element.storeCollection ? (
                        <button className="border py-2 text-sm rounded-md w-full bg-zinc-100 hover:bg-zinc-50 transition-colors">Colección</button>
                    ) : (
                        <button className="border py-2 text-sm rounded-md w-full bg-zinc-100 hover:bg-zinc-50 transition-colors">Elegir colección</button>
                    )}
                </div>
            )
        case "Column":

            useEffect(() => {
                if(element.value.heading != heading || element.value.description != description) {
                    const timeOutId = setTimeout(() => {
                        actions.updateStoreSection({ section, element, value: { heading, description } });
                    }, 1000);
                    return () => clearTimeout(timeOutId);
                }
            }, [heading, description]);

            const [ active, setActive ] = useState(false);
            const handleColumnActive = () => {
                setActive(!active);
            }
            const titleFor = (Math.random() + 1).toString(36).substring(7);
            const descFor = (Math.random() + 1).toString(36).substring(7);
            return(
                <div className="pt-5">
                    <div className={`cursor-pointer text-lg flex gap-2 items-center`} onClick={handleColumnActive}>
                        <div>Columna</div>
                        <i className={`fa-regular fa-chevron-down ${active && 'rotate-180'} transition-transform text-zinc-600 text-sm`}></i>
                    </div>
                    <div className={`${active ? 'flex' : 'hidden'} flex-col gap-2 ${active && 'pt-3'} anim-from-top`}>
                        <div>
                            <label htmlFor={`${titleFor}`} className="block">Titulo</label>
                            <input className="border rounded-md w-full p-2 outline-none text-sm" type="text" name="" id={`${titleFor}`} placeholder="Escribe un titulo" value={heading} onChange={e => setHeading(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor={descFor} className="block">Descripción</label>
                            <textarea className="resize-none border rounded-md w-full p-2 outline-none text-sm" name="" id={descFor} cols="30" rows="4" placeholder="Escribe una descripción" value={description} onChange={e => setDescription(e.target.value)} ></textarea>
                        </div>
                    </div>
                </div>
            )
        default:
            return <div>Element</div>
    }
}

const mapStateToProps = (state) => ({
	state: state
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(Actions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditorSidebarSection);