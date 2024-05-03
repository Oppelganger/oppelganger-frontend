import { create } from "zustand";
import { useCreateNewProfileStore } from "../pages/CreateNewProfilePage/store/store";
import { persist } from "zustand/middleware";

export type CreateNewProfileProps = {
    id: string
    sex: "male" | "female"
    description: string
    videoFile: string
    audioFile: string
}

export const useGlobalStore = create(persist<CreateNewProfileProps>((set) => ({
    sex: "male",
    description: "",
    videoFile: '',
    audioFile: '',
    id: "",
    prompt: "",

    getInitialData: (() => {
        const { sex, description, videoFile, audioFile, id } = useCreateNewProfileStore.getState();

        set({ sex, description, videoFile, audioFile, id, });
    })(),
}), {
    name: "global-storage",
    getStorage: () => sessionStorage,
}
))