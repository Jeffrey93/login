import firebase from 'firebase';

export class AutenticacionService{
    registrarUsuario(data){
        //console.log( form.correo);
        return firebase.auth().createUserWithEmailAndPassword(data.correo,data.password)
    }
    iniciarSesion(data){
        //console.log( form.correo);
        return firebase.auth().signInWithEmailAndPassword(data.correo,data.password)
    }
    terminarSesion(){
        firebase.auth().signOut();
    }
}