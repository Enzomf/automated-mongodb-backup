# Projeto realizado para que usuarios do mongodb possam realizar backups de forma automatizada
## Caso seja necessário, também é possivel enviar-lo para algum email de escolha

Para que o script possa ser executado é necessário ter as ferramentas do mongdb instaladas (mongodump e mongorestore),e que as variáveis de ambiente sejam preenchidas e o comando seja modificado de acordo com a necessidade.

### mongodump:
*utilizado para a realização do backup*

algumas das possiveis flags para esse comando são: 

*--db:* especifica o nome do banco dados a ser realiza o backup

*--archive:* especifica o caminho de saida do backup, sendo possivel passar o nome do   aquivo;

*--gzip:* gera o backup de no fomato .gz (comprimido)

*--username:* usuario do banco de dados (se houver)

*--password:* senha do banco de dados (se houver)

*--authenticationDatabase:* banco de dados utilizado para realizar a autenticação (se houver) 

*--uri:* url para conexão com o banco de dados

Exemplo:

       mongodump --username=example --password=example --authenticationDatabase=exemplo --archive=backups/ --gzip

mais informações na [documentação oficial](https://www.mongodb.com/docs/database-tools/mongodump/)


### mongorestore:

Para recuperar o banco de dados utilize o seguinte comando:
        
        mongorestore --archive="nomeDoArquivo.gz" --gzip

mais informações na [documentação oficial](https://www.mongodb.com/docs/database-tools/mongorestore/)

## Bibliotecas Utilizadas

*moment:* captura a data atual no formato YYYY-MM-DD, que nomeia o arquivo de backup - [ver mais](https://www.npmjs.com/package/moment)

*nodemailer:* envia o backup para algum email de sua escolha - [ver mais](https://nodemailer.com/about/)

*dotenv:* evita a exposição de dados sensiveis - [ver mais](https://www.npmjs.com/package/dotenv);

*node:child_process:* executa os comandos no terminal - [ver mais](https://nodejs.org/api/child_process.html)

*node-cron:* agenda os backups de forma que ocorram todos os dias a meia noite - [ver mais](https://www.npmjs.com/package/node-cron)

*ps:* para alterar a frequencia de backups basta alterar o primeiro parâmetro do metodo exec, utilizando expreções cron - [ver mais](https://crontab.guru/)

# Recomendações

para que a aplicação seja executada em segundo plano e possa realizar os backups com frequencia é necessario que se instale algum gerenciador de processos node, no caso recomenda-se o *pm2*

                                npm install -g pm2

para melhor conhecimento da biblioteca acessa a [documenteção oficial](https://pm2.keymetrics.io/)





