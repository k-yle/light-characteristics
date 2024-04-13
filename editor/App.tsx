import { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import {
  decodeLight as unsafeDecodeLight,
  encodeLight,
} from 'light-characteristics';
import { LightEditor } from './LightEditor';

const defaultState = encodeLight({
  COLOUR: ['R', 'Y'],
  LITCHR: 'LFl',
  CATLIT: 'front',
  SIGPER: 5,
  VALMXR: 1,
});

const inititalState = window.location.hash.slice(1) || defaultState;

/** the original function could throw an error */
const decodeLight = (string: string) => {
  try {
    return unsafeDecodeLight(string);
  } catch {
    return undefined;
  }
};

const DARK_MODE = window.location.search.includes('dark');

document.body.style.backgroundColor = DARK_MODE ? '#536d8a' : 'unset';
const theme = createTheme(
  DARK_MODE ? { palette: { mode: 'dark', primary: { main: '#fff' } } } : {},
);

export const App: React.FC = () => {
  const [text, setText] = useState(inititalState);
  const [light, setLight] = useState(decodeLight(inititalState));

  useEffect(() => {
    window.history.replaceState(null, '', `#${text}`);
  }, [text]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ maxWidth: 700, margin: 'auto' }}>
        <TextField
          size="small"
          label="Encoded value"
          value={text}
          style={{ width: '100%' }}
          onChange={(event) => {
            const newValue = event.target.value;
            setText(newValue);
            setLight(decodeLight(newValue));
          }}
        />
        <br />
        <br />
        <br />
        {light ? (
          <LightEditor
            light={light}
            onChange={(newLight) => {
              setLight(newLight);
              setText(encodeLight(newLight));
            }}
          />
        ) : (
          <Alert
            severity="error"
            action={
              <Button
                size="small"
                variant="contained"
                color="error"
                onClick={() => {
                  setText(defaultState);
                  setLight(decodeLight(defaultState));
                }}
              >
                Reset
              </Button>
            }
          >
            Invalid syntax
          </Alert>
        )}
      </div>
    </ThemeProvider>
  );
};
