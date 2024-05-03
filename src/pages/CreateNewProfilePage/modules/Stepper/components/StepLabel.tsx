import { stepType } from ".."
import SuccessMark from '../../../../../UI/SuccessMark'

type StepLabelProps = {
    step: stepType
    index: number
    activeStep: number
}

const StepLabel: React.FC<StepLabelProps> = ({ step, index, activeStep }) => {
    return (
        <div className='flex items-center gap-[8rem] mr-[20rem] h-[48rem] ml-[8rem] font-bold'>
            <div className={`${activeStep >= index ? 'bg-[--primary]' : 'bg-[gray]/70'} w-[24rem] h-[24rem] rounded-[50%] flex items-center justify-center text-white`}>
                {activeStep > index ? <SuccessMark additionalStyles='w-[10rem]' fill='white' /> : index + 1}
            </div>

            {step.label}
        </div>
    )
}

export default StepLabel