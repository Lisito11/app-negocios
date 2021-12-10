import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, ScrollView, StyleSheet, Button, Picker } from 'react-native';
import MyImage from '../components/MyImage';


export const CreateScreen = () => {
    // Ejemplo de implementacion en el form y vistas
    // const create = async () => {
    //   const tempData = {
    //     name: "prueba 1",
    //     type: "cocina",
    //     pic: "prueba",
    //     cellphone: "849-280-2042",
    //     direction: "Higuey city",
    //     lat: -18.4754654,
    //     lng: 70.4478421,
    //   };

    //   const createdBusiness = await saveNewBusiness(tempData);
    //   if (createdBusiness) {
    //     console.log("Se creo satisfatoriamente");
    //   }
    // };

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


    const [business, setBusiness] = useState({
        name: '',
        type: '',
        pic: '',
        cellphone: '',
        direction: '',
        lat: -18.4754654,
        lng: 70.4478421,
    })

    const handleChange = (value, name) => {
        setBusiness({ ...business, [name]: value });
    };

    const saveBusiness = () => {
        if (business.name === '' || business.type === '' || business.cellphone === '' || business.direction === '' || business.lat === '' || business.lng === '') {
            alert("No pueden haber campos vacios!")
        }
        else {
            console.log(business)
        }
    }

    return (
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.title}>Registre Su Negocio</Text>

                <MyImage />

                <TextInput
                    style={styles.input}
                    placeholder={'Nombre del Negocio'}
                    onChangeText={(value) => handleChange(value, "name")}
                />

                <Picker
                    style={styles.input}
                    onValueChange={(value) => handleChange(value, "type")}
                >
                    <Picker.Item label="Tipo de Negocio" value="" />
                    <Picker.Item label="Centro de Diversiones" value="Centro de Diversiones" />
                    <Picker.Item label="Casa de Apuestas" value="Casa de Apuestas" />
                    <Picker.Item label="Restaurante" value="Restaurante" />
                    <Picker.Item label="Otro" value="Otro" />

                </Picker>

                <TextInput
                    style={styles.input}
                    placeholder={'Telefono del Negocio'}
                    onChangeText={(value) => handleChange(value, "cellphone")}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Direccion del Negocio'}
                    onChangeText={(value) => handleChange(value, "direction")}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Latitud Geografica del Negocio'}
                    onChangeText={(value) => handleChange(value, "lat")}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Longitud Geografica del Negocio'}
                    onChangeText={(value) => handleChange(value, "lng")}
                />
                <Button
                    title="GUARDAR NEGOCIO"
                    onPress={() => saveBusiness()}
                    color="#008000"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
    },
    input: {
        width: 385,
        height: 45,
        padding: 10,
        borderWidth: 3,
        borderColor: '#778899',
        borderRadius: 10,
        marginBottom: 15,
    },
    title: {
        marginBottom: 15,
        fontSize: 30,
    }
});

