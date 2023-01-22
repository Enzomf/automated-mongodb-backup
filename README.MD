Projeto realizado para que usuarios do mongodb possam realizar backups de forma automatizada, lembrando que é necessario ter as tools do mongodb instaladas: 

*mongodump:* realização do backup;
algumas das possiveis flags para esse comando são: 
*--db:* especifica o nome do banco dados a ser realiza o backup
        *ex:* --db=exemplo
*--archive:* especifica o caminho de saida do backup, sendo possivel passar o nome do   aquivo;
*ex:* --archive=backups/<nome do arquivo>.<extenção do arquivo>

*--gzip:* gera o backup de no fomato .gz (comprimido)
*--username:* usuario do banco de dados (se houver)
*ex:* --username=admin
*--password:* senha do banco de dados (se houver)
*ex:* --password=admin
*--authenticationDatabase:* banco de dados utilizado para realizar a autenticação (se houver) 
*--uri:* url para conexão com o banco de dados
*ex:* --uri="mongodb://mongodb0.example.com:27017"

para mais informações consultar a [documentação oficial](https://www.mongodb.com/docs/database-tools/mongodump/)

mongorestore: recuperação do banco de dados;
    comando utilizado: 
        
        mongorestore --archive="2023-01-22.gz" --gzip

 para mais informações consultar a [documentação oficial](https://www.mongodb.com/docs/database-tools/mongorestore/)





========================= Bibliotecas Utilizadas ===========================================

*moment:* captura a data atual no formato YYYY-MM-DD, que nomeia o arquivo de backup;

*node-cron:* agenda os backups de forma que ocorram todos os dias a meia noite;

*dotenv:* evita a exposição de dados sensiveis;

*node:* child_process: executa os comandos no terminal;