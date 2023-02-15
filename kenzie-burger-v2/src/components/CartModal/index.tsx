import { productsMock } from "../../services/apiMock";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { MdClose } from "react-icons/md";
import { StyledCartModalBox } from "./style";
import CartProductList from "./CartProductList";

interface ICartModalProps{
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartModal = ({setModalIsOpen}: ICartModalProps) => {
   return (
      <StyledCartModalBox>
         <dialog>
            <header>
               <StyledTitle tag="h2" $fontSize="three">
                  Carrinho de compras
               </StyledTitle>
               <button aria-label="Fechar" onClick={() => setModalIsOpen(false)}>
                  <MdClose size={21} />
               </button>
            </header>
            <div className="cartBox">
               {productsMock.length > 0 ? (
                    <CartProductList />
               ) : (
                  <div className="emptyBox">
                     <StyledTitle tag="h3" $fontSize="three" textAlign="center">
                        Sua sacola está vazia
                     </StyledTitle>
                     <StyledParagraph textAlign="center">Adicione itens</StyledParagraph>
                  </div>
               )}
            </div>
         </dialog>
      </StyledCartModalBox>
   );
};

export default CartModal;
