import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { setProductIdSelected } from '../features/shopSlice'

const ProductItem = ({product, navigation}) => {

    const dispatch = useDispatch()
  return (
    <TouchableOpacity onPress={()=>{
        dispatch(setProductIdSelected(product.id))
        navigation.navigate("Detalle", product.id)

    }
        } style={styles.containerProductItem}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Image
            style={styles.productImage}
            resizeMode='cover'
            source={{uri: product.thumbnail }}
        />
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    containerProductItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
        margin:10,
    },
    productTitle:{},
    productImage:{
        width:60,
        height:60,
    }
})