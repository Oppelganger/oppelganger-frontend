import { fetcherPOST } from "../../../api/api"
import { CreateNewProfileProps } from '../../../store/globalStore'
import { VideoGenerationStoreProps } from "../store/store"

export type GenerateVideoRequestType = {
    "input": {
        "personality": {
            "id": string,
            "prompt": string[] | string,
            "video_objects": [File],
            "audio_objects": [File],
            "language": "ru",
            "enhance": true,
            "female": boolean
        },
        "messages": typeof messages,
        "response_type": "video",
        "prompt": string
    }
}

export type GenerateVideoResponseType = {
    text: string,
    object: string,
    object_type: "video"
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

export const postGenerateVideo = (props: CreateNewProfileProps & VideoGenerationStoreProps) => {
    const { id, description, audioFile, videoFile, sex, prompt } = props;

    const request: GenerateVideoRequestType = {
        input: {
            personality: {
                id: id,
                prompt: description,
                video_objects: [videoFile as File],
                audio_objects: [audioFile as File],
                language: "ru",
                enhance: true,
                female: sex === "female" ? true : false,
            },
            messages,
            response_type: "video",
            prompt: prompt
        },
    };

    return fetcherPOST<GenerateVideoResponseType>('/send_request', request);
};