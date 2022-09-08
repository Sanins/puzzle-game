import * as React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { DraxView } from 'react-native-drax';
import { updateTileListAccordingToStrength } from '../../utils/utils';
import CardStrength from '../CardStrength/CardStrength';

type TileComponentProps = {
	item: any;
	index: any;
  playerCards: any;
  tileList: any;
  onPlayerCardChange: any;
  onTileListChange: any;
  onPlayerTurnChange: any;
  playerTurn: any;
};

const TileComponent: React.FC<TileComponentProps> = ({
  item,
  index,
  playerCards,
  tileList,
  onPlayerCardChange,
  onTileListChange,
  onPlayerTurnChange,
  playerTurn,
}) => {
    let backgroundColor = 'green';

    if (item.player === 1) {
      backgroundColor = 'blue';
    } else if (item.player === 2) {
      backgroundColor = 'red';
    }

    return (
      <View style={styles.poop}>
        <DraxView
          style={[{ backgroundColor: backgroundColor }]}
          receivingStyle={styles.receiving}
          renderContent={({ viewState }) => {
            // const receivingDrag = viewState && viewState.receivingDrag;
            // const payload = receivingDrag && receivingDrag.payload;
            return (
              <View style={styles.receivingZone}>
                <Text style={styles.textStyle}>{item.name}</Text>
                {item.ability && (
                  <CardStrength ability={item.ability} />
                )}
              </View>
            );
          }}
          key={index}
          onReceiveDragDrop={(event) => {
            let selectedItem = playerCards[event.dragged.payload];
            let updatedTileList = [...tileList];
            selectedItem.tile = index;

            if (updatedTileList[index].id) {
              return
            }

            updatedTileList[index] = selectedItem;

            switch (index) {
              case 0:
                updatedTileList = updateTileListAccordingToStrength(
                  index, 
                  selectedItem.player, 
                  updatedTileList,
                  [
                    {tile: 1, location: 'left'}, 
                    {tile: 3, location: 'top'}
                  ]
                );
                break;
              case 1:
                updatedTileList = updateTileListAccordingToStrength(
                  index, 
                  selectedItem.player, 
                  updatedTileList,
                  [
                    {tile: 0, location: 'left'},
                    {tile: 2, location: 'right'},
                    {tile: 4, location: 'bottom'}
                  ]
                );
                console.log('topMiddle');
                break;
              case 2:
                updatedTileList = updateTileListAccordingToStrength(
                  index, 
                  selectedItem.player, 
                  updatedTileList,
                  [
                    {tile: 1, location: 'left'},
                    {tile: 5, location: 'bottom'}
                  ]
                );
                console.log('topRight');
                break;
              case 3:
                updatedTileList = updateTileListAccordingToStrength(
                  index, 
                  selectedItem.player, 
                  updatedTileList,
                  [
                    {tile: 0, location: 'top'},
                    {tile: 4, location: 'right'},
                    {tile: 6, location: 'bottom'}
                  ]
                );
                console.log('middleLeft');
                break;
              case 4:
                updatedTileList = updateTileListAccordingToStrength(
                  index, 
                  selectedItem.player, 
                  updatedTileList,
                  [
                    {tile: 1, location: 'top'},
                    {tile: 3, location: 'left'},
                    {tile: 5, location: 'right'},
                    {tile: 7, location: 'bottom'}
                  ]
                );
                console.log('middle');
                break;
              case 5:
                updatedTileList = updateTileListAccordingToStrength(
                  index, 
                  selectedItem.player, 
                  updatedTileList,
                  [
                    {tile: 2, location: 'top'},
                    {tile: 4, location: 'left'},
                    {tile: 8, location: 'bottom'}
                  ]
                );
                console.log('middleRight');
                break;
              case 6:
                updatedTileList = updateTileListAccordingToStrength(
                  index, 
                  selectedItem.player, 
                  updatedTileList,
                  [
                    {tile: 3, location: 'top'},
                    {tile: 7, location: 'right'}
                  ]
                );
                console.log('bottomLeft');
                break;
              case 7:
                updatedTileList = updateTileListAccordingToStrength(
                  index, 
                  selectedItem.player, 
                  updatedTileList,
                  [
                    {tile: 4, location: 'top'},
                    {tile: 6, location: 'left'},
                    {tile: 8, location: 'right'}
                  ]
                );
                console.log('bottomMiddle');
                break;
              case 8:
                updatedTileList = updateTileListAccordingToStrength(
                  index, 
                  selectedItem.player, 
                  updatedTileList,
                  [
                    {tile: 5, location: 'top'},
                    {tile: 7, location: 'left'}
                  ]
                );
                console.log('bottomRight');
                break;
              default:
                break;
            }

            onTileListChange(updatedTileList);

            let updatedPlayersCards = [...playerCards];
            updatedPlayersCards = updatedPlayersCards.filter(item => item.id !== selectedItem.id);

            onPlayerCardChange(updatedPlayersCards);
            onPlayerTurnChange(!playerTurn);
          }}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
    poop: {
      width: '33.33%',
    },
    receivingZone: {
      height: 80,
      borderWidth: 1,
    },
    receiving: {
    },
    textStyle: {
        fontSize: 18
    },
});

export default TileComponent;
