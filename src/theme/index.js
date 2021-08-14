import {createTheme, colors} from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createTheme({
    palette: {
        background: {
            default: colors.grey.A100,
            paper: colors.common.white
        },
        primary: {
            light: '#0ea3ff',
            main: '#0770e3',
            dark: '#006aa5',
            contrastText: '#fff'
        },
        secondary: {
            main: '#111236',
            light: '#5a489b',
            contrastText: '#ff7b59'
        },
        text: {
            primary: '#111236'
        }
    },
    typography,
    shadows
});

export default theme;
