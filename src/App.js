import React from 'react';
import styled from 'styled-components';
import CardProdutos from './components/CardProdutos';

const DivApp = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`

export default class App extends React.Component{




  render(){
    return(
      <DivApp>
        <CardProdutos nomeProduto="camisa"/>
      </DivApp>







    )
  }
}