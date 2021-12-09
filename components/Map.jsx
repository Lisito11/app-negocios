import React from 'react'
import MapView, { Marker } from 'react-native-maps' //TODO Instalar esta dependencia...
import { StyleSheet, Dimensions } from 'react-native'

//? Variable para guardar el size de la pantalla del dispositivo.
const height = Dimensions.get('window').height

const Map = () => {
    return (
        <MapView
            style={styles.map}
            loadingEnabled={true}
            region={{
                latitude: 18.5155327,
                longitude: -69.8741513,
                latitudeDelta: 18,
                longitudeDelta: 70
            }}
        >
            <MapView.Marker
                coordinate={{
                    latitude: 18.5155327,
                    longitude: -69.8741513,
                }}
                title="Marker Official"
                description="El Marker por default de la aplicacion"
            />
            //TODO Aqui ira una iterracion del componente Marker con los datos de los negocios.


        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height
    }
})

export default Map
