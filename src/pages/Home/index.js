import React, {useContext,useState} from 'react';
import {Link} from 'react-router-dom'

import {UsuarioContext} from '../../contexts/user';
import GlobalStyle from '../../globalStyles';

function Home(){
    
    const {user, signOut} = useContext(UsuarioContext)

    return (

        <div>
            
            <h1>Home</h1>
            {/* <Link to="/about"> Ir para página Sobre</Link> */}
            <Link to={{
                pathname: "/about",
                state:{
                    nome: user? user.email : ''
                }
            }}>Ir para página Sobre</Link>

        </div>


    )

}

export default Home