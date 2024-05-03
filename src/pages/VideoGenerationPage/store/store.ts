import { create } from 'zustand'
import { CreateNewProfileProps, useGlobalStore } from '../../../store/globalStore'
import { createJSONStorage, persist } from 'zustand/middleware'

export type VideoGenerationStoreProps = {
    prompt: string
}

export type VideoGenerationStoreSetters = {
    setPrompt: (id: string) => void
}

export const useVideoGenerationStore = create(persist<CreateNewProfileProps & VideoGenerationStoreProps & VideoGenerationStoreSetters>((set) => ({
    sex: "male",
    description: "",
    videoFile: '',
    audioFile: '',
    id: "",
    prompt: "",

    getInitialData: (() => {
        const { sex, description, videoFile, audioFile, id } = useGlobalStore.getState();

        set({ sex, description, videoFile, audioFile, id, });
    })(),

    setPrompt: (prompt) => set({ prompt }),
}),
    {
        name: 'video-generation-store', storage: createJSONStorage(() => sessionStorage) // Name of the key for storing the state in local storage
    }
))