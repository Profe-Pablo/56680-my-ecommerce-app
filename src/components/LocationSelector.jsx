import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import MapPreview from './MapPreview'

const LocationSelector = () => {
    const [location,setLocation] = useState("")
    const [error, setError] = useState("")

    useEffect(()=>{
        (async ()=>{
            let {status} = await Location.requestForegroundPermissionsAsync()
            if(status!=="granted"){
                setError("No se han ortorgado los permisos para obtener la ubicación")
                return
            }
            let location = await Location.getCurrentPositionAsync()
            setLocation({latitude: location.coords.latitude, longitude: location.coords.longitude})
        })()
    },[])
    //console.log(location)

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Mi ubicación actual: </Text>
            {
                location.latitude
                ?
                <>
                <Text style={styles.textLocation}>
                    (Lat: {location.latitude}, Long: {location.longitude})
                </Text>
                <MapPreview location={location} />
                </>
                :
                <ActivityIndicator />
            }
        </View>
    )
}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 130,
        gap:5,
    },
})