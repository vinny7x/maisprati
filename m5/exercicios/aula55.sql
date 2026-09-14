--1. Listem o título de cada notícia com o nome do autor.
select n.titulo, u.nome
from noticia n
join usuario u on n.autor_id = u.id 

--2. Listem o nome de cada usuário com a cidade e UF do endereço.
select u.nome, e.cidade, e.uf
from usuario u
join endereco e on u.id = e.usuario_id

--3. Listem título, categoria e autor de todas as notícias.
select n.titulo as materia, c.nome as categoria, u.nome as autor
from noticia n
join usuario u on n.autor_id = u.id
join categoria c on n.categoria_id = c.id