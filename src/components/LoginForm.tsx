import React from 'react';
import '../ApiLaravel';

const LoginForm: React.FC = () => {
    return (
        <section className='flex justify-center items-center h-[calc(100vh-4rem)]'>
            <form id="login" className='flex flex-col justify-center items-center w-96 bg-[var(--blue)] h-3/4'>
                <img src="img/iconBall.svg" alt=""  width={70} height={70}/>
                <div>
                    <label htmlFor="loginUser">Email</label>
                    <input type="text" name="loginUser" id="loginUser" required/>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" required/>
                </div>
                <div>
                    <button type='submit'>Logar</button>
                </div>
                <div>
                    <a href="/register">Cadastre-se</a>
                </div>
            </form>
        </section>
    );
}

export default LoginForm;