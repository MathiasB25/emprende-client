import { FooterMenu, FooterText,  } from '../elements';
import EmailSignupSection from './EmailSignup';

export default function FooterSection({elements, storeName}) {
    
    return(
        <div>
            <div className='border-t border-b border-gray-100 mt-10'>
                <div className='page-width'>
                    <div className='flex flex-col gap-16'>
                        <div className='grid gap-12 lg:gap-0 lg:grid-cols-3'>
                            {elements.map(e => {
                                switch (e.component) {
                                    case "FooterMenu":
                                        return <FooterMenu heading={e.value.heading} pages={e.value.pages} />
                                    case "FooterText":
                                        return <FooterText heading={e.value.heading} description={e.value.description} />
                                }   
                            })}
                        </div>
                        <div>
                            <EmailSignupSection elements={[
                                { component: "Title", value: { text: "Recibí nuestros emails" } }
                            ]}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-14'>
                <div className="font-normal-weight text-xs">{`© 2022, ${storeName || "Mi Tienda"} Powered by Ecommerce`}</div>
            </div>
        </div>
    )
}