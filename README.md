# SwagAutomation

![GitHub repo size](https://img.shields.io/github/repo-size/Leoamarilha/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/Leoamarilha/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Leoamarilha/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/Leoamarilha/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/Leoamarilha/README-template?style=for-the-badge)

> Olá, meu nome é Leandro Amarilha e este projeto é uma automação feita com Cypress!

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente do `Node.js 12 ou 14 e superior`
* Suportado nos seguintes OS
* MacOS 10.9 e superior (somente 64 bits)
* Linux Ubuntu 12.04 e superior, Fedora 21 e Debian 8 (somente 64 bits)
* Windows 7 e superior (somente 64 bits)

## 🚀 Instalação
Para instalar, siga estas etapas:

### Node.js

Se você está utilizando `npm` para instalar o Cypress, nós suportamos:

- **Node.js** 12 ou 14 e superior

### Linux

Se você estiver usando Linux, você precisará das dependências necessárias
instaladas no seu sistema.

Nós também temos uma versão oficial [cypress/base](https://hub.docker.com/r/cypress/base/) em container docker com todas
as dependências necessárias instaladas.

#### Ubuntu/Debian

```bash
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

#### CentOS

```bash
yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
```

#### Docker 

Imagens do Docker com todas as dependências necessárias instaladas estão disponíveis em [cypress/base](https://github.com/cypress-io/cypress-docker-images)

Se você estiver executando seus projetos em *containers*, você vai querer Cypress no *container* com o processo Node.js.

```yaml
    ui:
        image: cypress/base:latest
        # se tiver como alvo uma versão node específica, use e.g.
        # image: cypress/base:14
```

`cypress/base` é um substituto para imagens [base do docker para node](https://hub.docker.com/_/node/).

### `npm install`

Instale o Cypress usando `npm`:

```shell
cd /caminho/do/projeto
```

```shell
npm install cypress --save-dev
```

Isto vai instalar o Cypress localmente como uma dependência de desenvolvimento em seu projeto.

## Abrindo o Cypress

Se você usou `npm` para instalação, o Cypress foi instalado
no diretório `./node_modules`, com seus binários executáveis accessíveis
em `./node_modules/.bin`.

Agora você pode abrir o Cypress do seu projeto principal de uma
das seguintes formas:

A forma longa com o caminho completo

```bash
./node_modules/.bin/cypress open
```

Ou com o atalho usando `npm bin`

```bash
$(npm bin)/cypress open
```

Ou usando o `npx`

Obs.: o [npx](https://www.npmjs.com/package/npx) é incluido no npm > v5.2,
ou pode ser instalado separadamente.

```bash
npx cypress open
```

Após um momento, o Cypress Test Runner será aberto.
