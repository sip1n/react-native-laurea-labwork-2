import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./feed";
import SettingScreen from "./settings";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{headerShown:false}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
      />
    </Tab.Navigator>


  );
}
export default HomeScreen;