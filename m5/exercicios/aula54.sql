-- 1. Listem todas as colunas de todas as categorias;
select * from categoria

-- 2. Listem apenas o nome e o slug das categorias
select nome, slug from categoria

-- 3. Listem os títulos de todas as notícias, fazendo a coluna aparecer com o nome "breaking news"
select titulo as breaking_news from noticia

-- 4. Listem o nome e o e-mail dos usuários que são do tipo EDITOR
select nome, email from usuario where papel = 'EDITOR'

-- 5. Listem os títulos das notícias da categoria de id 5
select titulo from noticia where categoria_id = 5

-- 6. Listem nome e e-mail dos usuários que não possuem senha cadastrada.
select nome, email from usuario where senha_hash is null

-- 7. Listem o nome dos usuários que ainda não tem um cliente criado na Stripe.
select nome from usuario where stripe_customer_id is null

-- 8. Listem os títulos das notícias das categorias 4 e 6.
select titulo from noticia where categoria_id = 4 or categoria_id = 6

-- 9. Liste o id e o status das assinaturas que não estão ativas
select id, status from assinatura where status <> 'ACTIVE'

-- 10. Listem as cidades e as UFs dos endereços que ficam no RS ou em SC.
select cidade, uf from endereco where uf = 'RS' or uf = 'SC'