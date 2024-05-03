import Spinner from "../UI/Spinner"

type LoaderWithMessageProps = {
    message?: string
}

const LoaderWithMessage: React.FC<LoaderWithMessageProps> = ({ message }) => {
    return (
        <div className='flex flex-col items-center gap-[12rem]'>
            <Spinner />

            <p>{message}</p>
        </div>
    )
}

export default LoaderWithMessage