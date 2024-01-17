import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import UrlLaravel from '../UrlLaravel';

// Componente do Header geral da aplicação

const HeaderNav: React.FC = () => {

    const pathname = window.location.pathname;

    if(pathname === "/" || pathname === "/login" || pathname === "/register"){
        return(
            <header className='pl-16'>
                <strong className='text-md font-bold'>Meu Campeonato</strong>
            </header>
        );
    }

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
        <header>
            <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/perfil">Perfil</Link>
                    </li>
                </ul>
            </nav>
            </Router>
            <span id="logout" className='w-20 cursor-pointer' onClick={logout}>Sair</span>
        </header>
    );
}

export default HeaderNav;