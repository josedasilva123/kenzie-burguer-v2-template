import { iProductMock } from '../../../services/apiMock'
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { StyledProductCard } from './style';

interface iProductCardProps{
    product: iProductMock;
}

const ProductCard = ({product}: iProductCardProps) => {
  return (
    <StyledProductCard>
        <div className="imageBox">
            <img src={product.img} alt={product.name} />
        </div>
        <div className="content">
            <StyledTitle tag="h3" $fontSize='three'>{product.name}</StyledTitle>
            <StyledParagraph className='category'>{product.category}</StyledParagraph>
            <StyledParagraph className='price'>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</StyledParagraph>
            <StyledButton $buttonSize='medium' $buttonStyle='green'>Adicionar</StyledButton>
        </div>
    </StyledProductCard>
  )
}

export default ProductCard