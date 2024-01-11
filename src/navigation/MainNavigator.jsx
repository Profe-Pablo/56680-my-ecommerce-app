import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";

const MainNavigator = () => {
    //const user = useSelector(state=>state.authReducer.user)
    user = "Logged"
    return (
        <NavigationContainer>
            {user ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )

}

export default MainNavigator