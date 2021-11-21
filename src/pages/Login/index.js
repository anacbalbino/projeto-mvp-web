import React, {useContext, useState} from 'react';

import {UsuarioContext} from '../../contexts/user'

import {
    Main, Header, Content, Footer, ContainerLogoPharse, ContainerSignIn
} from './styles'

function Login(){

    const {signIn, signUp} = useContext(UsuarioContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    
    const handleLogin = async ()=>{
        try{
            await signIn(email, password)
            
        }catch(err){
            alert("Erro ao logar usuário")
            console.log(err)
        }

    }

    const handleCadastrar = async ()=>{
        try{
            await signUp(email, password)
        }catch(err){
            alert("Erro ao cadastrar usuário")
            console.log(err)
        }

    }

    return (
        <Main>

            <Header>

            </Header>

            
            <Content>

                <ContainerLogoPharse>
                <div id="logo">
                    <img src="/images/G.png" width="200px" />
                </div>

                <div id="pharse">
                    <p>Problemas para formar</p>
                    <p>um grupo de trabalho?</p>
                    <p>Grupou! Resolve!</p>
                </div>
                </ContainerLogoPharse>

                <ContainerSignIn>
                    <div id="containerLogin">
                        <div id="containerButtons">
                            <div class="button">
                                Membro
                            </div>
                            
                            <div class="button inativo">
                                Convidado
                            </div>
                        </div>
                        <div class="box">
                        <div class="title">Email</div>
                        <input value={email} onChange={(event) =>  setEmail(event.target.value)} placeholder="Digite seu Email"/>
                        </div>
                        <div class="box">
                        <div class="title">Senha</div>
                        <input type="password" value={password} onChange={(event) =>  setPassword(event.target.value)} placeholder="Digite sua senha"/>
                        </div>

                        <div class="forgotCredentials" >Esqueci minha senha</div>

                        <div id="containerLoginOrJoin">
                            <div class="button invert" onClick={handleCadastrar}>
                                Cadastre-se
                            </div>
                            <div class="button" onClick={handleLogin}>
                                Entrar
                            </div>
 
                        </div>

                    </div>
                </ContainerSignIn>
                
            </Content>

            <Footer>
                <div id="logo">
                    <img src="/images/G.png" width="100px" />
                </div>

                <div id="about">
                    <p>contato</p>
                    <p>contato@grupou.com.br</p>
                </div>

                <div id="social">
                    <img src="/images/Linkedin.png" width="50px" />
                    <img src="/images/instagram.png" width="50px" />
                    <img src="/images/Facebook.png" width="50px" />
                    
                </div>
                
            </Footer>

         </Main>


    )

}

export default Login