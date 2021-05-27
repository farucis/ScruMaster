
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';


const middlewares = []
const mockStore = configureStore(middlewares)

test('signup a new user and login new user ', () => {

    
    const initialState = {}
    const store = mockStore(initialState)

        ///////////// create new user /////////////
    const emailText = 'a@a.com';
    const passText = '123456';
    
    const signup = (emailText,passText) => ({ type: 'SIGNUP' })

    store.dispatch(signup(emailText,passText))

    store.getState(emailText,passText);

    expect(store.replaceReducer).not.toBeNull();


        ///////////// login to user by email and password /////////////

    const login = (emailText,passText) => ({ type: 'LOGIN' })


    store.dispatch(login(emailText,passText))

    store.getState(emailText,passText);

    expect(store.replaceReducer).not.toBeNull();

  });



  test('add task ,edit task and remove task', () => {

    
    const initialState = {}
    const store = mockStore(initialState)
         ///////////// create new task /////////////

    const sprintId = '1';
    const title = 'first project';
    const description = 'create first project for test';

    const createTask = (sprintId, title, description) => ({ type: 'CREATE_TASK' })

    store.dispatch(createTask(sprintId, title, description))

    store.getState(sprintId, title, description);

    expect(store.replaceReducer).not.toBeNull();

        ///////////// update task details /////////////

    const fetchTasks = () => ({ type: 'SET_TASKS' })

    store.dispatch(fetchTasks())

    store.getState();

    expect(store.replaceReducer).not.toBeNull();

         ///////////// dalete task by id /////////////


    const taskId = '1';

    const deleteTask = (taskId) => ({ type: 'DELETE_TASK' })

    store.dispatch(deleteTask(taskId))

    store.getState(taskId);

    expect(store.replaceReducer).not.toBeNull();


  });



  test('add project ,fetch project and remove project', () => {

    
    const initialState = {}
    const store = mockStore(initialState)
         ///////////// create new Project /////////////

    const title = 'first project';

    const createProject = (title) => ({ type: 'CREATE_PROJECT' })

    store.dispatch(createProject(title))

    store.getState(title);

    expect(store.replaceReducer).not.toBeNull();

        ///////////// fetch Project /////////////

    const fetchProject = () => ({ type: 'SET_PROJETCS' })

    store.dispatch(fetchProject())

    store.getState();

    expect(store.replaceReducer).not.toBeNull();

         ///////////// dalete project/////////////


    const projectId = '1';

    const deleteTask = (projectId) => ({ type: 'DELETE_PROJECT' })

    store.dispatch(deleteTask(projectId))

    store.getState(projectId);

    expect(store.replaceReducer).not.toBeNull();


  });


  test('add sprint ,fetch sprint and remove sprint', () => {

    
    const initialState = {}
    const store = mockStore(initialState)
         ///////////// create new sprint /////////////

    const projectId = '1';
    const number = '1';
    const time = '60';

    const createSprint = (projectId, number, time) => ({ type: 'CREATE_SPRINT' })

    store.dispatch(createSprint(projectId, number, time))

    store.getState(projectId, number, time);

    expect(store.replaceReducer).not.toBeNull();

        ///////////// fetch sprint /////////////

    const fetchProject = () => ({ type: 'SET_SPRINTS' })

    store.dispatch(fetchProject())

    store.getState();

    expect(store.replaceReducer).not.toBeNull();

         ///////////// dalete sprint/////////////


    const sprintId = '1';

    const deleteTask = (sprintId) => ({ type: 'DELETE_SPRINT' })

    store.dispatch(deleteTask(sprintId))

    store.getState(sprintId);

    expect(store.replaceReducer).not.toBeNull();


  });


  test('create task ,start task and end task', () => {

    
    const initialState = {}
    const store = mockStore(initialState)
         ///////////// create new task /////////////

    const sprintId = '1';
    const title = 'first project';
    const description = 'create first project for test';
    const taskId = '1';

    const createTask = (sprintId, title, description) => ({ type: 'CREATE_TASK' })

    store.dispatch(createTask(sprintId, title, description))

    store.getState(sprintId, title, description);

    expect(store.replaceReducer).not.toBeNull();

        ///////////// start task /////////////

    const startTask = (taskId) => ({ type: 'START_TASK' })

    store.dispatch(startTask(taskId))

    store.getState();

    expect(store.replaceReducer).not.toBeNull();

         ///////////// end task /////////////



    const endTask = (taskId) => ({ type: 'END_TASK' })

    store.dispatch(endTask(taskId))

    store.getState(taskId);

    expect(store.replaceReducer).not.toBeNull();


  });

  test('signup a new user , login admin user , update new user to admin', () => {

    
    const initialState = {}
    const store = mockStore(initialState)

        ///////////// create new user /////////////
    const emailText = 'a@a.com';
    const emailTextAdmin = 'admin@a.com';
    const passText = '123456';
    
    const signup = (emailText,passText) => ({ type: 'SIGNUP' })

    store.dispatch(signup(emailText,passText))

    store.getState(emailText,passText);

    expect(store.replaceReducer).not.toBeNull();


        ///////////// login to amdin user/////////////

    const login = (emailTextAdmin,passText) => ({ type: 'LOGIN' })


    store.dispatch(login(emailTextAdmin,passText))

    store.getState(emailTextAdmin,passText);

    expect(store.replaceReducer).not.toBeNull();


        ///////////// update new user to admin/////////////

    const updateUserAdmin = (emailText) => ({ type: 'UPDATE_USER_ADMIN' })


    store.dispatch(updateUserAdmin(emailText))

    store.getState(emailText);

    expect(store.replaceReducer).not.toBeNull();


  });


  test('create project ,add user to project ,remove user from project', () => {

    
    const initialState = {}
    const store = mockStore(initialState)
         ///////////// create new Project /////////////

    const title = 'first project';

    const createProject = (title) => ({ type: 'CREATE_PROJECT' })

    store.dispatch(createProject(title))

    store.getState(title);

    expect(store.replaceReducer).not.toBeNull();

        ///////////// add user to Project /////////////

    const addUserToProject = () => ({ type: 'ADD_USER_TO_PROJECT' })

    store.dispatch(addUserToProject())

    store.getState();

    expect(store.replaceReducer).not.toBeNull();

         ///////////// remove user fron project/////////////


    const deleteUserFromProject = () => ({ type: 'DELETE_USER_FROM_PROJECT' })

    store.dispatch(deleteUserFromProject())

    store.getState();

    expect(store.replaceReducer).not.toBeNull();


  });

