import { Button, Text, View } from "react-native";

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notifications Settings</Text>
      <Button onPress={() => navigation.navigate('Profile')} title="Profile Settings" />
      <Button onPress={() => navigation.navigate('Home')} title="Back to Home" />
    </View>
  );
}
export default NotificationsScreen;