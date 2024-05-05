import { useState, useEffect } from "react"
import Button from "../../../../../UI/Button"
import { useCreateNewProfileStore } from "../../../store/store"

type ContinueButtonProps = {
    index: number,
    handleNext: () => void
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ index, handleNext }) => {
    const [stepData, setStepData] = useState<Array<'male' | 'female' | string | File | null>>([])
    const { sex, description, audioFile, videoFile, id } = useCreateNewProfileStore()

    useEffect(() => {
        setStepData([
            id,
            description,
            sex,
            audioFile,
            videoFile
        ])
    }, [id, description, sex, audioFile, videoFile])

    return (
        <Button background='bg-[--primary]'
            disabled={!stepData[index]}
            clickHandler={handleNext}
            text='Продолжить'
        />
    )
}

export default ContinueButton