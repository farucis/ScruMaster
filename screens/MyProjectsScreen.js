import  React,  { useEffect } from 'react';
import { View, Text, FlatList, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/Colors';
import ProjectItem from '../components/ProjectItem';
import * as projectsAction from '../store/action/projects';

const MyProjectsScreen = (props) => {
   const dispatch = useDispatch()
   const userId = useSelector(state => state.auth.userId);
   const projects = useSelector(state => state.projects.availableProjects.filter(proj => proj.ownerId===userId));

   useEffect(() => {
     dispatch(projectsAction.fetchMyProjects(userId));
   }, [dispatch,userId]);


   if (projects.length === 0) {
     return ( 
      <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No projects found</Text>
        </View>
       </LinearGradient>
     );
   }

   return (
   <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}>
    <FlatList
      data={projects}
      keyExtractor={item => item.projectId}
      renderItem={itemData => (
        <ProjectItem
          title={itemData.item.title}
          onViewDetail={() => {
            props.navigation.navigate('MySprint', {projectId: itemData.item.projectId});
          }}
          onDelete={() => {
            dispatch(projectsAction.deleteProject(itemData.item.projectId));
          }}
        />       
      )}
    />
   </LinearGradient>
  );
};

MyProjectsScreen.navigationOptions = navData => {
  return {
  headerTitle: 'My Projects',
  headerLeft: (
    <TouchableOpacity style={styles.headerButton} onPress={() => { navData.navigation.toggleDrawer();}}>
    <Text style={styles.headerButtonText}>Menu</Text>
    </TouchableOpacity>
  )
 };  
};

const styles = StyleSheet.create({
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
 }
);

export default MyProjectsScreen;

