import { useState } from "react";
import CartModal from "../../components/CartModal";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { StyledContainer } from "../../styles/grid";
import { StyledShopPage } from "./style";

const ShopPage = () => {
   const [modalIsOpen, setModalIsOpen] = useState(false);

   return (
      <StyledShopPage>
         {modalIsOpen && <CartModal setModalIsOpen={setModalIsOpen} /> }
         <Header setModalIsOpen={setModalIsOpen} />
         <main>
            <StyledContainer containerWidth={1300}>
               <ProductList />
            </StyledContainer>
         </main>
      </StyledShopPage>
   );
};

export default ShopPage;
