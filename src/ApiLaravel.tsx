import React from 'react';
import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const LaravelHostName = "http://127.0.0.1:8000";

window.onload = function(){
    const form: HTMLCollectionOf<HTMLFormElement> = document.getElementsByTagName("form");

    form[0].addEventListener("submit", function(event){
        event.preventDefault();

        const formData = new FormData(form[0]);

        //Cada formulario terá seu id, e assim, o switch ira saber qual rota executar no axios
        switch(form[0].id){
            case "registroUsuario":
                axios
                .post(LaravelHostName + "/api/register", {
                    "name": formData.get("name") as String,
                    "email": formData.get("email") as String,
                    "password": formData.get("password") as String,
                    "password_confirmation": formData.get("confirmed_password") as String
                })
                .then((response)=> {
                    switch(response.data){
                        case "sucess":
                            window.location.href="/login"
                            break;
                        case "Numero máximo de caracteres excedido em nome":
                            alert("Nome muitos caracteres");
                            break;
                        case "Usuário já cadastrado":
                            alert("Email já cadastrado");
                            break;
                        case "Número minimo para criar a senha é 6":
                            alert("Número minimo para criar a senha é 6");
                            break;
                        case "As senhas não são iguais":
                            alert("As senhas não são iguais");
                            break;
                        default:
                            alert("Algo deu errado, contate o suporte !");
                            break;
                    }
                })

            break;
            case "registroUsuario":
                axios
                .post(LaravelHostName + "/api/register", {
                    "name": formData.get("name") as String,
                    "email": formData.get("email") as String,
                    "password": formData.get("password") as String,
                    "password_confirmation": formData.get("confirmed_password") as String
                })
                .then((response)=> {
                    switch(response.data){
                        case "sucess":
                            window.location.href="/login"
                            break;
                        case "Numero máximo de caracteres excedido em nome":
                            alert("Nome muitos caracteres");
                            break;
                        case "Usuário já cadastrado":
                            alert("Email já cadastrado");
                            break;
                        case "Número minimo para criar a senha é 6":
                            alert("Número minimo para criar a senha é 6");
                            break;
                        case "As senhas não são iguais":
                            alert("As senhas não são iguais");
                            break;
                        default:
                            alert("Algo deu errado, contate o suporte !");
                            break;
                    }
                })

            break;
        }
    })
}