import * as React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { DraxView } from 'react-native-drax';

type TileComponentProps = {
	item: any;
	index: any;
  playerCards: any;
  tileList: any;
  onPlayerCardChange: any;
  onTileListChange: any;
};

const TileComponent: React.FC<TileComponentProps> = ({
	item,
	index,
    playerCards,
    tileList,
    onPlayerCardChange,
    onTileListChange,
}) => {
    return (
      <View style={styles.poop}>
        <DraxView
          style={[{ backgroundColor: item.background_color }]}
          receivingStyle={styles.receiving}
          renderContent={({ viewState }) => {
            // const receivingDrag = viewState && viewState.receivingDrag;
            // const payload = receivingDrag && receivingDrag.payload;
            return (
              <View style={styles.receivingZone}>
                <Text style={styles.textStyle}>{item.name}</Text>
              </View>
            );
          }}
          key={index}
          onReceiveDragDrop={(event) => {
            let selectedItem = playerCards[event.dragged.payload];
            let updatedTileList = [...tileList];

            console.log('updatedTileList[index]', updatedTileList[index]);
            console.log('selectedItem', selectedItem);

            updatedTileList[index] = selectedItem;

            onTileListChange(updatedTileList);

            let updatedPlayersCards = [...playerCards];
            updatedPlayersCards = updatedPlayersCards.filter(item => item.id !== selectedItem.id);

            onPlayerCardChange(updatedPlayersCards);
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
