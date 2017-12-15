import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles

  return (
    <View style={viewStyle}>
  <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    backgroundColor: '#26E5D6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    paddingTop: 40,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
};


export default Header;