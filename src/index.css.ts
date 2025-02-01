import { style } from '@vanilla-extract/css';
import path from 'node:path';

export const something = style({
    color: 'red',
});

export const p = path.resolve('./src');
