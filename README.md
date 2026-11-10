# Emanoel Corretora de Seguros — Site institucional

Site estático responsivo em português do Brasil, com identidade premium em azul-marinho e dourado.

## Conteúdo
- `index.html`: estrutura e conteúdo do site.
- `styles.css`: identidade visual e layout responsivo.
- `script.js`: menu mobile, ano automático e formulário via `mailto:`.
- `robots.txt` e `sitemap.xml`: arquivos básicos para mecanismos de busca.

## Como visualizar
1. Extraia o arquivo ZIP.
2. Abra `index.html` em um navegador moderno.

Para testar com um servidor local, na pasta do projeto execute:
```bash
python -m http.server 8000
```
Depois acesse `http://localhost:8000`.

## Contatos configurados
- WhatsApp: +55 11 96064-9191
- E-mail: contato@emanoelseguros.com.br

## Formulário
O formulário abre o aplicativo de e-mail do visitante com a mensagem preenchida. O visitante precisa confirmar o envio. Para captar leads diretamente no site, conecte o formulário a um serviço/backend seguro antes de publicar.

## Antes de publicar
- Revise os textos e dados institucionais.
- Adicione razão social, CNPJ, endereço e informações regulatórias apenas após validação.
- Publique em uma hospedagem com HTTPS.
- Configure aviso de privacidade completo, canal para solicitações de titulares e política de retenção de dados, com revisão jurídica/LGPD.
- Se usar analytics, pixels ou cookies não essenciais, implemente gestão de consentimento apropriada.
- Valide os produtos, coberturas e condições com as seguradoras/parceiros. O site usa linguagem condicional e não promete aceitação ou indenização.
- Configure domínio e e-mail profissional, se necessário.

## SEO
O título, descrição, idioma e viewport estão definidos. Atualize `sitemap.xml` com o domínio definitivo após a publicação.

## Observação
Este pacote contém o projeto do site. Ele não foi hospedado nem publicado na internet.
