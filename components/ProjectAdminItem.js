import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/Colors';
import Card from '../components/UI/Card';

const ProjectAdminItem = props => {
  return (
    
    <Card style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>

     </View>
    <View style={styles.actions}>
    <Button
          color={Colors.primary}
          title="Details"
          onPress={props.onViewDetail}
        />
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
    height: 200,
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
    marginTop:100,
    marginBottom:100,
    padding: 10,
  },
  details: {
    alignItems: 'baseline',
    height: '15%',
    padding: 10,
  },
  title: {
    fontSize: 10,
    marginVertical: 0,
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
export default ProjectAdminItem;
