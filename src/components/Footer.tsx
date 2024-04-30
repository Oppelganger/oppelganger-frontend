import { Typography, Link } from "@mui/material"

const Footer = () => {
    return (
        <Typography
            variant="h1"
            typography='h6'
            gutterBottom
            display='flex'
            width='100%'
            justifyContent='center'

        >
            <Link href={'https://t.me/Racionalus'} underline="none" target="_blank" rel="noreferrer">Приходько Александр</Link>
            &nbsp;и&nbsp;
            <Link href={'https://funcfolio.ru'} underline="none" target="_blank" rel="noreferrer">Царюк Артём</Link>
        </Typography>
    )
}

export default Footer