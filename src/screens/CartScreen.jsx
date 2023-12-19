import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import cart_data from "../data/cart_data.json"
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useState, useEffect } from 'react';

const CartScreen = () => {

    const [total, setTotal] = useState()

    useEffect(()=>{
        const totalCart = cart_data.reduce((accumulator, currentItem)=>(
            accumulator+=currentItem.price*currentItem.quantity
        ),0)
        setTotal(totalCart)
    },[])

    const renderCartItem = ({item}) => (
        <CartItem item={item} />
    )

    return (
        <View style={styles.cartContainer}>
            <FlatList
                data={cart_data}
                renderItem={renderCartItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.cartConfirm}>
                <Text style={styles.totalPrice}>Total: USD {total}</Text>
                <TouchableOpacity style={styles.confirmButton} onPress={null}>
                    <Text style={styles.textConfirm}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    cartContainer: {
      flex: 1,
    },
    cartConfirm: {
      marginBottom: 130,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 25,
    },
    totalPrice: {
      fontSize: 16,
      fontFamily: 'Karla-Bold'
    },
    confirmButton:{
      backgroundColor: colors.secondary,
      padding:10,
      borderRadius:10,
    },
    textConfirm:{
      fontFamily:'Karla-Bold',
      fontSize:16,
      color: '#fff'
    }  
  })