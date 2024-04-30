import { Button } from "@mui/material";

const CreateNewProfile = () => {
    return (
        <Button
            onClick={() => {
                alert('clicked');
            }}
            variant='contained'
            fullWidth
            size='large'
            color='primary'
            sx={{ height: '70px', boxShadow: 2, fontWeight: 'bold', borderRadius: '20px' }}
        >
            Создать новый профиль
        </Button>
    )
}

export default CreateNewProfile