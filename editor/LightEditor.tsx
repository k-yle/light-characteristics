import {
  Light,
  COLOURS,
  LIGHT_CATEGORIES,
  LIGHT_CHARACTERISTICS,
} from 'light-characteristics';
import { Grid } from '@mui/material';
import {
  MultipleSelect,
  SingleSelect,
  NumberInput,
  TextInput,
} from './components';

export const LightEditor: React.FC<{
  light: Light;
  onChange(newLight: Light): void;
}> = ({ light, onChange }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <SingleSelect
          label="Characteristic"
          value={light.LITCHR}
          onChange={(newValue) => onChange({ ...light, LITCHR: newValue })}
          options={LIGHT_CHARACTERISTICS}
        />
      </Grid>
      <Grid item xs={6}>
        <SingleSelect
          label="Category"
          value={light.CATLIT}
          onChange={(newValue) => onChange({ ...light, CATLIT: newValue })}
          options={LIGHT_CATEGORIES}
        />
      </Grid>
      <Grid item xs={6}>
        <NumberInput
          label="Number of lights"
          value={light.MLTYLT}
          onChange={(newValue) => onChange({ ...light, MLTYLT: newValue })}
        />
      </Grid>
      <Grid item xs={6}>
        <MultipleSelect
          label="Colour"
          value={light.COLOUR}
          onChange={(newColours) => onChange({ ...light, COLOUR: newColours })}
          options={COLOURS}
        />
      </Grid>
      <Grid item xs={6}>
        <NumberInput
          label="Period"
          unit="Seconds"
          value={light.SIGPER}
          onChange={(newValue) => onChange({ ...light, SIGPER: newValue })}
        />
      </Grid>
      <Grid item xs={6}>
        <NumberInput
          label="Lens Height"
          unit="Metres"
          value={light.HEIGHT}
          onChange={(newValue) => onChange({ ...light, HEIGHT: newValue })}
        />
      </Grid>
      <Grid item xs={6}>
        <NumberInput
          label="Visibility"
          unit="Nautical miles"
          value={light.VALMXR}
          onChange={(newValue) => onChange({ ...light, VALMXR: newValue })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextInput
          label="Signal Group"
          unit="Number of flashes, or combination of flashes, or morse-code."
          value={light.SIGGRP}
          onChange={(newValue) => onChange({ ...light, SIGGRP: newValue })}
        />
      </Grid>
    </Grid>
  );
};
