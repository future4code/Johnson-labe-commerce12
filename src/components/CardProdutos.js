import React from 'react';
import styled from 'styled-components';
import { IconeCarrinho } from './IconeCarrinho';
import iconecarrinho from '../icones/iconecarrinho.png';

const DivPrincipal= styled.div`
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
margin: 0;
padding: 0;
`
const DivCard = styled.div`
display: grid;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
`
const Nome = styled.h5`
display: flex;
margin:0;
padding: 0;
`
const Preco = styled.p`
display: flex;
margin: 0;
padding: 0;
`
const DivIncone = styled.div`
display: flex;
flex-direction: row;
`
export default class CardProdutos extends React.Component{




    render(){
      return(
          <DivPrincipal>
              <DivCard>
                      <img src = {this.props.imagemProduto}></img>
                      <Nome>{this.props.nomeProduto}</Nome>
                      <Preco>{this.props.precoProduto}</Preco>
                      <DivIncone>
                      <IconeCarrinho icone = {iconecarrinho} ></IconeCarrinho>
                      </DivIncone>
              </DivCard>
          </DivPrincipal>
          
      )
    }
  }