import { create } from 'zustand'
import { CreateNewProfileProps } from '../../../store/globalStore'

export type CreateNewProfileSetters = {
    setId: (id: string) => void
    selectSex: (sex: 'male' | 'female') => void
    setDescription: (description: string) => void
    setVideoFile: (videoFile: File) => void
    setAudioFile: (audioFile: File) => void
}

export const useCreateNewProfileStore = create<CreateNewProfileProps & CreateNewProfileSetters>((set) => ({
    sex: "male",
    description: "",
    videoFile: null,
    audioFile: null,
    id: "",

    setId: (id: string) => set({ id }),
    selectSex: (sex: 'male' | 'female') => set({ sex }),
    setDescription: (description: string) => set({ description }),
    setVideoFile: (videoFile: File) => set({ videoFile }),
    setAudioFile: (audioFile: File) => set({ audioFile })
}))