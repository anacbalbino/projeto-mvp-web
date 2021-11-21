import React, {createContext, useState, useEffect} from 'react';
import '../services/firebase';
import {
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword, 
    signOut as signOutFirebase, 
    onAuthStateChanged
} from 'firebase/auth';

const auth = getAuth();

const UsuarioContext = createContext({});

const UsuarioProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
    return onAuthStateChanged(auth, async (userState)=>{
        setUser(userState);
        setLoading(false);
    })
    },[])


    const signIn =  async (email,password) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then(resp => {
            console.log(resp)
        }).catch(err=>{
            console.log(err)
        })

    }

    const signOut = async () =>{
        signOutFirebase(auth)
        .then(resp => {
            console.log('Usuário Deslogado')
        }).catch(err=>{
            console.log(err)
        })

    }

    const signUp = async (email,password) =>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(resp => {
            console.log('Cadastro Concluído')
        }).catch(err=>{
            console.log(err)
        })

    }


    return (
        <UsuarioContext.Provider value={{user, loading, signIn, signOut, signUp}}>
            {children}
        </UsuarioContext.Provider>
    )

}

export {UsuarioContext,UsuarioProvider}