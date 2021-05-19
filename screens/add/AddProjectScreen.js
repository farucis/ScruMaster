import  React, { useState, useEffect, useCallback  } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import * as projectsAction from '../../store/action/projects';
import Colors from '../../constants/Colors';

const AddProjectScreen = (props) => {
  
const dispatch = useDispatch()
const [title, setTitle] = useState('');

const submitHandler = useCallback(() => {
  dispatch(projectsAction.createProject(title));
  props.navigation.goBack();
}, [dispatch,title]);

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
      </View>  
    </ScrollView>
  );
};

AddProjectScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');
    return {
      headerTitle: 'Add Project',
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

export default AddProjectScreen;

