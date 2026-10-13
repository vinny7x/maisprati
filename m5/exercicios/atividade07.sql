CREATE TABLE item (
	id INTEGER GENERATED ALWAYS as IDENTITY PRIMARY KEY,
    codigo VARCHAR(20) NOT NULL UNIQUE,
  	titulo VARCHAR(150) NOT NULL,
	tipo VARCHAR(20) NOT NULL check (tipo in ('Livro', 'Revista', 'DVD')),
	autor VARCHAR(100) NOT NULL,
    edicao INTEGER,
    disponivel BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE usuario (
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('Aluno', 'Professor')),
    limite_itens INTEGER NOT NULL CHECK (limite_itens > 0)
);

create table emprestimo (
	id INTEGER GENERATED ALWAYS as IDENTITY PRIMARY key,
  	item_id INTEGER NOT NULL REFERENCES item(id),
  	usuario_id INTEGER NOT NULL REFERENCES usuario(id),
  	data_retirada DATE NOT NULL,
  	data_devolucao_prevista DATE NOT NULL,
  	data_devolucao DATE,
  	valor_multa NUMERIC NOT NULL DEFAULT 0
);


INSERT INTO item (codigo, titulo, tipo, autor, edicao, disponivel)
    VALUES
        ('L001', 'Nunca minta', 'Livro', 'Freida McFadden', 1, FALSE),
        ('L002', 'Torto Arado', 'Livro', 'Itamar Vieira Jr', 2, TRUE),
        ('R001', 'National Geographic', 'Revista', 'Vários autores', 10, TRUE),
        ('D001', 'Interestelar', 'DVD', 'Christopher Nolan', 1, TRUE);

insert into usuario (nome, tipo, limite_itens)
    VALUES
        ('Vinícios', 'Aluno', 3),
        ('Jaques', 'Professor', 5);
    
INSERT INTO emprestimo (item_id, usuario_id, data_retirada, data_devolucao_prevista, data_devolucao, valor_multa)
    VALUES
        (1, 1, '2026-10-10', '2026-10-20', NULL, 0.00),
        (2, 2, '2026-09-01', '2026-09-10', '2026-09-12', 5.00);
    
    
select * from item;
select * from usuario;
select * from emprestimo;