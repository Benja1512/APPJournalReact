import { LogoutOutlined } from '@mui/icons-material'
import React from 'react'


export const Navbar = ({ drawerWidth = 240 }) => {
    return (
        <><AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${ drawerWidth }px)` },
                ml: { sm: `${ drawerWidth }px`}
            }}
        >

            <Toolbar>
                <IconButton
                    color='inherit'
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none '}}}
                
                >
                    <MenuOutlined />
                </IconButton>
                <Grid container direction= 'row ' justifyContent='space-between'>
                    <Typography variant='6' nowrap component='div'>JournalApp</Typography>

                    <IconButton color = 'error'>
                        <LogoutOutlined/>
                    </IconButton>

                </Grid>

            </Toolbar>


        </AppBar>
    )

}