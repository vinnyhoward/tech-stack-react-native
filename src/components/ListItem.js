import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  LayoutAnimation
} from 'react-native';
import CardSection from './common/CardSection';
import { connect } from 'react-redux';
import * as actions from './actions/'

class ListItem extends Component {
  componentWillUpdate(){
    LayoutAnimation.easeInEaseOut()
    //Can also use spring()
  }
renderDescription() {
  const { library, expanded } = this.props
  // if(this.props.selectLibraryId === this.props.library.id)
  //If/Else statement was replaced with expanded variable assigned in mapStateToProps
  if( expanded ){
    return(
      <CardSection>
      <Text style={{ flex: 1, paddingLeft: 15, paddingRight: 15, paddingTop: 15, paddingBottom: 15, fontWeight: 'bold', color: '#8D939A' }}>
      {library.description}
      </Text>
      </CardSection>
    )
  }
}
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    return (
      <TouchableOpacity 
      color={true}
      underlayColor = {'#71E4E5'}
      onPress={ () => this.props.selectLibrary(id)}
      >
         <View style={{ overflow: 'hidden' }}>
      <CardSection>
        <Text style={titleStyle}>
        {title}
        </Text>
      </CardSection>
      {this.renderDescription()}
        </View>
      </TouchableOpacity>
    )
  }
}
const styles = {
  titleStyle: {
    fontSize: 20,
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: '#43484D'
  }
} 
const mapStateToProps = (state, ownProps) => {
  //ownProps function helps referencing itself
  const expanded = state.selectLibraryId === ownProps.library.id;
  return { expanded }
}
export default connect(mapStateToProps, actions)(ListItem)