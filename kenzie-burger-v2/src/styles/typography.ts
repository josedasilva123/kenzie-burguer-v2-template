import React from 'react';
import styled, { css, isStyledComponent } from "styled-components";
import BaseTitle from './components/BaseTitle';

interface iStyledTitleProps{
    $fontSize: "one" | "two" | "three" | "four";
} 

export const StyledTitle = styled(BaseTitle)<iStyledTitleProps>`
    font-family: ${({theme}) => theme.fonts.primary};
    line-height: 1.6;

    ${({$fontSize}) => {
        switch($fontSize){
            case 'one':
                return css`
                    font-size: 1.55rem;
                    font-weight: 600;
                `
            case 'two':
                return css`
                    font-size: 1.35rem;
                    font-weight: 600;
                `    
            
            case 'three':
                return css`
                    font-size: 1.15rem;
                    font-weight: 600;
                `

            case 'four':
                return css`
                    font-size: 1rem;
                    font-weight: 400;
                `   

        }
    }}
`

export const StyledParagraph = styled.p`
    font-family: ${({theme}) => theme.fonts.primary};
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.4;
    
    strong{
        font-weight: 600;
    }
`

export const StyledCaption = styled.span`
    font-family: ${({theme}) => theme.fonts.primary};
    font-size: .75rem;
    font-weight: 400;
`