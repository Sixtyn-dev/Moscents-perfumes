# Moscents Perfumaria — projeto organizado

## Estrutura
- `index.html`: estrutura da página e conteúdo da loja.
- `css/style.css`: estilos e responsividade.
- `js/products.js`: catálogo inicial de perfumes e estado compartilhado.
- `js/storefront.js`: vitrine, busca, filtros, lista de consulta e WhatsApp.
- `js/storage.js`: persistência local do catálogo no navegador.
- `js/admin.js`: painel administrativo, cadastro, edição de preço/estoque e remoção.

## Como abrir
Abra `index.html` em um navegador. As imagens são carregadas por URLs externas, então é necessário ter internet.

## Painel administrativo
A senha demonstrativa é `moscents2026`. O painel permite cadastrar perfumes, alterar preços e unidades em estoque, e remover produtos. Estoque zero mostra a opção de encomenda via WhatsApp.

## Importante antes de usar em produção
Este é um protótipo front-end. Os dados são salvos apenas no `localStorage` do navegador atual e não sincronizam com outros dispositivos. A senha está no código e não é uma autenticação segura. Para uma loja real, conecte um backend/banco de dados, autenticação segura, e configure o número de WhatsApp nos links `wa.me` (atualmente genéricos). Confira também os direitos e a precisão das imagens e descrições dos produtos.
