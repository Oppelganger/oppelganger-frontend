import { ReactComponent as FailMark } from '../../../assets/FailMark.svg'
import { ReactComponent as SuccessMark } from '../../../assets/SuccessMark.svg'
import LoaderWithMessage from '../../../components/LoaderWithMessage'

type CompatibilityCheckProps = {
    isLoading: boolean
    compatible: boolean
    message?: string
}

const CompatibilityCheck: React.FC<CompatibilityCheckProps> = ({ isLoading, compatible, message }) => {
    if (isLoading) {
        return <LoaderWithMessage message={message}/>
    }

    return (<div className='flex flex-col gap-[12rem] items-center'>
        <span className="w-[40rem] h-[40rem] block">
            {compatible
                ?
                <SuccessMark />
                :
                <FailMark />
            }
        </span>

        <p>{message}</p>
    </div>)
}

export default CompatibilityCheck