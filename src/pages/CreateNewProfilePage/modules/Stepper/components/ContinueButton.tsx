import { useState, useEffect } from "react"
import Button from "../../../../../UI/Button"
import { useCreateNewProfileStore } from "../../../store/store"

type ContinueButtonProps = {
    index: number,
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ index }) => {
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
            type='submit'
            text='Продолжить'
        />
    )
}

export default ContinueButton