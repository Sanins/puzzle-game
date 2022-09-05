import * as React from 'react';
import { Fragment } from 'react';
import { Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <Fragment>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
          }
        />
        <Button
          title="Drag and drop test"
          onPress={() =>
            navigation.navigate('Drag', { name: 'Jane' })
          }
        />
      </Fragment>
    );
  };

export default HomeScreen;