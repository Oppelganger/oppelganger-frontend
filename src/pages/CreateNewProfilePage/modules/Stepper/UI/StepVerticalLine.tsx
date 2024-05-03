import { stepType } from ".."

type StepVerticalLineProps = {
    index: number,
    steps: stepType[],
    activeStep: number
}

const StepVerticalLine: React.FC<StepVerticalLineProps> = ({ index, steps, activeStep }) => {
    return (
        <div className={`
            ${index !== steps.length - 1 && activeStep !== index ? 'h-[33rem]' : 'h-0 delay-160'} 
            ${activeStep >= index + 1 ? 'border-l-[--primary]' : 'border-l-[gray]'} ml-[20rem] border-l-[1rem] duration-150
        `}
        />
    )
}

export default StepVerticalLine