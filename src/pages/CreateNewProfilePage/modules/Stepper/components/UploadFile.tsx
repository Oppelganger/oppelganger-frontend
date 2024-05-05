import Button from '../../../../../UI/Button'
import { ReactComponent as Cloud } from '../../../../../assets/cloud.svg'
import { useRef } from 'react'
import { useCreateNewProfileStore } from '../../../store/store'

type UploadFileProps = {
    fileType: 'video' | 'audio'
}

const UploadFile: React.FC<UploadFileProps> = ({ fileType }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const store = useCreateNewProfileStore()
    const setFile = fileType === 'audio' ? store.setAudioFile : store.setVideoFile
    const fileName = fileType === 'audio' ? store.audioFile : store.videoFile

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            if (file.type.startsWith(`${fileType}/`)) {
                setFile(file.name)
            } else {
                alert(`Выбранный файл не является ${fileType}-файлом`)
            }
        }
    }

    const clickHandler = () => {
        inputRef.current?.click()
    }

    return (
        <Button
            background='bg-[transparent] border-[4rem] border-[--primary] w-full text-[--primary]'
            text={fileName ? fileName : 'Загрузить'}
            width='w-fit'
            clickHandler={clickHandler}
        >
            <Cloud className='mr-[8rem] ml-[-4rem]' fill='var(--primary)' />

            <input
                ref={inputRef}
                className='custom-input'
                type='file'
                accept={`${fileType}/*`}
                onChange={handleFileUpload}
            />
        </Button>
    )
}

export default UploadFile