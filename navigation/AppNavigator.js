import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Colors from '../constants/Colors';


import ByPriortyScreen from '../screens/ByPriortyScreen';
import EditUserAdminScreen from '../screens/EditUserAdminScreen';
import EditUserScreen from '../screens/EditUserScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';
import MyProjectsScreen from '../screens/MyProjectsScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import MyTasksScreen from '../screens/MyTasksScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import SprintsScreen from '../screens/SprintsScreen';
import TasksScreen from '../screens/TasksScreen';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';
import UsersScreen from '../screens/UsersScreen';
import AddProjectScreen from '../screens/add/AddProjectScreen';
import AddSprintScreen from '../screens/add/AddSprintScreen';
import AddTaskScreen from '../screens/add/AddTaskScreen';
import AddUsersScreen from '../screens/add/AddUsersScreen';
import AddUserTaskScreen from '../screens/add/AddUserTaskScreen';
import DeleteUsersScreen from '../screens/add/DeleteUsersScreen';
import DeleteUserTaskScreen from '../screens/add/DeleteUserTaskScreen';
import MySprintsScreen from '../screens/MySprintsScreen';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.white : ''
    },
        headerTintColor: Platform.OS === 'android' ? Colors.primary : Colors.primary
}

const HomeNavigator = createStackNavigator({
    Home: HomeScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});



const MyTaskNavigator = createStackNavigator({
    MyTasks: MyTasksScreen,
    ByPriorty: ByPriortyScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const UsersNavigator = createStackNavigator({
    Users: UsersScreen,
    EditUserAdmin: EditUserAdminScreen,

}, {
    defaultNavigationOptions: defaultNavOptions
});

const MyProjectsNavigator = createStackNavigator({
    MyProjects: MyProjectsScreen,
    MySprint: MySprintsScreen,
    MyTasks : MyTasksScreen,

}, {
    defaultNavigationOptions: defaultNavOptions
});

const MyProfileNavigator = createStackNavigator({
    My_Profile: MyProfileScreen,
    EditUser: EditUserScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const AllProjectsNavigator = createStackNavigator({
     Projects : ProjectsScreen,
     AddUsers: AddUsersScreen,
     DeleteUsers: DeleteUsersScreen,
     AddProject: AddProjectScreen,
     Sprints: SprintsScreen,
     AddSprint: AddSprintScreen,
     Tasks : TasksScreen,
     AddTask: AddTaskScreen,
     AddUserTask: AddUserTaskScreen,
     DeleteUserTask: DeleteUserTaskScreen,
     TaskDetails : TaskDetailsScreen

}, {
        defaultNavigationOptions: defaultNavOptions
});

const LogoutNavigator = createStackNavigator({
    Logout: LogoutScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const AppNavigator = createDrawerNavigator({
    Home: HomeNavigator,
    My_Profile: MyProfileNavigator,
    My_Projects: MyProjectsNavigator,
    My_Task: MyTaskNavigator,
    All_Projects: AllProjectsNavigator,
    All_Users:  UsersNavigator,
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

const MainNavigator = createSwitchNavigator({
    Login: LoginNavigator,
    App : AppNavigator,
});

export default createAppContainer(MainNavigator);