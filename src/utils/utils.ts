import * as React from 'react';

export const isEven = (n: number): boolean => {
    return n % 2 == 0;
}

export const player1Cards = [
    {
      "id": 1,
      "tile": 0,
      "name": "A",
      "background_color": "red"
    },
    {
      "id": 2,
      "tile": 0,
      "name": "B",
      "background_color": "pink"
    },
    {
      "id": 3,
      "tile": 0,
      "name": "C",
      "background_color": "orange"
    },
  ];

export const listOfTiles = [
    {
      "id": 13,
      "tile": 1,
      "name": "DEFAULT",
      "background_color": "blue"
    },
    {
      "id": 14,
      "tile": 2,
      "name": "DEFAULT",
      "background_color": "blue"
    },
    {
      "id": 15,
      "tile": 3,
      "name": "DEFAULT",
      "background_color": "blue"
    },
  ];
