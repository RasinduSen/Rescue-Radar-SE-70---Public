import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import User from "./assets/img/logoRound.png";
import HomeScreen from "./src/screens/HomeScreen";
import HelpScreen from "./src/screens/HelpScreen";
import FeedbackScreen from "./src/screens/Feedback";
import PrivacyPolicyScreen from "./src/screens/PrivacyPolicy";
import TermsAndConditionsScreen from "./src/screens/Terms";
import ContactUs from "./src/screens/ContactUs";
import ImageUploadOption from "./src/screens/ImageUploadOption";
import ViewReportsScreen from "./src/screens/ViewReportsScreen";
import Login from "./src/screens/LoginScreen";
import Signup from "./src/screens/SignupScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./src/screens/Welcome";
import ReportSuccesfulScreen from "./src/screens/ReportSuccesfulScreen";




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerContent = (props) => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 200,
          width: '100%',
          justifyContent: "center",
          alignItems: "center",
          borderBottomColor: "#f4f4f4",
          borderBottomWidth: 1
        }}
      >
        <Image
          source={User}
          style={{
            height: 130,
            width: 130,
            borderRadius: 65
          }}
        />
        <Text
          style={{
            fontSize: 22,
            marginVertical: 6,
            fontWeight: "bold",
            color: "#fff"
          }}
        >Shylan Mohomed</Text>

      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#1A5D1A",
          width: 250,
        },
        headerStyle: {
          backgroundColor: "#1A5D1A",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerLabelStyle: {
          color: "#fff",
        },
      }}
    >
      {/* Your drawer screens */}
      <Drawer.Screen
          name="Home"
         
          options={{
            drawerLabel: "Home",
            title: "Home",
            
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={HomeScreen}
        />
        <Drawer.Screen
          name="Report"
          options={{
            drawerLabel: "Inform Authority",
            title: "Inform Authority",
            drawerIcon: () => (
              <MaterialIcons name="timer" size={20} color="#808080" />
            )
          }}
          component={ImageUploadOption}
        />
        <Drawer.Screen
          name="Categories"
          options={{
            drawerLabel: "View Reports",
            title: "View Reports",
            drawerIcon: () => (
              <MaterialIcons name="category" size={20} color="#808080" />
            )
          }}
          component={ViewReportsScreen}
        />
        <Drawer.Screen
          name="Customize"
          options={{
            drawerLabel: "Help",
            title: "Help",
            drawerIcon: () => (
              <MaterialIcons name="dashboard-customize" size={20} color="#808080" />
            )
          }}
          component={HelpScreen}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Privacy",
            title: "Privacy",
            drawerIcon: () => (
              <SimpleLineIcons name="settings" size={20} color="#808080" />
            )
          }}
          component={PrivacyPolicyScreen}
        />

        
        
        

        <Drawer.Screen
          name="Contact"
          options={{
            drawerLabel: "Contact Us",
            title: "Contact Us",
            drawerIcon: () => (
              <MaterialCommunityIcons name="message-alert-outline" size={20} color="#808080" />
            )
          }}
          component={ContactUs}
        />
    </Drawer.Navigator>
  );
};


const AppStart = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome" screenOptions={{
         headerShown: false
      }}>
         
        <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="help" component={HelpScreen} />
          <Stack.Screen name="success" component={ReportSuccesfulScreen} />
          <Stack.Screen name="viewReport" component={ViewReportsScreen} />
         
          
          <Stack.Screen name="report" component={ImageUploadOption} />
          <Stack.Screen name="Main" component={DrawerNavigator} />
          <Stack.Screen name="contactUs" component={ContactUs} />
        </Stack.Navigator>
      </NavigationContainer>
      );
};

      export default AppStart;