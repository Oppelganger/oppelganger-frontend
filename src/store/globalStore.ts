import { create } from "zustand";
import { useCreateNewProfileStore } from "../pages/CreateNewProfilePage/store/store";

export type CreateNewProfileProps = {
    id: string
    sex: "male" | "female"
    description: string
    videoFile: File | null
    audioFile: File | null
}

export const useGlobalStore = create<CreateNewProfileProps>((set) => ({
    sex: "male",
    description: "",
    videoFile: null,
    audioFile: null,
    id: "",
    prompt: "",

    getInitialData: (() => {
        const { sex, description, videoFile, audioFile, id } = useCreateNewProfileStore.getState();

        set({ sex, description, videoFile, audioFile, id, });
    })(),
}))