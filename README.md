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


=> Contato/Orçamento

Utilizei o AngularJS nessa área para que ao abrir o site ele abra com o fomrulário de contato e ao solicitar orçamento ele mude o formulário para o de orçamento, com isso não será necessário criar uma página só para orçamento ou então uma lightbox.
A validação também será feita pelo AngularJS.