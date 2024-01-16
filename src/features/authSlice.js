import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        user: null,
        token: null,
        profilePicture: null, 
        localId: null,
        location: {
            latitude: null, 
            longitude: null,
            address: null
        }
    },
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload.email,
            state.token = action.payload.idToken,
            state.localId = action.payload.localId
        },
        setProfilePicture: (state, action) => {
            state.profilePicture = action.payload
        },
        setUserLocation: (state, action)=>{
            state.location ={
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
                address: action.payload.address,
            }
        }
    }   
})

export const {setUser, setProfilePicture, setUserLocation} = authSlice.actions

export default authSlice.reducer