import React from 'react'
import MapView, { Marker } from 'react-native-maps' //TODO Instalar esta dependencia...
import { StyleSheet, Dimensions } from 'react-native'
import response from '../utils/data-test'

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
            {response.map(marker => (
                <MapView.Marker
                    key={marker[0].id}
                    coordinate={{
                        latitude: marker[1].lat,
                        longitude: marker[1].lng,
                    }}
                    title={marker[1].name}
                    description={marker[1].type}

                />
            ))}

        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height
    }
})

export default Map
