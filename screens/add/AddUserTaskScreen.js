import  React,  { useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import AddUserItem from '../../components/AddUserItem';
import * as usersAction from '../../store/action/users';
import Colors from '../../constants/Colors';

const AddUserTaskScreen = (props) => {
   const dispatch = useDispatch()
   const taskId = props.navigation.getParam('taskId');
   users = useSelector(state => state.users.availableUsers);

   useEffect(() => {
    dispatch(usersAction.fetchUsers());
  }, [dispatch]);


   return (
     <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}> 
        <FlatList
          data={users}
          keyExtractor={item => item.userId}
          renderItem={itemData => (
            <AddUserItem
              name={itemData.item.name}
              onAddUser={() => {
                dispatch(usersAction.addUserToTask(itemData.item.userId, taskId));
                dispatch(usersAction.fetchUsers());
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

export default AddUserTaskScreen;

