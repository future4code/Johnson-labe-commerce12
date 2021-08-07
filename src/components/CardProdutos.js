import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
background-color: blue;
`
export default class CardProdutos extends React.Component{




    render(){
      return(
          <Card>
              <img>
              {this.props.imagemProduto}
              </img>
              <h5>
                  {this.props.nomeProduto}
              </h5>
              <p>
                  {this.props.precoProduto}
              </p>
          </Card>
      )
    }
  }