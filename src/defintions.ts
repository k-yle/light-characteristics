export const COLOURS = {
  /**  1 */ W: 'white',
  /**  2 */ B: 'black',
  /**  3 */ R: 'red',
  /**  4 */ G: 'green',
  /**  5 */ Bu: 'blue',
  /**  6 */ Y: 'yellow',
  /**  7 */ Gy: 'grey',
  /**  8 */ Br: 'brown',
  /**  9 */ A: 'amber',
  /** 10 */ V: 'violet',
  /** 11 */ O: 'orange',
  /** 12 */ M: 'mangeta',
  /** 12 */ P: 'pink',
};
export type Colour = keyof typeof COLOURS;

export const LIGHT_CATEGORIES = {
  /**  1 */ directional: 'directional function',
  /**  2 DEPRECATED: rear/upper light */
  /**  3 DEPRECATED: front/lower light */
  /**  4 */ leading: 'leading light',
  /**  5 */ aero: 'aero light',
  /**  6 */ air_obstruction: 'air obstruction light',
  /**  7 */ fog_detector: 'fog detector light',
  /**  8 */ floodlight: 'flood light',
  /**  9 */ strip_light: 'strip light',
  /** 10 */ subsidiary: 'subsidiary light',
  /** 11 */ spotlight: 'spotlight',
  /** 12 */ front: 'front',
  /** 13 */ rear: 'rear',
  /** 14 */ lower: 'lower',
  /** 15 */ upper: 'upper',
  /** 16 */ moire: 'moiré effect',
  /** 17 */ emergency: 'emergency',
  /** 18 */ bearing: 'bearing light',
  /** 19 */ horizontal: 'horizontally disposed',
  /** 20 */ vertical: 'vertically disposed',
};
export type LightCategory = keyof typeof LIGHT_CATEGORIES;

export const LIGHT_CHARACTERISTICS = {
  /**  1 */ F: 'fixed',
  /**  2 */ Fl: 'flashing',
  /**  3 */ LFl: 'long-flashing',
  /**  4 */ Q: 'quick-flashing',
  /**  5 */ VQ: 'very quick-flashing',
  /**  6 */ UQ: 'ultra quick-flashing',
  /**  7 */ Iso: 'isophased',
  /**  8 */ Oc: 'occulting',
  /**  9 */ IQ: 'interrupted quick-flashing',
  /** 10 */ IVQ: 'interrupted very quick- flashing',
  /** 11 */ IUQ: 'interrupted ultra quick- flashing',
  /** 12 */ Mo: 'morse',
  /** 13 */ FFl: 'fixed/flash',
  /** 14 */ FlLFl: 'flash/long-flash',
  /** 15 */ OcFl: 'occulting/flash',
  /** 16 */ FLFl: 'fixed/long-flash',
  /** 17 */ 'Al.Oc': 'occulting alternating',
  /** 18 */ 'Al.LFl': 'long-flash alternating',
  /** 19 */ 'Al.Fl': 'flash alternating',
  /** 20 */ 'Al.Gr': 'group alternating',
  /** 21 DEPRECATED: 2 fixed (vertical)
  /** 22 DEPRECATED: 2 fixed (horizontal)
  /** 23 DEPRECATED: 3 fixed (vertical)
  /** 24 DEPRECATED: 3 fixed (horizontal)
  /** 25 */ 'Q+LFl': 'quick-flash plus long- flash',
  /** 26 */ 'VQ+LFl': 'very quick-flash plus long- flash',
  /** 27 */ 'UQ+LFl': 'ultra quick-flash plus long- flash',
  /** 28 */ Al: 'alternating',
  /** 29 */ 'Al.FFl': 'fixed and alternating flashing',
};
export type LightCharacteristic = keyof typeof LIGHT_CHARACTERISTICS;

export interface Light {
  /** Light Category */
  CATLIT?: LightCategory;
  /** Multiplicity: the number of lights */
  MLTYLT?: number;
  /**
   * Signal group: Either:
   *  - The number of flashes, or
   *  - The combination of flashes, or
   *  - The morse-code characters.
   */
  SIGGRP?: string;
  /** Light characteristic */
  LITCHR: LightCharacteristic;
  /** Colour(s) */
  COLOUR: Colour[];
  /**
   * Signal period (in seconds):
   * The time for one entire cycle of the light's pattern
   */
  SIGPER?: number;
  /** Focal height (in metres) */
  HEIGHT?: number;
  /**
   * Value of maximum range (in nautical miles):
   * The furthest distance that the light can be seen.
   */
  VALMXR?: number;
}
