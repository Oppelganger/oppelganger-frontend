import NavigateBackButton from '../../../components/NavigateBackButton'

const Header = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='ml-[-58rem] mr-[8rem]'>
                <NavigateBackButton />
            </div>
            
            <p className='font-oddval text-[32rem] text-center whitespace-nowrap'>Интерактивная страница</p>
        </div>
    )
}

export default Header