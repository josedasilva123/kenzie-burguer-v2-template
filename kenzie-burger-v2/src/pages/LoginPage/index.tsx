import React from "react";
import LoginForm from "../../components/Form/LoginForm";
import { StyledButtonLink } from "../../styles/button";
import { StyledContainer } from "../../styles/grid";
import { StyledTitle } from "../../styles/typography";

const LoginPage = () => {
   return (
      <div>
         <StyledContainer>
            <div className="flexGrid">
               <div className="formBox">
                  <StyledTitle tag="h2" $fontSize="three">Login</StyledTitle>
                  <LoginForm />
                  <StyledButtonLink $buttonSize="default" $buttonStyle="gray">Cadastrar</StyledButtonLink>
               </div>
            </div>
         </StyledContainer>
      </div>
   );
};

export default LoginPage;
