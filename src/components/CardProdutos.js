import React from 'react';
import styled from 'styled-components';

const DivPrincipal= styled.div`
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
margin: 0;
padding: 0;
`
const DivCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
`
const Nome = styled.h5`
margin:0;
padding: 0;
`
const Preco = styled.p`
margin: 0;
padding: 0;
`
export default class CardProdutos extends React.Component{




    render(){
      return(
          <DivPrincipal>
              <DivCard>
              <img src = {this.props.imagemProduto}>
              </img>
              <Nome>
                  {this.props.nomeProduto}
              </Nome>
              <Preco>
                  {this.props.precoProduto}
              </Preco>
              </DivCard>
          </DivPrincipal>
          
      )
    }
  }