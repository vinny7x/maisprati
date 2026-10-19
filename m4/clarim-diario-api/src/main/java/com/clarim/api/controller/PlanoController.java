package com.clarim.api.controller;

import com.clarim.api.dto.PlanoResposta;
import com.clarim.api.repository.PlanoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/planos")
public class PlanoController {

    private final PlanoRepository repository;

    public PlanoController(PlanoRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<PlanoResposta> listar() {

        return repository.findByAtivoTrue().stream()
                .map(p -> new PlanoResposta(
                        p.getId(), p.getNome(),
                        p.getPrecoFormatado(),
                        p.getIntervalo().name()))
                .toList();
    }
}