import { HeadingH4, Video } from '../elements';

export default function VideoSection({elements}) {

    const heading = elements.filter(e => e.component === "HeadingH4")[0];
    const video = elements.filter(e => e.component === "Video")[0];

    return(
        <div className='flex flex-col gap-8 page-width'>
            { heading.value.text && (
                <div>
                    <HeadingH4 text={heading?.value?.text} />
                </div>
            )}
            <div style={{aspectRatio: "16/9"}}>
                <Video media={video?.value?.media} aspectRatio={"16/9"} />
            </div>
        </div>
    )
}