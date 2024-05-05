import { useNavigate } from "react-router-dom"
import Button from "../../../../../UI/Button"
import { useGlobalStore } from "../../../../../store/globalStore"
import { useCreateNewProfileStore } from "../../../store/store"
import { startTransition } from "react"

const ProceedToGenerationButton = () => {
    const navigate = useNavigate()
    const globalStore = useGlobalStore()
    const { audioFile, id, description, sex, videoFile } = useCreateNewProfileStore()

    const proceedGeneration = () => {
        startTransition(() => {
            globalStore.setInitialData({ audioFile, id, description, sex, videoFile })
            navigate('/generation')
        })
    }

    return (
        <Button background='bg-[--primary]'
            clickHandler={proceedGeneration}
            text='Сгенерировать'
        />
    )
}

export default ProceedToGenerationButton