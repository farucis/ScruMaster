import  React,  { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, LogBox, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import * as usersAction from '../store/action/users';
import Colors from '../constants/Colors';


LogBox.ignoreAllLogs();

const HomeScreen = (props) => {
  const dispatch = useDispatch()
  const loginUser = useSelector(state => state.users.loginUser);

  useEffect(() => {
    dispatch(usersAction.fetchUsers());
  }, [dispatch]);
  
  return (
    <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}>
    <View style={styles.container}>
      <ImageBackground source={{
                    uri: 'https://www.designbolts.com/wp-content/uploads/2019/09/Liquid-Gradient-iPhone-11-Wallpaper-High-Quality.jpg',
                  }} style={styles.image}>
           <Text style={styles.text}>Welocme To ScruMaster</Text>
           <Text style={styles.text}>{loginUser.name}</Text>
      </ImageBackground>
  </View>
 </LinearGradient>
);
}


HomeScreen.navigationOptions = navData => {
  return {
  headerTitle: 'Home',
  headerLeft: (
    <TouchableOpacity style={styles.headerButton} onPress={() => { navData.navigation.toggleDrawer();}}>
    <Text style={styles.headerButtonText}>Menu</Text>
    </TouchableOpacity>
  )
 };  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
/*     backgroundColor: "#000000a0"
 */  },
  headerButton: {
    marginHorizontal: 20
  },
  headerButtonText: {
    fontSize: 16,
    color: Colors.primary
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default HomeScreen;

