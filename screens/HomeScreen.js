import React from "react";
import { Text, View, Button } from "react-native";
import MyImage from "../components/MyImage";
import {
  updateBusiness,
  getBusinessById,
  saveNewBusiness,
} from "../utils/firebase";
import { deleteBusiness, getAllBusiness } from "./../utils/firebase";

export const HomeScreen = () => {
  //Ejemplo de implementacion en el form y vistas
  const create = async () => {
    const tempData = {
      name: "prueba 1",
      type: "cocina",
      pic: "prueba",
      cellphone: "849-280-2042",
      direction: "Higuey city",
      lat: -18.4754654,
      lng: 70.4478421,
    };

    const createdBusiness = await saveNewBusiness(tempData);
    if (createdBusiness) {
      console.log("Se creo satisfatoriamente");
    }
  };

  const deleteDocument = async (id) => {
    const deleted = await deleteBusiness(id);
    console.log(deleted);
  };

  const editDocument = async (id) => {
    const tempData = {
      name: "prueba editadaaaaaaa",
      type: "cocinassss",
      pic: "pruebaa",
      cellphone: "849-280-2042",
      direction: "Higuey city",
      lat: -18.4754654,
      lng: 70.4478421,
    };

    const uptaded = await updateBusiness(id, tempData);
    console.log(uptaded);
  };

  const bus = async () => {
    const negocios = await getAllBusiness();
    console.log(negocios);
  };

  const busId = async () => {
    const negocio = await getBusinessById("2021-12-09T05:39:56.250Z");
    console.log(negocio);
  };

  return (
    <View>
      <Text>Home Screen</Text>
      
      {/* CODIGO DE EJEMPLO */}
      
      <MyImage />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <Button title="Create Business" onPress={create} />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <Button title="Get All Business (view in console)" onPress={bus} />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <Button title="Get business id (view in console)" onPress={busId} />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <Button
          title="Edit business"
          onPress={() => editDocument("1wJlpgT32kgGnXkrpgVc")}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <Button
          title="Delete business"
          onPress={() => deleteDocument("1wJlpgT32kgGnXkrpgVc")}
        />
      </View>
    </View>
  );
};
