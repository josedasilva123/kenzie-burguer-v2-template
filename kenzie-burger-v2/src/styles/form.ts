import styled from "styled-components";

export const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   gap: 20px;

   .Mui-focused {
      fieldset {
         border-color: ${({ theme }) => theme.colors.primary}!important;
         outline-color: ${({ theme }) => theme.colors.primary}!important;
      }
   }
`;
