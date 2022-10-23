import { Image } from 'react-native';

function LogoTitle() {
    return (
      <Image
        style={{ width: 40, height: 40 }}
        source={require('../assets/favicon.png')}
      />
    );
  }
  export default LogoTitle;