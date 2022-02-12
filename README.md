# Backend template

[![codecov](https://codecov.io/gh/Joao208/bk_template/branch/main/graph/badge.svg?token=XSGPVGWKKO)](https://codecov.io/gh/Joao208/bk_personal_website)
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=Joao208_bk_template&metric=alert_status)](https://sonarcloud.io/dashboard?id=Joao208_bk_template)

Backend de template para minhas aplicações pessoais, caso queira clonar, fique a vontade para aproveitar em suas aplicações.

Para rodar pode executar os seguintes comandos:

```shell
git clone https://github.com/Joao208/bk_template
cd bk_template
yarn
yarn start
```

Dessa forma ele ira criar as models com o prisma e iniciar o projeto, para isso você precisa ter as envs em seu repositório, que são:

```js
DATABASE_URL=
AUTH_TOKEN=
APP_URL=http://localhost:5001
```

Para o provedor de banco, está configurado mongo, porém você pode mudar facilmente seguindo [essa documentação](https://prisma.io), facilitando a implementação.
