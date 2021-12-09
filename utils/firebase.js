import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { fileToBlob } from "./helpers";

const firebaseConfig = {
  apiKey: "AIzaSyBc0ePB4PPhC6Fn2zp9y4ViLRHyiVqTwd0",
  authDomain: "app-negocios-ca8b7.firebaseapp.com",
  projectId: "app-negocios-ca8b7",
  storageBucket: "app-negocios-ca8b7.appspot.com",
  messagingSenderId: "477673646457",
  appId: "1:477673646457:web:c8589aa69fc0a8dec367a8",
  measurementId: "${config.measurementId}",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const saveNewBusiness = async (business) => {
  const { name, type, pic, cellphone, direction, lat, lng } = business;
  const uid = new Date().toISOString();

  if (business !== undefined) {
    await db
      .collection("business")
      .add({ uid, name, type, pic, cellphone, direction, lat, lng });
    return true;
  } else {
    return false;
  }
};

export const updateBusiness = async (id, business) => {
  //let status = false;
  const { name, type, pic, cellphone, direction, lat, lng } = business;
  db.collection("business")
    .doc(id)
    .update({ name, type, pic, cellphone, direction, lat, lng })

    .then(() => {
      console.log("Document successfully updated!");
      status = true;
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });

  //return status;
};

export const deleteBusiness = async (id) => {
  //let status = false;
  db.collection("business")
    .doc(id)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
      status = true;
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
   //return status;
};

//Le debes de pasar el campo uid del documento, no el que se crea automaticamente.
export const getBusinessById = async (id) => {
  let document = {};
  await db
    .collection("business")
    .where("uid", "==", id)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        document = doc.data();
      });
    });
  return document;
};

export const getAllBusiness = async () => {
  let data = [];
  db.collection("business")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        
        data.push([doc.id, doc.data()]);
      });
    });
  return data;
};

export const uploadImageToFirebase = async (image, path, name) => {
  const result = { statusResponse: false, error: null, url: null };
  const ref = firebase.storage().ref(path).child(`${name}`);
  const blob = await fileToBlob(image);

  try {
    await ref.put(blob);
    const url = await firebase
      .storage()
      .ref(`${path}/${name}`)
      .getDownloadURL();
    result.statusResponse = true;
    result.url = url;
  } catch (error) {
    result.error = error;
  }
  return result;
};
