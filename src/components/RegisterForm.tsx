import React from 'react';
import '../ApiLaravel';

const RegisterForm: React.FC = () => {
    return (
        <section className='flex justify-center items-center h-[calc(100vh-4rem)]'>
            <form id="registroUsuario" className='flex flex-col justify-center items-center w-3/6 bg-[var(--blue)] h-96' method='POST'>
                <img src="img/iconBall.svg" alt=""  width={40} height={40}/>
                <section>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" required/>
                    </div>
                    <div>
                        <label htmlFor="confirmed_password">Confirme a Senha</label>
                        <input type="password" name="confirmed_password" id="confirmed_password" required/>
                    </div>
                </section>
                <div>
                    <button type='submit'>Registrar</button>
                </div>
                <div>
                    <a href="/login">Voltar</a>
                </div>
            </form>
        </section>
    );
};

export default RegisterForm;