import  React,  { useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity,Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import UserItem from '../components/UserItem';
import * as usersAction from '../store/action/users';
import Colors from '../constants/Colors';

const UsersScreen = (props) => {
   const dispatch = useDispatch()
   const users = useSelector(state => state.users.availableUsers);

   useEffect(() => {
    dispatch(usersAction.fetchUsers());
  }, [dispatch]);


   return (
     <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}> 
        <FlatList
          data={users}
          keyExtractor={item => item.userId}
          renderItem={itemData => (
            <UserItem
              name={itemData.item.name}
              onEdit={() => {
                props.navigation.navigate('EditUserAdmin', {userId: itemData.item.userId});
              }}
              onDelete={() => {
                dispatch(usersAction.deleteUser(itemData.item.userId));
                dispatch(usersAction.fetchUsers());
              }}
            />       
          )}
        />
   </LinearGradient>
  );
};


UsersScreen.navigationOptions = navData => {
  return {
  headerTitle: 'All Users',
  headerLeft: (
    <TouchableOpacity style={styles.headerButton} onPress={() => { navData.navigation.toggleDrawer();}}>
    <Text style={styles.headerButtonText}>Menu</Text>
    </TouchableOpacity>
  )
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

export default UsersScreen;

