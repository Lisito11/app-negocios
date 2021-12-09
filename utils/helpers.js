import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export const fileToBlob = async(path) => {
    const file = await fetch(path.uri);
    const blob = await file.blob();
    return blob
}

export const loadImageFromGAllery = async(array) =>{

    const response = { status: false, image: null }

    const resultPermisions = await Permissions.askAsync(Permissions.CAMERA);

    if(resultPermisions.status == 'denied'){
        Alert('Debes de darle permisos para accedera la imagenes del telfono');
        return response;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: array
    })

    if(result.cancelled){
        return response
    }

    response.status = true
    response.image = result.uri
    return response;

}