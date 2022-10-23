
import { createDrawerNavigator } from "@react-navigation/drawer";


import NotificationsScreen from "./notification";
import ProfileScreen from "./profile";

const Drawer = createDrawerNavigator();

function SettingScreen({ navigation }) {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  );
}
export default SettingScreen;