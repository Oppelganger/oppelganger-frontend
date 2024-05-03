import { useCreateNewProfileStore } from "../store/store"

const SexSelector = () => {
    const { sex, selectSex } = useCreateNewProfileStore()

    const handleSexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        selectSex(e.target.value as 'male' | 'female')
    }

    return (
        <form className='flex gap-[16rem]'>
            {['Мужчина', 'Женщина'].map((sexItem) => (
                <div key={sexItem} className='flex flex-col items-center gap-[8rem]'>
                    <input
                        type="radio"
                        name="sexItem"
                        checked={(sex === 'male' && sexItem === 'Мужчина') || (sex === 'female' && sexItem === 'Женщина')}
                        value={sexItem === 'Мужчина' ? 'male' : 'female'}
                        id={sexItem}
                        onChange={handleSexChange}
                        className='outline-none appearance-none border-black border-[3rem] w-[20rem] h-[20rem] rounded-[50%]
                        cursor-pointer transition duration-300 ease-in-out relative
                        checked:after:content-[""] checked:after:absolute after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:w-[8rem] after:h-[8rem] after:rounded-[50%] after:bg-black
                        '
                    />
                    <label>{sexItem}</label>
                </div>
            ))
            }
        </form>
    )
}

export default SexSelector