import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { CustomHeaderButtons, Item } from '../components/HeaderButton';

const AppScreen = props => {
  return (
      <View style={styles.screen}><Text>hihi</Text></View>
  );
};

AppScreen.navigationOptions = () => {
  return {
    headerTitle: 'Meal Categories',
    headerRight: () => (
      <CustomHeaderButtons>
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={() => { console.log('Marked as favorite!') }}
        />
      </CustomHeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default AppScreen;
