import { ActivityIndicator } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen'
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen'
import { useFonts } from 'expo-font'

export default function App() {

  const [fontLoaded] = useFonts({
    'Karla-regular': require('./assets/fonts/Karla-Regular.ttf'),
    'Karla-Bold': require('./assets/fonts/Karla-Bold.ttf'),
  })

  if(!fontLoaded) return <ActivityIndicator />

  return (
    <ProductsByCategoryScreen />
  );
}


