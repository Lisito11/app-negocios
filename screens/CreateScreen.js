import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  Picker,
  Platform,
  Image
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { saveNewBusiness, uploadImageToFirebase } from "../utils/firebase";
export const CreateScreen = ({ navigation }) => {
  // Ejemplo de implementacion en el form y vistas
 
  // const deleteDocument = async (id) => {
  //   const deleted = await deleteBusiness(id);
  //   console.log(deleted);
  // };

  // const editDocument = async (id) => {
  //   const tempData = {
  //     name: "prueba editadaaaaaaa",
  //     type: "cocinassss",
  //     pic: "pruebaa",
  //     cellphone: "849-280-2042",
  //     direction: "Higuey city",
  //     lat: -18.4754654,
  //     lng: 70.4478421,
  //   };

  //   const uptaded = await updateBusiness(id, tempData);
  //   console.log(uptaded);
  // };

  // const busId = async () => {
  //   const negocio = await getBusinessById("2021-12-09T13:33:55.554Z");
  //   console.log(negocio);
  // };

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
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
      setImageUrl(response.url);
      handleChange(response.url, "pic")
    }
  };

  const [business, setBusiness] = useState({
    name: "",
    type: "",
    pic: "",
    cellphone: "",
    direction: "",
    lat: -18.4754654,
    lng: 70.4478421,
  });

  const handleChange = (value, name) => {
    setBusiness({ ...business, [name]: value });
  };

  const saveBusiness = async () => {
    if (
      business.name === "" ||
      business.type === "" ||
      business.cellphone === "" ||
      business.direction === "" ||
      business.lat === "" ||
      business.lng === ""
    ) {
      alert("No pueden haber campos vacios!");
    } else {
      const tempData = {
        name: business.name,
        type: business.type,
        pic: business.pic,
        cellphone: business.cellphone,
        direction: business.direction,
        lat: business.lat,
        lng: business.lng,
      };

      const createdBusiness = await saveNewBusiness(tempData);
      if (createdBusiness) {
        alert("Se creo satisfatoriamente");
        navigation.navigate('HomeTab');
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Registre Su Negocio</Text>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Button
            title="Seleccionar Imagen"
            onPress={pickImage}
            color="#483d8b"
          />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>

        <TextInput
          style={styles.input}
          placeholder={"Nombre del Negocio"}
          onChangeText={(value) => handleChange(value, "name")}
        />

        <Picker
          style={styles.input}
          onValueChange={(value) => handleChange(value, "type")}
        >
          <Picker.Item label="Tipo de Negocio" value="" />
          <Picker.Item
            label="Centro de Diversiones"
            value="Centro de Diversiones"
          />
          <Picker.Item label="Casa de Apuestas" value="Casa de Apuestas" />
          <Picker.Item label="Restaurante" value="Restaurante" />
          <Picker.Item label="Otro" value="Otro" />
        </Picker>

        <TextInput
          style={styles.input}
          placeholder={"Telefono del Negocio"}
          onChangeText={(value) => handleChange(value, "cellphone")}
        />
        <TextInput
          style={styles.input}
          placeholder={"Direccion del Negocio"}
          onChangeText={(value) => handleChange(value, "direction")}
        />
        <TextInput
          style={styles.input}
          placeholder={"Latitud Geografica del Negocio"}
          onChangeText={(value) => handleChange(value, "lat")}
        />
        <TextInput
          style={styles.input}
          placeholder={"Longitud Geografica del Negocio"}
          onChangeText={(value) => handleChange(value, "lng")}
        />
        <Button
          title="GUARDAR NEGOCIO"
          onPress={saveBusiness}
          color="#008000"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },
  input: {
    width: 385,
    height: 45,
    padding: 10,
    borderWidth: 3,
    borderColor: "#778899",
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    marginBottom: 15,
    fontSize: 30,
  },
});
