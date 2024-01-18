import React from "react";
import axios from "axios";
import UrlLaravel from "../UrlLaravel";

const Menu: React.FC = () => {

    const logout = () =>{
        axios.get(UrlLaravel() + '/sanctum/csrf-cookie')
            .then(() => {
            const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, "$1");
            // Realizar a solicitação de registro
            axios.post(UrlLaravel() + "/logout", null,{
                headers: {
                    'Content-Type': 'application/json',
                    'X-XSRF-TOKEN': decodeURIComponent(csrfToken)
                // Adicione outros cabeçalhos conforme necessário
                },
                withCredentials: true,
            })
            .then((response) => {
                    if(response.data === "sucess") {
                      window.location.href="/login";
                    }
                })
                .catch((error) => {
                // Trate os erros da solicitação de registro
                console.error('Erro na solicitação de registro:', error);
                });
            })
            .catch((error) => {
            // Trate os erros na obtenção do token CSRF
            console.error('Erro ao obter token CSRF:', error);
        });
    }

    return(
        <nav>
            <ul>
                <div>
                    <li><a href="/inicio">CAMPEONATOS</a></li>
                    <li><a href="/inicio">HISTORICOS</a></li>
                </div>
                <span id="logout" onClick={logout}>LOGOUT</span>
            </ul>
        </nav>
    );
}

export default Menu;