import ProceedToGenerationButton from './ProceedToGenerationButton'
import { stepType } from '..'
import Button from '../../../../../UI/Button'
import ContinueButton from './ContinueButton'

type StepBodyProps = {
    step: stepType,
    index: number,
    activeStep: number,
    steps: stepType[],
    handleNext: () => void,
    handleBack: () => void,
    stepData: any
}

const StepBody: React.FC<StepBodyProps> = ({ step, index, activeStep, steps, handleNext, handleBack }) => {
    return (
        <div className={`${activeStep >= index + 1 ? 'border-l-[--primary]' : 'border-l-[gray]'} ml-[20rem] border-l-[1rem] pl-[100rem] h-fit`}>
            <form onSubmit={(e) => { e.preventDefault(); handleNext() }} className={`
                ${activeStep === index ? `max-h-[1000rem] pb-[16rem] delay-160` : 'max-h-[0rem] pb-[0rem] animate-out fade-out animate-in fade-in'} 
                flex flex-col overflow-hidden gap-[16rem] transition-all duration-300
            `}>
                <p className='text-[28rem] font-oddval'>{step.description}</p>

                {step.component}

                <div className='flex gap-[32rem]'>
                    <div className='w-full'>
                        {activeStep === steps.length - 1
                            ?
                            <ProceedToGenerationButton />
                            :
                            <ContinueButton index={index} />
                        }
                    </div>

                    {index !== 0 &&
                        <div className='w-[15%]'>
                            <Button
                                background='bg-[--secondary]'
                                clickHandler={handleBack}
                                text="Назад" />
                        </div>
                    }
                </div>
            </form>
        </div>
    )
}

export default StepBody