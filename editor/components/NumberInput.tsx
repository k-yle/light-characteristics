import { useEffect, useId, useState } from 'react';
import { FormControl, FormHelperText, TextField } from '@mui/material';

export const NumberInput: React.FC<{
  value: number | undefined;
  onChange(newValue: number | undefined): void;
  label: string;
  unit?: string;
}> = ({ value, onChange, label, unit }) => {
  const helpId = useId();
  const [internalValue, setInternalValue] = useState('');

  useEffect(() => setInternalValue(`${value || ''}`), [value]);

  return (
    <FormControl size="small" style={{ width: '100%' }}>
      <TextField
        label={label}
        size="small"
        value={internalValue ?? ''}
        onChange={(event) => {
          const newValue = event.target.value;
          setInternalValue(newValue);
          if (newValue === '') onChange(undefined);
          else if (!Number.isNaN(+newValue)) onChange(+newValue);
        }}
        error={Number.isNaN(+internalValue) && internalValue !== ''}
        aria-describedby={unit ? helpId : undefined}
        autoComplete="off"
      />
      {unit && <FormHelperText id={helpId}>{unit}</FormHelperText>}
    </FormControl>
  );
};
