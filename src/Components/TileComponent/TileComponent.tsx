import * as React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { DraxView } from 'react-native-drax';
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

            console.log('updatedTileList', updatedTileList);

            switch (index) {
              case 0:
                console.log('topLeft');
                break;
              case 1:
                console.log('topMiddle');
                break;
              case 2:
                console.log('topRight');
                break;
              case 3:
                console.log('middleLeft');
                break;
              case 4:
                console.log('middle');
                break;
              case 5:
                console.log('middleRight');
                break;
              case 6:
                console.log('bottomLeft');
                break;
              case 7:
                console.log('bottomMiddle');
                break;
              case 8:
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
