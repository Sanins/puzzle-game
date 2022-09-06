import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraxProvider, DraxList } from 'react-native-drax';
import { FlatListItemSeparator } from '../../Components/FlatListItemSeparator/FlatListItemSeparator';
import { listOfTiles, player1Cards } from '../../utils/utils';
import TileComponent from '../../Components/TileComponent/TileComponent';
import PlayerArea from '../../Components/PlayerArea/PlayerArea';

const gestureRootViewStyle = { flex: 1 };

const DragScreen = ({ navigation, route }) => {
  const [tileList, setTileList] = React.useState(listOfTiles);
  const [playerOnesCards, setPlayerOnesCards] = React.useState(player1Cards);

  return (
    <GestureHandlerRootView
      style={gestureRootViewStyle}>
      <DraxProvider>
        <View style={styles.container}>
          <View style={styles.playerArea}>
            <View>
              <Text>Player</Text>
            </View>
            <Button 
              onPress={(): void => {
                  setTileList(listOfTiles);
                  setPlayerOnesCards(player1Cards);
                }
              }
              title="reset"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.receivingContainer}>
            {tileList.map((item, index) => (
              <TileComponent 
                item={item}
                index={index}
                onPlayerCardChange={value => setPlayerOnesCards(value)}
                onTileListChange={value => setTileList(value)}
                playerCards={playerOnesCards} 
                tileList={tileList} 
              />
            ))}
          </View>
          <View style={styles.draxListContainer}>
            <DraxList
              data={playerOnesCards}
              renderItemContent={({ item, index }) => {
                return (
                  <>
                    <PlayerArea item={item} index={index} />
                  </>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              numColumns={4}
              ItemSeparatorComponent={FlatListItemSeparator}
              scrollEnabled={true}
            />
          </View>
        </View>
      </DraxProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-evenly',
  },
  playerArea: {
    paddingBottom: 10,
  },
  receivingContainer: {
    flexDirection: "row",
    flexWrap: 'wrap',
  },
  draxListContainer: {
    padding: 5,
  },
});

export default DragScreen;
