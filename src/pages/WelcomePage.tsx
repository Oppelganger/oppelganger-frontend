import Header from '../components/Header';
import Footer from '../components/Footer';
import { ReactComponent as Loader } from '../assets/loader.svg'
import Button from '../components/Button';
import { useRef } from 'react';
import { ReactComponent as Cloud } from '../assets/cloud.svg'

const WelcomePage = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className='px-[240rem] mx-[auto]'>
      <div className='flex flex-col justify-between h-[100vh]'>
        <div className='pt-[70rem]'>
          <Header />
        </div>

        <div className='flex justify-center items-center flex-col gap-[12rem]'>
          <span className="w-[40rem] h-[40rem] block animate-spin" role="progressbar">
            <Loader />
          </span>
          
          <p>Проверка совместимости компьютера и ПО...</p>
        </div>

        <div className='flex flex-col gap-[32rem] items-center pb-[50rem]'>
          <hr className='h-[2rem] border-[#00000020] w-full' />

          <div className='flex items-center justify-center gap-[32rem] h-full px-[200rem]'>
            <Button color='--primary' text='Создать новый профиль' />
            
            <Button color='--secondary' text='Загрузить'
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