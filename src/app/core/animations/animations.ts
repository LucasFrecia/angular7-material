import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

export const popin = [
    trigger('enter-item', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ]),
    trigger('toolbar-title-enter', [
      transition(':enter', [
        style({  'margin-left': '-200px', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ 'margin-left': '0px', opacity: 1 }))  // final
      ])
    ])
];
