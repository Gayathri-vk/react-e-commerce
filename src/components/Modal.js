import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';
export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h5 className="pb-2">Item Added to the Cart</h5>
                                            <img src={img} alt="modalImg" className="img-fluid pb-2" />
                                            <h5 className="pb-2">{title}</h5>
                                            <h5 className="text-muted pb-2">Price:$ {price}</h5>
                                            <Link to="/">
                                                    <ButtonContainer onClick={() => closeModal()}>
                                                    Store
                                     </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cart onClick={() => closeModal()}>
                                                    Go To Cart
                                     </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }
                }
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  background:rgba(0,0,0,0.3);
  display:flex;
  align-items:center;
  justify-content:center;
  #modal{
      background:var(--mainWhite);
  }
`;