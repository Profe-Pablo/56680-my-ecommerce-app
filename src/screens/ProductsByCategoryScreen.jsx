import {View, Text, StyleSheet, FlatList} from 'react-native'
//import products_data from '../data/products_data.json'
import ProductItem from '../components/ProductItem'
//import Header from '../components/Header'
import { useState, useEffect } from 'react'
import Search from '../components/Search'
import { useSelector, useDispatch } from 'react-redux'

const ProductsByCategoryScreen = ({navigation, route}) => {

    const [productsByCategory, setProductsByCategory] = useState([])
    const [search, setSearch] = useState('')

    //console.log("Route params: ",route.params)
    //const {category} = route.params

    const category = useSelector(state=>state.shopReducer.categorySelected)
    const productsFilteredByCategory = useSelector(state=>state.shopReducer.productsFilteredByCategory)

    useEffect(()=>{
        //const productsFilteredByCategory = products_data.filter(product=>product.category===category)
        const productsFiltered = productsFilteredByCategory.filter(
            product=>product.title.toLowerCase().includes(search.toLowerCase()))
        setProductsByCategory(productsFiltered)
    },[category, search])

    const renderProductItem = ({item}) => (
        <ProductItem product={item} navigation={navigation}  />
    )

    const onSearch = (search) => {
        setSearch(search)
    }

    return(
        <>
        {/* <Header title="Productos" /> */}
        <Search onSearchHandlerEvent ={onSearch} />
        <FlatList
            data={productsByCategory}
            renderItem={renderProductItem}
            keyExtractor={item=>item.id}
        />
        </>
    )
}

export default ProductsByCategoryScreen

const styles = StyleSheet.create({

})