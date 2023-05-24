import { Box } from "@mui/system"

export const SideBar = ({ drawerWidth}) => {
    return(
       
        <Box
            component = ''nav
            sx = {{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >

            <Drawer
                variant='permanent' // temporary
                open
                sx={{
                    display: { xs: 'block'}
                    '& .MuiDrawer-paper': { boxSizing: ' border-box', width : drawerWdith}
                }}
            >

                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Fernando Herrera

                    </Typography>
                </Toolbar>
                <Divider/>
                <List>
                    {
                        ['enero', 'febero', 'marzo', 'abril' ].map{ text => (
                            <ListItem key={ text } disablePadding>
                                <LisItemButton>
                                    <ListItemIcon>
                                        <TurnedInOutIcon>
                                            <Grid container>
                                                <ListItemText primary={ text }/>
                                                <ListItemText secondary={ '' }/>

                                              
                                            </Grid>
                                        </TurnedInOutIcon>
                                    </ListItemIcon>
                                </LisItemButton>
                            </ListItem>
                        ) }
                    }
                </List>


            </Drawer>

        </Box>
    )
}