import * as React from 'react';

export const isEven = (n: number): boolean => {
    return n % 2 == 0;
}

export const updateTileListAccordingToStrength = (
  index: number, 
  currentPlayer: number, 
  tileList: any,
  tilesToCheckAgainst: any,
  ) => {
    let currentTileAbility = {};
    let rivalTiles = [];

    tilesToCheckAgainst.map((checkItem) => {
      tileList.map((item) => {
        if (item.tile === index) {
          currentTileAbility = item.ability;
        }
        if (item.tile === checkItem.tile && currentPlayer !== item.player && item.ability) {
          rivalTiles.push({
            ability: item.ability,
            tile: checkItem.tile,
            location: checkItem.location
          });
        }
      });
    });

    if (!rivalTiles) {
      return tileList;
    }

    let listOfWins = [];
    rivalTiles.map((item) => {
      if (currentTileAbility[item.location] > item.ability[item.location]) {
        listOfWins.push(item.tile);
      }
    });

    tileList.map((item) => {
      if (listOfWins.includes(item.tile)) {
        item.player = currentPlayer;
      }
    });

    return tileList
}

export const player1Cards = [
    {
      "id": 10,
      "player": 1,
      "tile": 0,
      "name": "A",
      "background_color": "red",
      "ability": {
        "top": 2,
        "bottom": 4,
        "right": 3,
        "left": 5,
        "power": 50
      }
    },
    {
      "id": 11,
      "player": 1,
      "tile": 0,
      "name": "B",
      "background_color": "pink",
      "ability": {
        "top": 3,
        "bottom": 5,
        "right": 1,
        "left": 2,
        "power": 50
      }
    },
    {
      "id": 12,
      "player": 1,
      "tile": 0,
      "name": "C",
      "background_color": "orange",
      "ability": {
        "top": 5,
        "bottom": 2,
        "right": 3,
        "left": 4,
        "power": 50
      }
    },
    {
      "id": 13,
      "player": 1,
      "tile": 0,
      "name": "D",
      "background_color": "purple",
      "ability": {
        "top": 1,
        "bottom": 3,
        "right": 4,
        "left": 5,
        "power": 50
      }
    },
    {
      "id": 14,
      "player": 1,
      "tile": 0,
      "name": "E",
      "background_color": "green",
      "ability": {
        "top": 2,
        "bottom": 4,
        "right": 5,
        "left": 2,
        "power": 50
      }
    },
  ];

  export const player2Cards = [
    {
      "id": 15,
      "player": 2,
      "tile": 0,
      "name": "F",
      "background_color": "red",
      "ability": {
        "top": 1,
        "bottom": 5,
        "right": 1,
        "left": 3,
        "power": 50
      }
    },
    {
      "id": 16,
      "player": 2,
      "tile": 0,
      "name": "G",
      "background_color": "pink",
      "ability": {
        "top": 5,
        "bottom": 1,
        "right": 5,
        "left": 1,
        "power": 50
      }
    },
    {
      "id": 17,
      "player": 2,
      "tile": 0,
      "name": "H",
      "background_color": "orange",
      "ability": {
        "top": 4,
        "bottom": 5,
        "right": 1,
        "left": 2,
        "power": 50
      }
    },
    {
      "id": 18,
      "player": 2,
      "tile": 0,
      "name": "I",
      "background_color": "purple",
      "ability": {
        "top": 3,
        "bottom": 5,
        "right": 5,
        "left": 5,
        "power": 50
      }
    },
    {
      "id": 19,
      "player": 2,
      "tile": 0,
      "name": "J",
      "background_color": "green",
      "ability": {
        "top": 3,
        "bottom": 5,
        "right": 4,
        "left": 4,
        "power": 50
      }
    },
  ];

export const listOfTiles = [
    {
      "tile": 0,
      "name": "",
      "background_color": "blue"
    },
    {
      "tile": 1,
      "name": "",
      "background_color": "blue"
    },
    {
      "tile": 2,
      "name": "",
      "background_color": "blue"
    },
    {
      "tile": 3,
      "name": "",
      "background_color": "blue"
    },
    {
      "tile": 4,
      "name": "",
      "background_color": "blue"
    },
    {
      "tile": 5,
      "name": "",
      "background_color": "blue"
    },
    {
      "tile": 6,
      "name": "",
      "background_color": "blue"
    },
    {
      "tile": 7,
      "name": "",
      "background_color": "blue"
    },
    {
      "tile": 8,
      "name": "",
      "background_color": "blue"
    },
  ];
