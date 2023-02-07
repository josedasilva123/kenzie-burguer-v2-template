import React from "react";
import { productsMock } from "../../../services/apiMock";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";
import CartProductCard from "./CartProductCard";
import { StyledCartProductList } from "./style";

const CartProductList = () => {
   return (
      <StyledCartProductList>
         <ul>
            {productsMock.map((product) => (
               <CartProductCard key={product.id} product={product} />
            ))}
         </ul>

         <div className="totalBox">
            <StyledParagraph>
               <strong>Total</strong>
            </StyledParagraph>
            <StyledParagraph className="total">R$ 14,00</StyledParagraph>
         </div>
         <StyledButton $buttonSize="default" $buttonStyle="gray">
            Remover todos
         </StyledButton>
      </StyledCartProductList>
   );
};

export default CartProductList;
