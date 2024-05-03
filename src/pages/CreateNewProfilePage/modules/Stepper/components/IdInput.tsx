import { useCreateNewProfileStore } from "../../../store/store"

const IdInput = () => {
    const { id, setId } = useCreateNewProfileStore()

    return (
        <input className="w-full h-[auto] overflow-hidden resize-none border-[1rem] border-[gray] rounded-[6rem] py-[4rem] px-[12rem]"
            type="text"
            placeholder="Введите желаемый ID профиля"
            value={id}
            onChange={e => setId(e.target.value)}
        />
    )
}

export default IdInput