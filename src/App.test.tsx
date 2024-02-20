import { render, screen } from "@testing-library/react";
import App from "./App";

describe('Teste do componente App', () => {
    test('Deve estar renderizando', () => {
        render(<App />)
        expect(screen.getByText('Olha só que legal minha miniatura do Batmóvel.')).toBeInTheDocument()
    })
})