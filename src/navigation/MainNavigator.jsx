import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfilePictureQuery } from "../services/shopService";
import { useEffect } from "react";
import { setProfilePicture, setUser, setUserLocation } from "../features/authSlice";
import { useGetUserLocationQuery } from "../services/shopService";
import { fetchSession } from "../db";

const MainNavigator = () => {
    const user = useSelector(state=>state.authReducer.user)
    const localId = useSelector(state=>state.authReducer.localId)
    //console.log(localId)

    const {data,error, isLoading } = useGetProfilePictureQuery(localId)
    //const { data: locationData, error: locationError, isLoading: isLocationLoading } = useGetUserLocationQuery(localId)
    const { data: locationData, error: locationError, isLoading: isLocationLoading } = useGetUserLocationQuery(localId)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(data){
            //console.log(data)
            dispatch(setProfilePicture(data.image))
        }
        /* if(locationData){
            dispatch(setUserLocation(locationData))
        } */
        if(locationData){
            dispatch(setUserLocation(locationData))
        }
    },[data, locationData, isLoading, isLocationLoading])

    useEffect(()=>{
        (async ()=>{
            try{
                const session = await fetchSessions()
                console.log("Session:", session)
                if(session?.rows.length){
                    console.log("Se han encontrado datos de usuario")
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            }catch(error){
                console.log("Error al obtener datos del usuario local: ", error.message)
            }
        })()
    },[])


    return (
        <NavigationContainer>
            {user && !isLoading ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )

}

export default MainNavigator