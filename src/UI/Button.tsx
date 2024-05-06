type CreateNewProfileProps = {
    background: string
    text: string
    disabled?: boolean
    children?: React.ReactNode
    colorHover?: string
    clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void
    width?: string
    height?: string
    prevent?: boolean
    noShadow?: boolean
    type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<CreateNewProfileProps> = ({ type = 'button', noShadow = false, height = 'h-[70rem]', prevent = false, disabled = false, background, text, children, colorHover, clickHandler, width = 'w-full' }) => {
    return (
        <button
            onClick={(e) => { prevent && e.preventDefault(); clickHandler && clickHandler(e) }}
            disabled={disabled}
            type={type}
            className={`
            py-[8rem] px-[22rem] ${width} ${height}
            text-[#FFF] disabled:opacity-50 text-[15rem] font-bold font-onest uppercase rounded-[20rem] text-center
            flex justify-center items-center
            transition-all duration-300 ${background} ${colorHover} ${noShadow ? '' : 'custom-shadow'}

            `}
        >
            {children}
            <span className="text-[16rem]/[100%]">{text}</span>
        </button >
    )
}

export default Button