import  React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/Colors';

const MyProfileScreen = (props) => {
  const userId = useSelector(state => state.auth.userId);
  const loginUser = useSelector(state => state.users.availableUsers.find(user => user.userId === userId));

return (
  <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}>
  <ScrollView>
          <Text style={styles.title}>Name:  {loginUser.name}</Text>
          <View style={styles.topContainer}>
          <View style={styles.container}>
          <Text style={styles.description}><Text style={styles.title2}>Phone:  </Text>{loginUser.phone}</Text>
          <Text style={styles.description}><Text style={styles.title2}>Age:  </Text>{loginUser.age}</Text>
          </View>
          <View style={styles.actions}>
            <Button color={Colors.primary} title="Edit Details" onPress={() => { props.navigation.navigate('EditUser', {userId: userId})} } />
          </View>
        </View>
    </ScrollView>
  </LinearGradient>

    );
};

MyProfileScreen.navigationOptions = navData => {
  return {
  headerTitle: 'My Profile',
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
  },
  headerButton: {
    marginHorizontal: 20
  },
  headerButtonText: {
    fontSize: 16,
    color: Colors.primary
  }
});

export default MyProfileScreen;

