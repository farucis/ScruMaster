import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
//import screens from App and design defualt navigation optaions
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import TasksScreen from '../screens/TasksScreen';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';
import AddProjectScreen from '../screens/add/AddProjectScreen';
import AddSprintScreen from '../screens/add/AddSprintScreen';
import AddTaskScreen from '../screens/add/AddTaskScreen';
/*
import EditUserScreen from '../screens/EditUserScreen';
import MyProjectsScreen from '../screens/MyProjectsScreen';
import SprintsScreen from '../screens/SprintsScreen';
import UsersScreen from '../screens/UsersScreen';

*/

import Colors from '../constants/Colors';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.white : ''
    },
        headerTintColor: Platform.OS === 'android' ? Colors.primary : Colors.primary
}


// Create Configartion for the screens of the app
const HomeNavigator = createStackNavigator({
    Home: HomeScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

/*
const UsersNavigator = createStackNavigator({
    Users: UsersScreen,
    EditUser: EditUserScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});


const MyProjectsNavigator = createStackNavigator({
    MyProjects: MyProjectsScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});
*/
const ProfileNavigator = createStackNavigator({
    Profile: ProfileScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

//Create Config for logout and for the project navigator
const ProjectsNavigator = createStackNavigator({
     Projects : ProjectsScreen,
     AddProject: AddProjectScreen,
     //Sprints: SprintsScreen,
     AddSprint: AddSprintScreen,
     Tasks : TasksScreen,
     AddTask: AddTaskScreen,
     TaskDetails: TaskDetailsScreen
}, {
        defaultNavigationOptions: defaultNavOptions
});


const LogoutNavigator = createStackNavigator({
    Logout: LogoutScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});
//Create Menu Drewer Navigator button and Config for screens
const AppNavigator = createDrawerNavigator({
    Home: HomeNavigator,
    MyProfile: ProfileNavigator,
    //MyProjects:MyProjectsNavigator,
    AllProjects: ProjectsNavigator,
    //Users:  UsersNavigator,
    Logout: LogoutNavigator
},{
    contentOptions: {
        activeTintColor: Colors.primary
    }
});

const LoginNavigator = createStackNavigator({
    Login: LoginScreen,
}, {
    defaultNavigationOptions: defaultNavOptions
});

// create switcher for main navigator to move forward to the app after succes login
const MainNavigator = createSwitchNavigator({
    Login: LoginNavigator,
    App : AppNavigator
});

export default createAppContainer(MainNavigator);