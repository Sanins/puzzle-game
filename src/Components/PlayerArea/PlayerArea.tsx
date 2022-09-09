import * as React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DraxView } from 'react-native-drax';
import CardStrength from '../CardStrength/CardStrength';

type PlayerAreaProps = {
	item: any;
	index: any;
  playersTurn: any;
};

const PlayerArea: React.FC<PlayerAreaProps> = ({
	item,
	index,
  playersTurn,
}) => {
    return (
        <View>
            <DraxView
                style={[styles.draggableBox, { backgroundColor: item.background_color }]}
                draggingStyle={styles.dragging}
                dragReleasedStyle={styles.dragging}
                hoverDraggingStyle={styles.hoverDragging}
                dragPayload={index}
                longPressDelay={150}
                key={index}
                draggable={playersTurn}
            >
                <Text style={styles.textStyle}>{item.name}</Text>
                {item.ability && (
                    <CardStrength ability={item.ability} />
                )}
            </DraxView>
        </View>
    );
  }

  const styles = StyleSheet.create({
    draggableBox: {
        width: 70,
    },
    // dragging: {
    //   opacity: 0.2,
    // },
    hoverDragging: {
      borderColor: 'magenta',
      borderWidth: 2,
    },
    textStyle: {
      fontSize: 18
    },
  });

export default PlayerArea;