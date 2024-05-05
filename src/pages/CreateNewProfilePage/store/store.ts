import { create } from 'zustand'
import { CreateNewProfileProps } from '../../../store/globalStore'
export type CreateNewProfileSetters = {
    setId: (id: string) => void
    selectSex: (sex: 'male' | 'female') => void
    setDescription: (description: string) => void
    setVideoFile: (videoFile: string) => void
    setAudioFile: (audioFile: string) => void
}

export const useCreateNewProfileStore = create<CreateNewProfileProps & CreateNewProfileSetters>(
    (set) => ({
        sex: "male",
        description: "",
        videoFile: '',
        audioFile: '',
        id: "",

        setId: (id: string) => set({ id }),
        selectSex: (sex: 'male' | 'female') => set({ sex }),
        setDescription: (description: string) => set({ description }),
        setVideoFile: (videoFile: string) => set({ videoFile }),
        setAudioFile: (audioFile: string) => set({ audioFile })
    }))