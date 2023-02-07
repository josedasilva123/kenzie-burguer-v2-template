import React from "react";
import styled, { css, isStyledComponent } from "styled-components";
import BaseTitle from "./components/BaseTitle";

interface iStyledTitleProps {
   $fontSize: "one" | "two" | "three" | "four";
   textAlign?: "center" | "left" | "right";
}

interface iStyledParagraphProps {
   fontColor?: "gray" | "red";
   textAlign?: "center" | "left" | "right";
}

export const StyledTitle = styled(BaseTitle)<iStyledTitleProps>`
   width: 100%;

   font-family: ${({ theme }) => theme.fonts.primary};
   line-height: 1.6;

   text-align: ${({ textAlign }) => textAlign};

   ${({ $fontSize }) => {
      switch ($fontSize) {
         case "one":
            return css`
               font-size: 1.55rem;
               font-weight: 700;
            `;
         case "two":
            return css`
               font-size: 1.35rem;
               font-weight: 700;
            `;

         case "three":
            return css`
               font-size: 1.15rem;
               font-weight: 700;
            `;

         case "four":
            return css`
               font-size: 1rem;
               font-weight: 400;
            `;
      }
   }}
`;

export const StyledParagraph = styled.p<iStyledParagraphProps>`
   font-family: ${({ theme }) => theme.fonts.primary};
   font-size: 0.875rem;
   font-weight: 400;
   line-height: 1.8;

   text-align: ${({ textAlign }) => textAlign};

   ${({ fontColor, theme }) => {
      switch (fontColor) {
         case "gray":
            return css`
               color: ${theme.colors.gray300};
            `;
         case "red":
            return css`
               color: ${theme.colors.feedback.negative};
            `;
         default:
            return css`
               color: ${theme.colors.gray600};
            `;
      }
   }}

   strong {
      font-weight: 600;
   }
`;

export const StyledCaption = styled.span`
   font-family: ${({ theme }) => theme.fonts.primary};
   font-size: 0.75rem;
   font-weight: 400;
`;
