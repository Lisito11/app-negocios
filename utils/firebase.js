import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { fileToBlob } from './helpers';


const firebaseConfig = {
    apiKey: "AIzaSyBc0ePB4PPhC6Fn2zp9y4ViLRHyiVqTwd0",
    authDomain: "app-negocios-ca8b7.firebaseapp.com",
    projectId: "app-negocios-ca8b7",
    storageBucket: "app-negocios-ca8b7.appspot.com",
    messagingSenderId: "477673646457",
    appId: "1:477673646457:web:c8589aa69fc0a8dec367a8",
    measurementId: "${config.measurementId}"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export const saveNewBusiness = async (business) =>{
    const {name,type,pic,cellphone,direction,lat,lng} = business;
    if(business !== undefined){
        await db.collection('business').add({id:uuidv4() ,name, type, pic, cellphone, direction, lat, lng})
        return true;
    }else{
        return false;
    }
}

export const editBusiness = async (id) => {

}

export const deleteBusiness = async(id) => {

}

export const getBusinessById = async (id) => {

}

export const getAllBusiness = async () => {
    const querySnapshot = await getDo
}

export const uploadImageToFirebase = async (image, path, name) => {
    const result = {statusResponse: false, error:null, url:null};
    const ref = firebase.storage().ref(path).child(`${name}.jpg`);
    const blob = await fileToBlob(image);

    try {
        await ref.put(blob);
        const url = await firebase.storage().ref(`${path}/${name}`).getDownloadURL();
        result.statusResponse = true;
        result.url = url;
    } catch (error) {
        result.error = error;
    }
    console.log(result)
    return result;
}

// const response = await uploadImage(image, "business", uuidv4())
// if (response.statusResponse){
//     console.log('imagen subida correctamente');
// }

