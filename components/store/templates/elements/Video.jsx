import ReactPlayer from 'react-player'

export default function VideoElement({media, aspectRatio, position, width, height}) {

    return(
        <div className='relative h-full'>
            { media ? (
                <ReactPlayer 
                    url={media} 
                    width={width || "100%"} 
                    height={height || "100%"} 
                    style={{aspectRatio}} 
                    controls={true}
                />
            ) : (
                <div style={{aspectRatio}} className="absolute w-full h-full flex items-center justify-center bg-zinc-100 cursor-pointer">
                    <div className="text-7xl text-zinc-800"><i className="fa-solid fa-circle-play"></i></div>
                </div>
            )}
        </div>
    )
}