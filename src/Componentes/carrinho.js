import React from 'react';
import styled from "styled-components";

const CarrinhoContainer = styled.div`
border: 1px solid black;
`

export class Carrinho extends React.Component {
    render() {
        return (
            <CarrinhoContainer>
              Carrinho
            </CarrinhoContainer> 
        )}
}