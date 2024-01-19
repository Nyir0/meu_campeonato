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
Detalhe: caso esteja testando fora de um ambiente local, ou que não esteja usando o host padrão para o Laravel(localhost:8000) deverá alterar o arquivo
src/UrlLaravel.tsx e mudar o retorno para o host que estiver usando para o Laravel. Se não fizer isso as API´s não iram funcionar, nem logar você conseguirá.

9 - É feita uma verificação com token para o backend para permitir o login. Após entrar poderá verificar
que serao gerados 3 campeonatos, sendo que o primeiro campeonato é o unico com times cadastrados. Se apertar simular
Será direcionado para uma pagina que será mostrado a simulação.

10 - Caso volte para a pagina inicial, pode escolher outro campeonato e cadastrar um time, basta colocar o nome do time no campo do lado direito e apertar inscrever que o time sera cadastrado.

11 - Para simular e necessário ter 8 times, caso nao tenha confirme o alerta que será direcionado para a pagina inicial.

12 - Clickar no menu historico, podera ver as ultimas 5 simulações feitas. É possivel colocar mais, porem simulei a 5 só para testar a principio.

12 - Se apertar no logout será deslogado e voltara para a página de login.

