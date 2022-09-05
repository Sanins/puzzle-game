import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export const FlatListItemSeparator = () => {
    return (<View style={styles.itemSeparator} />);
}

const styles = StyleSheet.create({
    itemSeparator: {
      height: 15
    },
  });
  