import  React,  { useEffect } from 'react';
import { View, Text, FlatList, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import ProjectAdminItem from '../components/ProjectAdminItem';
import * as projectsAction from '../store/action/projects';
import Colors from '../constants/Colors';

const ProjectsScreen = (props) => {
   const dispatch = useDispatch()
   const projects = useSelector(state => state.projects.availableProjects);

   useEffect(() => {
     dispatch(projectsAction.fetchProjects());
   }, [dispatch]);


   if (projects.length === 0) {
    return ( 
      <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No projects found, maybe start creating some</Text>
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
        <ProjectAdminItem
          title={itemData.item.title}
          onViewDetail={() => {
            props.navigation.navigate('Sprints', {projectId: itemData.item.projectId});
          }}
          onAddUsers={() => {
            props.navigation.navigate('AddUsers', {projectId: itemData.item.projectId});
          }}
          onDeleteUsers={() => {
            props.navigation.navigate('DeleteUsers', {projectId: itemData.item.projectId});
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

ProjectsScreen.navigationOptions = navData => {
  return {
  headerTitle: 'All Projects',
  headerRight: (
    <TouchableOpacity style={styles.headerButton} onPress={() => {navData.navigation.navigate('AddProject');}}>
    <Text style={styles.headerButtonText}>Add</Text>
    </TouchableOpacity>
  ),
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

export default ProjectsScreen;

