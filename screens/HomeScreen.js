import  React,  { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, LogBox, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

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
    <View style={styles.container}>
      <ImageBackground source={{
                    uri: 'https://cdn.vox-cdn.com/thumbor/CTEu-LzRxSsC8J0c03Ak94qOkbA=/0x0:2160x3840/1200x0/filters:focal(0x0:2160x3840):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19917284/VRG_Wallpaper_iPhone_SE_alt.0.png',
                  }} style={styles.image}>
           <Text style={styles.text}>Welocme To ScruMaster</Text>
           <Text style={styles.text}>{loginUser.name}</Text>
      </ImageBackground>
  </View>
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
    backgroundColor: "#000000a0"
  },
  headerButton: {
    marginHorizontal: 20
  },
  headerButtonText: {
    fontSize: 16,
    color: Colors.primary
  }
});


export default HomeScreen;

