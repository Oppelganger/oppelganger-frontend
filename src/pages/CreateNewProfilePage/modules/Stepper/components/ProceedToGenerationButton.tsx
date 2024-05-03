import { useNavigate } from "react-router-dom"
import Button from "../../../../../UI/Button"

const ProceedToGenerationButton = () => {
    const navigate = useNavigate()

    const proceedGeneration = () => {
        navigate('/generation')
    }

    return (
        <Button background='bg-[--primary]'
            clickHandler={proceedGeneration}
            text='Сгенерировать'
        />
    )
}

export default ProceedToGenerationButton