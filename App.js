import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// นำเข้าหน้าจอทั้ง 15 หน้าของเรา
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import RegistrationScreen from './RegistrationScreen';
import ScheduleScreen from './ScheduleScreen';
import AddCourseScreen from './AddCourseScreen';
import AutoScheduleScreen from './AutoScheduleScreen';
import PlanDetailScreen from './PlanDetailScreen';
import GroupSyncScreen from './GroupSyncScreen';
import AddFriendScreen from './AddFriendScreen';
import MyScheduleScreen from './MyScheduleScreen';
import SearchCourseScreen from './SearchCourseScreen';
import CourseDetailScreen from './CourseDetailScreen';
import WaitlistScreen from './WaitlistScreen';
import CartScreen from './CartScreen';
import ConflictScreen from './ConflictScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        {/* หน้าที่ 1: หน้าล็อกอิน */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        
        {/* หน้าที่ 2: หน้าแรก (Home) */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />

        {/* หน้าที่ 3: หน้าลงทะเบียน */}
        <Stack.Screen 
          name="Registration" 
          component={RegistrationScreen} 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
        name="Schedule" 
        component={ScheduleScreen} 
        options={{ headerShown: false }}
         />

        <Stack.Screen 
        name="AddCourse" 
        component={AddCourseScreen} 
        options={{ headerShown: false }}
         />
         
         <Stack.Screen 
         name="AutoSchedule" 
         component={AutoScheduleScreen} 
         options={{ headerShown: false }}
        />

        <Stack.Screen 
        name="PlanDetail" 
        component={PlanDetailScreen} 
        options={{ headerShown: false }} 
        />

        <Stack.Screen 
        name="GroupSync" 
        component={GroupSyncScreen} 
        options={{ headerShown: false }} 
        />

        <Stack.Screen 
        name="AddFriend" 
        component={AddFriendScreen} 
        options={{ headerShown: false }}
        />

        <Stack.Screen 
        name="MySchedule" 
        component={MyScheduleScreen} 
        options={{ headerShown: false }} 
        />

        <Stack.Screen 
        name="SearchCourse" 
        component={SearchCourseScreen} 
        options={{ headerShown: false }} 
        />
        
       <Stack.Screen 
       name="CourseDetail" 
       component={CourseDetailScreen} 
       options={{ headerShown: false }} 
       />

       <Stack.Screen 
       name="Waitlist" 
       component={WaitlistScreen} 
       options={{ headerShown: false }} 
       />

       <Stack.Screen 
       name="Cart" 
       component={CartScreen} 
       options={{ headerShown: false }}
       />

       <Stack.Screen name="Conflict" component={ConflictScreen} options={{ headerShown: false, presentation: 'transparentModal' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}