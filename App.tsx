import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, Platform} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';

import Navigation from './app/components/navigation';
import categoriesReducer from './app/reducers/categories';
import uiReducer from './app/reducers/ui';
import recipesReducer from './app/reducers/recipes';
import {StoreState} from './app/types';

enableScreens();

const rootReducer = combineReducers<StoreState>({
  categories: categoriesReducer,
  ui: uiReducer,
  recipes: recipesReducer,
});

const store = createStore(rootReducer);

const App: React.FunctionComponent = () => {
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
      />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
};

export default App;
