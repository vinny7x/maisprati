-- 1. Listar todo o acervo, com código, título, tipo e disponibilidade.
SELECT
    codigo,
    titulo,
    tipo,
    disponivel
FROM item;

-- 2. Listar os empréstimos em aberto, com o nome do usuário e o título do item.
SELECT
    u.nome AS usuario,
    i.titulo AS item
FROM emprestimo e
JOIN usuario u ON e.usuario_id = u.id
JOIN item i ON e.item_id = i.id
WHERE e.data_devolucao IS NULL;

-- 3. Calcular o total de multas acumuladas por usuário.
SELECT
    u.nome AS usuario,
    SUM(e.valor_multa) AS total_multas
FROM usuario u
LEFT JOIN emprestimo e ON e.usuario_id = u.id
GROUP BY
    u.id,
    u.nome;

-- 4. Listar os itens que nunca foram emprestados.
SELECT
    i.codigo,
    i.titulo,
    i.tipo
FROM item i
LEFT JOIN emprestimo e ON e.item_id = i.id
WHERE e.id IS NULL;