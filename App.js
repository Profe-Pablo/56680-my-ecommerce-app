import { ActivityIndicator } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen'
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen'
import { useFonts } from 'expo-font'
import { useState } from 'react';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')

  console.log("Categoría seleccionada: ", categorySelected)

  const [fontLoaded] = useFonts({
    'Karla-regular': require('./assets/fonts/Karla-Regular.ttf'),
    'Karla-Bold': require('./assets/fonts/Karla-Bold.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  return (
    <>{
      categorySelected
        ?
        <ProductsByCategoryScreen category={categorySelected} />
        :
        <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
    }
    </>

  );
}


