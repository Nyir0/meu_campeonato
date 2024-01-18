import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from './components/LoginForm';
import Home from "./components/Home";
import Simulation from "./components/Simulation";
import History from "./components/History";

const Login: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<LoginForm />}/>
                <Route path='/login' element={<LoginForm />}/>
                <Route path='/register' element={<RegisterForm />}/>
                <Route path='/Inicio' element={<Home />}/>
                <Route path='/simulacao' element={<Simulation />}/>
                <Route path='/historico' element={<History />}/>
            </Routes>
        </Router>
    );
}

export default Login;