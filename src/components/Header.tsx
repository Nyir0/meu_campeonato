import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const HeaderNav: React.FC = () => {

    const pathname = window.location.pathname;

    if(pathname === "/"){
        return(
            <header className='pl-16'>
                <strong className='text-md font-bold'>Meu Campeonato</strong>
            </header>
        );
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
            <a href="/Logout" className='w-20'>Sair</a>
        </header>
    );
}

export default HeaderNav;