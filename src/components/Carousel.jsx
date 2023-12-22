import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

const Carousel = () => {

    const images = useSelector(state=>state.shopReducer.productSelected.images)

    /* const images = [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
    ]; */

    return (
        <Swiper style={styles.container} showsButtons={true}>
            {images.map((image, index) => (
                <View key={index} style={styles.slide}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            ))}
        </Swiper>
    )
}

export default Carousel

const styles = StyleSheet.create({
    container: {
        height: 300
    },
    slide: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: width,
      height:300
    },
  });