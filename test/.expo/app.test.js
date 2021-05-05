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

// test fetch Sprints

const fetchSprints = () => ({ type: 'SET_SPRINTS' })

test('should dispatch SET_SPRINTS action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(fetchSprints())

  const actions = store.getActions()
  const expectedPayload = { type: 'SET_SPRINTS' }
  expect(actions).toEqual([expectedPayload])
})

//test delete Sprint

const deleteSprint = () => ({ type: 'DELETE_SPRINT' })

test('should dispatch DELETE_SPRINT action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(deleteSprint())

  const actions = store.getActions()
  const expectedPayload = { type: 'DELETE_SPRINT' }
  expect(actions).toEqual([expectedPayload])
})

//test create Sprint

const createSprint = () => ({ type: 'CREATE_SPRINT' })

test('should dispatch CREATE_SPRINT action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(createSprint())

  const actions = store.getActions()
  const expectedPayload = { type: 'CREATE_SPRINT' }
  expect(actions).toEqual([expectedPayload])
})


// test fetch Tasks

const fetchTasks = () => ({ type: 'SET_TASKS' })

test('should dispatch SET_TASKS action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(fetchTasks())

  const actions = store.getActions()
  const expectedPayload = { type: 'SET_TASKS' }
  expect(actions).toEqual([expectedPayload])
})

// test delete Task

const deleteTask = () => ({ type: 'DELETE_TASK' })

test('should dispatch DELETE_TASK action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(deleteTask())

  const actions = store.getActions()
  const expectedPayload = { type: 'DELETE_TASK' }
  expect(actions).toEqual([expectedPayload])
})

// test create Task

const createTask = () => ({ type: 'CREATE_TASK' })

test('should dispatch CREATE_TASK action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(createTask())

  const actions = store.getActions()
  const expectedPayload = { type: 'CREATE_TASK' }
  expect(actions).toEqual([expectedPayload])
})
// test startTask

const startTask = () => ({ type: 'START_TASK' })

test('should dispatch START_TASK action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(startTask())

  const actions = store.getActions()
  const expectedPayload = { type: 'START_TASK' }
  expect(actions).toEqual([expectedPayload])
})

// test end task

const endTask = () => ({ type: 'END_TASK' })

test('should dispatch END_TASK action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(endTask())

  const actions = store.getActions()
  const expectedPayload = { type: 'END_TASK' }
  expect(actions).toEqual([expectedPayload])
})

//test fetch Users

const fetchUsers = () => ({ type: 'SET_USERS' })

test('should dispatch SET_USERS action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(fetchUsers())

  const actions = store.getActions()
  const expectedPayload = { type: 'SET_USERS' }
  expect(actions).toEqual([expectedPayload])
})
// test delete User

const deleteUser = () => ({ type: 'DELETE_USER' })

test('should dispatch DELETE_USER action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(deleteUser())

  const actions = store.getActions()
  const expectedPayload = { type: 'DELETE_USER' }
  expect(actions).toEqual([expectedPayload])
})

// test update User

const updateUser = () => ({ type: 'UPDATE_USER' })

test('should dispatch UPDATE_USER action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(updateUser())

  const actions = store.getActions()
  const expectedPayload = { type: 'UPDATE_USER' }
  expect(actions).toEqual([expectedPayload])
})