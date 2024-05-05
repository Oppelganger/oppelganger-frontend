import LoaderWithMessage from "../../../components/LoaderWithMessage"

type VideoPlayerProps = {
    video: string
    message: string
    loading: boolean
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, message, loading }) => {
    return (
        <div className='aspect-video overflow-hidden flex justify-center items-center bg-[gray] h-[400rem] rounded-[48rem] bg-gradient-to-br from-[#D0D0D0] via-60% via-[#E0E0E0] to-[#D0D0D0] relative'>
            <iframe className="w-full h-full"
                src={video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
            
            {loading && <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                <LoaderWithMessage message={message} />
            </div>}
        </div>
    )
}

export default VideoPlayer