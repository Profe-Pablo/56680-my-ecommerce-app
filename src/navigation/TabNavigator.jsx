import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import { colors } from "../global/colors";
import { Entypo, AntDesign  } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()


const TabNavigator = ()=>{
    
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle:styles.tabBar,
                }}
            >
                <Tab.Screen 
                    name="ShopStack" 
                    component={ShopNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Entypo name="shop" size={24} color={focused?"#fff":"#ccc"} />
                        )
                    }}
                />
                <Tab.Screen 
                    name="CartStack" 
                    component={CartNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <AntDesign name="shoppingcart" size={24} color={focused?"#fff":"#ccc"} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.primary,
        shadowColor: "#ccc",
        elevation: 1,
        position: "absolute",
        left: 25,
        right: 25,
        bottom: 25,    
        height: 60,
        borderRadius:20,
    }
})