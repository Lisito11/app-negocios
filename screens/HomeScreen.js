import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Button,
  Alert
} from "react-native";
import { getAllBusiness, getBusinessById } from "../utils/firebase";

//? Funcion para traer los negocios
// const getBusssines = async () => {
//   const negocios = await getAllBusiness();
//   return negocios;
// };

//? Componente para mostrar un negocio
//TODO sacarlo en un archivo aparte y mejorar apariencia [Cristian la para] y Agregar mas elementos del negocio como la foto, el tipo, la direccion etc para que se muestre todo eso.

const ListItem = ({ item, onPress, update, deleteBus }) => {
  return (
    //En caso de que sea necesario cambiar el touchableopacity para que se pueda agregar el icono de eliminar o editar se puede poner un view y agregar esos elementos.
    <TouchableOpacity onPress={onPress} style={styles.listItem}>
      <View style={styles.headContainer}>
        <Image
          source={{ uri: item.pic }}
          style={styles.image}
        />
        <Text style={styles.listText}>{item.name}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={onPress} style={styles.btnDelete}>
          <Text style={styles.btnText}>Borrar 🗑️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={styles.btnEdit}>
          <Text style={styles.btnText}>Editar 📝</Text>
        </TouchableOpacity>

      </View>
    </TouchableOpacity>
  );
};

export const HomeScreen = () => {
  //TODO implementar funcion para cuando se presione un negocio nos mande a la vista detalle y esa vista detalle muestre toda la info necesaria del negocio
  const viewSelectedBusiness = () => { };

  //TODO
  const updateBusiness = () => { };

  //TODO
  const deleteBusiness = () => { };

  const [items, setItems] = useState([]);
  // getBusssines().then((items) => setItems(items));

  return (
    <SafeAreaView style={styles.parentView}>
      <FlatList
        style={styles.flatList}
        data={items}
        keyExtractor={(item) => item[0].toString()}
        renderItem={({ item }) => (
          <ListItem
            item={item[1]}
            onPress={() => viewSelectedBusiness}
            update={() => updateBusiness}
            deleteBus={() => deleteBusiness}
          />
        )}
      />
    </SafeAreaView>
  );
};

//TODO Mejorar los styles [Cristian]
const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  flatList: {
    width: "100%",
  },
  listText: {
    color: "white",
    fontSize: 30,
    marginStart: 20,
    marginTop: 5,
  },
  listItem: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: "#2f4f4f",
    padding: 15,
    borderRadius: 5,
  },
  btnEdit: {
    backgroundColor: '#ff8c00',
    marginTop: 10,
    marginEnd: 5,
    width: 100,
    height: 40,
    borderRadius: 7,
    padding: 7,
    borderWidth: 2,
    borderColor: "silver"
  },
  btnDelete: {
    backgroundColor: '#b22222',
    marginTop: 10,
    marginEnd: 5,
    width: 100,
    height: 40,
    borderRadius: 7,
    padding: 7,
    borderWidth: 2,
    borderColor: "silver"
  },
  btnText: {
    fontSize: 15,
    color: "white",
    marginTop: 2,
    marginLeft: 15,
  },

  btnContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse"
  },
  headContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  image: {
    marginStart: 5,
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 35,
  },
});
