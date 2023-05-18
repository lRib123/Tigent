import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({  
  image: {
    width: 120,
    height: 120,
    borderRadius: 50,
    marginWidth:10,
    marginTop:50
  },
});