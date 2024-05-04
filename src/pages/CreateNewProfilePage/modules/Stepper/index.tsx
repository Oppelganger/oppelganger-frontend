import { Fragment, useState } from 'react'
import SexSelector from './components/SexSelector'
import UploadFile from './components/UploadFile'
import IdInput from './components/IdInput'
import ContextInputField from './components/ContextInputField'
import StepVerticalLine from './UI/StepVerticalLine'
import StepBody from './components/StepBody'
import StepLabel from './components/StepLabel'

const steps = [
    {
        label: 'ID',
        description: `Введите идентификатор`,
        component: <IdInput />
    },
    {
        label: 'Поведение',
        description: `Поведение`,
        component: <ContextInputField placeholder={`Задайте контекст поведения: какими должны быть ответы?\nС каким настроением должны быть ответы?`} />
    },
    {
        label: 'Пол',
        description:
            'Выберите пол',
        component: <SexSelector />
    },
    {
        label: 'Речь',
        description: `Загрузите аудио-фрагмент`,
        component: <UploadFile fileType={'audio'} />
    },
    {
        label: 'Видео',
        description: `Загрузите видео-фрагмент`,
        component: <UploadFile fileType={'video'} />
    },
    {
        label: 'Финиш'
    }
]

export type stepType = typeof steps[0]

const Stepper = () => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    return (<div className='flex flex-col w-full'>
        {steps.map((step, index) => (
            <Fragment key={step.label}>
                <StepLabel
                    activeStep={activeStep}
                    index={index}
                    step={step}
                />

                <StepBody
                    activeStep={activeStep}
                    index={index} steps={steps}
                    handleBack={handleBack}
                    handleNext={handleNext}
                    step={step}
                    stepData={step.component}
                />

                <StepVerticalLine activeStep={activeStep} index={index} steps={steps} />
            </Fragment>
        ))}
    </div>)
}

export default Stepper