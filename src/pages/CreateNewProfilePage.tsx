import Button from '../components/Button'
import { Fragment, useEffect, useState } from 'react'
import SuccessMark from '../components/UI/SuccessMark'
import SexSelector from '../components/SexSelector'
import { useCreateNewProfileStore } from '../store/store'
import ContextInputField from '../components/ContextInputField'
import UploadFile from '../components/UploadFile'
import ProceedToGenerationButton from '../components/ProceedToGenerationButton'

const steps = [
  {
    label: 'Поведение',
    description: `Поведение`,
    component: <ContextInputField />
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

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0)
  const { sex, audioFile, videoFile, description } = useCreateNewProfileStore()
  const [object, setObject] = useState<Array<'male' | 'female' | string | File | null>>([])

  useEffect(() => {
    setObject([
      description,
      sex,
      audioFile,
      videoFile
    ])

  }, [sex, audioFile, videoFile, description])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <div className='w-full flex justify-center items-center h-screen animate-in fade-in-5 duration-700 overflow-hidden'>
      <div className='min-w-[700rem] max-w-[800rem] h-[90%]'>
        <div>
          {steps.map((step, index) => (
            <Fragment key={step.label}>
              <div className='flex items-center gap-[8rem] mr-[20rem] h-[48rem] ml-[8rem] font-bold'>
                <div className={`${activeStep >= index ? 'bg-[--primary]' : 'bg-[gray]/70'} w-[24rem] h-[24rem] *:fill-black rounded-[50%] flex items-center justify-center text-white`}>
                  {activeStep > index ? <SuccessMark additionalStyles='w-[10rem]' fill='white' /> : index + 1}
                </div>

                {step.label}
              </div>

              <div className={`${activeStep >= index + 1 ? 'border-l-[--primary]' : 'border-l-[gray]'} ml-[20rem] border-l-[1rem] pl-[100rem] h-fit`}>
                <div className={`
                  ${activeStep === index ? `max-h-[1000rem] pb-[16rem] delay-160` : 'max-h-[0rem] pb-[0rem] animate-out fade-out animate-in fade-in'} 
                  flex flex-col overflow-hidden gap-[16rem] transition-all duration-300`}
                >
                  <p className='text-[28rem] font-oddval'>{step.description}</p>

                  {step.component}

                  <div className='flex gap-[32px]'>
                    <div className='w-full'>
                      {activeStep === steps.length - 1
                        ?
                        <ProceedToGenerationButton />
                        :
                        <Button background='bg-[--primary]'
                          disabled={!object[index]}
                          clickHandler={handleNext}
                          text='Продолжить'
                        />
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
                </div>
              </div>

              <div className={`
                ${index !== steps.length - 1 && activeStep !== index ? 'h-[33rem]' : 'h-0 delay-160'} 
                ${activeStep >= index + 1 ? 'border-l-[--primary]' : 'border-l-[gray]'} ml-[20rem] border-l-[1rem] duration-150`}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div >
  )
}