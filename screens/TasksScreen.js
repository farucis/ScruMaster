import  React , { useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderButton from '../components/UI/HeaderButton';
import TaskItem from '../components/TaskItem';
import * as tasksAction from '../store/action/tasks';


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
    ///if the sprint dont have task show the msg task not found
    return ( 
      <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No tasks found, maybe start creating some</Text>
        </View>
      </LinearGradient>
    );
  }
  //show the task item and all the functions of delete ,add and details
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
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="add"
        iconName={
          Platform.OS === 'android' ? 'md-add' : 'ios-add'
        }
        onPress={addFn} 
      />
    </HeaderButtons>
  ),
 };  
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
 }
);

export default TasksScreen;

