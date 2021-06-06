import  React,  { useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import DeleteUserItem from '../../components/DeleteUserItem';
import * as usersAction from '../../store/action/users';
import Colors from '../../constants/Colors';

const DeleteUserTaskScreen = (props) => {
  const dispatch = useDispatch()
  const taskId = props.navigation.getParam('taskId');
  const users = useSelector(state => state.users.availableUsers.filter(user => user.taskId[taskId].taskId === taskId));

  if (users.length === 0) {
   return ( 
    <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No users found, maybe start creating some</Text>
      </View>
     </LinearGradient>
   );
 } 

  return (
    <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}> 
       <FlatList
         data={users}
         keyExtractor={item => item.userId}
         renderItem={itemData => (
           <DeleteUserItem
             name={itemData.item.name}
             onDeleteUser={() => {
               dispatch(usersAction.deleteUserFromTask(itemData.item.userId, taskId));
             }}
           />       
         )}
       />
  </LinearGradient>
 );
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
export default DeleteUserTaskScreen;

