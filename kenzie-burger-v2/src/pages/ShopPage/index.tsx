import React from "react";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { StyledContainer } from "../../styles/grid";
import { StyledShopPage } from "./style";

const ShopPage = () => {
   return (
      <StyledShopPage>
         <Header />
         <main>
            <StyledContainer containerWidth={1300}>
               <ProductList />
            </StyledContainer>
         </main>
      </StyledShopPage>
   );
};

export default ShopPage;
