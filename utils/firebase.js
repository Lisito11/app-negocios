import firebase from 'firebase'
import { v4 as uuidv4 } from 'uuid';

import 'firebase/firestore'


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

}

const uploadImage = async (image) => {
    
}

