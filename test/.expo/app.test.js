import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import * as auth from '../store/action/auth';

import configureStore from 'redux-mock-store';
//test the app

test('The App renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});


const middlewares = []
const mockStore = configureStore(middlewares)
//test for login
const login = () => ({ type: 'LOGIN' })

test('should dispatch LOGIN  action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(login())

  const actions = store.getActions()
  const expectedPayload = { type: 'LOGIN' }
  expect(actions).toEqual([expectedPayload])
})

//test for sign-up 

const signup = () => ({ type: 'SIGNUP' })

test('should dispatch SIGNUP action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(signup())

  const actions = store.getActions()
  const expectedPayload = { type: 'SIGNUP' }
  expect(actions).toEqual([expectedPayload])
})