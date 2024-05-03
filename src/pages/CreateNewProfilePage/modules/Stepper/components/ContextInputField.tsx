import React from 'react'
import InputField from '../../../../../components/InputField'
import { useCreateNewProfileStore } from '../../../store/store'

type ContextInputFieldProps = {
    placeholder: string
}

const ContextInputField: React.FC<ContextInputFieldProps> = ({ placeholder }) => {
    const { setDescription, description } = useCreateNewProfileStore()

    return (
        <InputField value={description} setValue={setDescription} placeholder={placeholder} />
    )
}

export default ContextInputField