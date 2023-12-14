import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../components/Header";

//Importamos las vistas
import CategoriesScreen from '../screens/CategoriesScreen'
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Categorías"
                screenOptions={
                    ({navigation, route}) => ({
                        header: () => <Header title={route.name} navigation={navigation} />
                    })
                }
            
            >
                <Stack.Screen 
                    name="Categorías"
                    component={CategoriesScreen}
                />
                <Stack.Screen 
                    name="products"
                    component={ProductsByCategoryScreen}
                    options={{ title: 'Productos'}}
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

