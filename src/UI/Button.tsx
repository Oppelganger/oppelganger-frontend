type CreateNewProfileProps = {
    background: string
    text: string
    disabled?: boolean
    children?: React.ReactNode
    colorHover?: string
    clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void
    width?: string
}

const Button: React.FC<CreateNewProfileProps> = ({ disabled = false, background, text, children, colorHover, clickHandler, width = 'w-full' }) => {
    return (
        <button
            onClick={(e) => { e.preventDefault(); clickHandler && clickHandler(e) }}
            disabled={disabled}
            className={`
            py-[8rem] px-[22rem] ${width} h-[70rem] 
            text-[#FFF] disabled:opacity-50 text-[15rem] font-bold font-onest uppercase rounded-[20rem] custom-shadow text-center
            flex justify-center items-center
            transition-all duration-300 ${background} ${colorHover}
            `}
        >
            {children}
            {text}
        </button >
    )
}

export default Button