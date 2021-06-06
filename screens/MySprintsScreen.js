import  React , { useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import SprintItem from '../components/SprintItem';
import * as sprintsAction from '../store/action/sprints';
import Colors from '../constants/Colors';

const MySpintsScreen = (props) => {
   const dispatch = useDispatch()
   const projectId = props.navigation.getParam('projectId');
   const sprints = useSelector(state => state.sprints.availableSprints.filter(sprint => sprint.projectId === projectId));

   const addHandler = useCallback(() => {
    props.navigation.navigate('AddSprint', {projectId: projectId});
  }, []);
  
  useEffect(() => {
    dispatch(sprintsAction.fetchSprints());
  }, [ dispatch]);

  useEffect(() => {
    props.navigation.setParams({ add: addHandler });
  }, [addHandler]);

  if (sprints.length === 0) {
    return ( 
      <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No sprints found</Text>
        </View>
      </LinearGradient>

    );
  }
      return (
       <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}>
        <FlatList
          data={sprints}
          keyExtractor={item => item.sprintId}
          renderItem={itemData => (
            <SprintItem
              number={itemData.item.number}
              onViewDetail={() => {
                props.navigation.navigate('MyTasks', {sprintId: itemData.item.sprintId});
              }}
              onDelete={() => {
                dispatch(sprintsAction.deleteSprint(itemData.item.sprintId));
              }}
            />       
          )}
        />
      </LinearGradient>

  );
};


MySpintsScreen.navigationOptions = navData => {
  const addFn = navData.navigation.getParam('add');
  return {
  headerTitle: 'All Sprints',
 };  
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerButton: {
    marginHorizontal: 20
  },
  headerButtonText: {
    fontSize: 16,
    color: Colors.primary
  }
 }
);


export default MySpintsScreen;

