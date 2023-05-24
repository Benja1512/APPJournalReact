import { createTheme } from '@maui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254',
        },
        error: {
            main: red.A400,
        }
    }
})