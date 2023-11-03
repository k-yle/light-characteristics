import { useId } from 'react';
import { FormControl, FormHelperText, TextField } from '@mui/material';

export const TextInput: React.FC<{
  value: string | undefined;
  onChange(newValue: string | undefined): void;
  label: string;
  unit?: string;
}> = ({ value, onChange, label, unit }) => {
  const helpId = useId();

  return (
    <FormControl size="small" style={{ width: '100%' }}>
      <TextField
        label={label}
        size="small"
        value={value ?? ''}
        onChange={(event) => onChange(event.target.value)}
        aria-describedby={unit ? helpId : undefined}
        autoComplete="off"
      />
      {unit && <FormHelperText id={helpId}>{unit}</FormHelperText>}
    </FormControl>
  );
};
