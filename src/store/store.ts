import { create } from 'zustand'

export type TypeStore = {
    sex: "male" | "female"
    description: string
    videoFile: File | null
    audioFile: File | null

    selectSex: (sex: 'male' | 'female') => void
    setDescription: (description: string) => void
    setVideoFile: (videoFile: File) => void
    setAudioFile: (audioFile: File) => void
}

export const useCreateNewProfileStore = create<TypeStore>((set) => ({
    sex: "male",
    description: "",
    videoFile: null,
    audioFile: null,

    selectSex: (sex: 'male' | 'female') => set({ sex }),
    setDescription: (description: string) => set({ description }),
    setVideoFile: (videoFile: File) => set({ videoFile }),
    setAudioFile: (audioFile: File) => set({ audioFile })
}))