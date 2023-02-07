import { StyledContainer } from "../../styles/grid";
import LogoKenzieBurguer from "../../assets/LogoKenzieBurguer.svg";
import SearchForm from "./SearchForm";
import { MdShoppingCart, MdLogout } from "react-icons/md";
import { StyledHeader } from "./style";

const Header = () => {
   return (
      <StyledHeader>
         <StyledContainer containerWidth={1300}>
            <div className="flexGrid">
               <img src={LogoKenzieBurguer} alt="Kenzie Burguer Logo" className="logo" />
               <nav className="nav" role="navigation">
                  <SearchForm />
                  <div className="buttons">
                     <button>
                        <MdShoppingCart size={28} />
                     </button>
                     <button>
                        <MdLogout size={28} />
                     </button>
                  </div>
               </nav>
            </div>
         </StyledContainer>
      </StyledHeader>
   );
};

export default Header;
