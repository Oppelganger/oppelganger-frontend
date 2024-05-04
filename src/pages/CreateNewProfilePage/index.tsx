import DividerHorizontalLine from '../../UI/DividerHorizontalLine'
import Stepper from './modules/Stepper'

export default function VerticalLinearStepper() {

  return (
    <div className='w-full flex justify-center items-center h-screen overflow-scroll'>
      <div className='min-w-[700rem] max-w-[800rem] gap-[8rem] h-[90%] flex flex-col'>
        <div className='flex flex-col gap-[8rem]'>
          <h1 className='font-oddval text-[32rem]'>Создание нового профиля</h1>
          <DividerHorizontalLine />
        </div>
      
        <Stepper />
      </div>
    </div >
  )
}