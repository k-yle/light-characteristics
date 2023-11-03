import { useId } from 'react';
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import type { Colour } from 'light-characteristics';

/** override default css colours for these ones */
const COLOUR_MAP: Record<string, string> = {
  W: '#ccc',
  Y: '#fd0',
  A: '#eb4',
  M: '#f0f',
} satisfies Partial<Record<Colour, string>>;

export const MultipleSelect = <T extends string>({
  value,
  onChange,
  label,
  options,
}: {
  value: T[];
  onChange(newValue: T[]): void;
  label: string;
  options: Record<T, string>;
}) => {
  const id = useId();

  const handleChange = (event: SelectChangeEvent<T[]>) => {
    const newValue = event.target.value;
    onChange(Array.isArray(newValue) ? newValue : (newValue.split(',') as T[]));
  };

  return (
    <FormControl
      size="small"
      style={{ width: '100%', textTransform: 'capitalize' }}
    >
      <InputLabel id={id} size="small">
        {label}
      </InputLabel>
      <Select<T[]>
        labelId={id}
        multiple
        label={label}
        value={value}
        size="small"
        onChange={handleChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={(keys) => keys.map((key) => options[key]).join(', ')}
      >
        {Object.entries<string>(options).map(([optionId, optionName]) => (
          <MenuItem
            key={optionId}
            value={optionId}
            style={{ minHeight: 'none', textTransform: 'capitalize' }}
          >
            <Checkbox
              checked={value.includes(optionId as T)}
              style={{ padding: 0, color: COLOUR_MAP[optionId] || optionName }}
            />
            <strong>{optionId}</strong>: {optionName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
