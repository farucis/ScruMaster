import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../App';
import * as auth from '../../store/action/auth';

import configureStore from 'redux-mock-store';
//test the app

/*
test('The App renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
*/

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

//test fetch Projects
const fetchProjects = () => ({ type: 'SET_PROJETCS' })

test('should dispatch SET_PROJETCS action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(fetchProjects())

  const actions = store.getActions()
  const expectedPayload = { type: 'SET_PROJETCS' }
  expect(actions).toEqual([expectedPayload])
})

//test fetch My Projects

const fetchMyProjects = () => ({ type: 'SET_MY_PROJETCS' })

test('should dispatch SET_MY_PROJETCS action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(fetchMyProjects())

  const actions = store.getActions()
  const expectedPayload = { type: 'SET_MY_PROJETCS' }
  expect(actions).toEqual([expectedPayload])
})

//test delete Project

const deleteProject = () => ({ type: 'DELETE_PROJECT' })

test('should dispatch DELETE_PROJECT action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(deleteProject())

  const actions = store.getActions()
  const expectedPayload = { type: 'DELETE_PROJECT' }
  expect(actions).toEqual([expectedPayload])
})

//test create Project

const createProject = () => ({ type: 'CREATE_PROJECT' })

test('should dispatch CREATE_PROJECT action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(createProject())

  const actions = store.getActions()
  const expectedPayload = { type: 'CREATE_PROJECT' }
  expect(actions).toEqual([expectedPayload])
})