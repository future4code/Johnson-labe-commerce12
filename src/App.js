import React from 'react';
import styled from 'styled-components';
import CardProdutos from './components/CardProdutos';
import Carrinho from './components/Carrinho';
import FiltroProdutos from './components/FiltroProduto';

const DivApp = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
height: 100%;
width: 100%;
`

export default class App extends React.Component{
state = {
  produtos: [{
    nomeProduto:'camisa',
    precoProduto:'100',
    imagemProduto:'https://picsum.photos/200/130',
  },
  {nomeProduto:'camisa',
  precoProduto:'100',
  imagemProduto:'https://picsum.photos/200/130'
  },{
    nomeProduto:'camisa',
    precoProduto:'100',
    imagemProduto:'https://picsum.photos/200/130'
  },]
}
ListaDeProdutos = () => this.state.produtos.map((item)=>{
  return <CardProdutos
    nomeProduto = {item.nomeProduto}
    precoProduto = {item.precoProduto}
    imagemProduto = {item.imagemProduto}
  ></CardProdutos>;
})

  render(){
    return(
      <DivApp>
        <FiltroProdutos>
        </FiltroProdutos>
        {this.ListaDeProdutos()}
        <Carrinho>
        </Carrinho>
   </DivApp>




    )
  }
}