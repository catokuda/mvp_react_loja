# MVP FRONT END AVANÇADO - DESENVOLVIMENTO FULL STACK 2024 - PUC-RJ

## Sobre
* Este repositório é um projeto acadêmico de desenvolvimento Front End.
* Nele temos um site de navegação para que clientes de uma lojinha fictícia.
* O Front End segue o modelo criado no Figma, pelo mesmo autor deste repositório.

* Protótipo de alta fidelidade no Figma: 
```
https://www.figma.com/file/HR5Kgj15UXJgEN9A53SaXn/PUC-Hotel?type=design&node-id=0%3A1&mode=design&t=HMOLD4r2hD0GAola-1
```
* Visualização do protótipo do Figma:
```
https://www.figma.com/proto/HR5Kgj15UXJgEN9A53SaXn/PUC-Hotel?type=design&node-id=1-2&t=HMOLD4r2hD0GAola-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2
```
## Objetivos
* Desenvolver uma interface agradável e intuitiva para o usuário;
* Familiarizar-se com o React e o Node.js;
* Familiarizar-se com a criação e reutilização de componentes do React;
* Trabalhar com rotas, props, hooks, simular requisições a um servidor simples através de um .json;

## Rotas
* / - Home: Apresentação da lojinha e botão para a rota de simular compras.
* /reservas - Página de simulação de reserva: Escolha das datas, quarto e apresentação dos quartos e dos preços. Botão para a rota de pagamento.
* /pagamento - Página de pagamento: Revisão dos dados escolhidos e solicitação de dados do cliente e do cartão para pagamento. Conclusão da reserva.

## Como utilizar
O primeiro passo é fazer o download dos arquivos no diretório de sua preferência.

É necessário ter o Node.JS instalado em sua máquina e as variáveis de ambiente relacionadas corretamente configuradas. Acesse o site oficial do Node.js e baixe a versão mais atual. Instale o software conforme as instruções do instalador. 


Para instalar os componentes necessários para a visualização do projeto, navegue via prompt de comando até o diretório onde estão os arquivos baixados.
Então, instale os pacotes necessários para o projeto (descritos no package.json) através do seguinte comando:
```
> npm i
```
Uma nova pasta chamada 'node_modules' será criada.

Após a finalização da instalação das dependências, inicie o projeto através do comando:
```
> npm start
```

Com isso a aplicação ficará ativa em um servidor local. 
Você poderá acessá-lo através do navegador utilizando:
```
http://localhost:3000
```

Para encerrar, basta, no prompt de comando, utilizar CTRL + 'C' e confirmar com 'S'.