import { ReactComponent as Loader } from '../assets/loader.svg'
import { ReactComponent as Xmark } from '../assets/Xmark.svg'
import { ReactComponent as SuccessMark } from '../assets/SuccessMark.svg'

type CompatibilityCheckProps = {
    isLoading: boolean
    compatible: boolean
    message?: string
}

const CompatibilityCheck: React.FC<CompatibilityCheckProps> = ({ isLoading, compatible, message }) => {
    if (isLoading) {
        return (<>
            <span className="w-[40rem] h-[40rem] block animate-spin" role="progressbar">
                <Loader />
            </span>

            <p>{message}</p>
        </>)
    }

    return (<>
        {compatible
            ?
            <SuccessMark />
            :
            <Xmark />
        }

        <p>{message}</p>
    </>)
}

export default CompatibilityCheck