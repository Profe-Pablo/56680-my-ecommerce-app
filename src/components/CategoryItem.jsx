import { Text, StyleSheet } from "react-native"
import Card from './Card'

const CategoryItem = ({category}) => {
    return (
        <Card style={styles.cardContainer}>
            <Text style={styles.text}>{category}</Text>
        </Card>
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