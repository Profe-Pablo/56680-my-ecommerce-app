import {View, Text, StyleSheet, FlatList} from 'react-native'
import Header from '../components/Header'
import categories_data from '../data/categories_data.json'

const CategoriesScreen = () => {

    const renderCategoryItem = ({item}) => (
        <Text>{item}</Text>
    )

    return(
        <>
        <Header title="Categorías" />
        <FlatList
            data={categories_data}
            renderItem={renderCategoryItem}
            keyExtractor={item=>item}
        />
        </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
})