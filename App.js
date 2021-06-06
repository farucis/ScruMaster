import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import 'react-native-gesture-handler';

import AppNavigator from '../ScruMaster/navigation/AppNavigator';
import projectsReducer from './store/reducer/projects';
import sprintsReducer from './store/reducer/sprints';
import tasksReducer from './store/reducer/tasks';
import usersReducer from './store/reducer/users';
import authReducer from './store/reducer/auth';

const rootReducer = combineReducers({
  projects: projectsReducer,
  sprints: sprintsReducer,
  tasks: tasksReducer,
  users: usersReducer,
  auth: authReducer
});


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}
