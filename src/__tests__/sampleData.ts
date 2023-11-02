import { Light } from '../defintions.js';

export const SAMPLE_DATA: [
  encoded: string,
  decoded: Light,
  reëncoded?: string,
][] = [
  ['F', { LITCHR: 'F', COLOUR: [] }],
  ['FlLFl', { LITCHR: 'FlLFl', COLOUR: [] }],
  ['F.R', { LITCHR: 'F', COLOUR: ['R'] }],
  ['F.RY.5m', { LITCHR: 'F', COLOUR: ['R', 'Y'], HEIGHT: 5 }],
  [
    'AeroF.RY.5m',
    { LITCHR: 'F', COLOUR: ['R', 'Y'], HEIGHT: 5, CATLIT: 'aero' },
  ],
  ['UQ+LFl.MBu', { LITCHR: 'UQ+LFl', COLOUR: ['M', 'Bu'] }],
  ['UQ(1)+LFl.MBu', { LITCHR: 'UQ+LFl', COLOUR: ['M', 'Bu'], SIGGRP: '1' }],
  [
    '2Oc 2s4m0.1M',
    {
      LITCHR: 'Oc',
      MLTYLT: 2,
      HEIGHT: 4,
      VALMXR: 0.1,
      SIGPER: 2,
      COLOUR: [],
    },
    '2Oc.2s4m0.1M',
  ],
  [
    'Fl(3) R 8s39.4m6M', // shark island syd
    {
      LITCHR: 'Fl',
      SIGGRP: '3',
      COLOUR: ['R'],
      SIGPER: 8,
      VALMXR: 6,
      HEIGHT: 39.4,
    },
    'Fl(3)R.8s39.4m6M',
  ],
  [
    'DirAl.Fl.WRG.23m21M', // saint leonards
    {
      LITCHR: 'Al.Fl',
      CATLIT: 'directional',
      COLOUR: ['W', 'R', 'G'],
      HEIGHT: 23,
      VALMXR: 21,
    },
  ],
  [
    'F.YGR.49m(vert)', // akl harbour bridge
    {
      LITCHR: 'F',
      CATLIT: 'vertical',
      COLOUR: ['Y', 'G', 'R'],
      HEIGHT: 49,
    },
  ],
  [
    'VQ(2+1)G.6s5m3M', // akl coastguard base
    {
      LITCHR: 'VQ',
      SIGGRP: '2+1',
      COLOUR: ['G'],
      SIGPER: 6,
      HEIGHT: 5,
      VALMXR: 3,
    },
  ],
  [
    'VQ(Q)+LFl.BrBuBO.6s5m3M(hor)', // two sets of brackets
    {
      CATLIT: 'horizontal',
      LITCHR: 'VQ+LFl',
      SIGGRP: 'Q',
      COLOUR: ['Br', 'Bu', 'B', 'O'],
      SIGPER: 6,
      HEIGHT: 5,
      VALMXR: 3,
    },
  ],
];
