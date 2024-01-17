import React from 'react';
import axios from 'axios';
import UrlLaravel from '../UrlLaravel';

const LoginForm: React.FC = () => {

    window.onload = () => {
        const form = document.getElementById("login") as HTMLFormElement | null;
      
        if (form) {
          form.addEventListener('submit', function (event) {
            event.preventDefault();
      
            // Obter o formulário e os dados do formulário
            const formData = new FormData(form);
      
            // Fazer solicitação para obter o token CSRF
            axios.get(UrlLaravel() + '/sanctum/csrf-cookie')
              .then(() => {
                const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, "$1");
                // Realizar a solicitação de registro
                axios.post(UrlLaravel() + "/login", {
                  "email": formData.get("email") as string,
                  "password": formData.get("password") as string
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-XSRF-TOKEN': decodeURIComponent(csrfToken)
                    // Adicione outros cabeçalhos conforme necessário
                    },
                    withCredentials: true,
                })
                  .then((response) => {
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
            <form id="login" method="post" className='flex flex-col justify-center items-center w-96 bg-[var(--blue)] h-3/4'>
                <img src="img/iconBall.svg" alt=""  width={70} height={70}/>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" required/>
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