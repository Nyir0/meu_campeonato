import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

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

    return(
        <header>
            <Router>
            </Router>
        </header>
    );
}

export default HeaderNav;