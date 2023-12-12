import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const ProductItem = ({product, onSelectProductIdEvent}) => {
  return (
    <TouchableOpacity onPress={()=>onSelectProductIdEvent(product.id)} style={styles.containerProductItem}>
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