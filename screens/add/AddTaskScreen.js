import  React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import * as tasksAction from '../../store/action/tasks';
import Colors from '../../constants/Colors';

const AddTaskScreen = (props) => {

  const dispatch = useDispatch()
  const sprintId = props.navigation.getParam('sprintId');
  const [title, setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [priority , setPriority] = useState('');

  const submitHandler = useCallback(() => {
    dispatch(tasksAction.createTask(sprintId,title,description, priority));
    props.navigation.goBack();
  }, [dispatch,sprintId, title, description, priority]);
  
  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);
  


return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
           <Text style={styles.label}>Title</Text>
           <TextInput 
              style={styles.input} 
              value={title} 
              onChangeText={text => setTitle(text)}
           />
        </View>
        <View style={styles.formControl}>
           <Text style={styles.label}>Description</Text>
           <TextInput 
              style={styles.input} 
              value={description} 
              onChangeText={text => setDescription(text)}
           />
        </View>
        <View style={styles.formControl}>
           <Text style={styles.label}>Priority</Text>
           <TextInput 
              style={styles.input} 
              value={priority} 
              onChangeText={text => setPriority(text)}
           />
        </View>
      </View>  
    </ScrollView>
  );
};

AddTaskScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');
    return {
      headerTitle: 'Add Task',
      headerRight: (
        <TouchableOpacity style={styles.headerButton} onPress={submitFn}>
        <Text style={styles.headerButtonText}>Save </Text>
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

export default AddTaskScreen;

