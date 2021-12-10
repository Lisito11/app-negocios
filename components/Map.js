import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps' //TODO Instalar esta dependencia...
import { StyleSheet, Dimensions } from 'react-native'
import { getAllBusiness } from './../utils/firebase';
import { LogBox } from 'react-native';


//? Variable para guardar el size de la pantalla del dispositivo.
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

LogBox.ignoreLogs(['Setting a timer']);

const Map = () => {
    const [markers, setMarker] = useState([]);
    const business = async () => {
        const res = await getAllBusiness();
        setMarker(res);
    }

    useEffect(async () => {
       business();
    }, [])


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
            {
            
            markers && (markers !== [] ? markers.map(marker => (
                <MapView.Marker
                    key={marker[0]}
                    coordinate={{
                        latitude: marker[1].lat,
                        longitude: marker[1].lng,
                    }}
                    title={marker[1].name}
                    description={marker[1].type}

                />
            )) : "")
            
            
            }

        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height,
        width
    }
})

export default Map
