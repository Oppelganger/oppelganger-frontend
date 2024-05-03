import { ReactComponent as Loader } from '../assets/loader.svg'

const Spinner = () => {
    return (
        <span className="w-[40rem] h-[40rem] block animate-spin" role="progressbar">
            <Loader />
        </span>
    )
}

export default Spinner