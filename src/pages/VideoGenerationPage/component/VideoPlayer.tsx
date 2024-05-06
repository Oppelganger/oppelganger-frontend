import LoaderWithMessage from "../../../components/LoaderWithMessage"
import Switcher from "./Switcher"

type VideoPlayerProps = {
    video: string
    message: string
    loading: boolean
    enhance: boolean
    setEnhance: React.Dispatch<React.SetStateAction<boolean>>
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, message, loading, enhance, setEnhance }) => {
    return (
        <div className='aspect-video overflow-hidden flex justify-center items-center h-[400rem] rounded-[48rem] gradient relative'>
            {video && !loading &&
                <video src={video} className='w-full h-full' controls autoPlay />
            }

            {loading && <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                <LoaderWithMessage message={message} />
            </div>}

            <div className={`${!video && !loading ? 'opacity-[100%]' : 'opacity-0 disabled'} transition-all duration-300 flex flex-col justify-center items-center gap-[6rem] absolute top-[30rem] right-[30rem]`}>
                <Switcher disabled={!(!video && !loading)} setEnhance={setEnhance} enhance={enhance} />
                <label htmlFor="switcher" className='font-onest text-[12rem]/[100%] text-center'>Улучшение <br /> изображения</label>
            </div>
        </div>
    )
}

export default VideoPlayer