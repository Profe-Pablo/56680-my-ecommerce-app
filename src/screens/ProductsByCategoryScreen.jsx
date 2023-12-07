import {View, Text, StyleSheet, FlatList} from 'react-native'
import products_data from '../data/products_data.json'
import ProductItem from '../components/ProductItem'
import Header from '../components/Header'

const ProductsByCategoryScreen = () => {

    const renderProductItem = ({item}) => (
        <ProductItem product={item} />
    )

    return(
        <>
        <Header title="Productos" />
        <FlatList
            data={products_data}
            renderItem={renderProductItem}
            keyExtractor={item=>item.id}
        />
        </>
    )
}

export default ProductsByCategoryScreen

const styles = StyleSheet.create({

})