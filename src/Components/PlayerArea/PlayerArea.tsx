import * as React from 'react';
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { DraxView } from 'react-native-drax';

type PlayerAreaProps = {
	item: any;
	index: any;
};

const PlayerArea: React.FC<PlayerAreaProps> = ({
	item,
	index,
}) => {

    return (
        <View style={styles.draxListContainer}>
            <DraxView
                style={[styles.draggableBox, { backgroundColor: item.background_color }]}
                draggingStyle={styles.dragging}
                dragReleasedStyle={styles.dragging}
                hoverDraggingStyle={styles.hoverDragging}
                dragPayload={index}
                longPressDelay={150}
                key={index}
            >
                <Text style={styles.textStyle}>{item.name}</Text>
            </DraxView>
        </View>
    );
  }

  const styles = StyleSheet.create({
    draxListContainer: {
        flexDirection: 'column', 
    },
    draggableBox: {
        width: (Dimensions.get('window').width / 5) - 5,
        height: (Dimensions.get('window').width / 5) - 5,
    },
    dragging: {
      opacity: 0.2,
    },
    hoverDragging: {
      borderColor: 'magenta',
      borderWidth: 2,
    },
    textStyle: {
    
      fontSize: 18
    },
  });

export default PlayerArea;