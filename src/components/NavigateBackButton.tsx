import Button from '../UI/Button'
import arrowLeft from '../assets/arrowLeft.svg'
import { useNavigate } from 'react-router-dom'

const NavigateBackButton = () => {
    const navigate = useNavigate()

    return (
        <Button text='' background='bg-[transparent]' noShadow={true} height='h-[35rem]' width='w-[50rem]'
            clickHandler={() => navigate(-1)}>
            <img src={arrowLeft} className='min-w-[30rem]' alt='arrow left' />
        </Button>
    )
}

export default NavigateBackButton