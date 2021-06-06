import  React, { useState, useEffect, useCallback  } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import * as sprintsAction from '../../store/action/sprints';
import Colors from '../../constants/Colors';

const AddSprintScreen = (props) => {

const dispatch = useDispatch()
const projectId = props.navigation.getParam('projectId');
const [number, setNumber] = useState('');
const [time, setTime] = useState('');

const submitHandler = useCallback(() => {
  dispatch(sprintsAction.createSprint(projectId, number, time));
  props.navigation.goBack();
}, [dispatch,projectId, number, time]);

useEffect(() => {
  props.navigation.setParams({ submit: submitHandler });
}, [submitHandler]);

  
  return (
      <ScrollView>
        <View style={styles.form}>
          <View style={styles.formControl}>
             <Text style={styles.label}>Number</Text>
             <TextInput 
                style={styles.input} 
                value={number} 
                onChangeText={text => setNumber(text)}
             />
          </View>
          <View style={styles.formControl}>
             <Text style={styles.label}>Time</Text>
             <TextInput 
                style={styles.input} 
                value={time} 
                onChangeText={text => setTime(text)}
             />
          </View>
        </View>  
      </ScrollView>
    );
  };

AddSprintScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');
    return {
      headerTitle: 'Add Sprint',
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

export default AddSprintScreen;

