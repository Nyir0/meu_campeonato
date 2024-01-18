Para executar o projeto:

1 - Execute o clone tanto do front quanto do backend:
front: https://github.com/Nyir0/meu_campeonato.git
back: https://github.com/Nyir0/backEndMeuCampeonato.git

2 - No projeto meu_campeonato(front) execute um npm update.

3 - No projeto do back, execute um composer install.

4 - Ainda no back, execute php artisan migrate, para gerar todas as migrations

5 - Para gerar o acesso de usuario e possivel tanto criar uma conta, quanto executar o comando e gerar uma conta
admin.
Comando: php artisan db:seed --class=DatabaseSeeder

6 - Execute php artisan db:seed --class=DatabaseChampionship para gerar os campeonatos

7 - Execute no front(React) npm start, e execute o projeto

8 - Se executou o comando para acesso como admin, o login:admin@admin.com password:admin123

9 - É feita uma verificação com token para o backend para permitir o login. Após entrar poderá verificar
que serao gerados 3 campeonatos, sendo que o primeiro campeonato é o unico com times cadastrados. Se apertar simular
Será direcionado para uma pagina que será mostrado a simulação.

10 - Caso volte para a pagina inicial, pode escolher outro campeonato e cadastrar um time, basta colocar o nome do time no campo do lado direito e apertar inscrever que o time sera cadastrado.

11 - Para simular e necessário ter 8 times, caso nao tenha n será direcionado para a pagina.

12 - Se apertar no logout será deslogado

Obs.: Infelizmente não consegui fazer a parte do historico e de diferetnes logins com facebook e github a tempo, mas decidi o que eu ja tinha feito.
