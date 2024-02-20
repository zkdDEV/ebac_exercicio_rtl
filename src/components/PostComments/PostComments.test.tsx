import {  fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Deve enviar dois comentários de resposta', () => {
        render(<PostComment/>)
        fireEvent.change(screen.getByTestId('txt-comentario'), {
            target: {
                value: 'Que legal!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Que legal!')).toBeInTheDocument()

        fireEvent.change(screen.getByTestId('txt-comentario'), {
            target: {
                value: 'Onde você comprou?'
            }
        }) 
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Onde você comprou?')).toBeInTheDocument()
    })
});
