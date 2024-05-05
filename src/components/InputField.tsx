
type InputFieldProps = {
  rounded?: string
  placeholder?: string
  value: string
  setValue: (value: string) => void
}

const InputField: React.FC<InputFieldProps> = ({ rounded = 'rounded-[6rem]', placeholder, value, setValue }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  return (
    <textarea
      className={`
          w-full h-[auto] min-h-[50rem] overflow-auto max-h-[130rem] resize-none border-[1rem] border-[gray] py-[6rem] px-[12rem]
          ${rounded}
      `}
      maxLength={10000}
      value={value}
      onChange={(e) => { e.preventDefault(); handleChange(e) }}
      placeholder={`${placeholder}`}
    />
  )
}

export default InputField
