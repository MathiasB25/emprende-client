import axios from 'axios'
// React
import { useEffect, useState } from "react";
// NextJS
import { useRouter } from "next/router";
import Head from 'next/head';
import Image from 'next/image'
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions'
// Componets
import Navbar from '../../components/Navbar';
import TemplateNotFound from '../../components/templates/NotFound';
import Loading from '../../components/Loading';
// Hooks
import TemplateGridItem from '../../components/store/admin/templates/TemplateGridItem';
import useAxiosConfig from '../../hooks/useAxiosConfig';

function TemplatesTemplate({ state, actions }) {
    
    const router = useRouter();

    const myStore = state.myStore;

    const [ fetchSuccess, setFetchSuccess ] = useState(null)
    const [ template, setTemplate ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ loadingComponent, setLoadingComponent ] = useState(true);
    const [ otherTemplates, setOtherTemplates ] = useState([]);
    const [ isTemplateOwned, setIsTemplateOwned ] = useState(null);
    
    useEffect(() => {
        setLoading(true);
        setLoadingComponent(true);
        ( async () => {
            Promise.all([axios(`/api/getTemplate?template=${window.location.pathname.split('/')[2]}`), axios('/api/getTemplates')])
                .then(data => {
                    setTemplate(data[0].data.data || {}); 
                    if(data[1].data) {
                        const otherTemplates = data[1].data.filter( item => item.id !== window.location.pathname.split('/')[2])
                        setOtherTemplates(otherTemplates || []);
                    }
                    setFetchSuccess(data[0].data.success);
                    setLoading(false);
                    setTimeout(() => {
                        setLoadingComponent(false);
                    }, 700)
                })
        }) ();
    }, [router.asPath])
    
    const handleSetTemplate = async () => {
        if(myStore.template?._id === template._id) {
            return
        }

        const config = useAxiosConfig();
        try {
            actions.setTemplate(template, config);
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddTemplate = async () => {
        if(template.price === 0) {
            const config = useAxiosConfig();
            try {
                await axios.post('/api/AddTemplate', { template: template._id, config });
                myStore.ownedTemplates.push(template);
                setMyStore(myStore);
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        myStore.ownedTemplates?.map(item => {
            item._id === template._id && setIsTemplateOwned(true);
        });
    }, [myStore, router.asPath, template])

    return(
        <>
            {loadingComponent && <Loading />}
            {fetchSuccess && (
                <div>
                    <Head>
                        <title>Plantilla {template.name} | Ecommerce Plantillas</title>
                    </Head>
                    <Navbar/>
                    <div className='flex flex-col gap-10 md:px-5 lg:px-24 py-10'>
                        <div className='flex flex-col md:flex-row md:items-center gap-10 bg-zinc-100 px-5 py-10 md:p-10 rounded-md template-card'>
                            <div className='flex flex-col justify-between gap-5 h-1/2 md:h-full'>
                                <div className='flex flex-col gap-5'>
                                    <h1 className='text-4xl'>{template.name}</h1>
                                    <div>
                                        <div className='text-sm text-gray-600'>Hecho por {template.madeBy.fromCommunity ? 'la comunidad' : <span className='font-normal text-main-color'>Emprende</span>}</div>
                                        <div className='text-sm text-gray-600 font-light'>Versión de {template.name}: <span className='text-main-color font-normal'>{template.version}</span></div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    { isTemplateOwned ? (
                                        <div className='text-main-color flex items-center gap-2 text-xl'>
                                            <div><i className="fa-solid fa-check"></i></div>
                                            <div>{template._id === myStore.template?._id ? 'Lo estás usando.' : 'Ya lo tienes.'}</div>
                                        </div>
                                    ) : (
                                        <div className='flex items-center text-2xl font-light'>{template.price ? <i className="text-xl fa-regular fa-dollar-sign"></i> : null}{template.price ? `${template.price} USD` : <div className='text-main-color font-normal'>Gratis</div>}</div>
                                    )}
                                    <div className='select-none flex gap-2'>
                                        { isTemplateOwned ? (
                                            <div className={`text-sm sm:text-base ${template._id === myStore.template?._id ? 'bg-main-color opacity-60 cursor-no-drop' : 'bg-main-color hover:bg-main-colordark cursor-pointer'} transition-colors text-white rounded-md py-2 px-3 md:py-3 md:px-5 whitespace-nowrap`} onClick={handleSetTemplate}>{template._id === myStore.template?._id ? 'Usando' : 'Usar plantilla'}</div>
                                        ) : (
                                            !isTemplateOwned && template.price ? (
                                                <div className='text-sm sm:text-base cursor-pointer bg-main-color hover:bg-main-colordark transition-colors text-white rounded-md py-2 px-3 md:py-3 md:px-5 whitespace-nowrap'>Comprar plantilla</div>
                                            ) : (
                                                <div className='text-sm sm:text-base cursor-pointer bg-main-color hover:bg-main-colordark transition-colors text-white rounded-md py-2 px-3 md:py-3 md:px-5 whitespace-nowrap' onClick={handleAddTemplate}>Agregar a plantillas</div>
                                            )
                                        )}
                                        <div className='text-sm sm:text-base flex items-center justify-between cursor-pointer border-2 border-main-colordark text-main-colordark hover:bg-main-color rounded-md py-2 px-3 md:py-3 md:px-5 whitespace-nowrap font-normal hover:text-white transition-colors'><div>Previsualizar</div></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-full image-container rounded-md border' style={{borderColor: "rgba(0,0,0,.03)"}}>
                                <Image src={template.previewImg} layout={"fill"} className={"image"} alt={"Template image"} />
                            </div>
                        </div>
                        <div className='px-5 md:px-0 py-10 border-t'>
                            <div className='text-3xl'>Otras plantillas</div>
                            <div className='grid sm:grid-cols-2 lg:grid-cols-3 py-10 gap-5'>
                                { otherTemplates && (
                                    otherTemplates.map(template => (
                                        <TemplateGridItem template={template} />
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!loading && !fetchSuccess && (
                <TemplateNotFound />
            )}
        </>
    )
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
)(TemplatesTemplate);