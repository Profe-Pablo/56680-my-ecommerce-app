import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//Importamos las vistas
import CategoriesScreen from '../screens/CategoriesScreen'
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Categorías"
                    component={CategoriesScreen}
                />
                <Stack.Screen 
                    name="Productos"
                    component={ProductsByCategoryScreen}
                />
                <Stack.Screen 
                    name="Detalle"
                    component={ProductDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navigator