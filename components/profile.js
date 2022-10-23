import { Button, Text, View } from "react-native";

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Settings</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Notification Settings"
      />
    </View>
  );
}
export default ProfileScreen;