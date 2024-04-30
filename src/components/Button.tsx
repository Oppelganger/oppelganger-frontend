type CreateNewProfileProps = {
    color: string,
    text: string,
    children?: React.ReactNode,
    colorHover?: string
    clickHandler?: () => void
    width?: string
}

const Button: React.FC<CreateNewProfileProps> = ({ color, text, children, colorHover, clickHandler, width = 'w-full' }) => {
    return (
        <button
            onClick={clickHandler}
            
            className={`
            py-[8rem] px-[22rem] ${width} h-[70rem] 
            bg-[${color}] hover:bg-[${colorHover ? colorHover : color + '_primary'}] text-[#fff] text-[15rem] font-bold font-onest uppercase rounded-[20rem] custom-shadow text-center
            flex justify-center items-center
            transition-all duration-300`}

            style={{ backgroundColor: `var(${color})` }}
        >
            {children}
            {text}
        </button >
    )
}

export default Button