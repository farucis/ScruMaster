import  React , { useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import TaskItem from '../components/TaskItem';
import * as tasksAction from '../store/action/tasks';
import Colors from '../constants/Colors';


const TasksScreen = (props) => {
   const dispatch = useDispatch()
   const sprintId = props.navigation.getParam('sprintId');
   const tasks = useSelector(state => state.tasks.availableTasks.filter(task => task.sprintId === sprintId));

   const addHandler = useCallback(() => {
    props.navigation.navigate('AddTask', {sprintId: sprintId});
  }, []);
  
  useEffect(() => {
    dispatch(tasksAction.fetchTasks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(tasksAction.fetchTasks());
    props.navigation.setParams({ add: addHandler });
  }, [addHandler, dispatch]);

  if (tasks.length === 0) {
    return ( 
      <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No tasks found, maybe start creating some</Text>
        </View>
      </LinearGradient>
    );
  }
   return (
    <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.taskId}
        renderItem={itemData => (
          <TaskItem
            title={itemData.item.title}
            onViewDetail={() => {
              props.navigation.navigate('TaskDetails', {taskId: itemData.item.taskId});
            }}
            onAddUsers={() => {
              props.navigation.navigate('AddUserTask', {taskId: itemData.item.taskId});
            }}
            onDeleteUsers={() => {
              props.navigation.navigate('DeleteUserTask', {taskId: itemData.item.taskId});
            }}
            onDelete={() => {
              dispatch(tasksAction.deleteTask(itemData.item.taskId));
            }}
          />       
        )}
      />
   </LinearGradient>

  );
};

TasksScreen.navigationOptions = navData => {
  const addFn = navData.navigation.getParam('add');
  return {
  headerTitle: 'All Tasks',
  headerRight: (
    <TouchableOpacity style={styles.headerButton} onPress={addFn}>
    <Text style={styles.headerButtonText}>Add</Text>
    </TouchableOpacity>
  ),
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

export default TasksScreen;

