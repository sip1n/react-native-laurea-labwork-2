import { Button, Text, View } from "react-native";

function DetailsScreen({ route, navigation }) {

  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Next random item"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
            otherParam: 'Nested navigation has its own header history.',
          })
        }
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Root')}
      />
    </View>
  );
}
export default DetailsScreen;