import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
    return(
        <Stack.Navigator
                initialRouteName="Login"
                screenOptions={
                    ({navigation, route}) => ({
                        header: () => <Header title={route.name} navigation={navigation} />
                    })
                }  
            >
                <Stack.Screen 
                    name="Signup"
                    component={SignupScreen}
                />  
                <Stack.Screen 
                    name="Login"
                    component={LoginScreen}
                />  
            </Stack.Navigator>
    )
}

export default AuthNavigator