import { style } from '@vanilla-extract/css';

export const card = style({
    background: 'white',
});

export const submitButton = style({
    backgroundColor: 'red',
    selectors: {
        [`${card} &`]: {
            backgroundColor: 'blue',
        },
    },
});
