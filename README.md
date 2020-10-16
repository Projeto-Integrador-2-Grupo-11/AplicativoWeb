# THE PILGRIM DASHBOARD

Aplicação para editoras da Pilgrim, onde ela pode ver o relatório de vendas unitárias, vendas por assinaturas e relatório total.  

## Acesso à Aplicação

Primeiro passo a ser realizado é clonar o projeto pelo GitLab (tenha certeza de que tem o GitLab instalado na sua máquina): 
```
# HTTPS
$ git clone https://gitlab.com/thepilgrim/thepilgrim/frontend/publisher-dashboard.git

# SSH
$ git clone git@gitlab.com:thepilgrim/thepilgrim/frontend/publisher-dashboard.git

```

Certifique-se que tenha instalado o:

* docker 
* docker-compose 

Segundo passo a ser realizado é rodar os seguintes comandos em seu terminal:
```
$ yarn install

$ docker-compose up --build local-container 

$ docker exec -it NAME-CONTAINER /bin/sh

$ rm -rf yarn.lock node_modules .nuxt

$ yarn install 

$ yarn run build

```


A aplicação estará rodando no localhost, na porta 4200.


