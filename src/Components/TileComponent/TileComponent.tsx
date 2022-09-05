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
      <DraxView
        style={[styles.centeredContent, styles.receivingZone, { backgroundColor: item.background_color }]}
        receivingStyle={styles.receiving}
        renderContent={({ viewState }) => {
          const receivingDrag = viewState && viewState.receivingDrag;
          const payload = receivingDrag && receivingDrag.payload;
          return (
            <View>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          );
        }}
        key={index}
        onReceiveDragDrop={(event) => {
          let selectedItem = playerCards[event.dragged.payload];
          let updatedTileList = [...tileList];

          updatedTileList.push(selectedItem);

          onTileListChange(updatedTileList);

          let updatedPlayersCards = [...playerCards];
          updatedPlayersCards = updatedPlayersCards.filter(item => item.id !== selectedItem.id);

          onPlayerCardChange(updatedPlayersCards);
        }}
      />
    );
  }

const styles = StyleSheet.create({
    centeredContent: {
        borderRadius: 10,
    },
    receivingZone: {
        height: (Dimensions.get('window').width / 4) - 12,
        borderRadius: 10,
        width: (Dimensions.get('window').width / 4) - 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        borderColor: '$orange',
            borderWidth: 3,
    },
    receiving: {
        borderColor: 'red',
        borderWidth: 2,
    },
    textStyle: {
        fontSize: 18
    },
});

export default TileComponent;
