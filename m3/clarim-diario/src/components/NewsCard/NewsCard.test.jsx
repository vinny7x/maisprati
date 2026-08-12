import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NewsCard from "./NewsCard";
import { describe, it, expect } from "vitest";

describe("NewsCard", () => {
    it('mostra a categoria e o título recebidos por props', () => {
        render(
            <MemoryRouter>
                <NewsCard
                    id={1}
                    categoria="Cidade"
                    titulo="Metrô terá horario extendido"
                />
            </MemoryRouter>
        );
        expect(screen.getByText("Cidade")).toBeInTheDocument();
        expect(screen.getByText("Metrô terá horario extendido")).toBeInTheDocument();
    }
    );
});