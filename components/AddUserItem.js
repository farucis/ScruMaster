import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/Colors';
import Card from './UI/Card';

const AddUserItem = props => {
  return (
    
    <Card style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{props.name}</Text>
      </View>
      <View style={styles.topActions}>
       <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add User"
          onPress={props.onAddUser}
        />
        <View style={styles.actions}>
        </View>
       </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: 300,
    margin: 20
   },
  details: {
    alignItems: 'center',
    height: '25%',
    padding: 10
  },
  title: {
    fontSize: 30,
    marginVertical: 4
  },
  topActions: {
    marginTop: 30,
    justifyContent: 'center',
  },
  actions: {
    justifyContent: 'center',
    flexDirection: 'row',

  },
});
export default AddUserItem;
