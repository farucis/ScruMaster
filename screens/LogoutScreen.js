import  React , { useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const LogoutScreen = (props) => {

useEffect(() => {
    props.navigation.navigate('Login');
    },);

return (
      <View style={styles.container}/>     
    );
}

 const styles = StyleSheet.create({
    container: {
     flex: 1,
     alignItems: 'center',    
     justifyContent: 'center'
    }
  }
);

export default LogoutScreen;

