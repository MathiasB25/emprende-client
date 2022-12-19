import randomId from '../../../../hooks/randomId';
import { HeadingH2, Description, Button, Image } from '../elements';

export default function ImageBannerSection({elements, height}) {

    const bannerHeight = `${height == "small" ? "400px" : height == "medium" ? "550px" : height == "large" && "700px"}`
    const bannerImg = elements.filter(e => e.component === "Image")[0];
    const bannerContent = elements.filter(e => e.component !== "Image");

    return(
        <div className={`relative flex flex-col gap-10 items-center justify-end`} style={{height: bannerHeight, background: `${!bannerImg.value.media && '#A8A8A8'}`}}>
            { bannerImg.value.media && (
                <div className='absolute h-full w-full'>
                    <Image bg={"gray"} color={"rgba(0, 0, 0, .3)"} media={bannerImg.value.media} alt={bannerImg.value.alt} />
                </div>
            )}
            <div className={`flex flex-col items-center gap-6 ${bannerHeight === "400px" ? 'pb-16' : bannerHeight === "550px" ? 'pb-24' : 'pb-32'}`}>
                {!bannerImg.value.media && <i className={`${bannerHeight === "400px" ? 'text-8xl' : 'text-9xl'} fa-thin fa-image`} style={{color: "#9C9C9C"}}></i>}
                {bannerContent.map(e => {
                    switch (e.component) {
                        case "HeadingH2":
                            return <div key={randomId()} className='z-10'><HeadingH2 text={e.value.text || "Image banner"} color={e.value.properties?.color || "white"} weight={e.value.properties?.weight || "normal"} /></div>
                        case "Description":
                            return <div key={randomId()} className='z-10'><Description text={e.value.text || "Give customers details about the banner image(s) or content on the template."} color={e.value.properties?.color || "white"} /></div>
                        case "Button":
                            return <div key={randomId()} className='z-10'><Button text={e.value.text || "Shop all"} color={e.value.properties?.color || "white"} border={e.value.properties?.border} bg={e.value.properties?.bg} width={e.value.properties.width || "8rem"} /></div>
                    }
                })}
            </div>
        </div>
    )
}