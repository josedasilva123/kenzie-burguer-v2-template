import { IProductMock } from "../../../../services/apiMock";
import { StyledTitle } from "../../../../styles/typography";
import { MdDelete } from "react-icons/md";
import { StyledCartProductCard } from "./style";

interface ICartProductCard {
   product: IProductMock;
}

const CartProductCard = ({ product }: ICartProductCard) => {
   return (
      <StyledCartProductCard>
         <div className="imageBox">
            <img src={product.img} alt={product.name} />
         </div>
         <div className="contentBox">
            <StyledTitle tag="h3" $fontSize="three">
               {product.name}
            </StyledTitle>
            <button aria-label="Remover">
               <MdDelete size={24} />
            </button>
         </div>
      </StyledCartProductCard>
   );
};

export default CartProductCard;
