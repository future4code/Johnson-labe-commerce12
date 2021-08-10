import React from 'react';
import './App.css';
import { Filtros } from './Componentes/filtros';
import { Produtos } from './Componentes/produtos';
import { Carrinho } from './Componentes/carrinho';
import styled from "styled-components";

const AppContainer = styled.div`
display: grid;
grid-template-columns: 1fr 2fr 1fr;
` 


function App() {
return (
  <AppContainer>
    <Filtros/>
    <Produtos/>
    <Carrinho/>
    </AppContainer>
);

}

export default App;
