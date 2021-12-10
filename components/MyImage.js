import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { uploadImageToFirebase } from '../utils/firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MyImage() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }

    //Esto va en la parte del formulario
    const namePic = new Date().toISOString();
    const response = await uploadImageToFirebase(result, "business", namePic);

    //Esto verifica si la imagen se subio correctamente
    if (response.statusResponse) {
      //Url de la imagen a guardar en la db cuando se suba a firebase
      console.log(response.url);
    }
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
      <Button
        title="Seleccionar Imagen"
        onPress={pickImage}
        color="#483d8b"
      />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
