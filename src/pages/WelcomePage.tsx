import { Box, Container, Divider, Typography } from '@mui/material';
import UploadNewProfile from '../components/UploadNewProfile';
import CreateNewProfile from '../components/CreateNewProfile';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CheckCompatibilityCircle from '../components/CheckCompatibilityCircle';

const WelcomePage = () => {
  return (
    <Container maxWidth='md'>
      <Box
        sx={{ height: '100vh' }}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
      >
        <Box
          sx={{ paddingTop: '70px' }}
        >
          <Header />
        </Box>

        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          gap={1}

        >
          <CheckCompatibilityCircle />

          <Typography>
            Проверка совместимости компьютера и ПО...
          </Typography>
        </Box>

        <Box
          display='flex'
          flexDirection='column'
          gap={4}
          justifyContent='start'
          sx={{ paddingBottom: '50px', }}
          alignContent='center'
          justifyItems='center'
        >
                    <Divider flexItem />

          <Box
            display='flex'
            alignItems="center"
            justifyContent='center'
            gap={4}
            height='100%'
            sx={{ paddingX: '200px' }}
          >
            <CreateNewProfile />

            <UploadNewProfile />
          </Box>


          <Footer />
        </Box>

      </Box>
    </Container>
  )
}

export default WelcomePage