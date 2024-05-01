import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <h3 className="mb-[5.6rem] text-[20rem] flex justify-center w-full *:text-[--primary] no-underline">
            <Link to={'https://t.me/Racionalus'} target="_blank" rel="noreferrer">Приходько Александр</Link>
            &nbsp;и&nbsp;
            <Link to={'https://funcfolio.ru'} target="_blank" rel="noreferrer">Царюк Артём</Link>
        </h3>
    )
}

export default Footer