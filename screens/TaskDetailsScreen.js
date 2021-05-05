import  React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/Colors';

const TaskDetailsScreen = (props) => {
    const taskId = props.navigation.getParam('taskId');
    const Task = useSelector(state => state.tasks.availableTasks.find(task => task.taskId === taskId));

return (
  <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}>
  <ScrollView>
          <Text style={styles.title}>Title:  {Task.title}</Text>
          <View style={styles.topContainer}>
           <View style={styles.container}>
            <Text style={styles.description}><Text style={styles.title2}>Description:  </Text>{Task.description}</Text>
            <Text style={styles.description}><Text style={styles.title2}>Priority:  </Text>{Task.priority}</Text>
            <Text style={styles.description}><Text style={styles.title2}>Start:  </Text>{Task.start}</Text>
            <Text style={styles.description}><Text style={styles.title2}>End:  </Text>{Task.end}</Text>
          </View>
         </View>
    </ScrollView>
  </LinearGradient>

    );
};

TaskDetailsScreen.navigationOptions = navData => {
  return {
  headerTitle: 'Task Details',
 };  
};

const styles = StyleSheet.create({
  topContainer: {
    alignItems: 'center',    
    justifyContent: 'center'
  },
 actions: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
 title: {
    fontFamily: 'open-sans-bold',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginVertical: 20
  },
  title2: {
    fontFamily: 'open-sans-bold',
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 1,
    marginBottom: 20,
    marginLeft: 20
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 20,
    padding: 2,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginHorizontal: 20
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TaskDetailsScreen;

