import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import MapPreview from './MapPreview'
import { maps_api_key } from '../apis/googleCloud'
import { setUserLocation } from '../features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { usePutUserLocationMutation } from '../services/shopService'
import { colors } from '../global/colors'
import { getDistance } from 'geolib'

const LocationSelector = () => {
    const [location,setLocation] = useState("")
    const [error, setError] = useState("")
    const [address, setAddress] = useState("")
    const [distance, setDistance] = useState("")
    const localId = useSelector(state => state.authReducer.localId)
    const [triggerPutUserLocation, result] = usePutUserLocationMutation()

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

    useEffect(() => {
        (
            async () => {
                try {
                    if (location.latitude) {
                        const urlReverseGeocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${maps_api_key}`
                        const response = await fetch(urlReverseGeocode)
                        const data = await response.json()
                        const formattedAdress = await data.results[0].formatted_address
                        const distance = getDistance(
                            { latitude: location.latitude, longitude: location.longitude },
                            { latitude: location.latitude, longitude: location.longitude+0.01 }
                        )
                        setAddress(formattedAdress)
                        setDistance(distance)
                    }
                } catch (error) {
                    setError(error.message)
                }
            })()
    }, [location])


    const dispatch = useDispatch()

    const onConfirmAddress = ()=>{
        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address: address
        }
        dispatch(setUserLocation(locationFormatted))
        triggerPutUserLocation({ location: locationFormatted, localId } )
    }

    

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Mi ubicación actual: </Text>
            {
                location.latitude
                ?
                <>
                <Text style={styles.textAddress}>{address}</Text>
                <Text style={styles.textAddress}>Distancia a la tienda más cercana: {distance}</Text>
                <Text style={styles.textLocation}>
                    (Lat: {location.latitude}, Long: {location.longitude})
                </Text>
                <TouchableOpacity style={styles.btn} onPress={onConfirmAddress}>
                    <Text style={styles.textBtn}>Actualizar ubicación</Text>
                </TouchableOpacity>
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
    noLocationContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        border: colors.success,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
      padding: 10,
      backgroundColor: colors.success,
      borderRadius:5,
      paddingHorizontal: 15,   
      marginVertical:15,   
    },
    textBtn: {
        fontFamily: 'Karla-regular',
        color:"#fff"
    },textTitle:{
        fontFamily: "Karla-Bold",
        fontSize:16,
    },
    textAddress: {
        fontFamily:'Karla-regular'
    },
    textLocation: {
        fontFamily: 'Karla-Light',
        fontSize:12
    }
})