//Imports
import React from 'react';
import { Text, View } from 'react-native';

//Make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, heigth: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 22
  }
};

//Export
export { Header };
