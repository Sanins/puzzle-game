import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type CardStrengthProps = {
	ability: any;
};

const CardStrength: React.FC<CardStrengthProps> = ({
	ability,
}) => {
    return (
      <View>
          <Text style={[styles.textStyle, styles.textCenter]}>{ability.top}</Text>
          <View style={styles.middle}>
            <Text style={styles.textStyle}>{ability.left}</Text>
            <Text style={styles.textStyle}>{ability.right}</Text>
          </View>
          <Text style={[styles.textStyle, styles.textCenter]}>{ability.bottom}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    textStyle: {
        fontSize: 10, 
    },
    middle: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    textCenter: {
      textAlign: 'center',
    },
  });

export default CardStrength;