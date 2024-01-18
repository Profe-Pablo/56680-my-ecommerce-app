import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font'
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { init } from './src/db';

export default function App() {

  init()
  .then(()=>console.log("Database initializated"))
  .catch((error)=>console.log("Initialize db failed: ", error))

  const [fontLoaded] = useFonts({
    'Karla-regular': require('./assets/fonts/Karla-Regular.ttf'),
    'Karla-Bold': require('./assets/fonts/Karla-Bold.ttf'),
    'Karla-Light': require('./assets/fonts/Karla-Light.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  return (

    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}


