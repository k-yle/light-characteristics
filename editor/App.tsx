import { useState } from 'react';
import {
  Alert,
  Button,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import {
  Light,
  decodeLight as unsafeDecodeLight,
  encodeLight,
} from 'light-characteristics';
import { LightEditor } from './LightEditor';

const inititalState: Light = {
  COLOUR: ['R', 'Y'],
  LITCHR: 'LFl',
  CATLIT: 'front',
  SIGPER: 5,
  VALMXR: 1,
};

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
  const [text, setText] = useState(encodeLight(inititalState));
  const [light, setLight] = useState<Light | undefined>(inititalState);

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
                  setText(encodeLight(inititalState));
                  setLight(inititalState);
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
