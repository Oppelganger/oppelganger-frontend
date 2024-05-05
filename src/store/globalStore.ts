import { create } from "zustand"

export type CreateNewProfileProps = {
    id: string
    sex: "male" | "female"
    description: string
    videoFile: string
    audioFile: string
}

type GlobalStoreSetters = {
    setInitialData: ({ ...args }: CreateNewProfileProps) => void
}

export const useGlobalStore = create<CreateNewProfileProps & GlobalStoreSetters>((set, get) => ({
    sex: "male",
    description: "",
    videoFile: '',
    audioFile: '',
    id: "",
    prompt: "",

    setInitialData: (({ ...args }) => {
        set(args)
    }),
}))