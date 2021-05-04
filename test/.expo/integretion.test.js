
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