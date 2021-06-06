import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Platform,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as usersAction from '../store/action/users';
import Colors from '../constants/Colors';

const EditUsersAdminScreen = (props) => {
  const dispatch = useDispatch()
  const userId = props.navigation.getParam('userId');
  const userExists = useSelector(state =>
    state.users.availableUsers.find(user => user.userId === userId)
  );

  useEffect(() => {
   dispatch(usersAction.fetchUsers());
 }, [dispatch]);
 
  const [permission,setPermission] = useState(userExists ? userExists.permission : '');
  const [name,setName] = useState(userExists ? userExists.name : '');
  const [phone,setPhone] = useState(userExists ? userExists.phone : '');
  const [age,setAge] = useState(userExists ? userExists.age : '');

  const submitHandler = useCallback(() => {
    dispatch(usersAction.updateUserAdmin(userId, permission, name, phone, age));
    dispatch(usersAction.fetchUsers());
    props.navigation.goBack();
  }, [dispatch,userId, permission, name, phone, age]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  return (
  <KeyboardAvoidingView style={{ flex: 1 }} behavior="height'">  
    <ScrollView>     
      <View style={styles.form}>
      <View style={styles.formControl}>
          <Text style={styles.label}>Permission</Text>
          <TextInput
            style={styles.input}
            value={permission}
            onChangeText={text => setPermission(text)}
            autoCapitalize='sentences'
          />
        </View>      
        <View style={styles.formControl}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={text => setName(text)}
            autoCapitalize='sentences'
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={text => setPhone(text)}
            autoCapitalize='sentences'
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            value={age}
            onChangeText={text => setAge(text)}
            autoCapitalize='sentences'
          />
        </View>
      </View>
    </ScrollView>
  </KeyboardAvoidingView>
  );
};

EditUsersAdminScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');
  return {
    headerTitle: 'Edit User',
    headerRight: (
      <TouchableOpacity style={styles.headerButton} onPress={submitFn}>
      <Text style={styles.headerButtonText}>Save</Text>
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  formControl: {
    width: '100%'
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  headerButton: {
    marginHorizontal: 20
  },
  headerButtonText: {
    fontSize: 16,
    color: Colors.primary
  }
});

export default EditUsersAdminScreen;

