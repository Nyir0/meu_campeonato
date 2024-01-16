import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from './components/LoginForm';

const Login: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<LoginForm />}/>
                <Route path='/login' element={<LoginForm />}/>
                <Route path='/register' element={<RegisterForm />}/>
            </Routes>
        </Router>
    );
}

export default Login;