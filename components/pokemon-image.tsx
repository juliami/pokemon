import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';


const PokemonImage = ({ imageUri }: { imageUri: string }) => (<>
    <Image source={{ uri: imageUri }} style={styles.imageShadow} contentPosition={'bottom'} tintColor={'white'} />
    <Image source={{ uri: imageUri }} style={styles.image} contentPosition={'bottom'} />
</>)



const styles = StyleSheet.create({
    imageShadow: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        flexGrow: 1,
        position: 'absolute',
        opacity: 0.15,
        transform: [{ translateY: 50 }, { scale: 1.7 }],
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        flexGrow: 1,
        zIndex: 5,
        transform: [{ translateY: 10 }],
    },
});


export default PokemonImage;