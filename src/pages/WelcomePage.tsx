import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { useRef } from 'react';
import { ReactComponent as Cloud } from '../assets/cloud.svg'
import CompatibilityCheck from '../components/CompatibilityCheck';
import { checkMobile } from '../utils/checkMobile';

import useCompatibility from '../hooks/useCompatibility';

const WelcomePage = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const isMobile = checkMobile()
  const { compatible, message, isLoading } = useCompatibility()

  return (
    <div className='px-[240rem] mx-[auto]'>
      <div className='flex flex-col justify-between h-[100vh]'>
        <div className='pt-[70rem]'>
          <Header />
        </div>

        <div className='flex justify-center items-center flex-col gap-[12rem]'>
          <CompatibilityCheck
            isMobile={isMobile}
            isLoading={isLoading}
            compatible={compatible}
            message={message} />
        </div>

        <div className='flex flex-col gap-[32rem] items-center pb-[50rem]'>
          <hr className='h-[2rem] border-[#00000020] w-full' />

          <div className='flex items-center justify-center gap-[32rem] h-full px-[200rem]'>
            <Button
              background='bg-[--primary]'
              text='Создать новый профиль'
              disabled={!compatible || isMobile || isLoading}
            />

            <Button
              background='bg-[--secondary]'
              text='Загрузить'
              disabled={!compatible || isMobile || isLoading}
              width='w-fit'
              clickHandler={() => inputRef.current?.click()}
            >
              <Cloud className='mr-[8rem] ml-[-4rem]' />
              <input ref={inputRef} className='custom-input' type='file' />
            </Button>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default WelcomePage