import { Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icon/material';



export const JournalPage = () => {


    return (
    <JournalLayout>
            {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi provident a pariatur magnam, voluptatem consequatur, laborum voluptates commodi obcaecati nesciunt doloremque totam voluptate
                ab dolores minima fugiat? Architecto, eaque consequatur!
        </Typography> */ }
        
        { NothingSelectedView }
        
        { /*NoteView*/ }

        <IconBotton
        
            size= 'large'
            sx={{
                color:'white',
                backgroundColor: 'error.main',
                ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                position: 'fixed',
                right: 50,
                bottom: 50,
            }}
        >

            <AddOutlined sx = {{fontsize: 35}}/>
            
        </IconBotton>

    </JournaLayout>
    )
}