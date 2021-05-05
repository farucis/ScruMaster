import  React , { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import MyTaskItem from '../components/MyTaskItem';
import * as tasksAction from '../store/action/tasks';
import Colors from '../constants/Colors';


const MyTasksScreen = (props) => {
   const dispatch = useDispatch()
   //const tasks = useSelector(state => state.users.availableUsers.filter(user => user.taskId));
   const userId = useSelector(state => state.auth.userId);
   const Usertasks = useSelector(state => state.users.availableUsers.filter(user => user.userId === userId));
   const tasksId = Usertasks.filter(user => user.taskId)

   //const tasks = useSelector(state => state.users.availableTasks.filter(task => task.taskId === Usertasks)); 
  
   const tasks = useSelector(state => state.tasks.availableTasks.filter(task => task));
 

  useEffect(() => {
    dispatch(tasksAction.fetchTasks());
  }, [dispatch]);


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
     <Button
          color={Colors.primary}
          title="Order By Priority"
          onPress={()=>{props.navigation.navigate('ByPriorty')}}
        />
      <FlatList
        data={tasks}
        keyExtractor={item => item.taskId}
        renderItem={itemData => (
          <MyTaskItem
            title={itemData.item.title}
            description={itemData.item.description}
            priority={itemData.item.priority}
            start={itemData.item.start}
            end={itemData.item.end}
            onStart={() => {
              dispatch(tasksAction.startTask(itemData.item.taskId));
            }}
            onEnd={() => {
              dispatch(tasksAction.endTask(itemData.item.taskId));
            }}
          />       
        )}
      />
   </LinearGradient>

  );
};

MyTasksScreen.navigationOptions = navData => {
  return {
  headerTitle: 'My Tasks',
  headerLeft: (
    <TouchableOpacity style={styles.headerButton} onPress={() => { navData.navigation.toggleDrawer();}}>
    <Text style={styles.headerButtonText}>Menu</Text>
    </TouchableOpacity>
  )
 };  
};

const styles = StyleSheet.create({
  topContainer: {
    alignItems: 'center',    
    justifyContent: 'center'
  },
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

export default MyTasksScreen;

