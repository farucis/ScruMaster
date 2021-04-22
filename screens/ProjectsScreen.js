import  React,  { useEffect } from 'react';
import { View, Text, FlatList, Platform, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderButton from '../components/UI/HeaderButton';
import ProjectAdminItem from '../components/ProjectAdminItem';
import * as projectsAction from '../store/action/projects';

const ProjectsScreen = (props) => {
   const dispatch = useDispatch()
   const projects = useSelector(state => state.projects.availableProjects);

   useEffect(() => {
     dispatch(projectsAction.fetchProjects());
   }, [dispatch]);

// if the there no project in the system show the messege
   if (projects.length === 0) {
    return ( 
      <LinearGradient colors={['#6F7AED','#ffe3ff']} style={styles.gradient}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No projects found, maybe start creating some</Text>
        </View>
      </LinearGradient>

    );
  }
  //Use the ProjectItem UI to Design the project Item 
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
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="add"
        iconName={
          Platform.OS === 'android' ? 'md-add' : 'ios-add'
        }
        onPress={() => {
          navData.navigation.navigate('AddProject');
          }}
      />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item
      title="Menu"
      iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
      onPress={() => {
      navData.navigation.toggleDrawer();
      }}
    />
    
  </HeaderButtons>
  )
 };  
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
 }
);

export default ProjectsScreen;

