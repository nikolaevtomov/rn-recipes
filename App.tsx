import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, Platform} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {composeWithDevTools} from 'redux-devtools-extension';

import TabNavigation from './app/components/tab-navigation';
import categoriesReducer from './app/reducers/categories';
import favoritesReducer from './app/reducers/favorites';
import recipesReducer from './app/reducers/recipes';
import {StoreState} from './app/types';

enableScreens();

const rootReducer = combineReducers<StoreState>({
  categories: categoriesReducer,
  favorites: favoritesReducer,
  recipes: recipesReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer, composeEnhancers());

const App: React.FunctionComponent = () => {
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
      />
      <Provider store={store}>
        <TabNavigation />
      </Provider>
    </>
  );
};

export default App;
