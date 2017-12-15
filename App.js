// Both Android and iOS use App.js

// Import a library to help create a Component
import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers';
import Header from './src/components/common/Header';
import LibraryList from './src/components/LibraryList'

// Create a Component
//Javascript function that returns some jsx

const App = () => (
  <Provider store={createStore(reducer)}>
  <View style={{ flex: 1 }}>
    <Header headerText='Tech Stack' />
    <LibraryList />
  </View>
  </Provider>
  );

// Text is undefined
// Import Destructuring is required

// Render it to the device

export default App;

// You must register one component for any app