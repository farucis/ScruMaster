import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/Colors';
import Card from '../components/UI/Card';

const TaskItem = props => {
  return (
    
    <Card style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.buttonDetailsStyle}>
        <Button
          color={Colors.primary}
          title="Details"
          onPress={props.onViewDetail}
        />
        </View>
     </View>
    <View style={styles.actions}>
      <View style={styles.buttonStyle}>
        <Button
          color={Colors.primary}
          title="Delete Users"
          onPress={props.onDeleteUsers}
        />
       </View>
       <View style={styles.buttonStyle}>
        <Button
          color={Colors.primary}
          title="Add Users"
          onPress={props.onAddUsers}
        />
       </View>
       <View style={styles.buttonStyle}>
        <Button
          color={Colors.primary}
          title="Delete"
          onPress={props.onDelete}
        />
       </View>
     </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 170,
    width: 330,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
   },
   buttonStyle: {
    paddingVertical: 3,
    paddingHorizontal: 5,
   },
   buttonDetailsStyle: {
    alignSelf: 'baseline',
  },
  details: {
    alignItems: 'baseline',
    height: '15%',
    padding: 10,
  },
  title: {
    fontSize: 30,
    marginVertical: 4,
    fontFamily: 'open-sans-bold',
  },
  actions: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginHorizontal: 30,
    alignSelf: 'flex-end',
    marginLeft: 'auto',
    fontFamily: 'open-sans-bold',
    marginBottom: 30
  }
});
export default TaskItem;
