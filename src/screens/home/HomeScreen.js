import {ScrollView} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const HomeScreen = props => {
  return (
    <ScrollView style={{flex: 1, paddingHorizontal: 16}}>
      <Button
        style={{marginTop: 500}}
        mode="contained"
        onPress={() => props.navigation.navigate('RoomDetailScreen')}>
        go to Room Detail
      </Button>
    </ScrollView>
  );
};

export default HomeScreen;
