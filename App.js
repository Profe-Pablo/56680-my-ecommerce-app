import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font'
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {


  const [fontLoaded] = useFonts({
    'Karla-regular': require('./assets/fonts/Karla-Regular.ttf'),
    'Karla-Bold': require('./assets/fonts/Karla-Bold.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  return (
    <TabNavigator />
  );
}


