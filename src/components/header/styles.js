import { StyleSheet } from "react-native"
import {colors} from '../../global/colors'

export const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    headerTitle: {
        color: '#fff',
        fontFamily: 'Karla-Bold'
    }
})