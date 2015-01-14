site
====

Informações do site no período de 1 ano (1/12/2013 à 1/12/2014)

=> Navegadores
- Chrome -> 54.84%
- (Not set) -> 20.10%
- Firefox -> 9.80%
- IE -> 7.32%

=> As versões do IE (do total de 7.32%)
- 11.0 -> 36.02%
- 10.0 -> 22.04%
- 08.0 -> 21.51%
- 09.0 -> 17.20%

=> Dispositivos
- Desktop -> 90.79%
- Mobile -> 6.81%
- Tablet -> 2.40%

=> Layout

O layout tem referências do template "escape" (http://freebiesxpress.com/gallery/escape-one-page-psd-web-template/), seguindo a mesma estrutura de página, mas não de itens do menu.

=> Tecnologias

Utilizarei nesse desenvolvimento o AngularJS para fins de estudos e uma melhor performance do site nos dispositivos.


Novo site da Idei4

=> Áreas

- Quem somos
- Clientes
- Serviços
- Portfolio
- Contato


=> Gerar conteúdo dinâmico na parte de clientes

Criei um JSON que irá alimentar os clientes e assim que surgir um cliente novo, só adicioná-lo no JSON, subir via FTP (por enquanto) que já irá aparecer no site.
Arquivo: js/clientes.json


=> AngularJs e Ui-Router

Por ser uma single page application, pensei em algo em que não precisasse utilizar popups, lightboxes ou abrr outras páginas e para fazer com que as áreas aparecessem sem haver o reload da página, utilizei o ui-router do Angular. Com o ui-router conseguimos criar as rotas do site e utilizar o conceito de view na página.

Podemos trabalhar com várias views em uma página só com o comando "ui-view".

Para utilizar o ui-router nas aplicações:

via npm: $ npm install angular-ui-router

Incluir as chamadas no arquivo index.html (na ordem apresentada abaixo):
- AngularJS: <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.1.5/angular.min.js"></script>
- ui-Router: <script src="//angular-ui.github.io/ui-router/release/angular-ui-router.js"></script>


=> CSS e Grid

Nesse projeto trabalharei com framework css, sass. Para instalar bastar digitar no terminal: gem install sass

Utilizarei também um grid para o desenvolvimento, o grid utilizado é o Zen Grid. Para rodar o Zen Grid é preciso ter instalado o sass e o Compass. Para instalar o sass foi ensinado acima e para instalar o Compass é parecido: gem install compass

Depois do sass e do Compass instalado, tem que instalar o Zen Grid. Para instalar o Zen Grid basta digitar: gem install zen-grids

Mais informações sobre o Zen Grids, acesse o site: zengrids.com