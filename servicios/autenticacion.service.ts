import firebase from 'firebase';

export class AutenticacionService{
    registrarUsuario(correo:string,password:string){
        return firebase.auth().createUserWithEmailAndPassword(correo,password)
    }
}