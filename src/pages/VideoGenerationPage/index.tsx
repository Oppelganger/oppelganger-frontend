import InputField from '../../components/InputField'
import Button from '../../UI/Button'
import LoaderWithMessage from '../../components/LoaderWithMessage'
import { useVideoGenerationStore } from './store/store'
import { GenerateVideoResponseType, postGenerateVideo } from './api/postGenerateVideo'
import { getRequestStatus, requestStatusResponse } from './api/getRequestStatus'
import { useEffect, useState } from 'react'

const VideoGenerationPage = () => {
    const { sex, description, id } = useVideoGenerationStore()
    const [message, setMessage] = useState('Отправка запроса...')
    const [video, setVideo] = useState<string | undefined>('')
    const [requesting, setRequesting] = useState(false)
    const [prompt, setPrompt] = useState('')

    const audioFile = 'audio.ogg'
    const videoFile = 'video.mp4'

    useEffect(() => {
        let isMounted = true;

        const fetchRequestStatus = async () => {
            try {
                const videoStatusResponse = await getRequestStatus() as requestStatusResponse;
                if (isMounted) {
                    setMessage(videoStatusResponse.stage);
                }
            } catch (error) {
                console.error("Error fetching request status:", error);
            }
        };

        let interval

        if (requesting) {
            const handleVideoGeneration = async () => {
                try {
                    const generateVideoResponse = await postGenerateVideo({ sex, description, audioFile, videoFile, id, prompt }) as GenerateVideoResponseType;
                    setVideo(generateVideoResponse.object);
                    setRequesting(false);
                } catch (error) {
                    console.error("Error generating video:", error);
                }
            };
            handleVideoGeneration();
            console.log('YES')

            interval = setInterval(fetchRequestStatus, 500);
        }

        if (!requesting) {
            clearInterval(interval)
        }

        return () => { isMounted = false; };
    }, [requesting, sex, description, audioFile, videoFile, id, prompt]);

    const handleGenerateVideo = () => {
        setRequesting(true);
    };

    return (
        <div className='w-full flex justify-center h-screen'>
            <div className='pt-[50rem] flex flex-col gap-[32rem] pb-[40rem]'>
                <div className='w-full flex flex-col gap-[8rem]'>
                    <p className='font-oddval text-[32rem] text-center'>Интерактивная страница</p>

                    <div className='aspect-video flex justify-center items-center bg-[gray] h-[400rem] rounded-[48rem] bg-gradient-to-br from-[#D0D0D0] via-60% via-[#E0E0E0] to-[#D0D0D0] '>
                        <video src={video} className='w-full h-full' />

                        <LoaderWithMessage message={message} />
                    </div>
                </div>

                <div className='w-full flex flex-col gap-[2rem]'>
                    <p className='font-onest text-[24rem]'>Задайте запрос</p>

                    <div className='grid grid-cols-[calc(80%-8rem)_calc(20%-8rem)] gap-[16rem]'>
                        <InputField
                            placeholder='Как собрать грибную поляну?'
                            value={prompt}
                            setValue={setPrompt}
                            rounded='rounded-[20rem]'
                        />

                        <Button
                            prevent={true}
                            clickHandler={handleGenerateVideo}
                            text='Отправить'
                            background='bg-[--primary]'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoGenerationPage