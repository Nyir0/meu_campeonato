import React from 'react';

const LoginForm: React.FC = () => {
    return (
        <section className='flex justify-center items-center h-[calc(100vh-4rem)]'>
            <form className='flex flex-col justify-center items-center w-96 bg-[var(--blue)] h-3/5'>
                <img src="img/iconBall.svg" alt=""  width={70} height={70}/>
                <div>
                    <label htmlFor="loginUser">Email</label>
                    <input type="text" name="loginUser" id="loginUser" />
                </div>
                <div>
                    <label htmlFor="loginUser">Senha</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <button type='submit'>Logar</button>
                </div>
            </form>
        </section>
    );
}

export default LoginForm;