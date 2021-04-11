import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

//add the reducers from store
import AppNavigator from '../ScruMaster/navigation/AppNavigator';
/*
import projectsReducer from './store/reducer/projects';
import sprintsReducer from './store/reducer/sprints';
import tasksReducer from './store/reducer/tasks';
import usersReducer from './store/reducer/users';
*/
import authReducer from './store/reducer/auth';

const rootReducer = combineReducers({
  //projects: projectsReducer,
  //sprints: sprintsReducer,
  //tasks: tasksReducer,
  //users: usersReducer,
  auth: authReducer
});

//create store for the app
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    ...Ionicons.font,
  });
};

//load the icons and font to the app
export default function App() {
 const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {setFontLoaded(true); }}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}
