import { Box } from "@mui/system"
import { Navbar } from "../component";


const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
return (
    <Box sx={{ display: 'flex' }}>

        <Navbar drawerWidth = { drawerWidth }/>


        {/* Sidebar drawerWidth */}

        <Box
            component='main'
            sx={{ flexgrow:  1, p: 3 }}
        >

               {/* Toolbar */}

                 { children }

        </Box>


    </Box>
)

}