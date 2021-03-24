// SignUp.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button,  TouchableOpacity} from 'react-native'

export default class SignUp extends React.Component {
  state = { username: '', email: '', password: '', errorMessage: null }
    handleSignUp = () => {
    // TODO: Firebase stuff...
    console.log('handleSignUp')
}
render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>ScruMaster</Text>

        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
          <View style={styles.inputView}>
            <TextInput
            placeholder="User Name..."
            autoCapitalize="none"
            style={styles.inputText}
            onChangeText={UserName => this.setState({ UserName })}
            value={this.state.UserName}
            />
        </View>
        <View style={styles.inputView}>
            <TextInput
            placeholder="Email Adress..."
            autoCapitalize="none"
            style={styles.inputText}
            onChangeText={UserName => this.setState({ UserName })}
            value={this.state.UserName}
            />
        </View>
        <View style={styles.inputView}>
            <TextInput
            secureTextEntry
            placeholder="Password..."
            autoCapitalize="none"
            style={styles.inputText}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            />
        </View>

        <TouchableOpacity style={styles.registerBtn} onPress={this.handleSignUp}>
          <Text style={styles.registerText}>Sign Up</Text>
        </TouchableOpacity>

        <Button color='#003f6c' style={{padding:20}}
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('SignIn')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputText:{
    height:50,
    color:"white"
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  registerBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  registerText:{
    color:"white"
  }
})