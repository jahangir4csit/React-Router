import { createMuiTheme } from '@material-ui/core/styles';
const brandBlue = "#0779e4";
export default createMuiTheme({

    palette: {
        common: {
            blue: `${brandBlue}`,
        },
        primary: {
            main: `${brandBlue}`
        },
    },
    typography: {
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
        btn: {
            background:  `${brandBlue}`,
            border: '1px solid #0779e4',
            color: '#fff',
            padding: '2.5rem',
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

    }

  });