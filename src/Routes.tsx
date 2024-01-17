import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from './components/LoginForm';
import Home from "./components/Home";

const Login: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<LoginForm />}/>
                <Route path='/login' element={<LoginForm />}/>
                <Route path='/register' element={<RegisterForm />}/>
                <Route path='/Inicio' element={<Home />}/>
            </Routes>
        </Router>
    );
}

export default Login;