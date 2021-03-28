import { createMuiTheme } from '@material-ui/core/styles';
const brand = '#FF8E78';
const black = '#000';
const font = 'roboto,Arial,sans-serif';
export default createMuiTheme({

    palette: {
        common: {
            orange: `${brand}`,
        },
        primary: {
            main: `${brand}`,
        },
        secondary: {
            main: `${black}`,
        },
    },
    typography: {
        fontSize: '1.5rem',
        fontFamily: `${font}`,
        body2: {
            lineHeight: 1.8,
        },
        p: {
            fontSize: '1.5rem',
            fontWeight: '400',
            lineHeight: '1.5',
        },
        h1: {
            fontWeight: '400',
            color: '#fff',
            fontSize: '60px',
            lineHeight: '1.2',
        },
        h2: {
            fontWeight: '800',
            color: '#111',
            fontSize: '22px',
        },
        h3: {
            fontSize: '20px',
            fontWeight: 700,
            marginBottom: '10px',
            color: `${brand}`,
        },
        btn: {
            background:  `${brand}`,
            border: '1px solid #0779e4',
            color: '#fff',
            padding: '1rem 1.5rem',
            fontSize: '12px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            cursor: 'pointer',
            borderRadius: '4px',
            webkitBoxShadow: '0px 24px 36px -11px rgb(0 0 0 / 9%)',
            mozBoxShadow: '0px 24px 36px -11px rgba(0, 0, 0, 0.09)',
            boxShadow: '0px 24px 36px -11px rgb(0 0 0 / 9%)',
        },
        nopading: {
            padding: 0,
        }

    },
    overrides: {
        MuiTab: {
          root: {
            maxWidth: 'auto',
            minHeight: 'auto',
            minWidth: 'auto',
            padding: '1rem 1.5rem',
            '@media (min-width: 600px)': {
              minWidth: 'auto',
              minHeight: 'auto',
              maxWidth: 'auto',
            }
          }
        }
        
    },


  });