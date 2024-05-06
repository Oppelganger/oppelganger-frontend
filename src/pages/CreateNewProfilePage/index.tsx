import DividerHorizontalLine from '../../UI/DividerHorizontalLine'
import NavigateBackButton from '../../components/NavigateBackButton'
import Stepper from './modules/Stepper'

export default function VerticalLinearStepper() {

  return (
    <div className='w-full flex justify-center items-center h-screen overflow-scroll'>
      <div className='min-w-[700rem] max-w-[800rem] gap-[8rem] h-[90%] flex flex-col'>
        <div className='flex flex-col gap-[8rem]'>
          <div className='flex items-center gap-[8rem]'>
            <NavigateBackButton />
            <h1 className='font-oddval text-[32rem]'>Создание нового профиля</h1>
          </div>
          <DividerHorizontalLine />
        </div>

        <Stepper />
      </div>
    </div >
  )
}