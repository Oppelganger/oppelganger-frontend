import { create } from 'zustand'
import { CreateNewProfileProps, useGlobalStore } from '../../../store/globalStore'

export type VideoGenerationStoreProps = {
    prompt: string
}

export type VideoGenerationStoreSetters = {
    setPrompt: (prompt: string) => void
}

export const useVideoGenerationStore = create<CreateNewProfileProps & VideoGenerationStoreProps & VideoGenerationStoreSetters>((set) => ({
    sex: "male",
    description: "",
    videoFile: '',
    audioFile: '',
    id: "",
    prompt: "",

    getInitialData: (() => {
        const { sex, description, videoFile, audioFile, id } = useGlobalStore.getState()

        set({ sex, description, videoFile, audioFile, id, })
    })(),

    setPrompt: (prompt) => set({ prompt }),
}))