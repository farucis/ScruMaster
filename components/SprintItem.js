import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/Colors';
import Card from '../components/UI/Card';

const SprintItem = props => {
  return (  
    <Card style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{props.number}</Text>
      </View>
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="View Details"
          onPress={props.onViewDetail}
        />
        <Button
          color={Colors.primary}
          title="Delete"
          onPress={props.onDelete}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    margin: 20
   },

  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10
  },
  title: {
    fontSize: 30,
    marginVertical: 4
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '75%',
    paddingHorizontal: 20
  }
});
export default SprintItem;
