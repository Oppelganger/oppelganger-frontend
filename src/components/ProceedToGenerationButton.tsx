import { useNavigate } from "react-router-dom"
import { useCreateNewProfileStore } from "../store/store"
import Button from "./Button"

const ProceedToGenerationButton = () => {
    const { sex, audioFile, videoFile, description } = useCreateNewProfileStore()
    const navigate = useNavigate()

    const proceedGeneration = () => {
        navigate('/generation')
    }

    return (
        <Button background='bg-[--primary]'
            clickHandler={proceedGeneration}
            text='Сгенерировать'
            disabled={!(!!sex && !!audioFile && !!videoFile && !!description)}
        />
    )
}

export default ProceedToGenerationButton