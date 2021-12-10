import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { getAllBusiness, getBusinessById } from "../utils/firebase";

//? Funcion para traer los negocios
const getBusssines = async () => {
  const negocios = await getAllBusiness();
  return negocios;
};



//? Componente para mostrar un negocio

//TODO sacarlo en un archivo aparte y mejorar apariencia [Cristian la para] y Agregar mas elementos del negocio como la foto, el tipo, la direccion etc para que se muestre todo eso.

//TODO agregar icono de editar e icono de eliminar ver si se puede hacer que cuando se presionen se vaya a la pagina de editar el neogicio y el icono de eliminar cuando se presione, elimine el negocio [Cristian]
const ListItem = ({ item, onPress, update, deleteBus }) => {
  return (
    //En caso de que sea necesario cambiar el touchableopacity para que se pueda agregar el icono de eliminar o editar se puede poner un view y agregar esos elementos.
    <TouchableOpacity onPress={onPress} style={styles.listItem}>
      <Text style={styles.listText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export const HomeScreen = () => {
  //TODO implementar funcion para cuando se presione un negocio nos mande a la vista detalle y esa vista detalle muestre toda la info necesaria del negocio
  const viewSelectedBusiness = () => {};

  //TODO
  const updateBusiness = () => {};

  //TODO
  const deleteBusiness = () => {};

  const [items, setItems] = useState([]);
  getBusssines().then((items) => setItems(items));

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
    marginTop: 22,
  },
  flatList: {
    width: "100%",
  },
  listText: {
    color: "white",
  },
  listItem: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: "#776677",
    padding: 10,
    borderRadius: 5,
  },
});
