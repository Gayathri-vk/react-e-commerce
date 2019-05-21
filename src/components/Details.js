import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
import { identifier } from '@babel/types';
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/*title*/}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/*End title*/}
              {/* Product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="prdImg" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2>Model:{title}</h2>
                  <h4 className="text-muted text-uppercase text-title mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price:<span>$</span>{price}
                    </strong>
                  </h4>
                  <p className="text-captialize font-weight-bold mt-3 mb-0">
                    Product info:
                 </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to='/'>
                      <ButtonContainer>
                        Back to Product
                       </ButtonContainer>
                    </Link>
                    <ButtonContainer 
                      cart 
                      disabled={inCart ? true:false}
                      onClick={()=>{
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                     {inCart ? "In Cart": "Add to Cart"}  
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
