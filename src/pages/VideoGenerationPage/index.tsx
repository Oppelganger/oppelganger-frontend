import InputField from '../../components/InputField'
import Button from '../../UI/Button'
import { GenerateVideoResponseType, postGenerateVideo } from './api/postGenerateVideo'
import { getRequestStatus, requestStatusResponse } from './api/getRequestStatus'
import { useEffect, useState } from 'react'
import VideoPlayer from './component/VideoPlayer'
import { useGlobalStore } from '../../store/globalStore'
import { useVideoGenerationStore } from './store/store'

const VideoGenerationPage = () => {
    const { sex, description, id, audioFile, videoFile } = useGlobalStore()
    const { prompt, setPrompt } = useVideoGenerationStore()
    const [message, setMessage] = useState('Отправка запроса...')
    const [video, setVideo] = useState<string>('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchRequestStatus = async () => {
            try {
                const videoStatusResponse = await getRequestStatus() as requestStatusResponse
                setMessage(videoStatusResponse.stage)

            } catch (error) {
                console.error("Error fetching request status:", error)
            }
        }

        let interval: NodeJS.Timer | undefined

        if (loading) {
            const handleVideoGeneration = async () => {
                try {
                    const generateVideoResponse = await postGenerateVideo({ sex, description, audioFile, videoFile, id, prompt }) as GenerateVideoResponseType
                    const videoLink = generateVideoResponse.object.replace('minio', '127.0.0.1')
                    setVideo(videoLink)
                    setLoading(false)
                } catch (error) {
                    console.error("Error generating video:", error)
                }
            }
            handleVideoGeneration()

            interval = setInterval(fetchRequestStatus, 500)
        }

        if (interval && !loading) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [sex, description, audioFile, videoFile, id, prompt, loading])

    const handleGenerateVideo = () => {
        setLoading(true)
    }

    return (
        <div className='w-full flex justify-center h-screen'>
            <div className='pt-[50rem] flex flex-col gap-[32rem]'>
                <div className='w-full flex flex-col gap-[8rem]'>
                    <p className='font-oddval text-[32rem] text-center'>Интерактивная страница</p>

                    <VideoPlayer loading={loading} video={video} message={message} />
                </div>

                <div className='w-full flex flex-col gap-[2rem]'>
                    <p className='font-onest text-[24rem]'>Задайте запрос</p>

                    <form className='grid grid-cols-[calc(80%-8rem)_calc(20%-8rem)] gap-[16rem]'
                        onSubmit={handleGenerateVideo}
                    >
                        <InputField
                            placeholder='Как собрать грибную поляну?'
                            value={prompt}
                            setValue={setPrompt}
                            rounded='rounded-[20rem]'
                        />

                        <Button
                            disabled={loading}
                            prevent={true}
                            clickHandler={handleGenerateVideo}
                            text='Отправить'
                            background='bg-[--primary]'
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VideoGenerationPage