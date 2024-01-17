import React from 'react';
import axios from 'axios';
import UrlLaravel from '../UrlLaravel';

const RegisterForm: React.FC = () => {

    window.onload = () => {
        const form = document.getElementById("registroUsuario") as HTMLFormElement | null;
      
        if (form) {
          form.addEventListener('submit', function (event) {
            event.preventDefault();
      
            // Obter o formulário e os dados do formulário
            const formData = new FormData(form);
      
            axios.get(UrlLaravel() + '/sanctum/csrf-cookie')
              .then(() => {
                const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, "$1");
                // Realizar a solicitação de registro
                axios.post(UrlLaravel() + "/register", {
                  "name": formData.get("name") as string,
                  "email": formData.get("email") as string,
                  "password": formData.get("password") as string,
                  "password_confirmation": formData.get("confirmed_password") as string
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-XSRF-TOKEN': decodeURIComponent(csrfToken)
                    // Adicione outros cabeçalhos conforme necessário
                    },
                    withCredentials: true,
                })
                  .then((response) => {
                    console.log(response.data);
                    if(response.data === "sucess") {
                      window.location.href="/inicio";
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
            });
        }
      };
      
      



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