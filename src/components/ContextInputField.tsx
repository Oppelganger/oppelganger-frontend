import { useCreateNewProfileStore } from "../store/store"

const ContextInputField = () => {
  const { setDescription, description } = useCreateNewProfileStore()

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target

    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight + 5}rem`

    setDescription(textarea.value)
  }

  return (
    <textarea
      className="w-full h-[auto] min-h-[50px] overflow-hidden resize-none border-[1rem] border-black rounded-[6rem] py-[4rem] px-[12rem]"
      value={description}
      onChange={handleChange}
      placeholder={`Задайте контекст поведения: какими должны быть ответы?\nС каким настроением должны быть ответы?`}
    />
  )
}

export default ContextInputField
