
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

