type SwitcherProps = {
    enhance: boolean
    setEnhance: React.Dispatch<React.SetStateAction<boolean>>
    disabled: boolean
}

const Switcher: React.FC<SwitcherProps> = ({ setEnhance, enhance, disabled }) => {
    return (
        <button
            disabled={disabled}
            id="switcher"
            className={`rounded-[24rem] transition-all relative w-[65rem] h-[35rem] border-[3rem] border-[--primary] 
            ${enhance ? 'bg-[lightblue]/70' : 'bg-[gray]/15'}
            `}
            onClick={() => setEnhance((prevVal => !prevVal))}
        >
            <div className={`${enhance ? 'left-[calc(65rem-24rem-8rem)]' : 'left-[4rem] opacity-[55%]'} top-[50%] translate-y-[-50%] bg-[--primary] translate-x-0 transition-all absolute rounded-[50%] aspect-square w-[24rem]`} />
        </button>
    )
}

export default Switcher