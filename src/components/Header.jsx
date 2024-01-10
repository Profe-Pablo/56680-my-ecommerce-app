import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Header = ({ title, navigation }) => {
    return (
        <View style={styles.headerContainer}>
            <LinearGradient
                // Background Linear Gradient
                colors={[colors.primaryBack, colors.primary,]}
                style={styles.background}
                end={{ x: 0.5, y: 0.5 }}
            />
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
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 100,
      },
})