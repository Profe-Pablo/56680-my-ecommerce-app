import { FlatList, StyleSheet } from 'react-native'
import OrderItem from '../components/OrderItem'
import orders_data from '../data/orders_data.json'

const OrdersScreen = () => {
  const renderOrderItem = ({item}) => {
    const total = item.items.reduce((accumulator, currentItem) => (
      accumulator+= currentItem.price*currentItem.quantity
    ),0)
    return(
      <OrderItem order={item} total={total} />
    )
  }

  return (
      <FlatList
        data={orders_data}
        renderItem={renderOrderItem}
        keyExtractor={item => item.id}
      />
  )
}

export default OrdersScreen