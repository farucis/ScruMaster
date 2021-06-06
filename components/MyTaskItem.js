import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/Colors';
import Card from './UI/Card';

const MyTaskItem = props => {
  return (
    <Card style={styles.container}>
    <View style={styles.topContainer}>
      <View style={styles.details}>
        <Text style={styles.title}>Name: {props.title}</Text>
        <Text style={styles.title}>Details: {props.description}</Text>
        <Text style={styles.title}>Priorty: {props.priority}</Text>
        <Text style={styles.title}>Start: {props.start}</Text>
        <Text style={styles.title}>End: {props.end}</Text>
      </View>
      <View style={styles.topActions}>
        <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Start Task"
          onPress={props.onStart}
        />
                <Button
          color={Colors.primary}
          title="End Task"
          onPress={props.onEnd}
        />
        </View>
      </View>
    </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 230,
    width: 250,
    margin: 20
   },
   topContainer: {
    flexDirection: 'column'
   },
  details: {
    alignItems: 'flex-start',
    height: '15%',
    padding: 10
  },
  title: {
    fontSize: 16,
    marginVertical: 4
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '75%',
    marginBottom: 152,
    flexDirection: 'row',
    justifyContent: 'space-between',


  }
});
export default MyTaskItem;
