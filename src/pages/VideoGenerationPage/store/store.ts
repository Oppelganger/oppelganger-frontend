import { create } from 'zustand'

export type VideoGenerationStoreProps = {
    prompt: string
}

export type VideoGenerationStoreSetters = {
    setPrompt: (prompt: string) => void
}

export const useVideoGenerationStore = create<VideoGenerationStoreProps & VideoGenerationStoreSetters>((set) => ({
    prompt: "",

    setPrompt: (prompt) => set({ prompt }),
}))