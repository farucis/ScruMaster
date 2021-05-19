import  React,  { useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import DeleteUserItem from '../../components/DeleteUserItem';
import * as usersAction from '../../store/action/users';
import Colors from '../../constants/Colors';

const DeleteUsersScreen = (props) => {
   const dispatch = useDispatch()
   const projectId = props.navigation.getParam('projectId');

   const users = useSelector(state => state.users.availableUsers.filter(user => user.projectId[projectId].projectId === projectId));
   console.log(users)

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
                dispatch(usersAction.deleteUserFromProject(itemData.item.userId, projectId));
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

export default DeleteUsersScreen;

