import React from 'react';
import styled from "styled-components";

const ProdutosContainer = styled.div`
border: 1px solid black;
padding: 0 8px;
`

const ProdutosHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const ProdutosGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 8px;
`


const CardProduto = styled.div`
border: 1px solid black;
`
const ImagemProduto = styled.img`
width: 100%;
`


export class Produtos extends React.Component {
    render() {
        return (
            <ProdutosContainer>
              <ProdutosHeader>
                <p>Quantidade de produtos: 4</p>
                <div>
                  <label>
                    Ordenação:
                    <select>
                      <option>Crescente</option>
                      <option>Decrescente</option>
                    </select>
                  </label>
                </div>
              </ProdutosHeader>
              <ProdutosGrid>

              <CardProduto>
              <ImagemProduto src="https://shop.darrudadesign.com/wp-content/uploads/2018/06/takeme_pleasepreto1.png" alt= "produto"/>
              <div>
              <p>Camisa mãos abduzidas</p>
              <p>R$ 150,00</p>
              <button>Adicionar no carrinho</button>
              </div>
              </CardProduto>


              <CardProduto>
              <ImagemProduto src="https://img.bestdealplus.com/ae04/kf/H4cce754092314c7da67b8903e28fd6ced.jpg" alt= "produto"/>
              <div>
              <p>Astronalta em apuros</p>
              <p>R$ 135,99</p>
              <button>Adicionar no carrinho</button>
              </div>
              </CardProduto>


              <CardProduto>
              <ImagemProduto src="https://img.elo7.com.br/product/main/3279761/camiseta-astronauta-com-baloes-astronauta.jpg" alt= "produto"/>
              <div>
              <p>Astronalta maluco</p>
              <p>R$ 133,90</p>
              <button>Adicionar no carrinho</button>
              </div>
              </CardProduto>

              <CardProduto>
              <ImagemProduto src="https://http2.mlstatic.com/D_NQ_NP_720432-MLB27209149548_042018-O.jpg" alt= "produto"/>
              <div>
              <p>Gato louco</p>
              <p>R$ 185,99</p>
              <button>Adicionar no carrinho</button>
              </div>
              </CardProduto>

              <CardProduto>
              <ImagemProduto src="https://phooto.com.br/wp-content/uploads/images/nfwwcz3f/products/camiseta-baby-look/tudu_full-astronauta-lgbt_n-custom_tsh-cot-bbl-adu_blk_f_avulsa_large.jpg" alt= "produto"/>
              <div>
              <p>Space girl</p>
              <p>R$ 145,99</p>
              <button>Adicionar no carrinho</button>
              </div>
              </CardProduto>

              <CardProduto>
              <ImagemProduto src="https://www.usecamisetas.com/media/product/cd7/camiseta-baby-look-astronauta-in-love-526.jpg" alt= "produto"/>
              <div>
              <p>Amor entre mundos</p>
              <p>R$ 135,89</p>
              <button>Adicionar no carrinho</button>
              </div>
              </CardProduto>

              <CardProduto>
              <ImagemProduto src="https://http2.mlstatic.com/D_NQ_NP_957342-MLB45138432341_032021-O.jpg" alt= "produto"/>
              <div>
              <p>Nasa</p>
              <p>R$ 199,90</p>
              <button>Adicionar no carrinho</button>
              </div>
              </CardProduto>

              <CardProduto>
              <ImagemProduto src="https://http2.mlstatic.com/D_NQ_NP_921655-MLB44678610015_012021-W.jpg" alt= "produto"/>
              <div>
              <p>Alien</p>
              <p>R$ 181,66</p>
              <button>Adicionar no carrinho</button>
              </div>
              </CardProduto>

              <CardProduto>
              <ImagemProduto src="https://http2.mlstatic.com/D_NQ_NP_992806-MLB31180363646_062019-W.jpg" alt= "produto"/>
              <div>
              <p>Alien azul</p>
              <p>R$ 145,60</p>
              <button>Adicionar no carrinho</button>
              </div>
              </CardProduto>

              <CardProduto>
              <ImagemProduto src="https://www.dhresource.com/0x0/f2/albu/g6/M00/25/24/rBVaSFujVqqAaQE2AAGSiayfYUw717.jpg/magic-graphic-3d-tee-shirts-aliens-munchies.jpg" alt= "produto"/>
              <div>
              <p>Pizza aliens</p>
              <p>R$ 169,90</p>
              <button>Adicionar no carrinho</button>
              </div>
              </CardProduto>


              </ProdutosGrid>
            </ProdutosContainer> 
        )}
}
