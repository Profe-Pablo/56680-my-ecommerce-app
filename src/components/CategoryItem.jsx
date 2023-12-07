import { Text, StyleSheet, TouchableOpacity } from "react-native"
import Card from './Card'

const CategoryItem = ({ category }) => {
    return (
        <TouchableOpacity onPress={null}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 15
    }
})