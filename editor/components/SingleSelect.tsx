import { useId } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';

export const SingleSelect = <T extends string>({
  value,
  onChange,
  label,
  options,
}: {
  value: T | undefined;
  onChange(newValue: T): void;
  label: string;
  options: Record<T, string>;
}) => {
  const id = useId();

  return (
    <FormControl
      size="small"
      style={{ width: '100%', textTransform: 'capitalize' }}
    >
      <InputLabel id={id} size="small">
        {label}
      </InputLabel>
      <Select<T>
        labelId={id}
        label={label}
        value={value || ''}
        size="small"
        onChange={(event) => onChange((event.target.value || undefined) as T)}
        input={<OutlinedInput label="Tag" />}
        renderValue={(key) => options[key] || 'Unspecified'}
      >
        {Object.entries<string>(options).map(([optionId, optionName]) => (
          <MenuItem
            key={optionId}
            value={optionId}
            style={{ minHeight: 'none', textTransform: 'capitalize' }}
          >
            <strong>{optionId}</strong>: {optionName}
          </MenuItem>
        ))}
        <MenuItem key="" value="" style={{ minHeight: 'none' }}>
          <em>Unspecified</em>
        </MenuItem>
      </Select>
    </FormControl>
  );
};
