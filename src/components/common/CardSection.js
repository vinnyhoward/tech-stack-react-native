import React, { Component } from 'react';
import { View } from 'react-native';


const CardSection = (props) => {
    return (
      <View style={styles.containerStyle}>
      {props.children}
      </View>
    )
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2},
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    }
}

export default CardSection;