import { Button, Text, View } from "react-native";
import DetailsScreen from "./details";

function Feed({navigation}) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
      title='Details'
      component={DetailsScreen}
      onPress={() => {
        navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'anything you want here',
        });
      }}
    />
    </View>
  );
}
export default Feed;