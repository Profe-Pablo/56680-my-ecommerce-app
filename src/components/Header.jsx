import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';

const Header = ({ title, navigation }) => {
    return (
        <View style={styles.headerContainer}>
            {
                navigation.canGoBack()
                    ?
                    <TouchableOpacity onPress={navigation.goBack}>
                        <AntDesign name="caretleft" size={20} color="white" />
                    </TouchableOpacity>
                    :
                    <View></View>
            }

            <Text style={styles.headerTitle}>{title}</Text>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    headerTitle: {
        color: '#fff',
        fontFamily: 'Karla-Bold',
        fontSize: 20,
    }
})