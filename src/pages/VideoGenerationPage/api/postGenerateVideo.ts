import { fetcherPOST } from "../../../api/api"
import { CreateNewProfileProps } from '../../../store/globalStore'

export type GenerateVideoRequestType = {
    "input": {
        "personality": {
            "id": string
            "prompt": string[]
            "video_objects": [string]
            "audio_objects": [string]
            "language": "ru"
            "enhance": boolean
            "female": boolean
        },
        "messages": typeof messages
        "response_type": "video"
        "prompt": string
    }
}

export type GenerateVideoResponseType = {
    text: string
    object: string
    object_type: "video"
    object_url: string
}

const messages = [
    {
        "request": "Привет, как тебя зовут?",
        "reply": "Привет, я Артём Царюк"
    },
    {
        "request": "Ты бот?",
        "reply": "Нет, я обычный человек"
    }
]

export const postGenerateVideo = (props: CreateNewProfileProps & { enhance: boolean, prompt: string }) => {
    const { id, description, sex, prompt, audioFile, videoFile, enhance } = props

    const request: GenerateVideoRequestType = {
        input: {
            personality: {
                id: id,
                prompt: description.split('\n'),
                video_objects: [videoFile],
                audio_objects: [audioFile],
                language: "ru",
                enhance: enhance,
                female: sex === "female" ? true : false,
            },
            messages,
            response_type: "video",
            prompt: prompt
        },
    }

    return fetcherPOST<GenerateVideoResponseType>('/send_request', request)
}