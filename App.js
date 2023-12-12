import { ActivityIndicator } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen'
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen'
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import { useFonts } from 'expo-font'
import { useState } from 'react';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')
  const [productIdSelected, setProductIdSelected] = useState(null)

  console.log("Categoría seleccionada: ", categorySelected)

  const [fontLoaded] = useFonts({
    'Karla-regular': require('./assets/fonts/Karla-Regular.ttf'),
    'Karla-Bold': require('./assets/fonts/Karla-Bold.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  const onSelectProductId = (productId) => {
    setProductIdSelected(productId)
  }

  return (
    <>
    {
      productIdSelected
      ?
        <ProductDetailScreen productId={productIdSelected} />
        :
      categorySelected
        ?
        <ProductsByCategoryScreen category={categorySelected} onSelectProductIdEvent={onSelectProductId} />
        :
        <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
    }
    </>

  );
}


