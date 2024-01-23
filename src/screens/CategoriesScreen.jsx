import {StyleSheet, FlatList} from 'react-native'
import CategoryItem from '../components/CategoryItem'
import { useGetCategoriesQuery } from '../services/shopService'
import CustomError from '../components/CustomError'

const CategoriesScreen = ({navigation}) => {

    const {data, isLoading, error} = useGetCategoriesQuery()

    const renderCategoryItem = ({item}) => (
        <CategoryItem category={item} navigation={navigation} />
    )

    return(
        <>
        {/* <Header title="Categorías" /> */}
        <FlatList style={styles.categories}
            data={data}
            renderItem={renderCategoryItem}
            keyExtractor={item=>item}
        />
        {
            error &&
            <CustomError error={error} />
        }
        </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    categories:{
        marginBottom:90,
    },
    categoryError:{
        
    }
})