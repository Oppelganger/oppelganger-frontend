import { createJSONStorage, persist } from 'zustand/middleware';
import { create } from 'zustand'
import { CreateNewProfileProps } from '../../../store/globalStore'
export type CreateNewProfileSetters = {
    setId: (id: string) => void
    selectSex: (sex: 'male' | 'female') => void
    setDescription: (description: string) => void
    setVideoFile: (videoFile: string) => void
    setAudioFile: (audioFile: string) => void
}

export const useCreateNewProfileStore = create(persist<CreateNewProfileProps & CreateNewProfileSetters>(
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
    }),
    {
        name: 'food-storage', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },))