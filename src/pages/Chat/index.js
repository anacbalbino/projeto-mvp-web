import React, {useContext,useState, useEffect} from 'react';

import firebaseApp from "../../services/firebase";
import { getFirestore, collection, query,  addDoc, onSnapshot, orderBy  } from "firebase/firestore";

import {UsuarioContext} from '../../contexts/user';
import GlobalStyle from '../../globalStyles';


function Chat(){

    const {user, signOut} = useContext(UsuarioContext)
    const db = getFirestore(firebaseApp);
    const [listagemDeMensagens,setListagemDeMensagens] = useState([]);
    const [mensagem,setMensagem] = useState("");

    const [agenda,setAgenda] = useState(true);
    
    useEffect(() => { 
        const q = query(collection(db, "chats"), orderBy("dataInicial"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let mensagens = [];
            querySnapshot.forEach((doc) => {
            console.log("Dados: ", doc.data());
            const chat = {
                "usuario" : doc.data().email,
                "mensagem" : doc.data().mensagem,
                "dataInicial" : doc.data().dataInicial
            }
            mensagens.push(chat);
       
            });
            setListagemDeMensagens(mensagens);
        });
        return () => unsubscribe()
    }, [agenda]);



    const cadastrarMensagem = () => {
        addDoc(collection(db, "chats"), {
            uid: user.uid,
            mensagem: mensagem,
            email: user.email,
            dataInicial: new Date()
        });
        setMensagem("");  
    }

    return (
       
        <div>
             <GlobalStyle />
            <h1>Chat {user? user.email : ''}  <button type="button" onClick={()=>{signOut()}}>Sair</button> </h1>

            <div id="listagemDeMensagens">
               {listagemDeMensagens.map((mensagemAtual,index) => {
                    return <p key={index} className={mensagemAtual.usuario === user.email ? "chatBox chatBoxRight" : "chatBox chatBoxLeft"}  >
                                {mensagemAtual.usuario} : {mensagemAtual.mensagem}
                            </p>;
               })}
            </div>

            <div >
                <input value={mensagem} type="text" onChange={(event) =>  setMensagem(event.target.value)} />
                <input type="button" value="Enviar" onClick={() => cadastrarMensagem()} />
            </div>

        </div>


    )

}

export default Chat