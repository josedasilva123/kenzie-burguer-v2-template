import { StyledButton } from '../../../styles/button'
import { StyledSearchForm } from './style'
import { MdSearch } from "react-icons/md"

const SearchForm = () => {  
  return (
    <StyledSearchForm>
        <input type="text" placeholder="Digitar pesquisa" />
        <StyledButton type="submit" $buttonSize='medium' $buttonStyle='green'>
          <MdSearch />
        </StyledButton>
    </StyledSearchForm>
  )
}

export default SearchForm