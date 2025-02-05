Aqui vou deixar o passo a passo para fazer o projeto rodar e explicar um pouco de como foi criado.

Segue o passo a passo:

Primeiramente verificar se estão instalados em sua máquina:

Docker
Docker Compose
Node
npm

Feito essa verificação vamos começar rodando o banco de dados, pra isso podemos entrar no projeto, no diretorio projeto\_\_locacao, e no terminal digitar:

docker-compose up mysql_db -d (isso fará com que o banco de dados seja iniciado)

docker-compose up --build backend -d (isso ira construir a API, conectando com o banco de dados anteriormente)

Agora temos que rodar o front-end localmente, para isso vamos:

Entrar no projeto no diretorio /trip-locacoes
no terminal digitar
npm install (para instalar as dependencias)
e agora sim rodar com
npm run dev

Isso mostrará o front disponivel, em algum caminho parecido com (http://localhost:5173)

Comentários para experiência do usuário:

Quando for pesquisar por cidade, favor colocar os acentos como por exemplo São Paulo, cidades sem acento não tem esse preocupação apenas colocar com letra Maiscula de inicio.

Existem algumas melhorias a serem feitas no site para exibir uma melhor experiência, entranto, como tive 3 dias para realizar o projeto foquei na parte funcional atendendo oq foi pedido no desafio, precisei fazer um equilibrio para poder entregar tudo a tempo.

Como pensei no projeto:

A ideia de trips para o nome surgiu de uma marca na roupa de surf que usei no final de semana.

Utilizei para esse projeto algumas bibliotecas que tive experiencia em um outro projeto realizado, como o tailwindcss, o materialui, isso me deixou mais a vontade para produzir o estilo do site, e por minhas ideias em codigo, usei como inspiracao alguns sites de alugueis, como airbnb, tripadvisor.

https://unicor.vercel.app
Aqui foi postado uma previa do site como ficaria, e segue as mesmas bibliotecas do porjeto criado para esse desafio.

Sobre o figma:

No figma utilizei mais de como aproveitar o espaço das paginas para criar os componentes,
algumas coisas foram mudadas ao longo do desenvolvimento, deixei também as imagens, do desenho que fiz
como se passava o projeto pela minha cabeça e iniciei tudo por aquelas folhinas, fazendo o projeto sair apenas do papel.
